function ShowVFA() {
    var vis = "none";
    if(document.getElementById("VFA").checked){
        vis = "block";
    }
    document.getElementById("VFA_TABLE").style.display = vis;
}
function HideLH() {
    var vis = "block";
    if(document.getElementById("LH_OP").checked){
        vis = "none";
    }
    document.getElementById("DIV_LH").style.display = vis;
}
function HideRH() {
    var vis = "block";
    if(document.getElementById("RH_OP").checked){
        vis = "none";
    }
    document.getElementById("DIV_RH").style.display = vis;
}
function DXA_REPORTING(){
/* Exam Date variants */
    //LSP_EXAM_DATE
    var VAR_LSP_EXAM_DATE=document.getElementById("LSP_EXAM_DATE");
    
    //HIP_DXAM_DATE
    var ARRAY_HIP_EXAM_DATE_SELECT = document.getElementsByName("HIP_EXAM_DATE_SELECT");
    var VAR_HIP_EXAM_DATE_SELECT;
       for(var i = 0; i < ARRAY_HIP_EXAM_DATE_SELECT.length; i++){
            if(ARRAY_HIP_EXAM_DATE_SELECT[i].checked){
                VAR_HIP_EXAM_DATE_SELECT = {
                    "id" : "HIP_EXAM_DATE_SELECT",
                    "value" : ARRAY_HIP_EXAM_DATE_SELECT[i].value
                };
            }
       }
    var VAR_HIP_EXAM_DATE=document.getElementById("HIP_EXAM_DATE");
    if (VAR_HIP_EXAM_DATE_SELECT.value == "same")
        {VAR_HIP_EXAM_DATE.value = VAR_LSP_EXAM_DATE.value;}
   
    //BODY_EXAM_DATE
    var ARRAY_BODY_EXAM_DATE_SELECT = document.getElementsByName("BODY_EXAM_DATE_SELECT");
    var VAR_BODY_EXAM_DATE_SELECT;
       for(var i = 0; i < ARRAY_BODY_EXAM_DATE_SELECT.length; i++){
            if(ARRAY_BODY_EXAM_DATE_SELECT[i].checked){
                VAR_BODY_EXAM_DATE_SELECT = {
                    "id" : "BODY_EXAM_DATE_SELECT",
                    "value" : ARRAY_BODY_EXAM_DATE_SELECT[i].value
                };
            }
       }
    var VAR_BODY_EXAM_DATE=document.getElementById("BODY_EXAM_DATE");
    if (VAR_BODY_EXAM_DATE_SELECT.value == "same")
        {VAR_BODY_EXAM_DATE.value = VAR_LSP_EXAM_DATE.value;}
    
    //PREVIOUS_EXAM_DATE
    var VAR_PREVIOUS_LSP_EXAM_DATE=document.getElementById("PREVIOUS_LSP_EXAM_DATE");
    var ARRAY_PREVIOUS_HIP_EXAM_DATE_SELECT = document.getElementsByName("PREVIOUS_HIP_EXAM_DATE_SELECT");
    var VAR_PREVIOUS_HIP_EXAM_DATE_SELECT;
       for(var i = 0; i < ARRAY_PREVIOUS_HIP_EXAM_DATE_SELECT.length; i++){
            if(ARRAY_PREVIOUS_HIP_EXAM_DATE_SELECT[i].checked){
                VAR_PREVIOUS_HIP_EXAM_DATE_SELECT = {
                    "id" : "PREVIOUS_HIP_EXAM_DATE_SELECT",
                    "value" : ARRAY_PREVIOUS_HIP_EXAM_DATE_SELECT[i].value
                };
            }
       }
    var VAR_PREVIOUS_HIP_EXAM_DATE=document.getElementById("PREVIOUS_HIP_EXAM_DATE");
    if (VAR_PREVIOUS_HIP_EXAM_DATE_SELECT.value == "same")
        {VAR_PREVIOUS_HIP_EXAM_DATE.value = VAR_PREVIOUS_LSP_EXAM_DATE.value;}
 


/* LSP variants */

    // FOV selection of L1-L4
    var VAR_FOV_L1=document.getElementById("FOV_L1");
//        if (!VAR_FOV_L1.checked) {VAR_FOV_L1.value = ""};
    var VAR_FOV_L2=document.getElementById("FOV_L2");
//        if (!VAR_FOV_L2.checked) {VAR_FOV_L2.value = ""};
    var VAR_FOV_L3=document.getElementById("FOV_L3");
//        if (!VAR_FOV_L3.checked) {VAR_FOV_L3.value = ""};
    var VAR_FOV_L4=document.getElementById("FOV_L4");
//        if (!VAR_FOV_L4.checked) {VAR_FOV_L4.value = ""};
    
    var VAR_FOV = {
        "id" : "FOV",
        "value" : "",
        "checked" : true
    };
    var ARRAY_FOV =new Array();
    
    if(VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 4){
        for(var i = 1; i < 5; i++){
            eval('if(VAR_FOV_L'+i+'.checked){ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');
        }
        VAR_FOV.value=ARRAY_FOV[0] + "," + ARRAY_FOV[1] + "," +ARRAY_FOV[2] + "," + ARRAY_FOV[3];
    }
    else if(VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 3){
        for(var i = 1; i < 5; i++){
            eval('if(VAR_FOV_L'+i+'.checked){ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');            
        }
        VAR_FOV.value=ARRAY_FOV[0] + "," + ARRAY_FOV[1] + "," +ARRAY_FOV[2];        
    }
    else if(VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 2){
        for(var i = 1; i < 5; i++){
            eval('if(VAR_FOV_L'+i+'.checked){ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');            
        }
        VAR_FOV.value=ARRAY_FOV[0] + "," + ARRAY_FOV[1];
    }
    else if(VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 1){
        for(var i = 1; i < 5; i++){
            eval('if(VAR_FOV_L'+i+'.checked){ARRAY_FOV.push(VAR_FOV_L'+i+'.value);}');            
        }
        VAR_FOV.value=ARRAY_FOV[0];
        //debug test
        alert("FOV: single vertebrae!");
        VAR_FOV.single="> According to WHO criteria, data from only single vertebral body is not enough for diagnosis. Please correlate with DXA of hips for clinical diagnosis.";
        
    }    
    else if(VAR_FOV_L1.checked + VAR_FOV_L2.checked + VAR_FOV_L3.checked + VAR_FOV_L4.checked == 0){
        alert("FOV: No vertebrae is selected!");
        //return; //debug test
    }
    else{
    }
    // LSP BMD
    
    var VAR_LSP_BMD=document.getElementById("LSP_BMD");
    var VAR_LSP_TSCORE=document.getElementById("LSP_TSCORE");
    var VAR_LSP_ZSCORE=document.getElementById("LSP_ZSCORE");

/* LSP fracture variants */  
    var VAR_VFA=document.getElementById("VFA");
    

/*    
    var VAR_FX_L5 = {
            "id" : document.getElementById("FX_L5").id,
            "value" : document.getElementById("FX_L5").value,
            "checked" : document.getElementById("FX_L5").checked,
            "genant" : "",
            "fix_checked" : document.getElementById("FX_L5_FIX").checked,
            "fix_value" : document.getElementById("FX_L5_FIX").value,
            "vp_checked" : document.getElementById("FX_L5_VP").checked,
            "vp_value" : document.getElementById("FX_L5_VP").value
        };

    var ARRAY_FX_L5_GENANT = document.getElementsByName("FX_L5_GENANT");
       for(var i = 0; i < ARRAY_FX_L5_GENANT.length; i++){
            if(ARRAY_FX_L5_GENANT[i].checked){VAR_FX_L5.genant = ARRAY_FX_L5_GENANT[i].value;}
       }
*/    
/*
    var VAR_FX_L5=document.getElementById("FX_L5");
    var VAR_FX_L4=document.getElementById("FX_L4");
    var VAR_FX_L3=document.getElementById("FX_L3");
    var VAR_FX_L2=document.getElementById("FX_L2");
    var VAR_FX_L1=document.getElementById("FX_L1");
    var VAR_FX_T12=document.getElementById("FX_T12");
    var VAR_FX_T11=document.getElementById("FX_T11");
    var VAR_FX_T10=document.getElementById("FX_T10");
    var VAR_FX_T9=document.getElementById("FX_T9");
    var VAR_FX_T8=document.getElementById("FX_T8");
    var VAR_FX_T7=document.getElementById("FX_T7");
    var VAR_FX_T6=document.getElementById("FX_T6");
    var VAR_FX_T5=document.getElementById("FX_T5");
    var VAR_FX_T4=document.getElementById("FX_T4");
    var VAR_FX_T3=document.getElementById("FX_T3");
    var VAR_FX_T2=document.getElementById("FX_T2");
    var VAR_FX_T1=document.getElementById("FX_T1");
*/

    
    for(var i = 1; i < 6; i++){
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
            'for(var j = 0; j < ARRAY_FX_L'+i+'_GENANT.length; j++){'+
                'if(ARRAY_FX_L'+i+'_GENANT[j].checked){'+
                    'VAR_FX_L'+i+'.genant = ARRAY_FX_L'+i+'_GENANT[j].value;'+
                '}'+
            '}'
        );
    } 

    for(var i = 1; i < 13; i++){
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
            'for(var j = 0; j < ARRAY_FX_T'+i+'_GENANT.length; j++){'+
                'if(ARRAY_FX_T'+i+'_GENANT[j].checked){'+
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
    for(var i = 1; i < 13; i++){ 
        eval(
            'if(VAR_FX_T'+i+'.checked){'+
                'if(VAR_FX_T'+i+'.genant == 1){'+
                    'VAR_FX_T'+i+'.value= "> Genant grade 1 (20% to 25% loss of height) vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'else if(VAR_FX_T'+i+'.genant == 2){'+
                    'VAR_FX_T'+i+'.value= "> Genant grade 2 (25% to 40% loss of height) vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'else if(VAR_FX_T'+i+'.genant == 3){'+
                    'VAR_FX_T'+i+'.value= "> Genant grade 3 (greater than 40% loss of height) vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'else{'+
                    'VAR_FX_T'+i+'.value= "> Vertebral fracture at " + VAR_FX_T'+i+'.value;}'+
                'if(VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.vp_checked){'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ", S/p fixation and vertebroplasty";}'+
                'else if(VAR_FX_T'+i+'.fix_checked){'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ", S/p fixation";}'+
                'else if(VAR_FX_T'+i+'.vp_checked){'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ", S/p vertebroplasty";}'+
                'else{}'+
                'if(VAR_FX_T'+i+'.fix_value){'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + " at " + VAR_FX_T'+i+'.fix_value + ".";}'+
                'else{'+
                    'VAR_FX_T'+i+'.value= VAR_FX_T'+i+'.value + ".";}'+
                'VAR_FX.checked = true;'+
                'VAR_FX.value=VAR_FX.value+VAR_FX_T'+i+'.value+"<br>";'+
            '}'+
            'else{'+
                'if(VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.vp_checked && VAR_FX_T'+i+'.fix_value){'+
                    'VAR_FX_T'+i+'.value= "> S/p fixation and vertebroplasty at " + VAR_FX_T'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_T'+i+'.value+"<br>";}'+
                'else if(VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.fix_value){'+
                    'VAR_FX_T'+i+'.value= "> S/p fixation at " + VAR_FX_T'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_T'+i+'.value+"<br>";}'+           
                'else if(!VAR_FX_T'+i+'.fix_checked && VAR_FX_T'+i+'.vp_checked){'+
                    'if(!VAR_FX_T'+i+'.fix_value){VAR_FX_T'+i+'.fix_value=VAR_FX_T'+i+'.value}'+
                    'VAR_FX_T'+i+'.value= "> S/p vertebroplasty at " + VAR_FX_T'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_T'+i+'.value+"<br>";}'+            
                'else{'+
                '}'+                
            '}'
        );
    }
    
    for(var i = 1; i < 6; i++){ 
        eval(
            'if(VAR_FX_L'+i+'.checked){'+
                'if(VAR_FX_L'+i+'.genant == 1){'+
                    'VAR_FX_L'+i+'.value= "> Genant grade 1 (20% to 25% loss of height) vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'else if(VAR_FX_L'+i+'.genant == 2){'+
                    'VAR_FX_L'+i+'.value= "> Genant grade 2 (25% to 40% loss of height) vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'else if(VAR_FX_L'+i+'.genant == 3){'+
                    'VAR_FX_L'+i+'.value= "> Genant grade 3 (greater than 40% loss of height) vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'else{'+
                    'VAR_FX_L'+i+'.value= "> Vertebral fracture at " + VAR_FX_L'+i+'.value;}'+
                'if(VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.vp_checked){'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ", S/p fixation and vertebroplasty";}'+
                'else if(VAR_FX_L'+i+'.fix_checked){'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ", S/p fixation";}'+
                'else if(VAR_FX_L'+i+'.vp_checked){'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ", S/p vertebroplasty";}'+
                'else{}'+
                'if(VAR_FX_L'+i+'.fix_value){'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + " at " + VAR_FX_L'+i+'.fix_value + ".";}'+
                'else{'+
                    'VAR_FX_L'+i+'.value= VAR_FX_L'+i+'.value + ".";}'+
                'VAR_FX.checked = true;'+
                'VAR_FX.value=VAR_FX.value+VAR_FX_L'+i+'.value+"<br>";'+
            '}'+
            'else{'+
                'if(VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.vp_checked && VAR_FX_L'+i+'.fix_value){'+
                    'VAR_FX_L'+i+'.value= "> S/p fixation and vertebroplasty at " + VAR_FX_L'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_L'+i+'.value+"<br>";}'+
                'else if(VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.fix_value){'+
                    'VAR_FX_L'+i+'.value= "> S/p fixation at " + VAR_FX_L'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_L'+i+'.value+"<br>";}'+           
                'else if(!VAR_FX_L'+i+'.fix_checked && VAR_FX_L'+i+'.vp_checked){'+
                    'if(!VAR_FX_L'+i+'.fix_value){VAR_FX_L'+i+'.fix_value=VAR_FX_L'+i+'.value}'+
                    'VAR_FX_L'+i+'.value= "> S/p vertebroplasty at " + VAR_FX_L'+i+'.fix_value + ".";'+
                    'VAR_NO_FX.checked = true;'+
                    'VAR_NO_FX.value=VAR_NO_FX.value+VAR_FX_L'+i+'.value+"<br>";}'+            
                'else{'+
                '}'+                
            '}'
        );
    }

    
/*      
    if(VAR_FX_T1.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T1.value+"<br>";}
    else{}
    if(VAR_FX_T2.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T2.value+"<br>";}
    else{}
    if(VAR_FX_T3.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T3.value+"<br>";}
    else{}
    if(VAR_FX_T4.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T4.value+"<br>";}
    else{}
    if(VAR_FX_T5.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T5.value+"<br>";}
    else{}
    if(VAR_FX_T6.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T6.value+"<br>";}
    else{}
    if(VAR_FX_T7.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T7.value+"<br>";}
    else{}
    if(VAR_FX_T8.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T8.value+"<br>";}
    else{}
    if(VAR_FX_T9.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T9.value+"<br>";}
    else{}
    if(VAR_FX_T10.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T10.value+"<br>";}
    else{}
    if(VAR_FX_T11.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T11.value+"<br>";}
    else{}
    if(VAR_FX_T12.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_T12.value+"<br>";}
    else{}
    if(VAR_FX_L1.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_L1.value+"<br>";}
    else{}
    if(VAR_FX_L2.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_L2.value+"<br>";}
    else{}
    if(VAR_FX_L3.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_L3.value+"<br>";}
    else{}
    if(VAR_FX_L4.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_L4.value+"<br>";}
    else{}
    if(VAR_FX_L5.checked)
      {VAR_FX.checked = true;VAR_FX.value=VAR_FX.value+VAR_FX_L5.value+"<br>";}
    else{}   
*/
    // Grade 3 cannot be sure
    if(VAR_G3_NOT_SURE.checked == true && !VAR_LSP_TSCORE.value)
          {
            VAR_G3_NOT_SURE.value = "debug test";
            //alert('no fracture checked but "Grade 3 cannot be sure" is checked');
          }
    else if(VAR_G3_NOT_SURE.checked == true && VAR_LSP_TSCORE.value > -2.5 && VAR_LSP_TSCORE.value < -1 && !VAR_LSP_ZSCORE.value)
          {
          VAR_G3_NOT_SURE.value = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 1 osteopenia (-2.5 < T score < -1.0).";
          }
    else if(VAR_G3_NOT_SURE.checked == true && VAR_LSP_TSCORE.value <= -2.5 && !VAR_LSP_ZSCORE.value)
          {
          VAR_G3_NOT_SURE.value = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 2 osteoporosis (T score <= -2.5).";
          }
    else if(VAR_G3_NOT_SURE.checked == true && VAR_LSP_TSCORE.value >= -1)
          {
          VAR_G3_NOT_SURE.value = "if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 0 normal bone density (T score >= -1.0).";
          }
    else if(VAR_G3_NOT_SURE.checked == true && VAR_LSP_TSCORE.value > -2.5 && VAR_LSP_TSCORE.value < -1)
          {
          VAR_G3_NOT_SURE.value = "if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 1 osteopenia (-2.5 < T score < -1.0).";
          }
    else if(VAR_G3_NOT_SURE.checked == true && VAR_LSP_TSCORE.value <= -2.5)
          {
          VAR_G3_NOT_SURE.value = "if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 2 osteoporosis (T score <= -2.5).";
          }
    else
          {
          }

/* Hip variants */    
    var VAR_LH_BMD=document.getElementById("LH_BMD");
    var VAR_LH_TSCORE=document.getElementById("LH_TSCORE");
    var VAR_LH_ZSCORE=document.getElementById("LH_ZSCORE");
    var VAR_LH_OP=document.getElementById("LH_OP");
    var VAR_RH_BMD=document.getElementById("RH_BMD");
    var VAR_RH_TSCORE=document.getElementById("RH_TSCORE");
    var VAR_RH_ZSCORE=document.getElementById("RH_ZSCORE");
    var VAR_RH_OP=document.getElementById("RH_OP");

/* Body variants */    
    var VAR_BODY_BMD=document.getElementById("BODY_BMD");
    var VAR_BODY_TSCORE=document.getElementById("BODY_TSCORE");
    var VAR_BODY_ZSCORE=document.getElementById("BODY_ZSCORE");
    var VAR_BODY_MUSCLE=document.getElementById("BODY_MUSCLE");
    var ARRAY_BODY_SEX =document.getElementsByName("BODY_SEX");
    var VAR_BODY_SEX;
       for(var i = 0; i < ARRAY_BODY_SEX.length; i++){
            if(ARRAY_BODY_SEX[i].checked){
                VAR_BODY_SEX = {
                    "id" : "BODY_SEX",
                    "value" : ARRAY_BODY_SEX[i].value
                };
            }
       }
    var VAR_BODY_LALM_G=document.getElementById("BODY_LALM_G");
    var VAR_BODY_LALM_KG=document.getElementById("BODY_LALM_KG");
    var VAR_BODY_RALM_G=document.getElementById("BODY_RALM_G");
    var VAR_BODY_RALM_KG=document.getElementById("BODY_RALM_KG");
    var VAR_BODY_LLLM_G=document.getElementById("BODY_LLLM_G");
    var VAR_BODY_LLLM_KG=document.getElementById("BODY_LLLM_KG");
    var VAR_BODY_RLLM_G=document.getElementById("BODY_RLLM_G");
    var VAR_BODY_RLLM_KG=document.getElementById("BODY_RLLM_KG");    
    var VAR_BODY_HEIGHT_CM=document.getElementById("BODY_HEIGHT_CM");
    var VAR_BODY_HEIGHT_M=document.getElementById("BODY_HEIGHT_M");
        
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
       for(var i = 0; i < ARRAY_LSC_CHOICE.length; i++){
            if(ARRAY_LSC_CHOICE[i].checked){
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
    
    if(VAR_LSC_CHOICE.value == "OTHERS"){
        if(VAR_LSC_OTHER.value == "hospital name"){
            alert('Please input hospital name!!');return;
        }
        else{
            var VAR_LSC_HOSPITAL= {
                "id" : "LSC_HOSPITAL",
                "value" : VAR_LSC_OTHER.value
            };                   
        }
        if(!VAR_LSC_LSP_OTHER.value || !VAR_LSC_RH_OTHER.value || !VAR_LSC_LH_OTHER.value){
            alert('Please input LSC data in your hospital!!');return;
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
    else if(VAR_LSC_CHOICE.value == "TPECHZX"){
        var VAR_LSC_HOSPITAL= {
                "id" : "LSC_HOSPITAL",
                "value" : "Taipei City Hospital ZhongXing Branch"
        };                   
        if(!VAR_LSC_LSP_TPECHZX.value || !VAR_LSC_RH_TPECHZX.value || !VAR_LSC_LH_TPECHZX.value){
            alert('Please input LSC data in TPECH-ZX!!');return;
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
    
/* Console log for variants */    

    console.log('-----Console log: Variants in DXA_REPORTING-----');

    function logID(){
        for(i=0;i<arguments.length;console.log(arguments[i].id + " = " + arguments[i].value),i++);
    }
    function logCheck(){
        for(i=0;i<arguments.length;console.log(arguments[i].id + " = " + arguments[i].value + ", checked =" + arguments[i].checked),i++);
    }
    function logIDTable(){
        var logArray=new Array();        for(i=0;i<arguments.length;logArray.push(arguments[i]),i++);console.table(logArray,["id", "value"]);
    }
    function logCheckTable(){
        var logArray=new Array();        for(i=0;i<arguments.length;logArray.push(arguments[i]),i++);console.table(logArray,["id", "checked", "value"]);
    }
    function logFXTable(){
        var logArray=new Array();        for(i=0;i<arguments.length;logArray.push(arguments[i]),i++);console.table(logArray,["id", "checked", "value", "genant", "vp_checked", "vp_value", "fix_checked", "fix_value"]);
    }
    
    console.log('-- Exam date --');
    logIDTable(VAR_LSP_EXAM_DATE, VAR_HIP_EXAM_DATE_SELECT, VAR_HIP_EXAM_DATE, VAR_BODY_EXAM_DATE_SELECT, VAR_BODY_EXAM_DATE)
        
    console.log('-- LSP --');
    logCheckTable(VAR_FOV_L1, VAR_FOV_L2, VAR_FOV_L3, VAR_FOV_L4, VAR_FOV);
    logIDTable(VAR_LSP_BMD, VAR_LSP_TSCORE, VAR_LSP_ZSCORE);
    
    console.log('-- LSP FX variants --');
    logFXTable(VAR_FX_T1, VAR_FX_T2, VAR_FX_T3, VAR_FX_T4, VAR_FX_T5, VAR_FX_T6, VAR_FX_T7, VAR_FX_T8, VAR_FX_T9, VAR_FX_T10, VAR_FX_T11, VAR_FX_T12, VAR_FX_L1, VAR_FX_L2, VAR_FX_L3, VAR_FX_L4, VAR_FX_L5);
    logCheckTable(VAR_NO_FX,VAR_FX,VAR_G3_NOT_SURE);
    logCheck(VAR_VFA);
    logID(VAR_NO_FX,VAR_FX,VAR_G3_NOT_SURE);
    
    console.log('-- HIP --');
    logIDTable(VAR_LH_BMD, VAR_LH_TSCORE, VAR_LH_ZSCORE, VAR_RH_BMD, VAR_RH_TSCORE, VAR_RH_ZSCORE);
    logCheckTable(VAR_LH_OP,VAR_RH_OP);
      
    console.log('-- body --');
    logIDTable(VAR_BODY_BMD, VAR_BODY_TSCORE, VAR_BODY_ZSCORE);
    logCheck(VAR_BODY_MUSCLE);
    logID(VAR_BODY_SEX);
    logIDTable(VAR_BODY_LALM_G, VAR_BODY_LALM_KG, VAR_BODY_RALM_G, VAR_BODY_RALM_KG, VAR_BODY_LLLM_G, VAR_BODY_LLLM_KG, VAR_BODY_RLLM_G, VAR_BODY_RLLM_KG, VAR_BODY_HEIGHT_CM, VAR_BODY_HEIGHT_M);
        
    console.log('-- LSC: lumbar spine --');
    logCheck(VAR_PREVIOUS_LSP);
    logIDTable(VAR_PREVIOUS_LSP_EXAM_DATE, VAR_PREVIOUS_LSP_EXAM_LSP_BMD, VAR_DELTA_LSP_BMD, VAR_ABS_DELTA_LSP_BMD); 
    console.log('-- LSC: hips --');
    logCheck(VAR_PREVIOUS_LSP);
    logIDTable(VAR_PREVIOUS_HIP_EXAM_DATE_SELECT, VAR_PREVIOUS_HIP_EXAM_DATE, VAR_PREVIOUS_HIP_EXAM_LH_BMD, VAR_DELTA_LH_BMD, VAR_ABS_DELTA_LH_BMD, VAR_PREVIOUS_HIP_EXAM_RH_BMD, VAR_DELTA_RH_BMD, VAR_ABS_DELTA_RH_BMD);
    
    console.log('-- LSC data--');
    logID(VAR_LSC_DATA);
    logID(VAR_LSC_CHOICE);
    logIDTable(VAR_LSC_HOSPITAL, VAR_LSC_LSP, VAR_LSC_RH, VAR_LSC_LH);

/* DXA reporting */    
    parent.frames['DXA_RESULT'].document.open(); 
	parent.frames['DXA_RESULT'].document.write('<html>');
	parent.frames['DXA_RESULT'].document.write('<head><script>');
	
	parent.frames['DXA_RESULT'].document.write('</script></head>');
	parent.frames['DXA_RESULT'].document.write('<body bgcolor=bisque>');
    
    // DXA perterm
    var DXA_PRETERM = "Dual-energy X-ray absorptiometry of ";
    var DXA_PRETERM_LSP;
        if(VAR_LSP_BMD.value){
            DXA_PRETERM_LSP = "lumbar spine";
            if(VAR_LSP_EXAM_DATE.value){
                DXA_PRETERM_LSP = DXA_PRETERM_LSP + " on " + VAR_LSP_EXAM_DATE.value;
                if(!VAR_HIP_EXAM_DATE.value){
                    VAR_HIP_EXAM_DATE.value = VAR_LSP_EXAM_DATE.value; // In case of LSP date (O) but hip date (X)
                }
            }
        }
        else{
        }
    var DXA_PRETERM_HIP;
        if(VAR_LH_BMD.value && VAR_RH_BMD.value){
            DXA_PRETERM_HIP = "bilateral hips";
            if(VAR_HIP_EXAM_DATE.value){
                DXA_PRETERM_HIP = DXA_PRETERM_HIP + " on " + VAR_HIP_EXAM_DATE.value;
            }
        }
        else if(VAR_LH_BMD.value && !VAR_RH_BMD.value){
            DXA_PRETERM_HIP = "left hip";
            if(VAR_HIP_EXAM_DATE.value){
                DXA_PRETERM_HIP = DXA_PRETERM_HIP + " on " + VAR_HIP_EXAM_DATE.value;
            }
        }
        else if(!VAR_LH_BMD.value && VAR_RH_BMD.value){
            DXA_PRETERM_HIP = "right hip";
            if(VAR_HIP_EXAM_DATE.value){
                DXA_PRETERM_HIP = DXA_PRETERM_HIP + " on " + VAR_HIP_EXAM_DATE.value;
            }
        }
        else{
        }
    if(DXA_PRETERM_LSP && DXA_PRETERM_HIP){
        DXA_PRETERM = DXA_PRETERM + DXA_PRETERM_LSP + " and " + DXA_PRETERM_HIP + ":<br>";
    }
    else if(DXA_PRETERM_LSP && !DXA_PRETERM_HIP){
        DXA_PRETERM = DXA_PRETERM + DXA_PRETERM_LSP + ":<br>";
    }
    else if(!DXA_PRETERM_LSP && DXA_PRETERM_HIP){
        DXA_PRETERM = DXA_PRETERM + DXA_PRETERM_HIP + ":<br>";
    }
    else{
        alert('Please input BMD of lumbar spine & hips');
        // return;  //Debug test
    }
    parent.frames['DXA_RESULT'].document.write(DXA_PRETERM+"<br>");
    
    // VFA
    if(VAR_VFA.checked){
        parent.frames['DXA_RESULT'].document.write(VAR_VFA.value+"<br>");
        if(!VAR_NO_FX.checked && !VAR_FX.checked){
            parent.frames['DXA_RESULT'].document.write("> There is no significant evidence of vertebral fracture.<br>");
        }
        else{
            if(VAR_NO_FX.checked){
                parent.frames['DXA_RESULT'].document.write(VAR_NO_FX.value);
            }
            if(VAR_FX.checked){
                parent.frames['DXA_RESULT'].document.write(VAR_FX.value);
            }            
        }
        parent.frames['DXA_RESULT'].document.write("<br>");
    }
    else{
        
    }
    
    // LSP FOV & BMD
    parent.frames['DXA_RESULT'].document.write(VAR_FOV.value+":<br>");
    parent.frames['DXA_RESULT'].document.write("> Bone mineral density (g/cm2) = " + VAR_LSP_BMD.value + "<br>");
    // LSP T-score
    if(!VAR_LSP_TSCORE.value)
        {
        parent.frames['DXA_RESULT'].document.write();
        }
    else{
        parent.frames['DXA_RESULT'].document.write("> T-score = ", VAR_LSP_TSCORE.value, "<br>");
        }
        
      // LSP Z-score    
    if(!VAR_LSP_ZSCORE.value)
        {
        parent.frames['DXA_RESULT'].document.write();
        }
      else{
        parent.frames['DXA_RESULT'].document.write("> Z-score = ", VAR_LSP_ZSCORE.value, "<br>");     
        }
    parent.frames['DXA_RESULT'].document.write('<br>'); // empty line
    
    //
    
    
    parent.frames['DXA_RESULT'].document.write('hello world<br>');


    
    
    
    parent.frames['DXA_RESULT'].document.write('<script src="copytextclipboard.js"></script><script>copytextclipboard.init(function(thetext){console.log("TEXT COPIED:" + thetext);});</script>');
    parent.frames['DXA_RESULT'].document.write('</body></html>');
    parent.frames['DXA_RESULT'].document.close();

    


}