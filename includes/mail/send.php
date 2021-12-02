<?php
//DEBUG ONLY< REMOVE AFTER FINAL FOR PROD
// ini_set('display_errors', 1);

//TODO: takes care of the form submissions [work as post office]


// 4.It returns proper info in json format[Receipts]
//   a.What is AJAX?
//   b.What is JSON?
//   c.How to build JSON (in PHP)
header('Access-Control-Allow-Origin:*');
header('Content-Type: application/json; charset=UTF-8');
$results = [];
$visitor_name = '';
$visitor_email = '';
$visitor_message = '';
$error = '';


// 1.Check the submissions --> Validate the data[are ther non-mailable items?]
// $_POST['firstname']
// $results = $_POST;

if(isset($_POST['name'])){
    $visitor_name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
}

if(isset($_POST['email'])){
    $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
}

if(isset($_POST['message'])){
    $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);
}

if(empty($_POST['name']) or  empty($_POST['email']) or empty($_POST['message'])){
    http_response_code(400);
    $error = 'Please complete the form and try again.';
    echo "Please complete the form and try again.";
    exit;
}

// if(empty($_POST['firstname'])){
//     $fname_err = "first name is required";
// } else{
//     $visitor_name = filter_var($_POST['firstname'], FILTER_SANITIZE_STRING);
// }

// if(empty($_POST['lastname'])){
//     $lname_err = "last name is required";
// } else{
//     $visitor_name .= ' '.filter_var($_POST['lastname'], FILTER_SANITIZE_STRING);
// }

// if(empty($_POST['email'])){
//     $email_err = "email is required";
// } else{
//     $visitor_email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);}

// if(empty($_POST['message'])){
//     $message_err = "message is required";
// } else{
//     $visitor_message = filter_var(htmlspecialchars($_POST['message']), FILTER_SANITIZE_STRING);}

$results['name'] = $visitor_name;
$results['message'] = $visitor_message;

// 2.Prepare the email[Print out lavbel and put on package/ prepare the package in certain format]
$email_subject = sprintf('Inquiry from Portfolio Site: %s', $visitor_name);
$email_recipient = 'test@123.ca';
$email_message = sprintf('Name: %s, EMail: %s, Message: %s',$visitor_name, $visitor_email, $visitor_message);

// make sure you run the code in php 7.4+
// otherwise you would need to make $email_headers as string
$email_headers = array(
    // best practice, but it may need you to have a mail set up in noreply@yourdomain.ca
    // 'From' => 'noreply@asimmehta.com',
    // 'Reply-To' => $visitor_email,

    //you can still use it, if above is too much work
    'From' => $visitor_email
);

// 3.Send out email[send out package]

$email_result = mail($email_recipient, $email_subject, $email_message, $email_headers);

if($email_result){
    $results['message'] = sprintf('Thank you for contact us, %s. You willl get a reply within 24 hours', $visitor_name);
}else{
    $results['message'] = sprintf('We are sorry but the email did not go through.');
}



echo json_encode($results);