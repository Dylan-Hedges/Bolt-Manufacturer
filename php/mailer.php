<?php

    //Get the form fields, removes html tags and whitespace in our index.html file
    //$name = name the user enters into the form
    //$email = email the user enters into the form
    //$message = the message the user enters into the form

    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r","\n"),array(" "," "),$name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check the data. If the name is empty, message is empty, or invalid email, redirect to our website with a success tolken of -1
    //success=-1 if sucess code = -1 do....
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: http://www.webdesigncourse.co/omnifood/index.php?success=-1#form");
        exit;
    }

    // Set the recipient email address. Update this to YOUR desired email address.
    $recipient = "myemail3000@hotmail.com";

    // Set the email subject. This is what is displayed in the email title.
    $subject = "New contact from $name";

    // Build the email content.
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build the email headers. Not visible to the user.
    $email_headers = "From: $name <$email>";

    // Send the email.Take recipient, title, content and header & sends email.
    mail($recipient, $subject, $email_content, $email_headers);

    // Redirect to the index.html page with success tolken of 1 after sending email
    //#form go to the site which has the id = form
    header("Location: http://www.webdesigncourse.co/omnifood/index.php?success=1#form");

?>
