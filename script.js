document.addEventListener("DOMContentLoaded", function() {
  const offerText = document.getElementById("offer-text");
  let text = "<b>Dear Mr. Sharma,</b>\n\n"+

            "On behalf of <b>PIE STAR INTERACTIVE STUDIOS</b>, I am pleased to offer you the position of <b>Managing Director</b> of <b>Pie Star Interactive Studios</b>. We believe that your experience, expertise, and leadership qualities make you the ideal candidate for this important role.\n\n"+
            "As Managing Director, you will be responsible for overseeing the operations of Pie Star Interactive Studios, including managing the team, creating and implementing strategies, and ensuring the company achieves its objectives. Your duties will also include building relationships with key stakeholders, managing budgets, and creating a positive company culture. \n\n"+
            "The start date of your employment will be <b><i>01-March-2023</i></b>, and you will report directly to the Board of Directors. You will be based in our headquarters in <b>JAIPUR</b>, and occasional travel may be required. \n\n"+
            "We are excited to have you join our team and we believe that your skills and experience will add great value to our organization. We look forward to hearing from you soon and to working with you for years to come.\n\n"+
            "Please review and sign this offer letter as an acceptance of our terms and conditions.\n\n"+
            " \n\n"+
            "Sincerely,\n\n"+
            "<b>Vikas Sharma</b>\n\n"+
            "<b><i>Co-Founder</i></b>\n\n"+
            "<b>Pie Star Interactive Studios</b>\n\n";
  
  let index = 0;
  let currentText = "";
  
  const typing = setInterval(() => {
    currentText += text[index];
    offerText.innerHTML = currentText;
    index++;
    
    if (index === text.length) {
      clearInterval(typing);
    }
  }, 50);

});














