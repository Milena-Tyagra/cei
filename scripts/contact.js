function validateForm() {
  const form = document.querySelector("form")
  const inputs = form.querySelectorAll("input")

  let isValid = true

  inputs.forEach((input) => {
    if (!input.checkValidity()) {
      input.classList.add("invalid")
      isValid = false
    } else {
      input.classList.remove("invalid")
    }
  })

  return isValid
}

function focusInput (input) {
  input.classList.remove("invalid")
}

function phoneMask(phone) {
  const text = phone.value
  const formatedText = text.replace(/\D/g, "").substring(0, 11)

  let formatedPhone = formatedText.replace(
    /^(\d{2})(\d{5})(\d{4})/,
    "($1) $2-$3"
  )

  if (formatedText.length < 11) {
    formatedPhone = formatedText.replace(
      /^(\d{2})(\d{4})(\d{0,4})/,
      "($1) $2-$3"
    )
  }

  phone.value = formatedPhone
}

function sentToWpp() {
  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const phone = document.getElementById("phone").value
  const message = document.getElementById("message").value

  const text = `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}\nMensagem: ${message}`
  const codedText = encodeURIComponent(text)
  const wppNumber = "5547123456789"
  const url = `https://wa.me/${wppNumber}?text=${codedText}`

  window.open(url, "_blank")
}

function sendFormToWppNumber() {
  if (validateForm()) {
    sentToWpp()
  }
}

const phoneInput = document.getElementById("phone")
phoneInput.addEventListener("input", function () {
  phoneMask(this)
})