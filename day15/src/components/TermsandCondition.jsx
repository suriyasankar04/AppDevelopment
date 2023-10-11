import React from 'react'
import{GrNotes} from 'react-icons/gr'
import "../css/TermsandCondition.css"
import { Link } from 'react-router-dom'
export default function TermsandCondition() {
  return (
    <div>


    <div className="container">
    <h2 className="heading">Terms and Conditions</h2>
    <p className="text">
    <h2>1. License Grant</h2>
    Subject to the terms and conditions of this Agreement, ResumeBuilder.com hereby grants you a limited, non-exclusive, non-transferable, license to access the Site and, solely for users with paid accounts, to download the Materials solely for your own use. The license granted herein is expressly conditioned on your continued compliance with the terms and conditions of this Agreement.
    </p>
    <p className="text">
    This Agreement permits you to use the Site for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the content on the Site, such as text, graphics, logos, button icons, images, audio clips, information, data, forms, photographs, graphs, videos, typefaces, graphics, music, sounds, and other material, and software (collectively, the “Content”) on the Site, except as follows:
    </p>
    <p className="text">
    <ul>
      
        <li>
        You may temporarily store copies of such Content on your computer incidental to your accessing and viewing those materials;
        </li>
        <li>
        You may store files that are automatically cached by your web browser for display enhancement purposes;
        </li>
        <li>
        You may print or download one copy of a reasonable number of pages of the Site for your own personal, non-commercial use and not for further reproduction, publication, or distribution; and
        </li>
        <li>
        If you have a paid account, you may download copies of the Materials to your computer or mobile device solely for your own personal, non-commercial use.
        </li>
      </ul>
      <p>You must not:</p>
    </p>
    <p className='text'>
        <ul>
            <li>
            Modify copies of any Content from this Site;
            </li>
            <li>
            Use any Content on the Site separately from the accompanying text; or
Delete or alter any copyright, trademark, or other proprietary rights notices from copies of any Content from this site.
            </li>
        </ul>
        <p>f you wish to make any use of the Content or Materials other than that set out in this section, please address your request to the contact information provided below.</p>

    </p>
    <p className='text'>
    <h2>2. Restrictions on License Grant</h2>
    Your use of the Site is limited to the scope of the license granted in this Agreement and this Agreement does not permit you to use the Site other than as provided herein. You acknowledge that the Site constitutes a valuable asset of ResumeBuilder.com. You acknowledge and agree that except as otherwise authorized under this Agreement or otherwise specified in writing between the parties:
    </p>
    <p className='text'>
        <ul>
            <li>
            You shall not license, sublicense, sell, resell, rent, lease, transfer, assign, distribute, grant a security interest in, or otherwise transfer any rights to, or commercially exploit, the Site or the Content (as defined in Section 1 above and which does not include resumes or other Materials) or use the Site to run, or as part of, a service bureau, outsourced, or managed services arrangement;
            </li>
            <li>
            You shall not copy, reproduce, republish, upload, post, transmit or distribute the Site or the Content in any way;
            </li>
            <li>
            You shall not modify, translate, alter, adapt, decompile, disassemble (except to the extent applicable laws specifically prohibit such restriction), reproduce, distribute or display, or create derivative works, compilations or collective works based on the Site or the Content;
            </li>
            <li>
            You shall not knowingly or negligently permit other individuals or entities to use or copy the Site, or create Internet “links” to the Site or “frame” or “mirror” the Site on any other server or wireless or Internet-based device;
            </li>
            <li>
            You shall not access the Site for any reason, including without limitation, in order to (i) build a competitive product or service, (ii) build a product using similar ideas, features, functions or graphics of the Site, (iii) copy any ideas, features, functions or graphics of the Site, (iv) monitor its availability, performance or functionality, or (v) for any other benchmarking or competitive purposes;
            </li>
            <li>
            You shall not attempt to use or gain unauthorized access to data, accounts, hosts, systems or networks of ResumeBuilder.com or any of its customers or suppliers, or those of any other party; breach the security of another user or system, or attempt to circumvent the user authentication or security of any host, network, or account, including, without limitation, accessing data not intended for you or logging into or making use of a server or account you are not expressly authorized to access;
            </li>
            <li>
            You shall not attempt to probe, scan or test the vulnerability of a system, account or network of ResumeBuilder.com or any of its customers or suppliers;
            </li>
            <li>
            You shall not interfere, or any attempt to interfere, with service to any user, host or network including, without limitation, mail-bombing, flooding, and attempting to deliberately overload the system or distribute programs that “crack,” or make unauthorized changes to, the software which operates the Site;
            </li>
            <li>
            You shall not forge any TCP-IP packet header or any part of any header information, falsify, alter or remove address information or other modification of e-mail headers; collect responses from unsolicited bulk messages, falsify references to ResumeBuilder.com or the Site, by name or other identifier, in messages; impersonate any person or entity, engage in sender address falsification, forge anyone else’s digital or manual signature, or perform any other similar fraudulent activity;
            </li>
            <li>
            You shall not restrict, inhibit, or otherwise interfere with the ability of any other person, regardless of intent, purpose or knowledge, to use or enjoy the Site (except for tools for safety and security functions), including, without limitation, posting or transmitting any information or software which contains a worm, virus, or other harmful feature, or generating levels of traffic sufficient to impede others’ ability to use, send, or retrieve information;
            </li>
        </ul>
    </p>
    <p className='text'>
    Because of the difficulty associated with quantifying damages, in addition to any other damages to which ResumeBuilder.com may be entitled, if actual damages cannot be reasonably calculated then you agree to pay ResumeBuilder.com liquidated damages of $250 for each violation of this Section 2 or the maximum liquidated damages permitted under law, whichever is greater; and you agree to pay ResumeBuilder.com’s actual damages, to the extent such actual damages can be reasonably calculated.
    </p>
    <p className='text'>
        <h2>3. Privacy</h2>
        <p className='text'>
        Information collected by ResumeBuilder.com is subject to the Privacy Policy available here. By using the Site, you consent to all actions taken by us with respect to your information in compliance with the Privacy Policy.
        </p>
    </p>
    </div>
    <div class="contha">

    <div class="coha">

    <div class="cnha">RESUME BULIDER</div>
    <div className='cn1ha'>

    <div className='p'>

    <Link to="/dashboard"style={{left: "70px"}} className='pa'>HOME</Link>
    <Link to="/Admin" style={{left: "70px"}} className='pa'>ADMIN</Link>
    <Link to="/aboutus" style={{left: "70px",width:"90px"}} className='pa'>ABOUT US</Link>
    </div>
   
     
    </div>
    {/* <div className='cn2ha'>
      <img src={""} alt="pn"></img>
    </div> */}
    <div className='cn3ha'>
      {/* Phone no
     +919942137316 */}
     © 2023 Works Limited. All Rights Reserved.
    </div>
    {/* <div className='cn4ha'>
      <img src={""} alt="mail"></img>
    </div> */}
    <div className='cn5ha'>
      {/* Mail Address
      octane96@gmail.com */}
    </div>
    <div className='cn6ha'>
      Our info
    </div>
    <div className='cn7ha'>
    
    <Link to="/termsandcondi" style={{top: "70px",width:"180px"}}>CONTACT US</Link>
    <Link to="/termsandcondi" style={{top: "100px",width:"180px"}}>TERMS AND CONDITION</Link>
    <Link to="/privacy" style={{top: "130px",width:"160px"}}>PRIVACY POLICY</Link>
    <Link to="/privacy" style={{top: "160px",width:"160px"}}>FAQ</Link>
    </div>
    <div className='cha'>Follow us</div>
    {/* <div className='cn8ha'>
      <img src={""} alt="fb"></img>
      <img src={""} alt="insta" style={{left: "104px"}}></img>
      <img src={""} alt="youtube" style={{left:"1080px"}}></img>
    </div> */}
    </div>
    </div>
    {/* Add more terms and conditions as needed */}
    
  </div>
  )
}
