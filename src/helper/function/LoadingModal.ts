
const showLoading=(check:boolean)=>{
  if (check) {
    $(".jquery-loading-modal").css("display","flex");
  }
  else{
    $(".jquery-loading-modal").css("display","none");
  }
}

export default showLoading;