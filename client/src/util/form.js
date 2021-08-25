export function parseFormData(formData, transform = (data) => data) {
  let data = Object.fromEntries(formData)
  if (transform) {
    data = transform(data)
  }

  return data
}

export function setFormData(formEl, data) {
  formEl.childNodes.forEach((el) => {
    if (el.name) {
      el.value = data[el.name]
    }
  })
}
