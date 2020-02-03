const validateEmail = email => {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validator = (body, fields) => {
  let res = {
    ok: true,
    error: "",
    message: "",
    validation: { keys: [], messages: [] }
  };

  const addError = (key, message) => {
    res = {
      ok: false,
      error: "Bad Request",
      message: "fields are invalid",
      validation: {
        keys: [...res.validation.keys, key],
        messages: [...res.validation.messages, message]
      }
    };
  };

  fields.forEach(fieldName => {
    if (body[fieldName] === undefined) {
      addError(fieldName, `'${fieldName}' field is required`);
      return;
    }
    switch (fieldName) {
      case "name": {
        if (body.name.length < 4) {
          addError(
            fieldName,
            `'${fieldName}' field should have minimum four letters`
          );
        }
        if (body.name.length > 14) {
          addError(
            fieldName,
            `'${fieldName}' field should have maximum fourteen letters`
          );
        }
        break;
      }
      case "email": {
        if (!validateEmail(body.email)) {
          addError(
            fieldName,
            `'${fieldName}' field is invalid (must be an email)`
          );
        }
        break;
      }
      case "sex": {
        if (typeof body.sex !== "boolean") {
          addError(fieldName, `'${fieldName}' field should be boolean type`);
        }
        break;
      }
      case "avatar": {
        if (!body.avatar.includes("http")) {
          addError(fieldName, `'${fieldName}' field should be an url address`);
        }
        break;
      }
      case "city": {
        break;
      }
      case "street": {
        break;
      }
      case "houseNumber": {
        break;
      }
    }
  });

  return res;
};

module.exports = { validator, validateEmail };
