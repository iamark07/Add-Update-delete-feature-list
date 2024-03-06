
$(document).ready(function () {

    // click event
    $(".add_btn").click(function () {
        // add class
        $(".add_update_form").addClass("show_form");

        // remove edit and submit class
        $(".edit").removeClass("edit_btn");
        $(".submit").removeClass("submit_btn");
    });

    $(".form_close_icon").click(function () {
        $(".add_update_form").removeClass("show_form");
        $("#code").val("");
        $("#name").val("");
        $("#num").val("");
        // $("#gen").val("Male");
        $("#gen option").removeAttr("selected"); // Remove selected attribute from all options
        $("#gen option[value='male']").attr("selected", "selected"); // Set selected attribute for "Male" option
        $("#dev").val("");
        $("tr").removeClass("current_list");
    })

    // creat a function to add list

    // click on submit button
    $(".submit").click(function (ed) {

        let input = $(".input"); // select all input text box
        let code_input = $("#code").val(); // select code input box value
        let name_input = $("#name").val(); // select name input box value
        let phone_input = $("#num").val(); // select num input box value
        let gender_input = $("#gen").val();// select gen input box value
        let developer_input = $("#dev").val();// select developer input box value


        // check all input text box is blank or not 
        input.each(function (index, inp) {
            let input_valu = $(inp).val();
            if (input_valu.length === 0) {
                $(".input_error").html("This field is required");
            }
        });
        if (code_input.length >= 1) {
            $(".code_no_wrapper .input_error").html("");
        }
        if (code_input.length >= 1 && isNaN(code_input)) {
            $(".code_no_wrapper .input_error").html("This is not a number");
        }
        if (code_input.length >= 6) {
            $(".code_no_wrapper .input_error").html("Enter maximum 5 number");
        }
        if (name_input.length >= 1) {
            $(".name_wrapper .input_error").html("");
        }
        if (name_input.length >= 1 && name_input.length <= 2) {
            $(".name_wrapper .input_error").html("Enter minimum 3 characters");
        }
        if (name_input.length >= 1 && !isNaN(name_input)) {
            $(".name_wrapper .input_error").html("This is a number");
        }
        if (name_input.length >= 16) {
            $(".name_wrapper .input_error").html("Enter maximum 15 characters");
        }
        if (phone_input.length >= 1) {
            $(".phone_wrapper .input_error").html("");
        }
        if (phone_input.length >= 1 && phone_input.length <= 9) {
            $(".phone_wrapper .input_error").html("Enter minimum 10 number");
        }
        if (phone_input.length >= 11) {
            $(".phone_wrapper .input_error").html("Enter maximum 10 number");
        }
        if (isNaN(phone_input)) {
            $(".phone_wrapper .input_error").html("This is not a number");
        }
        if (developer_input.length >= 1) {
            $(".developer_wrapper .input_error").html("");
        }
        if (developer_input.length >= 1 && developer_input.length <= 2) {
            $(".developer_wrapper .input_error").html("Enter minimum 3 characters");
        }
        if (developer_input.length >= 1 && !isNaN(developer_input)) {
            $(".developer_wrapper .input_error").html("This is a number");
        }
        if (developer_input.length >= 26) {
            $(".developer_wrapper .input_error").html("Enter maximum 25 characters");
        }

        // check when all input text box length >= 1 then if condition exicute 
        if (code_input.length >= 1 && !isNaN(code_input) && code_input.length <= 5 && name_input.length >= 3 && isNaN(name_input) && name_input.length <= 15 && phone_input.length >= 1 && phone_input.length === 10 && !isNaN(phone_input) && gender_input !== null && developer_input.length >= 3 && isNaN(developer_input) && developer_input.length <= 25) {

            let create_tr = $("<tr>"); // creating tr tag

            if (code_input.length >= 1 && !isNaN(code_input) && code_input.length <= 5) { //check code input text box is >= 1
                let create_td = $("<td>"); // creating td tag
                create_tr.append(create_td); //td tag inside the tr tag 
                let td = $(create_td); // select td tag
                td.addClass("code"); // add class in code input text box
                create_td.text(code_input); // add innertext in td from code input box value
                $("#code").val(""); // then code input text box is blank
            }
            if (name_input.length >= 3 && isNaN(name_input) && name_input.length <= 15) {
                let create_td = $("<td>")
                create_tr.append(create_td);
                let td = $(create_td);
                td.addClass("name");
                create_td.text(name_input);
                $("#name").val("");
            }
            if (phone_input.length >= 1 && phone_input.length === 10 && !isNaN(phone_input)) {
                let create_td = $("<td>")
                create_tr.append(create_td);
                let td = $(create_td);
                td.addClass("phone");
                create_td.text(phone_input);
                $("#num").val("");
            }
            if (gender_input !== null) { // && gender_input !== "choose") { // check select tag value is null or not
                let create_td = $("<td>")
                create_tr.append(create_td);
                let td = $(create_td);
                td.addClass("gender");
                create_td.text(gender_input);
                $("#gen option").removeAttr("selected"); // Remove selected attribute from all options
                $("#gen option[value='male']").attr("selected", "selected"); // Set selected attribute for "Male" option
            }
            if (developer_input.length >= 3 && isNaN(developer_input) && developer_input.length <= 25) {
                let create_td = $("<td>")
                create_tr.append(create_td);
                let td = $(create_td);
                td.addClass("developer");
                create_td.text(developer_input);
                $("#dev").val("");
            }
            $("table tbody").append(create_tr); // add tr tag inside the tbody tag

            function edit() {
                let create_td = $("<td>")
                create_tr.append(create_td);
                let edit = $("<i>"); // i tag creat
                create_td.append(edit);
                edit.addClass("ri-pencil-line edit_icon"); // edit icon class name
            }
            edit();

            function del() {
                let create_td = $("<td>")
                create_tr.append(create_td);
                let del = $("<i>");
                create_td.append(del);
                del.addClass("ri-delete-bin-2-line delete"); // delete icon class name
            }
            del();

            $(".add_update_form").removeClass("show_form"); // hide form page
        }

        $("#myForm").submit(function () { // form submit
            let isValid = false;
            return isValid;
        });

        save_data();

    });

    let tbody = $("tbody"); // tbody selected
    $(tbody).click(function (eve) { // tbody click 
        let tar = eve.target; // any tbody element click target
        if ($(tar).hasClass("delete")) { // check where click has a delete class
            $(tar).parentsUntil("tbody").remove(); // where click has a delete class remove parent tr tag
            save_data();
        };
        if ($(tar).hasClass("edit_icon")) { // check where click has a edit_icon class
            $(".edit").addClass("edit_btn"); // add edit_btn class in edit button
            $(".submit").addClass("submit_btn"); // add submit_btn class in submit button
            $(".add_update_form").addClass("show_form"); // add show form class

            $(tar).closest("tr").addClass("current_list"); // where click has a edit_icon class parent tr class add current_list  

            $("#code").val($(".current_list .code").text()); // inside the current td text add to code input box value
            $("#name").val($(".current_list .name").text()); // inside the current td text add to name input box value
            $("#num").val($(".current_list .phone").text()); // inside the current td text add to num input box value
            $("#gen").val($(".current_list .gender").text());// inside the current td text add to gender select option box value
            $("#dev").val($(".current_list .developer").text()); // inside the current td text add to developer input box value

            save_data();
        };
    });

    $(".edit").click(function (ed) { // click on edit submit button

        let input = $(".input");// select all input text box

        let code_input = $("#code").val(); //select code input box value
        let name_input = $("#name").val(); //select name input box value
        let phone_input = $("#num").val(); // select num input box value
        let gender_input = $("#gen").val(); // select gen input box value
        let developer_input = $("#dev").val(); //select developer input box value

        // check all input text box is blank or not 
        input.each(function (index, inp) {
            let input_valu = $(inp).val();
            if (input_valu.length === 0) {
                $(".input_error").html("This field is required");
            }
        });
        if (code_input.length >= 1) {
            $(".code_no_wrapper .input_error").html("");
        }
        if (code_input.length >= 1 && isNaN(code_input)) {
            $(".code_no_wrapper .input_error").html("This is not a number");
        }
        if (code_input.length >= 6) {
            $(".code_no_wrapper .input_error").html("Enter maximum 5 number");
        }
        if (name_input.length >= 1) {
            $(".name_wrapper .input_error").html("");
        }
        if (name_input.length >= 1 && name_input.length <= 2) {
            $(".name_wrapper .input_error").html("Enter minimum 3 characters");
        }
        if (name_input.length >= 1 && !isNaN(name_input)) {
            $(".name_wrapper .input_error").html("This is a number");
        }
        if (name_input.length >= 16) {
            $(".name_wrapper .input_error").html("Enter maximum 15 characters");
        }
        if (phone_input.length >= 1) {
            $(".phone_wrapper .input_error").html("");
        }
        if (phone_input.length >= 1 && phone_input.length <= 9) {
            $(".phone_wrapper .input_error").html("Enter minimum 10 number");
        }
        if (phone_input.length >= 11) {
            $(".phone_wrapper .input_error").html("Enter maximum 10 number");
        }
        if (isNaN(phone_input)) {
            $(".phone_wrapper .input_error").html("This is not a number");
        }
        if (developer_input.length >= 1) {
            $(".developer_wrapper .input_error").html("");
        }
        if (developer_input.length >= 1 && developer_input.length <= 2) {
            $(".developer_wrapper .input_error").html("Enter minimum 3 characters");
        }
        if (developer_input.length >= 1 && !isNaN(developer_input)) {
            $(".developer_wrapper .input_error").html("This is a number");
        }
        if (developer_input.length >= 26) {
            $(".developer_wrapper .input_error").html("Enter maximum 25 characters");
        }
        // check when all input text box length >= 1 then if condition exicute         
        if (code_input.length >= 1 && !isNaN(code_input) && code_input.length <= 5 && name_input.length >= 3 && isNaN(name_input) && name_input.length <= 15 && phone_input.length >= 1 && phone_input.length === 10 && !isNaN(phone_input) && gender_input !== null && developer_input.length >= 3 && isNaN(developer_input) && developer_input.length <= 25) {

            if (code_input.length >= 1 && !isNaN(code_input) && code_input.length <= 5) {
                $(".current_list .code").text(code_input); // code input text box value in current tr, td code innerText 
                $("#code").val(""); // then blank text box
            }
            if (name_input.length >= 3 && isNaN(name_input) && name_input.length <= 15) {
                $(".current_list .name").text(name_input);  // name input text box value in current tr, td name innerText 
                $("#name").val("");// then blank text box
            }
            if (phone_input.length >= 1 && phone_input.length === 10 && !isNaN(phone_input)) {
                $(".current_list .phone").text(phone_input);  // phone input text box value in current tr, td phone innerText 
                $("#num").val("");// then blank text box
            }
            if (gender_input !== null) { // && gender_input !== "choose") {
                $(".current_list .gender").text(gender_input);  // gender input text box value in current tr, td gender innerText 
                // $("#gen").val("Male")
                $("#gen option").removeAttr("selected"); // Remove selected attribute from all options
                $("#gen option[value='male']").attr("selected", "selected"); // Set selected attribute for "Male" option
            }
            if (developer_input.length >= 3 && isNaN(developer_input) && developer_input.length <= 25) {
                $(".current_list .developer").text(developer_input);  // developer input text box value in current tr, td developer innerText 
                $("#dev").val("");// then blank text box
            }
            $(".add_update_form").removeClass("show_form"); // remove form class to show
        }


        $("#myForm").submit(function () { // edit form submit

            let isValid = false;
            return isValid;
        })

        $("tr").removeClass("current_list"); // tr current_list class remove

        save_data();
    })

    // store data to local storage

    function save_data() {
        localStorage.setItem("data1", $(tbody).html());
    }

    function show_data() {
        const saved_data = localStorage.getItem("data1");
        if (saved_data) {
            tbody.html(saved_data);
        }
    }
    $(window).on("load", show_data);
});
