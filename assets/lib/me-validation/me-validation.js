let meValitation = {
    meDisplayFieldsRules: function (rules) {
        for (const rule in rules["fields"]) {
            let field = $(rule);
            if (field.parent().find(".me-feedback").length > 0) {
                field.parent().find(".me-feedback").html("");
                for (const fieldRule in rules["fields"][rule]["rules"]) {
                    field
                        .parent()
                        .find(".me-feedback")
                        .append(
                            '<div class="text-danger">' +
                                rules["fields"][rule]["rules"][fieldRule]
                                    .message +
                                "</div>"
                        );
                }
            }
        }
    },
    meValidateForm: function (formSelector, rules) {
        let meValidation_ = this;

        let form = $(formSelector);
        let validationResult = true;
        for (const rule in rules["fields"]) {
            let field = $(rule);
            if (field.parent().find(".me-feedback").length > 0) {
                field.parent().find(".me-feedback").html("");
            }
            let isFieldValid = meValidation_.validateField(rule, rules);
            validationResult = validationResult && isFieldValid;
        }
        return validationResult;
    },
    meRegisterRealtimeValidation: function (formSelector, rules) {
        let meValidation_ = this;
        if (rules.displayInitialFieldsValdiations) {
            for (const rule in rules["fields"]) {
                let field = $(rule);
                meValidation_.validateField(rule, rules);
            }
        }

        for (const rule in rules["fields"]) {
            let field = $(rule);
            if (field.length == 0) {
                console.log("The selector " + rule + " is wrong");
            }
            $(field).on("change", function () {
                meValidation_.validateField(rule, rules);
            });
        }

        $(formSelector).on("submit", function (e) {
            let isFormValid = true;
            for (const rule in rules["fields"]) {
                let field = $(rule);
                let isFieldValid = meValidation_.validateField(rule, rules);
                let fieldType = meValidation_.getFieldType(field);
                if (isFieldValid === false) {
                    if (fieldType.type == "multiple") {
                        $($(rule)[0]).focus();
                        $(formSelector).animate(
                            {
                                scrollTop: $(rule).parent().offset().top,
                            },
                            1000
                        );
                    } else {
                        $(rule).focus();
                    }
                }
                isFormValid = isFormValid && isFieldValid;
                if (!isFieldValid) {
                    console.log("this field is invalid" + rule);
                }
            }
            if (!isFormValid) {
                e.preventDefault();
            }
            return isFormValid;
        });
    },
    emptifyFieldFeedback: function (rule, rules) {
        if ("feedbackSelector" in rules["fields"][rule]) {
            if ($(rules["fields"][rule].feedbackSelector).length > 0) {
                $(rules["fields"][rule].feedbackSelector).html("");
            } else {
                console.log(
                    "The feedback selector " +
                        rules["fields"][rule].feedbackSelector +
                        " doesn't exist"
                );
            }
        } else {
            let field = $(rule);
            if (field.parent().find(".me-feedback").length > 0)
                field.parent().find(".me-feedback").html("");
        }
    },
    addFieldFeedback: function (rule, rules, fieldRule, isValid) {
        let textClass = isValid == true ? "success" : "danger";

        if ("feedbackSelector" in rules["fields"][rule]) {
            if ($(rules["fields"][rule].feedbackSelector).length > 0) {
                $(rules["fields"][rule].feedbackSelector).append(
                    '<div class="text-' +
                        textClass +
                        '">' +
                        rules["fields"][rule]["rules"][fieldRule].message +
                        "</div>"
                );
            } else {
                console.log(
                    "The feedback selector " +
                        rules["fields"][rule].feedbackSelector +
                        " doesn't exist"
                );
            }
        } else {
            let field = $(rule);
            if (field.parent().find(".me-feedback").length > 0)
                field
                    .parent()
                    .find(".me-feedback")
                    .append(
                        '<div class="text-' +
                            textClass +
                            '">' +
                            rules["fields"][rule]["rules"][fieldRule].message +
                            "</div>"
                    );
        }
    },
    validateField: function (rule, rules) {
        let meValidation_ = this;
        let field = $(rule);
        let isFieldValid = true;
        let fieldValue = field.val();
        rules["fields"][rule].isValid = true;
        meValidation_.emptifyFieldFeedback(rule, rules);
        for (const fieldRule in rules["fields"][rule]["rules"]) {
            let fieldOptions = rules["fields"][rule]["rules"][fieldRule];
            let validationMethodName =
                "validate" +
                fieldRule.charAt(0).toUpperCase() +
                fieldRule.slice(1);
            if (
                !meValidation_.validationMethods[validationMethodName](
                    field,
                    fieldValue,
                    fieldOptions
                )
            ) {
                field;
                meValidation_.addFieldFeedback(rule, rules, fieldRule, false);
                // field.attr("invalid", "");
                isFieldValid = false;
            } else {
                meValidation_.addFieldFeedback(rule, rules, fieldRule, true);
                // field.removeAttr("invalid");
            }
        }
        return isFieldValid;
    },

    validationMethods: {
        MEValidatoinObject: function () {
            return this;
        },
        validateRequired: function (field, value, options) {
            let result = false;
            let fieldType = this.getFieldType(field);
            if (fieldType.type == "multiple") {
                if (
                    fieldType.typeName == "radio" ||
                    fieldType.typeName == "checkbox"
                ) {
                    for (let i = 0; i < field.length; i++) {
                        if ($(field[i]).is(":checked")) result = true;
                    }
                }
            } else {
                if (value.length > 0) result = true;
            }
            return result;
        },

        validateLength: function (field, value, options) {
            let result = true;
            if (value.length !== options.length) result = false;
            return result;
        },
        validateMinLength: function (field, value, options) {
            let result = true;
            if (value.length < options.minLength) result = false;
            return result;
        },

        validateMaxLength: function (field, value, options) {
            let result = true;
            if (value.length > options.maxLength) result = false;
            return result;
        },

        validateEmail: function (field, value, options) {
            let result = true;
            return result;
        },
        validateHasCapitalLetter: function (field, value, options) {
            let result = true;
            if (!/[A-Z]/.test(value)) result = false;
            return result;
        },
        validateHasSmallLetter: function (field, value, options) {
            let result = true;
            if (!/[a-z]/.test(value)) result = false;
            return result;
        },

        validateHasSpecialCharacter: function (field, value, options) {
            let result = true;
            if (!/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value))
                result = false;
            return result;
        },
        validateHasNumber: function (field, value, options) {
            let result = true;
            if (!/[0-9]/.test(value)) result = false;
            return result;
        },
        getFieldType: function (field) {
            let field_ = field.get(0);
            let type = "single";
            if (field.length > 1) {
                field_ = field[0];
                type = "multiple";
            }
            return { typeName: field_.type, type: type };
        },
    },
    getFieldType: function (field) {
        let field_ = field.get(0);
        let type = "single";
        if (field.length > 1) {
            field_ = field[0];
            type = "multiple";
        }
        return { typeName: field_.type, type: type };
    },
};

/*
Example:

window.signupFormConfig = {
    options: {
        displayInitialFieldsValdiations: true,
    },
    fields: {
        "#signup-phone": {
            rules: {
                required: { message: "الجوال اجبارى" },
                length: {
                    message: "الرجاء ادخال 10 ارقام.",
                    length: 10,
                },
            },
        },
        "#signup-name": {
            rules: {
                required: { message: " الاسم اجبارى." },
                minLength: {
                    message: "على الاقل 4 حروف",
                    minLength: 4,
                },
            },
        },
        "#signup-password": {
            rules: {
                required: {
                    message: "كلمه المرور اجباريه.",
                },
                minLength: {
                    message: "على الاقل 8 حروف",
                    minLength: 8,
                },
                hasCapitalLetter: {
                    message: "لابد ان تحتوى على حرف كابيتال.",
                    minLetters: 1,
                    maxLetters: 10,
                },
                hasSmallLetter: {
                    message: "لابد ان تحتوى على حرف صغير.",
                    minLetters: 1,
                    maxLetters: 10,
                },
                hasSpecialCharacter: {
                    message: "لابد ان تحتوى على حرف خاص.",
                    minChars: 1,
                    maxChars: 1,
                },
                hasNumber: {
                    message: "لابد ان تحتوى على رقم.",
                    minNumbers: 1,
                    maxNumbers: 1,
                },
            },
        },
    },
if (meValidateForm("#signup-form", window.signupFormConfig)) {
    return false;
}

*/

export default meValitation;
/*
 select-multiple
 select-one
 radio
 text
 number
 textarea
 */
