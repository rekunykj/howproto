"use strict";

/*
 Filename:    form-validation.js
 Date:        06/06/2020
 Purpose:    Final Project
*/

jQuery.validator.addMethod("armoryLinkTest", function(value, elem) {
        let result = true;

        //should add support for other languages characters.
        for(let i=0; i<value.toString().length; i++) {
                if(!value.toString().includes("worldofwarcraft.com")) {
                        result = false;
                }

        }
        return this.optional(elem) || result;
}, "This does not appear to be an armory link!");

jQuery.validator.addMethod("logLinkTest", function(value, elem) {
        let result = true;

        //should add support for other languages characters.
        for(let i=0; i<value.toString().length; i++) {
                if(!value.toString().includes("warcraftlogs.com")) {
                        result = false;
                }

        }
        return this.optional(elem) || result;
}, "This does not appear to be a warcraftlogs link!");

function handleSubmission() {

        window.alert("Submit has been fired\n" + document.getElementById("submissionDate").value + "\n" +
            document.getElementById("logLink").value +  "\n" +
            document.getElementById("armoryLink").value+  "\n" +
            document.getElementById("email").value+  "\n" +
            document.getElementById("Region").value+  "\n" +
            document.getElementById("classSpec").value+  "\n"+
            document.getElementById("extraNotes").value+"\n"
        );

}


$( document ).ready(function() {

        $(document).on("click", "i", function(){
                switch (this.id) {
                        case "armoryIcon":
                                alert("You can retrieve your armory link by searching your characters name on https://worldofwarcraft.com/en-us/ and copy and pasting it into this field.");
                                break;
                        case "logIcon":
                                alert("You can retrieve a log from www.warcraftlogs.com and copy and paste its URL into this field.");
                                break;
                }
        });

        let d = new Date();
        let datestring = d.getFullYear().toString() + '-' + (d.getMonth()+1).toString().padStart(2, '0') + '-' + d.getDate().toString().padStart(2, '0');
        $('#submissionDate').val(datestring);

        $("#submissionDate").val()
        $( "#logForm" )
            .validate({
                    rules: {
                            submissionDate: {
                                    required: true,

                            },
                            logLink: {
                                    required: true,
                                    logLinkTest: true,
                            },
                            armoryLink: {
                                    required: true,
                                    armoryLinkTest: true,
                            },
                            email: {
                                    required: true,
                                    //regex pulled from: https://emailregex.com/
                                    pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
                            },
                    },
                    messages: {
                            logLink: {
                                    required: "We will need a log link",

                            },
                            armoryLink: {
                                    required: "Please link an armory page",
                                    armoryLinkTest: "Please include a valid armory link."
                            },
                            email: {
                                    required: "Please enter a email",
                                    pattern: "Invalid email format"

                            },
                            classSpec: {
                                    required: "Please select a specialization"
                            },
                    },
                    submitHandler: function() {
                            handleSubmission();
                    }, errorPlacement: function(error, element) {
                            let customError = $([
                                    '<span class="invalid-feedback d-block">',
                                    '  <span class="mb-0 d-block">',
                                    '  </span>',
                                    '</span>'
                            ].join(""));

                            // Add `form-error-message` class to the error element
                            error.addClass("form-error-message");

                            // Insert it inside the span that has `mb-0` class
                            error.appendTo(customError.find("span.mb-0"));

                            // Insert your custom error
                            customError.insertAfter( element );
                    }
            })

});