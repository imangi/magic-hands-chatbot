/*function validateinputs() {
  let email = 
  let orderNUmber = 

}*/

function validateInputFields() {
  const EMAIL_REG =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g;

  let email = document.getElementById("email").value;
  let orderNumber = document.getElementById("orderNumber").value;

  if (!email.val().match(EMAIL_REG)) {
    email.addClass("is-invalid");
    return true;
  } else {
    email.removeClass("is-invalid");
  }

  if (orderNumber.val() === "") {
    orderNumber.addClass("is-invalid");
    return true;
  } else {
    orderNumber.removeClass("is-invalid");
  }
}

function handleClickButtonFindOrder() {
  document.getElementById("btnFindOrder").on("click", function (e) {
    let check = validateInputFields();

    let data = {
      psid: $("#psid").val(),
      name: $("#name").val(),
      email: $("#email").val(),
      orderNumber: $("#orderNumber").val(),
    };
    console.log(check);
  });
}
