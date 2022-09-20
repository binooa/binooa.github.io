   //ThumpNail Certificates
function showThumbnailCertificates(FileUploadId,ThumpDivID){

    if (checkFileExtension(FileUploadId)==true){
  
            var   imgtagstr;
            var files = FileUploadId.files;
            for(var i=0;i<files.length;i++){
                var file = files[i]
                var imageType = /image.*/
                if(!file.type.match(imageType)){
                  console.log("Not an Image");
                  continue;
            }
            $("#"+ThumpDivID.id+"").empty();
            var image = document.createElement("img");
            var thumbnail =ThumpDivID;
            
            image.file = file;
        //    thumbnail.appendChild(image)

            var reader = new FileReader()
            reader.onload = (function(aImg){
            return function(e){
                if (file.size>102400){
                     alert ("Please Resize  Image UpTo 100 Kb");
                     $("#" + FileUploadId.id).val("");
                }
                else{
                     aImg.src = e.target.result;
                     imgtagstr =  "<img  style='cursor :pointer ;' onclick='OpenDilog(this)' src='" + aImg.src + "' Height='100px' Width='100px'/>";
                     thumbnail.innerHTML=imgtagstr;
                }
                };
            }(image))
            var ret = reader.readAsDataURL(file);

          }
  }
  
}


function checkFileExtension(elem) {
        var filePath = elem.value;

        if(filePath.indexOf('.') == -1)
            return false;
        
        var validExtensions = new Array();
        var ext = filePath.substring(filePath.lastIndexOf('.') + 1).toLowerCase();
    
        validExtensions[0] = 'jpg';
        validExtensions[1] = 'jpeg';
       
    
        for(var i = 0; i < validExtensions.length; i++) {
            if(ext == validExtensions[i])
                return true;
        }

        alert('The file extension ' + ext.toUpperCase() + ' is not allowed!');
         $("#" + elem.id).val("");
        return false;
    }
    


function showThumbnailPhoto(FileUploadId,ThumpDivID){

if (checkFileExtension(FileUploadId)==true){
        var   imgtagstr;
        var files = FileUploadId.files;
        for(var i=0;i<files.length;i++){
            var file = files[i]
            var imageType = /image.*/
            if(!file.type.match(imageType)){
              console.log("Not an Image");
              continue;
        }
        $("#"+ThumpDivID.id+"").empty();
        var image = document.createElement("img");
        var thumbnail =ThumpDivID;
        
        image.file = file;
     
    //    thumbnail.appendChild(image)

        var reader = new FileReader()
        reader.onload = (function(aImg){
        return function(e){
            if (file.size>30720){
                 alert ("Please Resize Photo UpTo 30 Kb");
                 $("#" + FileUploadId.id).val("");
            }
            else{
                 aImg.src = e.target.result;
                 if (aImg .width>150 || aImg .height>200) {
                     alert("Resize Photo Diamension 150px x 200px");
                   
                 } 
                 else {
                     imgtagstr =  "<img  style='cursor :pointer ;' onclick='OpenDilog(this)' src='" + aImg.src + "' Height='200px' Width='150px'/>";
                     thumbnail.innerHTML=imgtagstr;
                 }
            }
            };
        }(image))
        var ret = reader.readAsDataURL(file);
        }
        
        }
}

   
function showThumbnailSign(FileUploadId,ThumpDivID){
    var   imgtagstr;
    var files = FileUploadId.files;
    for(var i=0;i<files.length;i++){
        var file = files[i]
        var imageType = /image.*/
        if(!file.type.match(imageType)){
          console.log("Not an Image");
          continue;
    }
    $("#"+ThumpDivID.id+"").empty();
    var image = document.createElement("img");
    var thumbnail =ThumpDivID;
    
    image.file = file;
//    thumbnail.appendChild(image)

    var reader = new FileReader()
    reader.onload = (function(aImg){
    return function(e){
        if (file.size>30720){
             alert ("Please Resize Sign UpTo 30 Kb");
             $("#" + FileUploadId.id).val("");
        }
        else{
              aImg.src = e.target.result;
             if (aImg .width>150 || aImg .height>100) {
                 alert("Resize Sign Diamension 150px x 100px");
                
             } 
             else {
             imgtagstr =  "<img  style='cursor :pointer ;' onclick='OpenDilog(this)' src='" + aImg.src + "' Height='100px' Width='150px'/>";
             thumbnail.innerHTML=imgtagstr;
             }
        }
        };
    }(image))
    var ret = reader.readAsDataURL(file);
    }
}

function OpenDilog(Img) {
    var paramData = {};
    paramData.Url = Img.src;
    $.ajax({
        type: "POST",
        url: "./COP/Attachments.aspx/SetImageUrl",
        data: JSON.stringify({ Data: paramData }),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (responce) {
            if (responce.d == "") {
                window.open("./COP/ImageView.aspx", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=150, width=700, height=600");
            }
            else {
                alert(responce.d.ErrorStr);
            }
        },
        error: function (jqXHR, textStatus, errorThrown) {
            alert('Error Code : ' + jqXHR.responseText);
        }
    })



    //   window.open(Img.src, "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, top=50, left=150, width=700, height=600");
 }

