$(document).ready(function(){
  $(".list-group").on("click", "a", function(e){
    e.preventDefault();

    $.ajax({
      type: "GET",
      url: $(this).attr("href"),
      success: function(commits){
        $("tbody").empty();
        for(var i = 0; i < commits.length; i++){
          $("tbody").append(buildTableRow(commits[i]));
        }
      }
    })
  });

  function buildTableRow(commitData){
    var shaTd = $("<td>").append(commitLink);
    var commitLink = $("<a>").append(commitData.sha).addClass("sha");
    commitLink.attr("href", commitData.html_url).attr("target", "_blank");
    var authorTd = $("<td>").append(commitData.author.login);
    var messageTd = $("<td>").append(commitData.commit.message);
    var dateTd = $("<td>").append(commitData.commit.author.date);
    

    return $("<tr>").append(shaTd.append(commitLink))
    .append(authorTd)
    .append(messageTd)
    .append(dateTd);
    
  }
});