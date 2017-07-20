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


function DXA_REPORTING(){
    parent.frames['DXA_RESULT'].document.open(); 
	parent.frames['DXA_RESULT'].document.write('<html>');
	parent.frames['DXA_RESULT'].document.write('<head><script>');
	
	parent.frames['DXA_RESULT'].document.write('</script></head>');
	parent.frames['DXA_RESULT'].document.write('<body bgcolor=bisque>');

    
    parent.frames['DXA_RESULT'].document.write('hello world');
    
    
    parent.frames['DXA_RESULT'].document.write('<script src="copytextclipboard.js"></script><script>copytextclipboard.init(function(thetext){console.log("TEXT COPIED:" + thetext);});</script>');
    parent.frames['DXA_RESULT'].document.write('</body></html>');
    parent.frames['DXA_RESULT'].document.close();
    }