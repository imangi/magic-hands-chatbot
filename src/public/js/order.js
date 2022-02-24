function validateInputFields() {
  const EMAIL_REG =
    /[a-zA-Z][a-zA-Z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/g;
  let email = $("#email");
  let orderNumber = $("#orderNumber");
  let formEmail = $("#formEmail");
  let formOrder = $("#formOrder");

  if (!email.val().match(EMAIL_REG)) {
    formEmail.addClass("was-validated");
    return true;
  } else {
    formEmail.removeClass("was validated");
  }

  if (orderNumber.val() === "") {
    formOrder.addClass("was validated");
    return true;
  } else {
    formOrder.removeClass("was validated");
  }

  return false;
}

function handleClickButtonFindOrder() {
  $("#btnFindOrder").on("click", function (e) {
    let check = validateInputFields();
    let data = {
      psid: $("#psid").val(),
      customerName: $("#name").val(),
      email: $("#email").val(),
      orderNumber: $("#orderNumber").val(),
    };

    if (!check) {
      //close webview
      MessengerExtensions.requestCloseBrowser(
        function success() {
          // webview closed
        },
        function error(err) {
          // an error occurred
          console.log(err);
        }
      );

      //send data to node.js server
      $.ajax({
        url: `${window.location.origin}/set-info-order`,
        method: "POST",
        data: data,
        success: function (data) {
          console.log(data);
        },
        error: function (error) {
          console.log(error);
        },
      });
    }
  });
}
