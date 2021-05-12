/** 
	读取外部xml文件，turn异步，false同步
*/
{
	function loadxml(xmlurl){
		try{
			if (window.XMLHttpRequest){
				// IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
				xhttp = new XMLHttpRequest();
			} else {// IE6, IE5 浏览器执行代码
				xhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xhttp.open("GET",xmlurl,false);
			xhttp.send();
			xmlDoc = xhttp.responseXML;
		}catch(err){
			try{//IE查看本地测试用
				xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
				xmlDoc.async = false;
				xmlDoc.load(xmlurl);
			}catch(err){
				alert("loadxml(): "+err+".请刷新页面");
			}
		}
		return xmlDoc;
	}
}