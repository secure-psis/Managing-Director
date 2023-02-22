document.addEventListener("DOMContentLoaded", function() {
  const agreementText = document.getElementById("agreement-text");
  let text = "This Confidentiality Agreement (the “Agreement”) is made and entered into by and between <b>PIE STAR INTERACTIVE STUDIOS</b> (the 'Company') and <b>Mr. Parv Sharma</b> (the 'Managing Director').\n\n" + 
             "<b>Purpose of Agreement:</b> The Recipient acknowledges that in the course of their work for Pie Star Interactive Studios, they may receive confidential and proprietary information of Pie Star Interactive Studios, its customers and its suppliers (collectively “Confidential Information”). Confidential Information includes, but is not limited to, technical data, business and marketing plans, trade secrets and customer information.\n\n" + 
             "<b>Non-Disclosure Obligation:</b> The Managing Director agrees to keep all Confidential Information confidential and not to disclose, use, or allow access to any Confidential Information to any person, except as permitted by this Agreement or required by law.\n\n" + 
             "<b>Use of Confidential Information:</b> The Managing Director agrees not to use the Confidential Information for any purpose other than to fulfill their duties as Managing Director for the Company.\n\n" + 
             "<b>Disclosure to Third Parties:</b> The Managing Director agrees not to disclose any Confidential Information to any third party, including family, friends, or business associates, without the prior written consent of the Company.\n\n" + 
             "<b>Protection of Confidential Information:</b> The Managing Director agrees to take reasonable steps to protect the Confidential Information from unauthorized disclosure or use, including but not limited to, implementing reasonable security measures, such as password protection and encryption.\n\n" + 
             "<b>Return of Confidential Information:</b> Upon termination of the Managing Director's employment with the Company, the Managing Director agrees to return all Confidential Information, including any copies or derivatives thereof, to the Company.\n\n" + 
             "<b>Governing Law:</b> This Agreement shall be governed by and construed in accordance with the laws of the state in which the Company is incorporated.\n\n" + 
             "<b>Severability:</b> If any provision of this Agreement is held to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable.\n\n" + 
             "<b>Entire Agreement:</b> This Agreement constitutes the entire agreement between the parties and supersedes all prior and contemporaneous agreements and understandings, whether written or oral, relating to the subject matter of this Agreement.\n\n" + 
             "<b>Acknowledgment:</b> The Managing Director acknowledges that they have read and understood this Agreement and agree to be bound by its terms and conditions.\n\n" + 
             "IN WITNESS WHEREOF, the parties have executed this Agreement as of the date first written above.\n\n"+
             "\n\n"+
             "<b>PIE STAR INTERACTIVE STUDIOS</b>\n\n"+
             "By: <b>Vikas Sharma, <i>Co-Founder</i></b>\n\n"+
             "\n\n"+
             "<b>Parv Sharma</b>";;
  let index = 0;
  let currentText = "";
  
  const typing = setInterval(() => {
    currentText += text[index];
    agreementText.innerHTML = currentText;
    index++;
    
    if (index === text.length) {
      clearInterval(typing);
    }
  }, 50);

  const rejectOfferBtn = document.getElementById("reject-offer-btn");
  const signAgreementBtn = document.getElementById("sign-agreement-btn");
  
  rejectOfferBtn.addEventListener("click", function() {
    window.location.href = "index.html";
  });
  
  signAgreementBtn.addEventListener("click", function() {
    window.location.href = "congo.html";
  });
});






 

 

 

 

 

 

 

 

 



