function DXA_REPORTING(){
/* Exam Date variants */
    var VAR_LSP_EXAM_DATE=document.getElementById("LSP_EXAM_DATE").value;

/* LSP variants */
    var VAR_LSP_BMD=document.getElementById("LSP_BMD").value;
    var VAR_LSP_TSCORE=document.getElementById("LSP_TSCORE").value;
    var VAR_LSP_ZSCORE=document.getElementById("LSP_ZSCORE").value;
    var VAR_PREVIOUS_LSP_EXAM_DATE=document.getElementById("PREVIOUS_LSP_EXAM_DATE").value;
    var VAR_PREVIOUS_LSP_EXAM_LSP_BMD=document.getElementById("PREVIOUS_LSP_EXAM_LSP_BMD").value;
    var VAR_DELTA_LSP_BMD=(VAR_LSP_BMD-VAR_PREVIOUS_LSP_EXAM_LSP_BMD).toFixed(3);
    var VAR_ABS_DELTA_LSP_BMD=Math.abs(VAR_DELTA_LSP_BMD).toFixed(3);
    var VAR_LSP_HOLOGIC_CHECKED=document.getElementById("LSP_HOLOGIC").checked;
    var VAR_VGH_LSC_LSP=0.031;
    var VAR_VGH_LSC_LH=0.033;
    var VAR_VGH_LSC_RH=0.038;

/* LSP fracture variants */      
    var VAR_FX_L5=document.getElementById("FX_L5").value;
    var VAR_FX_L4=document.getElementById("FX_L4").value;
    var VAR_FX_L3=document.getElementById("FX_L3").value;
    var VAR_FX_L2=document.getElementById("FX_L2").value;
    var VAR_FX_L1=document.getElementById("FX_L1").value;
    var VAR_FX_T12=document.getElementById("FX_T12").value;
    var VAR_FX_T11=document.getElementById("FX_T11").value;
    var VAR_FX_T10=document.getElementById("FX_T10").value;
    var VAR_FX_T9=document.getElementById("FX_T9").value;
    var VAR_FX_T8=document.getElementById("FX_T8").value;
    var VAR_FX_T7=document.getElementById("FX_T7").value;
    var VAR_FX_T6=document.getElementById("FX_T6").value;
    var VAR_FX_T5=document.getElementById("FX_T5").value;
    var VAR_FX_T4=document.getElementById("FX_T4").value;
    var VAR_FX_T3=document.getElementById("FX_T3").value;
    var VAR_FX_T2=document.getElementById("FX_T2").value;
    var VAR_FX_T1=document.getElementById("FX_T1").value;
    var VAR_FX_L5_CHECKED=document.getElementById("FX_L5").checked;
    var VAR_FX_L4_CHECKED=document.getElementById("FX_L4").checked;
    var VAR_FX_L3_CHECKED=document.getElementById("FX_L3").checked;
    var VAR_FX_L2_CHECKED=document.getElementById("FX_L2").checked;
    var VAR_FX_L1_CHECKED=document.getElementById("FX_L1").checked;
    var VAR_FX_T12_CHECKED=document.getElementById("FX_T12").checked;
    var VAR_FX_T11_CHECKED=document.getElementById("FX_T11").checked;
    var VAR_FX_T10_CHECKED=document.getElementById("FX_T10").checked;
    var VAR_FX_T9_CHECKED=document.getElementById("FX_T9").checked;
    var VAR_FX_T8_CHECKED=document.getElementById("FX_T8").checked;
    var VAR_FX_T7_CHECKED=document.getElementById("FX_T7").checked;
    var VAR_FX_T6_CHECKED=document.getElementById("FX_T6").checked;
    var VAR_FX_T5_CHECKED=document.getElementById("FX_T5").checked;
    var VAR_FX_T4_CHECKED=document.getElementById("FX_T4").checked;
    var VAR_FX_T3_CHECKED=document.getElementById("FX_T3").checked;
    var VAR_FX_T2_CHECKED=document.getElementById("FX_T2").checked;
    var VAR_FX_T1_CHECKED=document.getElementById("FX_T1").checked;

    var VAR_FX="";
    var VAR_FX_CHECKED;
    var VAR_G3_NOT_SURE;
    var VAR_G3_NOT_SURE_CHECKED=document.getElementById("G3_NOT_SURE").checked;

    // fracture check

    var VAR_FX_CHECKED = false;
      
    if(VAR_FX_T1_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T1+"<br>";}
    else{}
    if(VAR_FX_T2_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T2+"<br>";}
    else{}
    if(VAR_FX_T3_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T3+"<br>";}
    else{}
    if(VAR_FX_T4_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T4+"<br>";}
    else{}
    if(VAR_FX_T5_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T5+"<br>";}
    else{}
    if(VAR_FX_T6_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T6+"<br>";}
    else{}
    if(VAR_FX_T7_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T7+"<br>";}
    else{}
    if(VAR_FX_T8_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T8+"<br>";}
    else{}
    if(VAR_FX_T9_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T9+"<br>";}
    else{}
    if(VAR_FX_T10_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T10+"<br>";}
    else{}
    if(VAR_FX_T11_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T11+"<br>";}
    else{}
    if(VAR_FX_T12_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_T12+"<br>";}
    else{}
    if(VAR_FX_L1_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_L1+"<br>";}
    else{}
    if(VAR_FX_L2_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_L2+"<br>";}
    else{}
    if(VAR_FX_L3_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_L3+"<br>";}
    else{}
    if(VAR_FX_L4_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_L4+"<br>";}
    else{}
    if(VAR_FX_L5_CHECKED == true)
      {VAR_FX_CHECKED = true;VAR_FX=VAR_FX+VAR_FX_L5+"<br>";}
    else{}   

    // Grade 3 cannot be sure
    if(VAR_G3_NOT_SURE_CHECKED == true && VAR_LSP_TSCORE >= -1 && !VAR_LSP_ZSCORE)
          {
          VAR_G3_NOT_SURE = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 0 normal bone density (T score >= -1.0).";
          }
    else if(VAR_G3_NOT_SURE_CHECKED == true && VAR_LSP_TSCORE > -2.5 && VAR_LSP_TSCORE < -1 && !VAR_LSP_ZSCORE)
          {
          VAR_G3_NOT_SURE = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 1 osteopenia (-2.5 < T score < -1.0).";
          }
    else if(VAR_G3_NOT_SURE_CHECKED == true && VAR_LSP_TSCORE <= -2.5 && !VAR_LSP_ZSCORE)
          {
          VAR_G3_NOT_SURE = "> If the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 2 osteoporosis (T score <= -2.5).";
          }
    else if(VAR_G3_NOT_SURE_CHECKED == true && VAR_LSP_TSCORE >= -1)
          {
          VAR_G3_NOT_SURE = "if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 0 normal bone density (T score >= -1.0).";
          }
    else if(VAR_G3_NOT_SURE_CHECKED == true && VAR_LSP_TSCORE > -2.5 && VAR_LSP_TSCORE < -1)
          {
          VAR_G3_NOT_SURE = "if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 1 osteopenia (-2.5 < T score < -1.0).";
          }
    else if(VAR_G3_NOT_SURE_CHECKED == true && VAR_LSP_TSCORE <= -2.5)
          {
          VAR_G3_NOT_SURE = "if the fracture is neither due to traumatic injury nor bone metastasis, according to WHO criteria, the result showed Grade 3 severe osteoporosis with fragility fracture; otherwise, Grade 2 osteoporosis (T score <= -2.5).";
          }
      else
          {
          }
    
    
    
/* DXA reporting */    
    parent.frames['DXA_RESULT'].document.open(); 
	parent.frames['DXA_RESULT'].document.write('<html>');
	parent.frames['DXA_RESULT'].document.write('<head><script>');
	
	parent.frames['DXA_RESULT'].document.write('</script></head>');
	parent.frames['DXA_RESULT'].document.write('<body bgcolor=bisque>');
    
    
    
    
    parent.frames['DXA_RESULT'].document.write('hello world<br>');

    
    
    
    
    parent.frames['DXA_RESULT'].document.write('<script src="copytextclipboard.js"></script><script>copytextclipboard.init(function(thetext){console.log("TEXT COPIED:" + thetext);});</script>');
    parent.frames['DXA_RESULT'].document.write('</body></html>');
    parent.frames['DXA_RESULT'].document.close();


/* Console log for variants */    

    console.log('Console log: Variants in DXA_REPORTING');
    console.log('Exam date = '  + VAR_LSP_EXAM_DATE);
    
    console.log('LSP_BMD = '   + VAR_LSP_BMD);
    console.log('LSP_TSCORE = ' + VAR_LSP_TSCORE);
    console.log('LSP_ZSCORE = ' + VAR_LSP_ZSCORE);
    
    console.log('PREVIOUS_LSP_EXAM_DATE = ' + VAR_PREVIOUS_LSP_EXAM_DATE);
    console.log('PREVIOUS_LSP_EXAM_LSP_BMD = ' + VAR_PREVIOUS_LSP_EXAM_LSP_BMD);
    console.log('LSP_BMD - PREVIOUS_LSP_BMD = ' + VAR_DELTA_LSP_BMD);
    console.log('abs(DELTA_LSP_BMD) = ' + VAR_ABS_DELTA_LSP_BMD);
    
    console.log('LSP_HOLOGIC = ' + VAR_LSP_HOLOGIC_CHECKED);
    console.log('VGH_LSC_LSP = ' + VAR_VGH_LSC_LSP);
    console.log('VGH_LSC_LH = ' + VAR_VGH_LSC_LH);
    console.log('VGH_LSC_RH = ' + VAR_VGH_LSC_RH);
    
    
// next mission: add console log of LSP fracture variants    
    

}