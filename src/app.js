let voteIsAllowed = "hidden";
window.onload = async () => {
    
    await window.ethereum.enable();
    contract.on("Vote", await onVoteCallback);
  //  contract.on("NewCandidate", onNewCandidateCallback);
   // getCandidates();
	//candidateList();
   getElectionName();
  setInterval(gete,1000);

  var account = web3.eth.accounts[0];
  var accountInterval = setInterval(function() {
  if (web3.eth.accounts[0] !== account) {
    account = web3.eth.accounts[0];
    document.location.reload();
  }
}, 100);



     
    
  }
async function gete(){
    let d1 = await contract.datef();
    
     let d2 = await contract.datef2();
     //console.log(dd2.toString());
     let d3 = await contract.datef3();
    // console.log(dd3.toString());
     let dd1=parseInt(d1,10);
     let dd2=parseInt(d2,10);
     let dd3=parseInt(d3,10);
   
     console.log(dd1);
     console.log(dd2);
     console.log(dd3);
     
     var t= Math.floor(Date.now() / 1000);
     console.log(t);

     if(t==dd1 || t == dd2 || t == dd3) document.location.reload();
}
async function addNewCandidate() {
     let currentAccount = await provider.getSigner().getAddress();
   let voter = await contract.voters(currentAccount);
   if (voter.ins){ alert('Vous étes deja inscrit'); return false;}
    var id = document.getElementById("id1").value;
    var name = document.getElementById("candidateName1").value;
    var first_name = document.getElementById("candidatefName1").value;
    var wilaya = document.getElementById("wilaya1").value;
    var code = document.getElementById("code1").value;
  //  if (id == null)
  
 if(id == "")  {
   alert("Veuillez entrer votre ID");
 
   return false;
  }
  if(name == "")  {
   alert("Veuillez entrer votre nom");
 
   return false;
  }
  if(first_name == "")  {
   alert("Veuillez entrer votre prénom");
 
   return false;
  }
   if(wilaya == "")  {
   alert("Veuillez entrer votre adresse");
 
   return false;
  }
   if(code == "")  {
   alert("Veuillez entrer votre code");
 
   return false;
  }
  name=name.toLowerCase();
  first_name=first_name.toLowerCase();
  wilaya=wilaya.toLowerCase();




    try {
        await contract.addCandidate(id,name,first_name,wilaya,code);
       alert('Vous étes inscrit avec succés');
       document.location.reload();


    }
    catch (error) {
       alert('Transaction interrompue (informations invalides)');
      //  if(!alert('Vos informations sont invalide')){document.location.reload();}
        console.log(error.message);
        console.log(error.reason);
       // document.location.reload(); 
      //  alert('invalide');
    }
   // if(!v) alert('error');else alert('inscrit');
}

async function authorizeVoter() {
     
let currentAccount = await provider.getSigner().getAddress();
let voter = await contract.voters(currentAccount);
if (voter.ins){ alert('Vous vous étes deja inscrit'); document.location.reload();return false;}
    var id = document.getElementById("id2").value;
    var name = document.getElementById("Name2").value;
    var first_name = document.getElementById("fName2").value;
    var wilaya = document.getElementById("wilaya2").value;
    
  //  if (id == null)


 if(id == "")  {
   alert("Veuillez entrer votre Id");
 
   return false;
  }
  if(name == "")  {
   alert("Veuillez entrer votre nom");
 
   return false;
  }
  if(first_name == "")  {
   alert("Veuillez entrer votre prénom");
 
   return false;
  }
  if(wilaya == "")  {
   alert("Veuillez entrer votre adresse");
 
   return false;
  }
  name=name.toLowerCase();
  first_name=first_name.toLowerCase();
  wilaya=wilaya.toLowerCase();




    try{
        await contract.addVoter(id,name,first_name,wilaya);
        alert('Vous étes inscrit avec succés');
        document.location.reload();
    }
   
    catch(error){
    alert('Transaction interrompue (informations invalides)');
     console.log(error.message);
        console.log(error.reason);
    }

}
async function getElectionName() {
    let d1 = await contract.datef();
    
     let d2 = await contract.datef2();
     //console.log(dd2.toString());
     let d3 = await contract.datef3();
    // console.log(dd3.toString());
     let dd1=parseInt(d1,10);
     let dd2=parseInt(d2,10);
     let dd3=parseInt(d3,10);
   
     console.log(dd1);
     console.log(dd2);
     console.log(dd3);
     
     var t= Math.floor(Date.now() / 1000);
     console.log(t);

    let currentAccount = await provider.getSigner().getAddress();

    //header messages
    $('#header').empty();
    
  
    let voter = await contract.voters(currentAccount);
   console.log(formatSeconds(dd3));


    if ((voter.ins) ) {
        $('#header').append('<h4>Vous êtes authentifier </h4>'); 
        hideTab("addCandidate");hideTab("voters");
     //   if (!(t>dd3))showTab("candidates", true);
      
        if (voter.voted) {
            let votedCandidate = await contract.candidates(voter.vote);
            $('#header').append('<h4>Vous avez déja voter pour '
                + await votedCandidate.name + ' </h4>');
            if (!(t>=dd3)){getCandidates(); showTab("candidates", true);}
            if (t>=dd3){$('#header').append('<h4>La phase du vote est terminée a '+formatSeconds(dd3+3600)+', voici le résultat final </h4>');
            voteIsAllowed = "hidden";candidateList();hideTab("candidates");showTab("result",true);
            }
        }
        else 
            if((dd3 >t)&&( t >=dd2)) {
            $('#header').append('<h4>C\'est la phase du vote et vous n\'avez pas encore voté</h4>');
            
            voteIsAllowed = "visible"; getCandidates(); showTab("candidates",true);console.log(voteIsAllowed);}
            else if (t>=dd3){$('#header').append('<h4>La phase du vote est terminée a '+formatSeconds(dd3+3600)+', voici le résultat final</h4>');
            voteIsAllowed = "hidden";///hideTab("candidates");
            candidateList();
            showTab("result", true); }
            else if(dd2>t) {$('#header').append('<h4>Patientez jusqu\'a '+formatSeconds(dd2+3600)+'</h4>'); voteIsAllowed = "hidden"; getCandidates();showTab("candidates",true);}
            
           

    }
    else {
        $('#header').append('<h4>Vous n\'étes pas inscrit</h4>');
        if(dd2 > t) { $('#header').append('<h4>C\'est la phase d\'inscription </h4>');
        voteIsAllowed = "hidden"; showTab("addCandidate", true);
             showTab("voters", false);}
           if((dd2 >t) && (t>=dd1)) { $('#header').append('<h4>C\'est la phase d\'inscription des élécteurs seulement</h4>');
        voteIsAllowed = "hidden"; hideTab("addCandidate");
             showTab("voters", true);}
         if ((dd3 > t)&&(t >=dd2)){ $('#header').append('<h4>la phase d\'inscription est terminée a '+formatSeconds(dd2+3600)+', c\'est la phase du vote</h4>');
        voteIsAllowed = "hidden"; hideTab("addCandidate");
             hideTab("voters");}
         else if (t>=dd3){$('#header').append('<h4>La phase du vote est terminée a '+formatSeconds(dd3+3600)+', voici le resultat final </h4>');

         candidateList();
    showTab("result", true);
         }


 }
 //getCandidates();


    }
//}

async function getCandidates() {
    $('#candidates').empty();
    let numCandidate = await contract.getNumCandidate();
    for (var i = 0; i < numCandidate; i++) {
        let candidate = await contract.candidates(i);
        await addCandidateToUI(candidate, i);
        console.log(i);
    }
}


async function addCandidateToUI(candidate, id) {
    let vote = candidate.voteCount;
    let total = await contract.totalVotes();
    let percentage = (vote * 100 / total).toFixed(2);
    percentage = isNaN(percentage) ? 0 : percentage;

    $('#candidates').append(getCandidateHtml(candidate.name, candidate.first_name,id, percentage));
}


function getCandidateHtml(name,first_name, id, vote) {
    var html = `<br>
                <div id="${name}" class="container candidate">
                 
                    <div class="form-group col-md-12" style="padding:0px;margin-bottom:5px;">
                        <div class="form-group col-md-6" style="margin:0px;">
                            <span class="lead" style="margin:0px;padding:0px;">${name}</span>  
                                <span class="lead" style="margin:0px;padding:0px;">${first_name}</span>
                            <button type="button" class="btn btn-primary voteBtn" 
                                style="margin:0px;float:right;visibility:`+ voteIsAllowed + `" 
                                data-index="${id}">Vote</button>
                        </div>
                    </div>
                    <br>
                    <div  class="form-group col-md-6" style="margin:0px;">
                        <div class="progress"><div class="progress-bar bg-info" role="progressbar" style="width: ${vote + "%"}" aria-valuenow="${vote}" aria-valuemin="0" aria-valuemax="100">${vote + "%"}</div></div>
                    </div>
                </div>
            `;
    return html;
}



$(document).on('click', '.voteBtn', function (e) {
    e.preventDefault(e);
    var candidateID = $(this).attr("data-index");
    contract.vote(candidateID).then(tx => console.log(tx));
   // sleep(9000000);
    voteIsAllowed = "hidden";
   // pause();
    //document.location.reload();
    //$('#header').append('<h4>Vous avez voter</h4>');


   // getElectionName();


})

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

async function onVoteCallback() {
    // alert('onVoteCallback');
   // voteIsAllowed = "hidden";
    await getCandidates();


}



/*function onNewCandidateCallback(name) {
    $('#candidateList').append(
        '<a class="list-group-item">' + name
        + '<span class="badge">0</span></a>'
    );
    console.log(name);
}
*/

async function candidateList() {
    let numCandidate = await contract.getNumCandidate();
    $('#candidateList').empty();
    var t= new Array();
    for (let j = 0; j < numCandidate; j++) {
        let candidate = await contract.candidates(j);
        t[j]=candidate;}
        t.sort(function(a, b) {

        return b.voteCount - a.voteCount;
        

});
        for (let i = 0; i < numCandidate; i++) {

        $('#candidateList').append(
            '<a class="list-group-item">'  +'<span class="lead" style="margin:0px;padding:0px;">'+ t[i].name+'</span>     <span class="lead" style="margin:0px;padding:0px;">'+ t[i].first_name+'</span><span class="badge">'+t[i].voteCount + '</span></a>'
        );}
    
}


function showTab(tab, active) {
    $("#" + tab + "Li").show();
    if (active) {
        $("#" + tab + "Li").addClass("active");
        $("#" + tab).addClass("in active");
    }
    else {
        $("#" + tab + "Li").removeClass("active");
        $("#" + tab).removeClass("in active");
    }
}

function hideTab(tab) {
    $("#" + tab + "Li").hide();
    $("#" + tab + "Li").removeClass("active");
    $("#" + tab).removeClass("in active");
}


function fancyTimeFormat(time)
{  time = math.round(time);
    // Hours, minutes and seconds
    var hrs = ~~(time / 3600);
    var mins = ~~((time % 3600) / 60);
    var secs = ~~time % 60;

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;
    return ret;
}


function formatSeconds(seconds)
{
    var date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
}



