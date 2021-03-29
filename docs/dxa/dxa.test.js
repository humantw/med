function csson() {
    var headcsson = "";
    headcsson += '<meta charset="UTF-8">';
    headcsson += '<title>dxa test</title>';
    headcsson += '<script type="text/javascript" src="dxa.test.js"></script>';
    headcsson += '<link rel="stylesheet" type="text/css" href="dxa.test.css" charset="utf-8">';
    headcsson += '<link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" type="text/css">';
    headcsson += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    parent.frames['DXA'].document.head.innerHTML = headcsson;
    
    var resultcsson = "";
    resultcsson += '<meta charset="UTF-8">';
    resultcsson += '<script></script>';
    resultcsson += '<link rel="stylesheet" type="text/css" href="dxa.result.css" charset="utf-8">';
    resultcsson += '<link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" type="text/css">';
    resultcsson += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    parent.frames['DXA_RESULT'].document.head.innerHTML = resultcsson;
}

function cssoff() {
    var headcssoff = "";
    headcssoff += '<meta charset="UTF-8">';
    headcssoff += '<title>dxa test</title>';
    headcssoff += '<script type="text/javascript" src="dxa.test.js"></script>';
    headcssoff += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    parent.frames['DXA'].document.head.innerHTML = headcssoff;
    
    var resultcssoff = "";
    resultcssoff += '<meta charset="UTF-8">';
    resultcssoff += '<script></script>';
    resultcssoff += '<meta name="viewport" content="width=device-width, initial-scale=1.0">';
    parent.frames['DXA_RESULT'].document.head.innerHTML = resultcssoff;
}

function ShowVFA() {
    var vis = "none";
    if (document.getElementById("VFA").checked) {
        vis = "block";
    }
    document.getElementById("VFA_TABLE").style.display = vis;
}
function HideLH() {
    var vis = "block";
    if (document.getElementById("LH_OP").checked) {
        vis = "none";
    }
    document.getElementById("DIV_LH").style.display = vis;
}
function HideRH() {
    var vis = "block";
    if (document.getElementById("RH_OP").checked) {
        vis = "none";
    }
    document.getElementById("DIV_RH").style.display = vis;
}
function ClearAllInputs() {
    document.getElementById('DXA_LSP').reset();
    document.getElementById('DXA_HIP').reset();
    document.getElementById('DXA_BODY').reset();
    document.getElementById("VFA_TABLE").style.display = "none";
    document.getElementById("DIV_LH").style.display = "block";
    document.getElementById("DIV_RH").style.display = "block";
    
}
function DXA_REPORTING() {
/* Exam Date variants */
    //LSP_EXAM_DATE
    var VAR_LSP_EXAM_DATE=document.getElementById("LSP_EXAM_DATE");
    
    //HIP_DXAM_DATE
    var VAR_HIP_EXAM_DATE=document.getElementById("HIP_EXAM_DATE");
    if (!VAR_HIP_EXAM_DATE.value) {VAR_HIP_EXAM_DATE.value = VAR_LSP_EXAM_DATE.value;}
   
    //BODY_EXAM_DATE
    var VAR_BODY_EXAM_DATE=document.getElementById("BODY_EXAM_DATE");
    if (!VAR_BODY_EXAM_DATE.value) {VAR_BODY_EXAM_DATE.value = VAR_LSP_EXAM_DATE.value;}
    
    //PREVIOUS_EXAM_DATE
    var VAR_PREVIOUS_LSP_EXAM_DATE=document.getElementById("PREVIOUS_LSP_EXAM_DATE");
    var VAR_PREVIOUS_HIP_EXAM_DATE=document.getElementById("PREVIOUS_HIP_EXAM_DATE");
    if (!VAR_PREVIOUS_HIP_EXAM_DATE.value)        {VAR_PREVIOUS_HIP_EXAM_DATE.value = VAR_PREVIOUS_LSP_EXAM_DATE.value;}
 

/* LSP variants */

    // FOV selection of L1-L4
    var VAR_FOV_L1=document.getElementById("FOV_L1");
    var VAR_FOV_L2=document.getElementById("FOV_L2");
    var VAR_FOV_L3=document.getElementById("FOV_L3");
    var VAR_FOV_L4=document.getElementById("FOV_L4");
    
    var VAR_FOV = {
        "id" : "FOV",
        "value" : "",
        "checked" : true
    };
    var VAR_FOV_SINGLE = {
        "id" : "FOV_SINGLE",
        "value" : "",
        "checked" : false
    };
    var ARRAY_FOV =new Array();
    
    if (VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 4) {
        for(var i = 1; i < 5; i++) {
            eval('if (VAR_FOV_L'+i+'.checked) {ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');
        }
        VAR_FOV.value=ARRAY_FOV[0] + ", " + ARRAY_FOV[1] + ", " +ARRAY_FOV[2] + ", " + ARRAY_FOV[3];
    }
    else if (VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 3) {
        for(var i = 1; i < 5; i++) {
            eval('if (VAR_FOV_L'+i+'.checked) {ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');            
        }
        VAR_FOV.value=ARRAY_FOV[0] + ", " + ARRAY_FOV[1] + ", " +ARRAY_FOV[2];        
    }
    else if (VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 2) {
        for(var i = 1; i < 5; i++) {
            eval('if (VAR_FOV_L'+i+'.checked) {ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');            
        }
        VAR_FOV.value=ARRAY_FOV[0] + ", " + ARRAY_FOV[1];
    }
    else if (VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 1) {
        for(var i = 1; i < 5; i++) {
            eval('if (VAR_FOV_L'+i+'.checked) {ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');            
        }
        VAR_FOV.value=ARRAY_FOV[0];
        //debug test
        alert("FOV: single vertebrae!");
        VAR_FOV_SINGLE.checked=true;
        VAR_FOV_SINGLE.value="> According to WHO criteria, data from only single vertebral body is not enough for diagnosis. Please correlate with DXA of hips for clinical diagnosis.";
        
    }    
    else if (VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 0) {
        alert("FOV: No vertebrae is selected!");
        //return false; //debug test
    }
    else{
    }
    // LSP BMD
    
    var VAR_LSP_BMD=document.getElementById("LSP_BMD");
    var VAR_LSP_TSCORE=document.getElementById("LSP_TSCORE");
    var VAR_LSP_ZSCORE=document.getElementById("LSP_ZSCORE");
        if (VAR_LSP_TSCORE.value || VAR_LSP_ZSCORE.value) {
            if (!VAR_LSP_BMD.value) {
                alert('Please input correct value of BMD, T-score, Z-score in lumbar spine');
                return false;  //Debug test
            }
        }
    
/* LSP fracture variants */  
    var VAR_VFA=document.getElementById("VFA");

    for(var i = 1; i < 6; i++) {
        eval(
            'var VAR_FX_L'+i+' = {' +
            '"id" : document.getElementById("FX_L'+i+'").id,'+
            '"value" : document.getElementById("FX_L'+i+'").value,'+
            '"checked" : document.getElementById("FX_L'+i+'").checked,'+
            '"genant" : "",'+
            '"fix_checked" : document.getElementById("FX_L'+i+'_FIX").checked,'+
            '"fix_value" : document.getElementById("FX_L'+i+'_FIX_LOCATION").value,'+
            '"vp_checked" : document.getElementById("FX_L'+i+'_VP").checked,'+
            '"vp_value" : document.getElementById("FX_L'+i+'_VP").value'+
            '};'
        );
        eval(
            'var ARRAY_FX_L'+i+'_GENANT = document.getElementsByName("FX_L'+i+'_GENANT");'
        );
        eval(
            'for(var j = 0; j < ARRAY_FX_L'+i+'_GENANT.length; j++) {'+
                'if (ARRAY_FX_L'+i+'_GENANT[j].checked) {'+
                    'VAR_FX_L'+i+'.genant = ARRAY_FX_L'+i+'_GENANT[j].value;'+
                '}'+
            '}'
        );
    } 

    for(var i = 1; i < 13; i++) {
        eval(
            'var VAR_FX_T'+i+' = {' +
            '"id" : document.getElementById("FX_T'+i+'").id,'+
            '"value" : document.getElementById("FX_T'+i+'").value,'+
            '"checked" : document.getElementById("FX_T'+i+'").checked,'+
            '"genant" : "",'+
            '"fix_checked" : document.getElementById("FX_T'+i+'_FIX").checked,'+
            '"fix_value" : document.getElementById("FX_T'+i+'_FIX_LOCATION").value,'+
            '"vp_checked" : document.getElementById("FX_T'+i+'_VP").checked,'+
            '"vp_value" : document.getElementById("FX_T'+i+'_VP").value'+
            '};'
        );
        eval(
            'var ARRAY_FX_T'+i+'_GENANT = document.getElementsByName("FX_T'+i+'_GENANT");'
        );
        eval(
            'for(var j = 0; j < ARRAY_FX_T'+i+'_GENANT.length; j++) {'+
                'if (ARRAY_FX_T'+i+'_GENANT[j].checked) {'+
                    'VAR_FX_T'+i+'.genant = ARRAY_FX_T'+i+'_GENANT[j].value;'+
                '}'+
            '}'
        );
    }

    var VAR_FX= {
            "id" : "FX",
            "value" : "",
            "checked" : false
        };
    var VAR_NO_FX= {
            "id" : "NO_FX",
            "value" : "",
            "checked" : false
        };
    
    var VAR_G3_NOT_SURE=document.getElementById("G3_NOT_SURE");

    // fracture check
    for(var i = 1; i < 13; i++) { 
        eval(
            'if (VAR_FX_T'+i+'.checked) {'+
                'if (VAR_FX_T'+i+'.genant == 1) {'+
                    'VAR_FX_T'+i+'.value= "> Genant grade 1 (20% to 25% loss of height) vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'else if (VAR_FX_T'+i+'.genant == 2) {'+
                    'VAR_FX_T'+i+'.value= "> Genant grade 2 (25% to 40% loss of height) vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'else if (VAR_FX_T'+i+'.genant == 3) {'+
                    'VAR_FX_T'+i+'.value= "> Genant grade 3 (greater than 40% loss of height) vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'else{'+
                    'VAR_FX_T'+i+'.value= "> Vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'if (VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.vp_checked) {'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ", S/p fixation and vertebroplasty";}'+
                'else if (VAR_FX_T'+i+'.fix_checked) {'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ", S/p fixation";}'+
                'else if (VAR_FX_T'+i+'.vp_checked) {'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ", S/p vertebroplasty";}'+
                'else{}'+
                'if (VAR_FX_T'+i+'.fix_value) {'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + " at " + VAR_FX_T'+i+'.fix_value + ".";}'+
                'else{'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ".";}'+
                'VAR_FX.checked = true;'+
                'VAR_FX.value=VAR_FX.value+VAR_FX_T'+i+'.value+"<br>";'+
            '}'+
            'else{'+
                'if (VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.vp_checked && VAR_FX_T'+i+'.fix_value) {'+
                    'VAR_FX_T'+i+'.value= "> S/p fixation and vertebroplasty at " + VAR_FX_T'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_T'+i+'.value+"<br>";}'+
                'else if (VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.fix_value) {'+
                    'VAR_FX_T'+i+'.value= "> S/p fixation at " + VAR_FX_T'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_T'+i+'.value+"<br>";}'+           
                'else if (!VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.vp_checked) {'+
                    'if (!VAR_FX_T'+i+'.fix_value) {VAR_FX_T'+i+'.fix_value=VAR_FX_T'+i+'.value}'+
                    'VAR_FX_T'+i+'.value= "> S/p vertebroplasty at " + VAR_FX_T'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_T'+i+'.value+"<br>";}'+            
                'else{'+
                '}'+                
            '}'
        );
    }
    
    for(var i = 1; i < 6; i++) { 
        eval(
            'if (VAR_FX_L'+i+'.checked) {'+
                'if (VAR_FX_L'+i+'.genant == 1) {'+
                    'VAR_FX_L'+i+'.value= "> Genant grade 1 (20% to 25% loss of height) vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'else if (VAR_FX_L'+i+'.genant == 2) {'+
                    'VAR_FX_L'+i+'.value= "> Genant grade 2 (25% to 40% loss of height) vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'else if (VAR_FX_L'+i+'.genant == 3) {'+
                    'VAR_FX_L'+i+'.value= "> Genant grade 3 (greater than 40% loss of height) vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'else{'+
                    'VAR_FX_L'+i+'.value= "> Vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'if (VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.vp_checked) {'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ", S/p fixation and vertebroplasty";}'+
                'else if (VAR_FX_L'+i+'.fix_checked) {'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ", S/p fixation";}'+
                'else if (VAR_FX_L'+i+'.vp_checked) {'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ", S/p vertebroplasty";}'+
                'else{}'+
                'if (VAR_FX_L'+i+'.fix_value) {'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + " at " + VAR_FX_L'+i+'.fix_value + ".";}'+
                'else{'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ".";}'+
                'VAR_FX.checked = true;'+
                'VAR_FX.value=VAR_FX.value+VAR_FX_L'+i+'.value+"<br>";'+
            '}'+
            'else{'+
                'if (VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.vp_checked && VAR_FX_L'+i+'.fix_value) {'+
                    'VAR_FX_L'+i+'.value= "> S/p fixation and vertebroplasty at " + VAR_FX_L'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_L'+i+'.value+"<br>";}'+
                'else if (VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.fix_value) {'+
                    'VAR_FX_L'+i+'.value= "> S/p fixation at " + VAR_FX_L'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_L'+i+'.value+"<br>";}'+           
                'else if (!VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.vp_checked) {'+
                    'if (!VAR_FX_L'+i+'.fix_value) {VAR_FX_L'+i+'.fix_value=VAR_FX_L'+i+'.value}'+
                    'VAR_FX_L'+i+'.value= "> S/p vertebroplasty at " + VAR_FX_L'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_L'+i+'.value+"<br>";}'+            
                'else{'+
                '}'+                
            '}'
        );
    }
        
/* Hip variants */    
    var VAR_LH_BMD=document.getElementById("LH_BMD");
    var VAR_LH_TSCORE=document.getElementById("LH_TSCORE");
    var VAR_LH_ZSCORE=document.getElementById("LH_ZSCORE");
    var VAR_LH_OP=document.getElementById("LH_OP");
        if (VAR_LH_OP.checked) {
            VAR_LH_BMD.value="";
            VAR_LH_TSCORE.value="";
            VAR_LH_ZSCORE.value="";
        }
        if (VAR_LH_TSCORE.value || VAR_LH_ZSCORE.value) {
            if (!VAR_LH_BMD.value) {
                alert('Please input correct value of BMD, T-score, Z-score in left hip');
                return false;  //Debug test
            }
        }
    var VAR_RH_BMD=document.getElementById("RH_BMD");
    var VAR_RH_TSCORE=document.getElementById("RH_TSCORE");
    var VAR_RH_ZSCORE=document.getElementById("RH_ZSCORE");
    var VAR_RH_OP=document.getElementById("RH_OP");
        if (VAR_RH_OP.checked) {
            VAR_RH_BMD.value="";
            VAR_RH_TSCORE.value="";
            VAR_RH_ZSCORE.value="";
        }
        if (VAR_RH_TSCORE.value || VAR_RH_ZSCORE.value) {
            if (!VAR_RH_BMD.value) {
                alert('Please input correct value of BMD, T-score, Z-score in right hip');
                return false;  //Debug test
            }
        }        

/* Body variants */    
    var VAR_BODY_BMD_CHECKBOX=document.getElementById("BODY_BMD_CHECKBOX");
    var VAR_BODY_BMD=document.getElementById("BODY_BMD");
    var VAR_BODY_TSCORE=document.getElementById("BODY_TSCORE");
    var VAR_BODY_ZSCORE=document.getElementById("BODY_ZSCORE");
    
    var VAR_BODY_FAT_CHECKBOX=document.getElementById("BODY_FAT_CHECKBOX");
    var VAR_BODY_FAT=document.getElementById("BODY_FAT");
    
    var VAR_BODY_MUSCLE_CHECKBOX=document.getElementById("BODY_MUSCLE_CHECKBOX");
    var ARRAY_BODY_SEX =document.getElementsByName("BODY_SEX");
    var VAR_BODY_SEX;
       for(var i = 0; i < ARRAY_BODY_SEX.length; i++) {
            if (ARRAY_BODY_SEX[i].checked) {
                VAR_BODY_SEX = {
                    "id" : "BODY_SEX",
                    "value" : ARRAY_BODY_SEX[i].value
                };
            }
       }
    
    var VAR_BODY_LALM_G=document.getElementById("BODY_LALM_G");
    var VAR_BODY_LALM_KG=document.getElementById("BODY_LALM_KG");
        if (VAR_BODY_LALM_G.value && VAR_BODY_LALM_KG.value) {
            if (Math.round(VAR_BODY_LALM_G.value * 10) != Math.round(10000 * VAR_BODY_LALM_KG.value)) {
                alert('Wrong value of left arm lean mass');return false;
            }            
        }
        else if (VAR_BODY_LALM_G.value && !VAR_BODY_LALM_KG.value) {
            VAR_BODY_LALM_KG.value = parseFloat((VAR_BODY_LALM_G.value / 1000).toFixed(4));            
        }
        else if (!VAR_BODY_LALM_G.value && VAR_BODY_LALM_KG.value) {
            VAR_BODY_LALM_G.value = parseFloat((VAR_BODY_LALM_KG.value * 1000).toFixed(1));            
        }
        else {
            if (VAR_BODY_MUSCLE_CHECKBOX.checked) {alert('No left arm lean mass !!');return false;}
        }
    
    var VAR_BODY_RALM_G=document.getElementById("BODY_RALM_G");
    var VAR_BODY_RALM_KG=document.getElementById("BODY_RALM_KG");
        if (VAR_BODY_RALM_G.value && VAR_BODY_RALM_KG.value) {
            if (Math.round(VAR_BODY_RALM_G.value * 10) != Math.round(10000 * VAR_BODY_RALM_KG.value)) {
                alert('Wrong value of right arm lean mass');return false;
            }            
        }
        else if (VAR_BODY_RALM_G.value && !VAR_BODY_RALM_KG.value) {
            VAR_BODY_RALM_KG.value = parseFloat((VAR_BODY_RALM_G.value / 1000).toFixed(4));            
        }
        else if (!VAR_BODY_RALM_G.value && VAR_BODY_RALM_KG.value) {
            VAR_BODY_RALM_G.value = parseFloat((VAR_BODY_RALM_KG.value * 1000).toFixed(1));            
        }
        else {
            if (VAR_BODY_MUSCLE_CHECKBOX.checked) {alert('No right arm lean mass !!');return false;}
        }
    
    var VAR_BODY_LLLM_G=document.getElementById("BODY_LLLM_G");
    var VAR_BODY_LLLM_KG=document.getElementById("BODY_LLLM_KG");
        if (VAR_BODY_LLLM_G.value && VAR_BODY_LLLM_KG.value) {
            if (Math.round(VAR_BODY_LLLM_G.value * 10) != Math.round(10000 * VAR_BODY_LLLM_KG.value)) {
                alert('Wrong value of left leg lean mass');return false;
            } 
        }
        else if (VAR_BODY_LLLM_G.value && !VAR_BODY_LLLM_KG.value) {
            VAR_BODY_LLLM_KG.value = parseFloat((VAR_BODY_LLLM_G.value / 1000).toFixed(4));            
        }
        else if (!VAR_BODY_LLLM_G.value && VAR_BODY_LLLM_KG.value) {
            VAR_BODY_LLLM_G.value = parseFloat((VAR_BODY_LLLM_KG.value * 1000).toFixed(1));            
        }
        else {
            if (VAR_BODY_MUSCLE_CHECKBOX.checked) {alert('No left leg lean mass !!');return false;}
        }
    
    var VAR_BODY_RLLM_G=document.getElementById("BODY_RLLM_G");
    var VAR_BODY_RLLM_KG=document.getElementById("BODY_RLLM_KG");
        if (VAR_BODY_RLLM_G.value && VAR_BODY_RLLM_KG.value) {
            if (Math.round(VAR_BODY_RLLM_G.value * 10) != Math.round(10000 * VAR_BODY_RLLM_KG.value)) {
                alert('Wrong value of right leg lean mass');return false;
            } 
        }
        else if (VAR_BODY_RLLM_G.value && !VAR_BODY_RLLM_KG.value) {
            VAR_BODY_RLLM_KG.value = parseFloat((VAR_BODY_RLLM_G.value / 1000).toFixed(4));            
        }
        else if (!VAR_BODY_RLLM_G.value && VAR_BODY_RLLM_KG.value) {
            VAR_BODY_RLLM_G.value = parseFloat((VAR_BODY_RLLM_KG.value * 1000).toFixed(1));            
        }
        else {
            if (VAR_BODY_MUSCLE_CHECKBOX.checked) {alert('No right leg lean mass !!');return false;}
        }

    var VAR_BODY_HEIGHT_CM=document.getElementById("BODY_HEIGHT_CM");
    var VAR_BODY_HEIGHT_M=document.getElementById("BODY_HEIGHT_M");
        if (VAR_BODY_HEIGHT_CM.value && VAR_BODY_HEIGHT_M.value) {
            if (Math.round(VAR_BODY_HEIGHT_CM.value *10) != Math.round(1000 * VAR_BODY_HEIGHT_M.value)) {
                alert('Wrong value of body height');return false;
            } 
        }
        else if (VAR_BODY_HEIGHT_CM.value && !VAR_BODY_HEIGHT_M.value) {
            VAR_BODY_HEIGHT_M.value = parseFloat((VAR_BODY_HEIGHT_CM.value / 100).toFixed(3));            
        }
        else if (!VAR_BODY_HEIGHT_CM.value && VAR_BODY_HEIGHT_M.value) {
            VAR_BODY_HEIGHT_CM.value = parseFloat((VAR_BODY_HEIGHT_M.value * 100).toFixed(1));       
        }
        else {
            if (VAR_BODY_MUSCLE_CHECKBOX.checked) {
                alert('No body height !!');
                //return false;
            }
        }
    
    var VAR_ASM = {
        "id" : "ASM",
        "value" : parseFloat((VAR_BODY_LALM_KG.value * 1 + VAR_BODY_RALM_KG.value * 1 + VAR_BODY_LLLM_KG.value * 1 + VAR_BODY_RLLM_KG.value * 1).toFixed(4))
    };
    var VAR_ASMI = {
        "id" : "ASMI",
        "value" : (Math.round(VAR_ASM.value / Math.pow(VAR_BODY_HEIGHT_M.value, 2)*100)/100).toFixed(2)
    };
    
    var VAR_ASMI_MALE_CUTOFF = {
        "id" : "ASMI_MALE_CUTOFF",
        "value" : 7.0
    };
    var VAR_ASMI_FEMALE_CUTOFF = {
        "id" : "ASMI_FEMALE_CUTOFF",
        "value" : 5.4
    };
    var VAR_BODY_RR_CHECKBOX=document.getElementById("BODY_RR_CHECKBOX");
    
    
    
/* Grading */
    var VAR_LOWEST_TSCORE={
        "id" : "LOWEST_TSCORE",
        "value" : ""
    };
    
    var ARRAY_TSCORE=new Array();
    if (VAR_LSP_TSCORE.value && !VAR_FOV_SINGLE.checked) {ARRAY_TSCORE.push(VAR_LSP_TSCORE.value);}
    if (VAR_LH_TSCORE.value) {ARRAY_TSCORE.push(VAR_LH_TSCORE.value);}
    if (VAR_RH_TSCORE.value) {ARRAY_TSCORE.push(VAR_RH_TSCORE.value);}
    ARRAY_TSCORE.sort(
        function (a,b) {
            return a - b;
        }
    );
    VAR_LOWEST_TSCORE.value=ARRAY_TSCORE[0];    
    
    var VAR_LOWEST_ZSCORE={
        "id" : "LOWEST_ZSCORE",
        "value" : ""
    };    
    var ARRAY_ZSCORE=new Array();
    if (VAR_LSP_ZSCORE.value && !VAR_FOV_SINGLE.checked) {ARRAY_ZSCORE.push(VAR_LSP_ZSCORE.value);}
    if (VAR_LH_ZSCORE.value) {ARRAY_ZSCORE.push(VAR_LH_ZSCORE.value);}
    if (VAR_RH_ZSCORE.value) {ARRAY_ZSCORE.push(VAR_RH_ZSCORE.value);}
    ARRAY_ZSCORE.sort(
        function (a,b) {
            return a - b;
        }
    );
    VAR_LOWEST_ZSCORE.value=ARRAY_ZSCORE[0];

    // Validation of BMD, T-score, Z-score
    var ARRAY_BMD=new Array();
    if (VAR_LSP_BMD.value && !VAR_FOV_SINGLE.checked) {ARRAY_BMD.push(VAR_LSP_BMD.value);}
    if (VAR_LH_BMD.value) {ARRAY_BMD.push(VAR_LH_BMD.value);}
    if (VAR_RH_BMD.value) {ARRAY_BMD.push(VAR_RH_BMD.value);}

    if (ARRAY_TSCORE.length == ARRAY_BMD.length) {
        if (ARRAY_ZSCORE.length == ARRAY_BMD.length || ARRAY_ZSCORE.length == 0) {
        }
        else{
            alert('Please input correct value of Z-score');
            return false;  //Debug test
        }
    }

    if (ARRAY_ZSCORE.length == ARRAY_BMD.length) {
        if (ARRAY_TSCORE.length == ARRAY_BMD.length || ARRAY_TSCORE.length == 0) {
        }
        else{
            alert('Please input correct value of T-score');
            return false;  //Debug test
        }
    }
    
    if (ARRAY_ZSCORE.length != ARRAY_BMD.length && ARRAY_TSCORE.length != ARRAY_BMD.length) {
        alert('Please input correct value of T-score and Z-score');
        return false;  //Debug test
    }
    
    // Grading phase for T-score & Z-score
    var VAR_SGCC={
        "id" : "SGCC",
        "checked" : false,
        "value" : "> Suggest clinical correlation."
    };
    var VAR_Z1={
        "id" : "Z1",
        "checked" : false,
        "value" : "> The bone density is within the expected range for this age (Z-score above -2.0)."
    };
    var VAR_Z2={
        "id" : "Z2",
        "checked" : false,
        "value" : "> The bone density is below the expected range for this age (Z-score of - 2.0 or lower)."
    };
    var VAR_Z1MP={
        "id" : "Z1MP",
        "checked" : false,
        "value" : "> In pre-manopause condition, the bone density is within the expected range for this age (Z-score above -2.0)."
    };
    var VAR_Z2MP={
        "id" : "Z2MP",
        "checked" : false,
        "value" : "> In pre-manopause condition, the bone density is below the expected range for this age (Z-score of - 2.0 or lower)."
    };
    var VAR_G0={
        "id" : "G0",
        "checked" : false,
        "value" : "> According to WHO criteria, the result showed grade 0 normal bone density (T-score >= -1.0)."
    };
    var VAR_G1={
        "id" : "G1",
        "checked" : false,
        "value" : "> According to WHO criteria, the result showed grade 1 osteopenia (-2.5 < T-score < -1.0)."
    };
    var VAR_G2={
        "id" : "G2",
        "checked" : false,
        "value" : "> According to WHO criteria, the result showed grade 2 osteoporosis (T-score <= -2.5)."
    };
    var VAR_G3={
        "id" : "G3",
        "checked" : false,
        "value" : "> According to WHO criteria, the result showed grade 3 established osteoporosis with fragility fracture."
    };
    var VAR_G0MP={
        "id" : "G0MP",
        "checked" : false,
        "value" : "> In post-manopause condition, the result showed grade 0 normal bone density (T-score >= -1.0)."
    };
    var VAR_G1MP={
        "id" : "G1MP",
        "checked" : false,
        "value" : "> In post-manopause condition, the result showed grade 1 osteopenia (-2.5 < T-score < -1.0)."
    };
    var VAR_G2MP={
        "id" : "G2MP",
        "checked" : false,
        "value" : "> In post-manopause condition, the result showed grade 2 osteoporosis (T-score <= -2.5)."
    };
    var VAR_G3MP={
        "id" : "G3MP",
        "checked" : false,
        "value" : "> In post-manopause condition, the result showed grade 3 established osteoporosis with fragility fracture according to WHO criteria."
    };  
    
    // Grade 3 cannot be sure
    if (VAR_G3_NOT_SURE.checked && !VAR_LOWEST_TSCORE.value) {
        VAR_G3_NOT_SURE.value = "debug test";
        alert('no fracture checked but "Grade 3 cannot be sure" is checked');
    }
    else if (VAR_G3_NOT_SURE.checked && VAR_LOWEST_TSCORE.value >= -1 && !VAR_LOWEST_ZSCORE.value) {
        VAR_G3_NOT_SURE.value = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed grade 3 established osteoporosis with fragility fracture; otherwise, grade 0 normal bone density (T-score >= -1.0).";
    }
    else if (VAR_G3_NOT_SURE.checked && VAR_LOWEST_TSCORE.value > -2.5 && VAR_LOWEST_TSCORE.value < -1 && !VAR_LOWEST_ZSCORE.value) {
        VAR_G3_NOT_SURE.value = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 1 osteopenia (-2.5 < T score < -1.0).";
    }
    else if (VAR_G3_NOT_SURE.checked && VAR_LOWEST_TSCORE.value <= -2.5 && !VAR_LOWEST_ZSCORE.value) {
        VAR_G3_NOT_SURE.value = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 2 osteoporosis (T score <= -2.5).";
    }
    else if (VAR_G3_NOT_SURE.checked && VAR_LOWEST_TSCORE.value >= -1) {
        VAR_G3_NOT_SURE.value = "> In post-manopause condition, if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 0 normal bone density (T score >= -1.0).";
    }
    else if (VAR_G3_NOT_SURE.checked && VAR_LOWEST_TSCORE.value > -2.5 && VAR_LOWEST_TSCORE.value < -1) {
        VAR_G3_NOT_SURE.value = "> In post-manopause condition, if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 1 osteopenia (-2.5 < T score < -1.0).";
    }
    else if (VAR_G3_NOT_SURE.checked && VAR_LOWEST_TSCORE.value <= -2.5) {
        VAR_G3_NOT_SURE.value = "> In post-manopause condition, if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 2 osteoporosis (T score <= -2.5).";
    }
    else {
    }
    
    // Validation for NO_FX, FX, G3_NOT_SURE if no LSP_BMD
    if (!VAR_LSP_BMD.value || !VAR_VFA.checked) {
        VAR_NO_FX.checked = false;
        VAR_FX.checked = false;
        VAR_G3_NOT_SURE.checked = false;        
    }
 
    // Grading for Z-score & T-score
    if (VAR_LOWEST_TSCORE.value && VAR_LOWEST_ZSCORE.value) {
        if (VAR_LOWEST_ZSCORE.value  > -2.0) {
            VAR_Z1MP.checked = true;        
        }
        else if (VAR_LOWEST_ZSCORE.value  <= -2.0) {
            VAR_Z2MP.checked = true;
        }
        else {
        }
        if (VAR_LOWEST_TSCORE.value  >= -1.0) {
            VAR_G0MP.checked = true;
            VAR_SGCC.checked = true;
        }
        else if (VAR_LOWEST_TSCORE.value  > -2.5 && VAR_LOWEST_TSCORE.value < -1) {
            VAR_G1MP.checked = true;
            VAR_SGCC.checked = true;
        }
        else if (VAR_LOWEST_TSCORE.value  <= -2.5) {
            VAR_G2MP.checked = true;
            VAR_SGCC.checked = true;
        }
        else {
        }
        if (VAR_FX.checked) {
            if (VAR_G3_NOT_SURE.checked) {
                VAR_G0MP.checked = false;
                VAR_G1MP.checked = false;
                VAR_G2MP.checked = false;
                VAR_G3_NOT_SURE.checked = true;
                VAR_SGCC.checked = true;
            }
            else {
                VAR_G0MP.checked = false;
                VAR_G1MP.checked = false;
                VAR_G2MP.checked = false;
                VAR_G3MP.checked = true;
                VAR_SGCC.checked = true;
            }
        }
    }
    else if (!VAR_LOWEST_TSCORE.value && VAR_LOWEST_ZSCORE.value) {
        if (VAR_LOWEST_ZSCORE.value  > -2.0) {
            VAR_Z1.checked = true;        
        }
        else if (VAR_LOWEST_ZSCORE.value  <= -2.0) {
            VAR_Z2.checked = true;
        }
        else {
        }
    }
    else if (VAR_LOWEST_TSCORE.value && !VAR_LOWEST_ZSCORE.value) {
        if (VAR_LOWEST_TSCORE.value  >= -1.0) {
            VAR_G0.checked = true;
        }
        else if (VAR_LOWEST_TSCORE.value  > -2.5 && VAR_LOWEST_TSCORE.value < -1) {
            VAR_G1.checked = true;
        }
        else if (VAR_LOWEST_TSCORE.value  <= -2.5) {
            VAR_G2.checked = true;
        }
        else {
        }
        if (VAR_FX.checked) {
            if (VAR_G3_NOT_SURE.checked) {
                VAR_G0.checked = false;
                VAR_G1.checked = false;
                VAR_G2.checked = false;
                VAR_G3_NOT_SURE.checked = true;
                VAR_SGCC.checked = true;
            }
            else {
                VAR_G0.checked = false;
                VAR_G1.checked = false;
                VAR_G2.checked = false;
                VAR_G3.checked = true;
                VAR_SGCC.checked = true;
            }
        }
    }
    else {
    }
    

    
/* LSC */
    // LSC: LSP
    var VAR_PREVIOUS_LSP=document.getElementById("PREVIOUS_LSP");
    var VAR_PREVIOUS_LSP_EXAM_LSP_BMD=document.getElementById("PREVIOUS_LSP_EXAM_LSP_BMD");
    var VAR_DELTA_LSP_BMD = {
            "id" : "DELTA_LSP_BMD",
            "value" : (VAR_LSP_BMD.value-VAR_PREVIOUS_LSP_EXAM_LSP_BMD.value).toFixed(3)
        };
    var VAR_ABS_DELTA_LSP_BMD = {
            "id" : "ABS_DELTA_LSP_BMD",
            "value" : Math.abs(VAR_DELTA_LSP_BMD.value).toFixed(3)
        };
    
    
    // LSC: HIP
    var VAR_PREVIOUS_HIP=document.getElementById("PREVIOUS_HIP");
    var VAR_PREVIOUS_HIP_EXAM_LH_BMD=document.getElementById("PREVIOUS_HIP_EXAM_LH_BMD");
    var VAR_PREVIOUS_HIP_EXAM_RH_BMD=document.getElementById("PREVIOUS_HIP_EXAM_RH_BMD");
    
    var VAR_DELTA_LH_BMD = {
        "id" : "DELTA_LH_BMD",
        "value" : (VAR_LH_BMD.value-VAR_PREVIOUS_HIP_EXAM_LH_BMD.value).toFixed(3)
    };
    var VAR_ABS_DELTA_LH_BMD = {
        "id" : "ABS_DELTA_LH_BMD",
        "value" : Math.abs(VAR_DELTA_LH_BMD.value).toFixed(3)
    };
        var VAR_DELTA_RH_BMD = {
        "id" : "DELTA_RH_BMD",
        "value" : (VAR_RH_BMD.value-VAR_PREVIOUS_HIP_EXAM_RH_BMD.value).toFixed(3)
    };
    var VAR_ABS_DELTA_RH_BMD = {
        "id" : "ABS_DELTA_RH_BMD",
        "value" : Math.abs(VAR_DELTA_RH_BMD.value).toFixed(3)
    };
        
    // LSC data
    var VAR_LSC_DATA=document.getElementById("LSC_DATA");
    var ARRAY_LSC_CHOICE =document.getElementsByName("LSC_CHOICE");
    var VAR_LSC_CHOICE;
       for(var i = 0; i < ARRAY_LSC_CHOICE.length; i++) {
            if (ARRAY_LSC_CHOICE[i].checked) {
                VAR_LSC_CHOICE = {
                    "id" : "LSC_CHOICE",
                    "value" : ARRAY_LSC_CHOICE[i].value
                };
            }
       }
    
    var VAR_LSC_LSP_VGHTPE=document.getElementById("LSC_LSP_VGHTPE");
    var VAR_LSC_RH_VGHTPE=document.getElementById("LSC_RH_VGHTPE");
    var VAR_LSC_LH_VGHTPE=document.getElementById("LSC_LH_VGHTPE");
    
    var VAR_LSC_LSP_TPECHZX=document.getElementById("LSC_LSP_TPECHZX");
    var VAR_LSC_RH_TPECHZX=document.getElementById("LSC_RH_TPECHZX");
    var VAR_LSC_LH_TPECHZX=document.getElementById("LSC_LH_TPECHZX");
    
    var VAR_LSC_OTHER=document.getElementById("LSC_OTHER");
    var VAR_LSC_LSP_OTHER=document.getElementById("LSC_LSP_OTHER");
    var VAR_LSC_RH_OTHER=document.getElementById("LSC_RH_OTHER");
    var VAR_LSC_LH_OTHER=document.getElementById("LSC_LH_OTHER");
    
    var VAR_LSC_HOSPITAL;
    var VAR_LSC_LSP;
    var VAR_LSC_RH;
    var VAR_LSC_LH;
    
    if (VAR_LSC_CHOICE.value == "OTHERS") {
        if (!VAR_LSC_OTHER.value) {
            alert('Please input hospital name!!');return false;
        }
        else{
            var VAR_LSC_HOSPITAL= {
                "id" : "LSC_HOSPITAL",
                "value" : VAR_LSC_OTHER.value
            };                   
        }
        if (!VAR_LSC_LSP_OTHER.value || !VAR_LSC_RH_OTHER.value || !VAR_LSC_LH_OTHER.value) {
            alert('Please input LSC data in your hospital!!');return false;
        }
        else{
            var VAR_LSC_LSP= {
                "id" : "LSC_LSP",
                "value" : VAR_LSC_LSP_OTHER.value
            }; 
            var VAR_LSC_RH= {
                "id" : "LSC_RH",
                "value" : VAR_LSC_RH_OTHER.value
            }; 
            var VAR_LSC_LH= {
                "id" : "LSC_LH",
                "value" : VAR_LSC_LH_OTHER.value
            };
        }
    }
    else if (VAR_LSC_CHOICE.value == "TPECHZX") {
        var VAR_LSC_HOSPITAL= {
                "id" : "LSC_HOSPITAL",
                "value" : "Taipei City Hospital ZhongXing Branch"
        };                   
        if (!VAR_LSC_LSP_TPECHZX.value || !VAR_LSC_RH_TPECHZX.value || !VAR_LSC_LH_TPECHZX.value) {
            alert('Please input LSC data in TPECH-ZX!!');return false;
        }
        else{
            var VAR_LSC_LSP= {
                "id" : "LSC_LSP",
                "value" : VAR_LSC_LSP_TPECHZX.value
            }; 
            var VAR_LSC_RH= {
                "id" : "LSC_RH",
                "value" : VAR_LSC_RH_TPECHZX.value
            }; 
            var VAR_LSC_LH= {
                "id" : "LSC_LH",
                "value" : VAR_LSC_LH_TPECHZX.value
            };
        }
    }
    else{
        var VAR_LSC_HOSPITAL= {
                "id" : "LSC_HOSPITAL",
                "value" : "Taipei Veterans General Hospital"
        };                   
        var VAR_LSC_LSP= {
            "id" : "LSC_LSP",
            "value" : VAR_LSC_LSP_VGHTPE.value
        }; 
        var VAR_LSC_RH= {
            "id" : "LSC_RH",
            "value" : VAR_LSC_RH_VGHTPE.value
        }; 
        var VAR_LSC_LH= {
            "id" : "LSC_LH",
            "value" : VAR_LSC_LH_VGHTPE.value
        };    
    }


    
/* DXA reporting */    
    parent.frames['DXA_RESULT'].document.open(); 
    parent.frames['DXA_RESULT'].document.write('<html>');
    parent.frames['DXA_RESULT'].document.write('<head><script>');
    parent.frames['DXA_RESULT'].document.write('</script>');
    // result frame CSS on / off
    var ARRAY_CSS_ON = document.getElementsByName("CSS_ON");
    var VAR_CSS_ON;
       for(var i = 0; i < ARRAY_CSS_ON.length; i++) {
            if (ARRAY_CSS_ON[i].checked) {
                VAR_CSS_ON = {
                    "id" : "CSS_ON",
                    "value" : ARRAY_CSS_ON[i].value
                };
            }
       }
    if (VAR_CSS_ON.value == 1) {
        parent.frames['DXA_RESULT'].document.write('<link rel="stylesheet" type="text/css" href="dxa.result.css" charset="utf-8">');
        parent.frames['DXA_RESULT'].document.write('<link href="https://fonts.googleapis.com/css?family=Inconsolata:400" rel="stylesheet" type="text/css">');    
        parent.frames['DXA_RESULT'].document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
            
        parent.frames['DXA_RESULT'].document.write('</head>');
        parent.frames['DXA_RESULT'].document.write('<body>');
        parent.frames['DXA_RESULT'].document.write('<div class="result_text">');
    }
    else {
        parent.frames['DXA_RESULT'].document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
        parent.frames['DXA_RESULT'].document.write('</head>');
        parent.frames['DXA_RESULT'].document.write('<body bgcolor=bisque>');
        parent.frames['DXA_RESULT'].document.write('<div class="result_text">');
    }
    

    // DXA perterm
    var DXA_PRETERM = {
        "id" : "DXA_PRETERM",
        "checked" : true,
        "value": "Dual-energy X-ray absorptiometry of "
    };
    var DXA_PRETERM_LSP;
        if (VAR_LSP_BMD.value) {
            DXA_PRETERM_LSP = "lumbar spine";
        }
        else{
        }
    var DXA_PRETERM_HIP;
        if (VAR_LH_BMD.value && VAR_RH_BMD.value) {
            DXA_PRETERM_HIP = "bilateral hips";
        }
        else if (VAR_LH_BMD.value && !VAR_RH_BMD.value) {
            DXA_PRETERM_HIP = "left hip";
        }
        else if (!VAR_LH_BMD.value && VAR_RH_BMD.value) {
            DXA_PRETERM_HIP = "right hip";
        }
        else{
        }
    if (DXA_PRETERM_LSP && DXA_PRETERM_HIP) {
        if (VAR_LSP_EXAM_DATE.value && VAR_HIP_EXAM_DATE.value) {
            if (VAR_HIP_EXAM_DATE.value == VAR_LSP_EXAM_DATE.value) {
                DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_LSP + " and " + DXA_PRETERM_HIP + " on " + VAR_LSP_EXAM_DATE.value + ":<br>";
            }
            else {
                DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_LSP + " on " + VAR_LSP_EXAM_DATE.value + " and " + DXA_PRETERM_HIP + " on " + VAR_HIP_EXAM_DATE.value + ":<br>";
            }
        }
        else {
            DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_LSP + " and " + DXA_PRETERM_HIP + ":<br>";
        }
    }
    else if (DXA_PRETERM_LSP && !DXA_PRETERM_HIP) {
        if (VAR_LSP_EXAM_DATE.value) {
            DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_LSP + " on " + VAR_LSP_EXAM_DATE.value +":<br>";
        }
        else {
            DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_LSP + ":<br>";
        }
    }
    else if (!DXA_PRETERM_LSP && DXA_PRETERM_HIP) {
        if (VAR_HIP_EXAM_DATE.value) {
            DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_HIP + " on " + VAR_HIP_EXAM_DATE.value +":<br>";
        }
        else {
            DXA_PRETERM.value = DXA_PRETERM.value + DXA_PRETERM_HIP + ":<br>";
        }
    }
    else{
        DXA_PRETERM.checked=false;

    }
    
    if (DXA_PRETERM.checked){
        parent.frames['DXA_RESULT'].document.write(DXA_PRETERM.value+"<br>");
    
        // VFA
        if (VAR_VFA.checked && VAR_LSP_BMD.value) {
            parent.frames['DXA_RESULT'].document.write(VAR_VFA.value+"<br>");
            if (!VAR_NO_FX.checked && !VAR_FX.checked) {
                parent.frames['DXA_RESULT'].document.write("> There is no significant evidence of vertebral fracture.<br>");
            }
            else{
                if (VAR_NO_FX.checked) {
                parent.frames['DXA_RESULT'].document.write(VAR_NO_FX.value);
                }
                if (VAR_FX.checked) {
                    parent.frames['DXA_RESULT'].document.write(VAR_FX.value);
                }            
            }
            parent.frames['DXA_RESULT'].document.write("<br>");
        }
        else{
            VAR_NO_FX.checked = false;
            VAR_FX.checked = false;
            VAR_G3_NOT_SURE.checked = false;        
        }
    
        // LSP reporting
        if (VAR_LSP_BMD.value) {
            // LSP FOV & BMD
            parent.frames['DXA_RESULT'].document.write(VAR_FOV.value+":<br>");
            parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_LSP_BMD.value + "<br>");
        
            // LSP T-score        
            if (VAR_LSP_TSCORE.value) {
                parent.frames['DXA_RESULT'].document.write("> T-score = ", VAR_LSP_TSCORE.value, "<br>");
            }
        
            // LSP Z-score    
            if (VAR_LSP_ZSCORE.value) {
                parent.frames['DXA_RESULT'].document.write("> Z-score = ", VAR_LSP_ZSCORE.value, "<br>");     
            }
            if (!VAR_LSP_TSCORE.value && !VAR_LSP_ZSCORE.value) {
                alert('Please fill T-score or Z-score of lumbar spine');
                return false; //debug test
            }
            parent.frames['DXA_RESULT'].document.write('<br>'); // empty line
        }
        // Left HIP reporting
        if (VAR_LH_BMD.value) {
            // LH FOV & BMD
            parent.frames['DXA_RESULT'].document.write("LEFT HIP:<br>");
            if (!VAR_LH_OP.checked) {
                parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_LH_BMD.value + "<br>");
        
                // LH T-score        
                if (VAR_LH_TSCORE.value) {
                    parent.frames['DXA_RESULT'].document.write("> T-score = ", VAR_LH_TSCORE.value, "<br>");
                }
        
                // LSP Z-score    
                if (VAR_LH_ZSCORE.value) {
                    parent.frames['DXA_RESULT'].document.write("> Z-score = ", VAR_LH_ZSCORE.value, "<br>");
                }
                if (!VAR_LH_TSCORE.value && !VAR_LH_ZSCORE.value) {
                    alert('Please fill T-score or Z-score of left hip');
                    return false; //debug test
                }
            }
            else{
                parent.frames['DXA_RESULT'].document.write("> S/p operation.<br>");
            }
            parent.frames['DXA_RESULT'].document.write('<br>'); // empty line
        }
        if (VAR_LH_OP.checked) {
            parent.frames['DXA_RESULT'].document.write("LEFT HIP:<br>");
            parent.frames['DXA_RESULT'].document.write("> S/p operation.<br><br>");
        }
        // Right HIP reporting
        if (VAR_RH_BMD.value) {
            // RH FOV & BMD
            parent.frames['DXA_RESULT'].document.write("RIGHT HIP:<br>");
            if (!VAR_RH_OP.checked) {
                parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_RH_BMD.value + "<br>");
        
                // RH T-score        
                if (VAR_RH_TSCORE.value) {
                    parent.frames['DXA_RESULT'].document.write("> T-score = ", VAR_RH_TSCORE.value, "<br>");
                }
        
                // LSP Z-score    
                if (VAR_RH_ZSCORE.value) {
                    parent.frames['DXA_RESULT'].document.write("> Z-score = ", VAR_RH_ZSCORE.value, "<br>");
                }
                if (!VAR_RH_TSCORE.value && !VAR_RH_ZSCORE.value) {
                    alert('Please fill T-score or Z-score of right hip');
                    return false; //debug test
                }
            }
            else{
                parent.frames['DXA_RESULT'].document.write("> S/p operation.<br>");
            }
            parent.frames['DXA_RESULT'].document.write('<br>'); // empty line
        }
        if (VAR_RH_OP.checked) {
            parent.frames['DXA_RESULT'].document.write("RIGHT HIP:<br>");
            parent.frames['DXA_RESULT'].document.write("> S/p operation.<br><br>");
        }
        // Exception: VAR_LH_OP.checked && VAR_RH_OP.checked
        if (VAR_LH_OP.checked && VAR_RH_OP.checked) {
            alert('Do NOT check "Post operation of left hip" and "Post operation of right hip" at the same time!!');
            return false; //debug test
        }
        // Conclusion
        parent.frames['DXA_RESULT'].document.write('CONCLUSION:<br>');
        if (VAR_FOV_SINGLE.checked) {
 //           VAR_Z1.checked = VAR_Z1.checked = VAR_Z2.checked = VAR_Z1MP.checked = VAR_Z2MP.checked = VAR_G0.checked = VAR_G1.checked = VAR_G2.checked = VAR_G3.checked = VAR_G0MP.checked = VAR_G1MP.checked = VAR_G2MP.checked = VAR_G3MP.checked = VAR_G3_NOT_SURE.checked = false;
            parent.frames['DXA_RESULT'].document.write(VAR_FOV_SINGLE.value +'<br>');
        }        
        if (VAR_Z1.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_Z1.value +'<br>');  
        }
        if (VAR_Z2.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_Z2.value +'<br>');
        }
        if (VAR_Z1MP.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_Z1MP.value +'<br>');            
        }
        if (VAR_Z2MP.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_Z2MP.value +'<br>');
        }
        if (VAR_G0.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G0.value +'<br>');
        }
        if (VAR_G1.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G1.value +'<br>');
        }
        if (VAR_G2.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G2.value +'<br>');
        }
        if (VAR_G3.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G3.value +'<br>');
        }    
        if (VAR_G0MP.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G0MP.value +'<br>');
        }    
        if (VAR_G1MP.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G1MP.value +'<br>');
        }
        if (VAR_G2MP.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G2MP.value +'<br>');
        }
        if (VAR_G3MP.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G3MP.value +'<br>');
        }
        if (VAR_G3_NOT_SURE.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_G3_NOT_SURE.value +'<br>');
        }
        if (VAR_SGCC.checked) {
            parent.frames['DXA_RESULT'].document.write(VAR_SGCC.value +'<br>');
        }


        // LSC: preterm
        var LSC_PRETERM = {
            "id" : "LSC_PRETERM",
            "checked" : false,
            "value" : "<br>--<br><br>Previous dual-energy X-ray absorptiometry of "
        };
        var LSC_PRETERM_LSP;
        if (VAR_PREVIOUS_LSP.checked && VAR_PREVIOUS_LSP_EXAM_DATE.value && VAR_PREVIOUS_LSP_EXAM_LSP_BMD.value) {
            LSC_PRETERM_LSP = "lumbar spine";
            if (!VAR_LSP_BMD.value) {LSC_PRETERM_LSP = "";}
        }
        else{
            LSC_PRETERM_LSP = "";
        }
        var LSC_PRETERM_HIP;
        if (VAR_PREVIOUS_HIP.checked && VAR_PREVIOUS_HIP_EXAM_DATE.value) {
            if (VAR_PREVIOUS_HIP_EXAM_LH_BMD.value && VAR_PREVIOUS_HIP_EXAM_RH_BMD.value) {
                if (!VAR_LH_BMD.value && !VAR_RH_BMD.value) {LSC_PRETERM_HIP = "";}
                else if (VAR_LH_BMD.value && !VAR_RH_BMD.value) {LSC_PRETERM_HIP = "left hip";}
                else if (!VAR_LH_BMD.value && VAR_RH_BMD.value) {LSC_PRETERM_HIP = "right hip";}
                else {LSC_PRETERM_HIP = "bilateral hips";}
            }
            else if (VAR_PREVIOUS_HIP_EXAM_LH_BMD.value && !VAR_PREVIOUS_HIP_EXAM_RH_BMD.value) {            
                if (!VAR_LH_BMD.value && !VAR_RH_BMD.value) {LSC_PRETERM_HIP = "";}
                else if (VAR_LH_BMD.value && !VAR_RH_BMD.value) {LSC_PRETERM_HIP = "left hip";}
                else if (!VAR_LH_BMD.value && VAR_RH_BMD.value) {LSC_PRETERM_HIP = "";alert('Wrong BMD in previous hip DXA ?!');}
                else {LSC_PRETERM_HIP = "left hip";alert('No right hip BMD in previous hip DXA ?!');}            
            }
            else if (!VAR_PREVIOUS_HIP_EXAM_LH_BMD.value && VAR_PREVIOUS_HIP_EXAM_RH_BMD.value) {            
                if (!VAR_LH_BMD.value && !VAR_RH_BMD.value) {LSC_PRETERM_HIP = "";}
                else if (VAR_LH_BMD.value && !VAR_RH_BMD.value) {LSC_PRETERM_HIP = "";alert('Wrong BMD in previous hip DXA ?!');}
                else if (!VAR_LH_BMD.value && VAR_RH_BMD.value) {LSC_PRETERM_HIP = "right hip";}
                else {LSC_PRETERM_HIP = "right hip";alert('No left hip BMD in previous hip DXA ?!');}               
            }
            else{
                LSC_PRETERM_HIP = "";
            }
        }
        if (LSC_PRETERM_LSP && LSC_PRETERM_HIP) {
            if (VAR_PREVIOUS_LSP_EXAM_DATE.value == VAR_PREVIOUS_HIP_EXAM_DATE.value) {
                LSC_PRETERM.value = LSC_PRETERM.value + LSC_PRETERM_LSP + " and " + LSC_PRETERM_HIP + " on " + VAR_PREVIOUS_HIP_EXAM_DATE.value + ":<br>";
                LSC_PRETERM.checked = true;
            }
            else{
                LSC_PRETERM.value = LSC_PRETERM.value + LSC_PRETERM_LSP + " on " + VAR_PREVIOUS_LSP_EXAM_DATE.value + " and " + LSC_PRETERM_HIP + " on " + VAR_PREVIOUS_HIP_EXAM_DATE.value + ":<br>";
                LSC_PRETERM.checked = true;
            }
        }
        else if (LSC_PRETERM_LSP && !LSC_PRETERM_HIP) {
            LSC_PRETERM.value = LSC_PRETERM.value + LSC_PRETERM_LSP + " on " + VAR_PREVIOUS_LSP_EXAM_DATE.value + ":<br>";
            LSC_PRETERM.checked = true;
        }
        else if (!LSC_PRETERM_LSP && LSC_PRETERM_HIP) {
            LSC_PRETERM.value = LSC_PRETERM.value + LSC_PRETERM_HIP + " on " + VAR_PREVIOUS_HIP_EXAM_DATE.value + ":<br>";
            LSC_PRETERM.checked = true;
        }
        else{
            //alert('Debug test, no LSC');
            //Debug test
        }
    
        if (LSC_PRETERM.checked && VAR_LSC_DATA.checked) {
            parent.frames['DXA_RESULT'].document.write(LSC_PRETERM.value+"<br>");
        }
    
        // LSC: content
        if (VAR_LSP_BMD.value && LSC_PRETERM_LSP && VAR_LSC_DATA.checked){
            parent.frames['DXA_RESULT'].document.write("LUMBAR SPINE:<br>");
            parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_PREVIOUS_LSP_EXAM_LSP_BMD.value + "<br>");
            parent.frames['DXA_RESULT'].document.write("> The BMD change of lumbar spine is ");
            if (VAR_DELTA_LSP_BMD.value >= 0) {
                parent.frames['DXA_RESULT'].document.write('+' + VAR_ABS_DELTA_LSP_BMD.value);
            }
            else{
                parent.frames['DXA_RESULT'].document.write('-' + VAR_ABS_DELTA_LSP_BMD.value);                
            }
            parent.frames['DXA_RESULT'].document.write(", suggestive of "); 
            if (VAR_ABS_DELTA_LSP_BMD.value >= VAR_LSC_LSP.value) {
                parent.frames['DXA_RESULT'].document.write("significant change.<br><br>");
            }
            else {
                parent.frames['DXA_RESULT'].document.write("no significant change.<br><br>");
            }
        }
        if (VAR_LH_BMD.value && LSC_PRETERM_HIP && VAR_LSC_DATA.checked){
            parent.frames['DXA_RESULT'].document.write("LEFT HIP:<br>");
            parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_PREVIOUS_HIP_EXAM_LH_BMD.value + "<br>");
            parent.frames['DXA_RESULT'].document.write("> The BMD change of left hip is ");
            if (VAR_DELTA_LH_BMD.value >= 0) {
                parent.frames['DXA_RESULT'].document.write('+' + VAR_ABS_DELTA_LH_BMD.value);
            }
            else{
                parent.frames['DXA_RESULT'].document.write('-' + VAR_ABS_DELTA_LH_BMD.value);                
            }
            parent.frames['DXA_RESULT'].document.write(", suggestive of "); 
            if (VAR_ABS_DELTA_LH_BMD.value >= VAR_LSC_LH.value) {
                parent.frames['DXA_RESULT'].document.write("significant change.<br><br>");
            }
            else {
                parent.frames['DXA_RESULT'].document.write("no significant change.<br><br>");
            }
        }
        if (VAR_RH_BMD.value && LSC_PRETERM_HIP && VAR_LSC_DATA.checked){
            parent.frames['DXA_RESULT'].document.write("RIGHT HIP:<br>");
            parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_PREVIOUS_HIP_EXAM_RH_BMD.value + "<br>");
            parent.frames['DXA_RESULT'].document.write("> The BMD change of right hip is ");
            if (VAR_DELTA_RH_BMD.value >= 0) {
                parent.frames['DXA_RESULT'].document.write('+' + VAR_ABS_DELTA_RH_BMD.value);
            }
            else{
                parent.frames['DXA_RESULT'].document.write('-' + VAR_ABS_DELTA_RH_BMD.value);                
            }
            parent.frames['DXA_RESULT'].document.write(", suggestive of "); 
            if (VAR_ABS_DELTA_RH_BMD.value >= VAR_LSC_RH.value) {
                parent.frames['DXA_RESULT'].document.write("significant change.<br><br>");
            }
            else {
                parent.frames['DXA_RESULT'].document.write("no significant change.<br><br>");
            }
        }    
    
        // LSC: remark 
        if (LSC_PRETERM.checked && VAR_LSC_DATA.checked) {
            parent.frames['DXA_RESULT'].document.write(
            //"--<br><br>"+
            "REMARK:<br>"+
            "The least significant change (LSC) is the least amount of BMD change that can be considered statistically significant. The LSC data in " + VAR_LSC_HOSPITAL.value + " are listed below:<br>"+
            "> lumbar spine: "+ VAR_LSC_LSP.value +" g/cm2<br>"+
            "> left hip: "+ VAR_LSC_LH.value +" g/cm2<br>"+
            "> right hip: "+ VAR_LSC_RH.value +" g/cm2<br>"+
            "Subtract the recent BMD result from the one used for comparison. If the difference is the same or greater than the LSC, then the change is considered to be statistically significant.<br>"
            );
        }
    }
    // DXA body: seperate line
    var DXA_BODY_PRETERM = {
        "id" : "DXA_BODY_PRETERM",
        "checked" : false,
        "value" : "Dual-energy X-ray absorptiometry of total body"
    }
    if (VAR_BODY_BMD_CHECKBOX.checked || VAR_BODY_FAT_CHECKBOX.checked || VAR_BODY_MUSCLE_CHECKBOX.checked){
        DXA_BODY_PRETERM.checked = true
    }
    if (DXA_PRETERM.checked && DXA_BODY_PRETERM.checked) {
        parent.frames['DXA_RESULT'].document.write('<br>--<br><br>');
    }
    // DXA body: preterm
    if (DXA_BODY_PRETERM.checked) {
        if (VAR_BODY_EXAM_DATE.value) {
            DXA_BODY_PRETERM.value = DXA_BODY_PRETERM.value + " on " + VAR_BODY_EXAM_DATE.value + ":<br><br>";
        }
        else {
            DXA_BODY_PRETERM.value = DXA_BODY_PRETERM.value + ":<br><br>";
        }
        parent.frames['DXA_RESULT'].document.write(DXA_BODY_PRETERM.value);
        
    // DXA body: BMD    
        if (VAR_BODY_BMD_CHECKBOX.checked){
            parent.frames['DXA_RESULT'].document.write("BONE DENSITY MEASUREMENT:<br>");
            parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_BODY_BMD.value + "<br>");
            if (VAR_BODY_TSCORE.value) {
                parent.frames['DXA_RESULT'].document.write("> T-score = " + VAR_BODY_TSCORE.value + "<br>");
            }
            if (VAR_BODY_ZSCORE.value) {
                parent.frames['DXA_RESULT'].document.write("> Z-score = " + VAR_BODY_ZSCORE.value + "<br>");     
            }
            if (VAR_BODY_TSCORE.value || VAR_BODY_ZSCORE.value) {
                parent.frames['DXA_RESULT'].document.write("> This data is for your reference and study. Please check DXA of spine or hips for clinical diagnosis.<br>");
            }
            parent.frames['DXA_RESULT'].document.write("<br>");
        }

    // DXA body: fat 
        if (VAR_BODY_FAT_CHECKBOX.checked){
            if (VAR_BODY_FAT.value){
                parent.frames['DXA_RESULT'].document.write("BODY FAT MEASUREMENT:<br>");
                parent.frames['DXA_RESULT'].document.write("> Total fat (%) = " + VAR_BODY_FAT.value + "<br>");
                parent.frames['DXA_RESULT'].document.write("<br>");
            }
            else {
                alert('Please fill total fat value!!');
            return false;   
            }
            
        }
        
    // DXA body: muscle mass measurement
        if (VAR_BODY_MUSCLE_CHECKBOX.checked) {
//            parent.frames['DXA_RESULT'].document.write("<br>");
//            parent.frames['DXA_RESULT'].document.write("--<br><br>");
            parent.frames['DXA_RESULT'].document.write("MUSCLE MASS MEASUREMENT:<br>");
            parent.frames['DXA_RESULT'].document.write("> Lean mass of left arm (Kg)  = ", VAR_BODY_LALM_KG.value, "<br>"); 
            parent.frames['DXA_RESULT'].document.write("> Lean mass of right arm (Kg) = ", VAR_BODY_RALM_KG.value, "<br>"); 
            parent.frames['DXA_RESULT'].document.write("> Lean mass of left leg (Kg)  = ", VAR_BODY_LLLM_KG.value, "<br>"); 
            parent.frames['DXA_RESULT'].document.write("> Lean mass of right leg (Kg) = ", VAR_BODY_RLLM_KG.value, "<br>"); 
            parent.frames['DXA_RESULT'].document.write("> ASM (Kg) = ", VAR_ASM.value, "<br>");
            if (VAR_BODY_HEIGHT_M.value == "") {
                parent.frames['DXA_RESULT'].document.write("> Height (m) = No height data <br>"); 
                parent.frames['DXA_RESULT'].document.write("> ASM index (Kg / m^2) = Not available without height <br>");
            }
            else {
                parent.frames['DXA_RESULT'].document.write("> Height (m) = ", VAR_BODY_HEIGHT_M.value, "<br>"); 
                parent.frames['DXA_RESULT'].document.write("> ASM index (Kg / m^2) = ", VAR_ASMI.value, "<br>");
                if (VAR_BODY_SEX.value == "male") {
                    if (VAR_ASMI.value >= VAR_ASMI_MALE_CUTOFF.value) {
                        parent.frames['DXA_RESULT'].document.write("> The ASM index indicates no low muscle mass.<br>");
                    }
                    else {
                        parent.frames['DXA_RESULT'].document.write("> The ASM index indicates low muscle mass. Please correlate with the clinical condition for the diagnosis of sarcopenia.<br>");
                    }
                }
                else if (VAR_BODY_SEX.value == "female") {
                    if (VAR_ASMI.value >= VAR_ASMI_FEMALE_CUTOFF.value) {
                        parent.frames['DXA_RESULT'].document.write("> The ASM index indicates no low muscle mass.<br>");
                    }
                    else {
                        parent.frames['DXA_RESULT'].document.write("> The ASM index indicates low muscle mass. Please correlate with the clinical condition for the diagnosis of sarcopenia.<br>");
                    }
                }
                else {    // condition for non-male & non-female ?!            
                }
            }
            
            if (VAR_BODY_RR_CHECKBOX.checked) {
                parent.frames['DXA_RESULT'].document.write(
                    "<br>",
                    //"--<br><br>",
                    "REMARK:<br>",
                    "> Appendicular skeletal mass (ASM) = the sum of the muscle masses of the four limbs.<br>",
                    "> ASM index (Kg / m^2) = ASM / height^2<br>",
                    "> The cutoffs for low muscle mass are <", VAR_ASMI_MALE_CUTOFF.value.toFixed(1), " kg/m2 in men and <", VAR_ASMI_FEMALE_CUTOFF.value.toFixed(1), " kg/m2 in women by DXA.<br>",
                    "<br>",
                    "REFERENCE:<br>",
                    "> Chen LK et al. Asian Working Group for Sarcopenia: 2019 Consensus Update on Sarcopenia Diagnosis and Treatment. J Am Med Dir Assoc 2020;21:300-307.<br>"
                );
            }
        }
    }
    parent.frames['DXA_RESULT'].document.write("<br><br><br>");
    parent.frames['DXA_RESULT'].document.write('<script src="copytextclipboard.js"></script><script>copytextclipboard.init(function(thetext) {console.log("TEXT COPIED:" + thetext);});</script>');
    parent.frames['DXA_RESULT'].document.write('</div>');
    parent.frames['DXA_RESULT'].document.write('</body></html>');
    parent.frames['DXA_RESULT'].document.close();

 /* Console log for variants */    

    console.log('-----Console log: Variants in DXA_REPORTING-----');

    function logID() {
        for(i=0;i<arguments.length;console.log(arguments[i].id + " = " + arguments[i].value),i++);
    }
    function logCheck() {
        for(i=0;i<arguments.length;console.log(arguments[i].id + " = " + arguments[i].value + ", checked =" + arguments[i].checked),i++);
    }
    function logIDTable() {
        var logArray=new Array();        for(i=0;i<arguments.length;logArray.push(arguments[i]),i++);console.table(logArray,["id", "value"]);
    }
    function logCheckTable() {
        var logArray=new Array();        for(i=0;i<arguments.length;logArray.push(arguments[i]),i++);console.table(logArray,["id", "checked", "value"]);
    }
    function logFXTable() {
        var logArray=new Array();        for(i=0;i<arguments.length;logArray.push(arguments[i]),i++);console.table(logArray,["id", "checked", "value", "genant", "vp_checked", "vp_value", "fix_checked", "fix_value"]);
    }
    
    console.log('-- Exam date --');
    logIDTable(VAR_LSP_EXAM_DATE, VAR_HIP_EXAM_DATE, VAR_BODY_EXAM_DATE);
        
    console.log('-- LSP --');
    logCheckTable(VAR_FOV_L1, VAR_FOV_L2, VAR_FOV_L3, VAR_FOV_L4, VAR_FOV, VAR_FOV_SINGLE);
    logIDTable(VAR_LSP_BMD, VAR_LSP_TSCORE, VAR_LSP_ZSCORE);
    
    console.log('-- LSP FX variants --');
    logFXTable(VAR_FX_T1, VAR_FX_T2, VAR_FX_T3, VAR_FX_T4, VAR_FX_T5, VAR_FX_T6, VAR_FX_T7, VAR_FX_T8, VAR_FX_T9, VAR_FX_T10, VAR_FX_T11, VAR_FX_T12, VAR_FX_L1, VAR_FX_L2, VAR_FX_L3, VAR_FX_L4, VAR_FX_L5);
    logCheckTable(VAR_NO_FX,VAR_FX,VAR_G3_NOT_SURE);
    logCheck(VAR_VFA);
    logID(VAR_NO_FX,VAR_FX,VAR_G3_NOT_SURE);
    
    console.log('-- HIP --');
    logIDTable(VAR_LH_BMD, VAR_LH_TSCORE, VAR_LH_ZSCORE, VAR_RH_BMD, VAR_RH_TSCORE, VAR_RH_ZSCORE);
    logCheckTable(VAR_LH_OP,VAR_RH_OP);
    
    console.log('-- Grading --');
    logIDTable(VAR_LOWEST_TSCORE, VAR_LOWEST_ZSCORE);
    
    console.log('-- BODY --');
    logCheckTable(VAR_BODY_BMD_CHECKBOX,VAR_BODY_FAT_CHECKBOX,VAR_BODY_MUSCLE_CHECKBOX);
    logCheck(VAR_BODY_BMD_CHECKBOX);
    logIDTable(VAR_BODY_BMD, VAR_BODY_TSCORE, VAR_BODY_ZSCORE);
    logCheck(VAR_BODY_FAT_CHECKBOX);
    logIDTable(VAR_BODY_FAT);
    logCheck(VAR_BODY_MUSCLE_CHECKBOX);
    logID(VAR_BODY_SEX);
    logIDTable(VAR_BODY_LALM_G, VAR_BODY_LALM_KG, VAR_BODY_RALM_G, VAR_BODY_RALM_KG, VAR_BODY_LLLM_G, VAR_BODY_LLLM_KG, VAR_BODY_RLLM_G, VAR_BODY_RLLM_KG, VAR_BODY_HEIGHT_CM, VAR_BODY_HEIGHT_M, VAR_ASM, VAR_ASMI, VAR_ASMI_MALE_CUTOFF, VAR_ASMI_FEMALE_CUTOFF);
    logCheck(VAR_BODY_RR_CHECKBOX);
            
    console.log('-- LSC: lumbar spine --');
    logCheck(VAR_PREVIOUS_LSP);
    logIDTable(VAR_PREVIOUS_LSP_EXAM_DATE, VAR_PREVIOUS_LSP_EXAM_LSP_BMD, VAR_DELTA_LSP_BMD, VAR_ABS_DELTA_LSP_BMD); 
    console.log('-- LSC: hips --');
    logCheck(VAR_PREVIOUS_HIP);
    logIDTable(VAR_PREVIOUS_HIP_EXAM_DATE, VAR_PREVIOUS_HIP_EXAM_LH_BMD, VAR_DELTA_LH_BMD, VAR_ABS_DELTA_LH_BMD, VAR_PREVIOUS_HIP_EXAM_RH_BMD, VAR_DELTA_RH_BMD, VAR_ABS_DELTA_RH_BMD);
    
    console.log('-- LSC data--');
    logID(VAR_LSC_DATA);
    logID(VAR_LSC_CHOICE);
    logIDTable(VAR_LSC_HOSPITAL, VAR_LSC_LSP, VAR_LSC_RH, VAR_LSC_LH);   
    
    logID(VAR_CSS_ON);

}