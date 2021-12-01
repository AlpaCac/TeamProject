// 已修改 注释
// 变量名：
// now_sence:当前幕
// num_save:存档数量
// save[]:存档幕
// describe[]:存档描述
// username:名字
// --------------------------------------------------

// localStorage.clear();
var data_game=window.localStorage;
console.log(data_game["num_collection"]);
var savediv=document.getElementById("savediv");//存档描述输入框
// data_game["user_name"]=undefined;
var username=data_game["user_name"];
var inputusername=document.getElementById("input_namediv");//名字输入div
var inputusern=document.getElementById("input_name");//名字输入input
console.log("username= "+ username);
if(username=="undefined"||username==undefined)
{
    console.log("!!!!!!!!");
    inputusername.style.display="block";
}
function named()
{
    data_game["user_name"]=inputusern.value;
    username=inputusern.value;
    inputusername.style.display="none";
}
var words=["",
"这**体育课真**累啊，而且这周的ddl也巨多啊……<br>这种时候只有一个美味的至尊披萨能抚慰我的心灵！",
"【突然，主角和一个人狠狠地撞了一下，主角一个踉跄险些跌倒】",
"对不起对不起刚才没看路……","……（快步离开）",
"这人怎么回事啊……",
"【10分钟后 宿舍楼门口外卖桌】",
"我外卖呢？我外卖呢？？",
"【看着手机 翻看外卖上的小票】<br>我外卖呢？我外卖呢？？",
"【翻找了一会儿还是没有找到，主角蚌埠住了】",
"【与外卖员通上电话】<br>(#`O′)喂？你好，我订了这个预计十一点四十五到的至尊披萨，手机尾号是6666，为什么没有送过来啊？",//10
"尾号6666是吧？我放在桌子上了啊",
"没有啊，你放在哪里了？",
"你看一下美团里我给你发的图片吧。",
"（"+username+"打开手机查看截图）……",
"确实送到了，好吧，多谢了。",
"好的。",
"嘶……该不会……是被偷了吧？",
"【前几天身边也接连发生了好几起偷外卖的事件】",
"如果真是被偷了，我该怎么办？",
"如果真是被偷了，我该怎么办？",
"（你选择了站出来调查这件事，尽管你被ddl的诅咒缠身……）",//20
"妈的，我今天就是不上课也一定要把你揪出来，可恶的贼！",
"我现在应该找谁呢？",
"我现在应该找谁呢？",
"那就先打给店家看看吧。",
"【拨号的声音以及打电话的响铃声】",
"喂，您好？",
"您好，我想问一下……",
"(主角将发现外卖被偷的经过告诉了老板)",
"这个事情呢说实话也和我没有多大关系，但是小伙子你可以向平台说明情况然后申请退款的，这个东西送单的时候是有外卖险的呀，会有赔付的。",
"是外卖结算界面需要勾选的那个几毛钱的吗？",
"对的。",
"好吧，好吧，谢谢你……（挂断电话）",
"当时付的太着急了，而且平时从来没有买过这个险，没想到居然会这样……还是去找找保安大爷吧。",
"（主角最终决定去查监控，他走到了保卫室门口）",
"您好大爷，我想调一下监控。",
"孩子，是外卖丢了吗？",
"是的。",
"孩子，虽然很不忍心，但是我得给你泼点冷水：你这外卖估计很难找回来了。之前有不少孩子都是因为这个来找我调监控，最后哪怕查到了也没能逮住那贼啊。",
"但是这个外卖对我来说真的很重要……",
"但是这个外卖对我来说真的很重要……",
"（这时，hxd经过保卫处，正好看到了主角）",
username+"，你干啥捏？",
"我外卖被偷了，正犹豫要不要调监控看看呢。",//43
"调啊调啊，为什么不调？外卖就这么被偷了怎么能甘心？",
"大爷，抱歉，我还是想调监控。",
"孩子，那我就不多说了，祝你武运昌隆。来，签了这个说明单就可以去监控室看了，趁着现在还没过多长时间赶快去吧。",
"（主角在说明单上简要记下了遭遇）",
"我也来陪你看看。",
"（监控室内）",
"没想到你也跟来了。",
"一方有难八方支援嘛，到时候破案了记得请我吃阿华田冰淇淋捏。",
"（两个人一起查起了监控）",
"你看，骑手放下外卖了。",
"小偷还没有出现……",
"他出现了！",
"不是他不是他，这个是来找自己的外卖的。",
"（监控上的时间快到12点了，外卖桌前的人逐渐多了起来）",
"怎么都12点了还不出现……【突然惊讶】嗯？！我的外卖呢？？？？",
"看这个穿黑衣服的人。",
"嘿嘿嘿嘿嘿嘿嘿……（迅速将外卖装进书包里）",
"就是他！",
"（接下来，小黑走进了监控的死角，迅速消失在人海中了）",
"赶快去社区办事处调监控！这样根本不知道他去哪里了！",
"走！",
"（两人马不停蹄地来到办事处前台）",//65
"您好，我们有急事需要调一下社区前街道的监控，能找一下负责人吗？",
"好的，我现在帮您联系一下",
"（工作人员拨通了电话并说明了情况）",
"请问二位是这里高校的学生吗？",
"是的是的。",
"二位请跟我来。",
"（在工作人员的带领下，二人进入了负责人的办公室）",
"二位中哪位的外卖丢了？",
"我的。",
"我对您的遭遇表示深切的同情，我们愿意协助您调查这件事。",
"那就走吧，监控室在哪？",
"两位稍安勿躁，我们社区的监控由于面向公共路段，涉及到多方的权益暂时还不能供两位调用，两位可以先把这件事交给我，等我有了消息立即通知二位。",
"那这个监控还有谁在和社区一起管理吗？方便告诉我让我去协商吗？",
"抱歉，这个东西无可奉告。",
"（主角，hxd对视一眼）",
"好吧，那就拜托你了。",
"（两人起身离开）",
"请二位放心。",
"（到了社区办事处门外后）",
"这家伙在搪塞糊弄咱们，他绝对不可能再管这件事了。",
"没错，这样的人实在不可信。可是这条路不通，咱们也没几条路可选了。",
"也许最好的办法也只有一个了。",
"到此为止吧，这件事只会越闹越大的，而且把hxd也牵扯了进来，简直是浪费别人的时间。",
"算了吧，咱们别去了，再查下去也是浪费时间。对不起把你也卷进来了，弄得你一中午没休息……",
"你说什么呢，明明是我主动要来帮你的呀。走，跟我回屋吃披萨！",
"啥？你哪来的披萨？",
"刚才去调监控的路上看见你有点难过就顺便点了，现在估计送来了。",
"呜呜呜呜呜呜呜……hxd……偶雷诺卡密sama……",
"(你和hxd拿着披萨回了宿舍饱餐了一顿，心情变得十分快乐，没过多久就忘记了外卖被偷这件事，而办事处负责人果不其然也没有再联系你)","",
"咱们去派出所吧。",
"现在也只有这条路可以走了。",
"（两人去往派出所）",
"（两人进入派出所）",
"您好，我来咨询一些事情。",
"请问有什么可以帮到您的吗？",
"（简述了外卖被偷的遭遇），请问这个可以立案吗？",
"抱歉，就您目前的描述来看，这个案子涉案金额太少，我们这里是不予立案的。",
"好吧。",
"同学别灰心，其实还有一种办法。",
"什么什么？",
"如果这个嫌疑人是个惯犯，他的涉案金额很可能达到了立案标准……",
"因此只需要尽量多地联合最近丢了外卖的同学一起报案，还是很有希望的。",
"没错，而且虽然说这件事不能达到立案的程度，但是我们还是有权利对附近监控中的可疑人物进行排查的，如果你愿意相信我们，可以先报案，我们排查一下。",//109
"谢谢，谢谢你们！",
"来，同学，在这里写一下你的情况和联系方式……",
"(两天后，主角正在宿舍逛b站当颓狗，突然电话响起)",
"喂，你好？",
"同学你好，偷你外卖的人查到了，人已经带到派出所了，您方便过来一趟吗？",
"好的，我现在过去。",
"（几分钟后，主角来到了派出所门口）",
"【外卖贼坐在靠里的椅子上，低着头】",
"他承认他偷了你的外卖，我们这里就是协商一下赔款问题，请问您认为应该赔您多少呢？",
"他承认他偷了你的外卖，我们这里就是协商一下赔款问题，请问您认为应该赔您多少呢？",
"主角【平静】：我不要钱。但我想问问你，你偷了多少人的外卖？",
"……",
"民事层面的赔偿恐怕对你而言是没有效果的，倘若你不被发现，定会继续偷下去，我也不多说了，我会找其他受害者联合起来收集证据再报一次案的。你可别想否认，因为人在做，监控在看着呢。",
"（最终，你联合了不少外卖被盗的同学再次报案，其中大部分都是由此人所为，这名小偷最终被罚以15日的行政拘留，你也收到了赔款）","",
"外卖费加上我的维权费用，拿来吧你！",
"……",
"他的经济情况比较糟糕，赔款的速度可能并没有那么快，我们会督促他完整赔偿您的。",
"算了，我不需要赔偿了。",
"您确定吗？",
"我相信你的本性并没有那么坏，所以我愿意给你一次机会，但是不要认为这是我对你的宽恕。你必须在我们的校园墙上投稿承认自己的偷窃，这个也由警察监督你完成！",
"……",
"（隔天中午，你在校园墙上看到了一则留言，留言中认错态度非常诚恳）",
"这样就好。","",
"我代表圣嘉然原谅你了捏。",
"哼哼哼啊啊啊啊啊啊啊，嘉心糖给我去死啊！！！！！！！！",
"（主角直接化成光守护嘉然小姐，代行人间正道惩罚不法分子！）",
"嘉然小姐，嘉然小姐我做到了捏！！！！！！！","",
"没想到这种事也会落到我头上……再点一个算了，下午还有线代课呢……","","","",""];//每一幕占数组的一个元素；
var bkimg=["","bg_1/1bg.jpg","","","","",
"bg_1/6bg.jpg","",
"bg_1/8bg.jpg","","","","","","","","","","","","","",
"","","","","","","","","","","","","",
"bg_1/35bg.jpg","","","","","","","","","","","","","","",
"bg_1/52bg.png","","","","","","","","","","","","","","","",
"bg_1/66bg.jpg","","","","","","",
"bg_1/73bg.png","","","","","","","","","","","",
"bg_1/85bg.jpg","","","",
"bg_1/89bg.jpg","","","","","",
"bg_1/95bg.jpg","",//jieju2 97
"bg_1/96bg.jpg","","bg_1/98bg.jpg",
"bg_1/99bg.png","","","","","","","","","","","","",
"bg_1/112bg.jpg","","","","bg_1/116bg.jpg",
"bg_1/99bg.png","","","","","","bg_1/123bg.jpg","",//jieju3 125
"bg_1/99bg.png","","","","","","","bg_1/131bg.jpg","","",//jieju4 135
"bg_1/99bg.png","","","","bg_1/jieju5(1).jpg",//jieju5 140
"bg_1/8bg.jpg",""//jieju1 142
];
var names=["",username+"：","",username+"：","撞了"+username+"的人：",username+"：","",username+"：",username+"：","",username+"：","骑手：",username+"：","骑手：",username,username+"：","骑手：",username+"：","",username+"：",username+"：",//20
"",username+"：",username,username,username,"","老板：",username+"：","","老板：",username+"：","老板：",username+"：",username,"",username+"：","保安大爷：",username+"：","保安大爷：",username+"：",//40
username+"：","","hxd：",username+"：","hxd：",username+"：","保安大爷：","","hxd：","",username+"：","hxd：","",username+"：","hxd：",username+"：","hxd：","",username+"：","hxd：",//60
"小黑：",username+"：","","hxd：",username+"：","","hxd：","工作人员：","","工作人员：",username+"：","工作人员：","","负责人：",username+"：","负责人：",username+"、hxd：","负责人：",username+"：","负责人：",//80
"",username+"：","","负责人：","",username+"：","hxd：",username,username,username+"：","hxd：",username+"：","hxd：",username+"：","","",username+"：","hxd：","","",//100
username+"：","警官A：",username+"：","警官A：",username+"：","警官B：",username+"、hxd：","警官B：","警官B：","警官A：",username+"：","警官A：","",username+"：","警官A：",username+"：","","","警官A：",username+"：",//120
username+"：","小偷：",username+"：","","",username+"：","小偷：","警官A：",username+"：","警官A：",username+"：","小偷：","",username+"：","",username+"：","小偷：","",username+"：","",//140
username+"：","","","",""];
//var charactersr=["","","","","","","","","",""];
var i =0; var j=0;
var d1=[1,1,100,1,1];
var d2=[121,11,1,9,6];
var d3=[17,1,1,1,16]

// i==6||i==8||i==35||i==50||i==66||i==73||i==85||i==89||i==95||i==97||i==99||i==100||i==113||i==117||i==118||i==124||i==126||i==133||i==136||i==140||i==141
var numtem_yhf=[1,6,8,35,50,66,73,85,89,95,97,99,100,113,117,118,124,126,133,136,140,141];
// 已修改 解决auto bug
var auto_changing=0;
function clear_fyp()
{
    var talk = document.getElementById("talk_gxq");
    talk.style.transition="color 0s linear";
    talk.style.color="rgba(0,0,0,0)";
}
function appearing_fyp(_word,_bki,i,_names)//文字出现
{
    console.log(i);//检查每一幕对话、角色、背景是否对应
    var talk = document.getElementById("talk_gxq");
    talk.innerHTML= _word[i];
    var name = document.getElementById("name_gxq");
    name.innerHTML="&nbsp&nbsp&nbsp&nbsp"+_names[i];

    var bacto=i;
    for(var numt=0;numt<=21;numt++)
    if(i<numtem_yhf[numt]){bacto=numtem_yhf[numt-1];break;}

    console.log("backto "+bacto);
    // if(i==6||i==8||i==35||i==50||i==66||i==73||i==85||i==89||i==95||i==97||i==99||i==100||i==113||i==117||i==118||i==124||i==126||i==133||i==136||i==140||i==141)
    {
        var body = document.getElementById("background_gxq");
        body.style.backgroundImage="url("+_bki[i]+")";
    }//此处判断是否需要换背景图，因为老加载背景图总会黑屏影响观感//还可以缩短编图片数组的工作量~~
    self_fyp(i);
    charb_fyp(i);
    charc_fyp(i);
    col_fyp(i);
    changing_fyp(i);
    talk.style.transition="color 2s linear";
    talk.style.color="rgba(0,0,0,1.0)";
}
function appear_fyp(words,bkimg,i,names)
{
    setTimeout("appearing_fyp(words,bkimg,i,names)",1);
}
function assignment_fyp(words,bkimg,i,names)
{
    clear_fyp();
    appear_fyp(words,bkimg,i,names);
}

// 已修改
function auto_fyp()
{
    // var a = setInterval(function(){
    //     assignment_fyp(words,bkimg,i,names);
    //     i =(i+1)%words.length;
    // },2000);
    
    // console.log("auto_fyp");
    // console.log(auto_changing);
    // 19 23 40 87 119
    // 97 125 135 140 142 结局
    if(i==96||i==125||i==135||i==140||i==142)return;
    if(i==20||i==24||i==41||i==88||i==120)return ;
    // if(i==98||i==126||i==136||i==141||i==143)return;
    // if(i==96||i==124||i==134||i==139||i==141)return;
    if(auto_changing==1)return;;
    auto_changing=1;
    var auto_yhf = function()
    {
        if(i==20||i==24||i==41||i==88||i==120)
        {
            auto_changing=0;
            return;
        }
        // console.log("auto_yhf");
        if(auto_changing==0)return;
        assignment_fyp(words,bkimg,i,names);
        i =(i+1)%words.length;
        setTimeout( auto_yhf , 4000 );
    }
    if(auto_changing==1)auto_yhf();
}
// --------------------------------------------------
function skip_fyp(words,bkimg,i,names)//skip
{
    console.log(i);
    var talk = document.getElementById("talk_gxq");
    talk.innerHTML= words[i];
    var name = document.getElementById("name_gxq");
    name.innerHTML= "&nbsp&nbsp&nbsp&nbsp"+names[i];
    
    // if(i==6||i==8||i==35||i==50||i==66||i==73||i==85||i==89||i==95||i==97||i==99||i==100||i==113||i==117||i==118||i==124||i==126||i==133||i==136||i==140||i==141){
    //     var body = document.getElementById("background_gxq");
    //     body.style.backgroundImage="url("+bkimg[i]+")";
    // }//此处判断是否需要换背景图，因为老加载背景图总会黑屏影响观感//还可以缩短编图片数组的工作量~~

    var bacto=i;
    for(var numt=0;numt<=21;numt++)
    if(i<numtem_yhf[numt]){bacto=numtem_yhf[numt-1];break;}
    console.log("debug backto "+bacto);
    // if(i==6||i==8||i==35||i==50||i==66||i==73||i==85||i==89||i==95||i==97||i==99||i==100||i==113||i==117||i==118||i==124||i==126||i==133||i==136||i==140||i==141)
    // {
        var body = document.getElementById("background_gxq");
        body.style.backgroundImage="url("+bkimg[bacto]+")";
    // }//此处判断是否需要换背景图，因为老加载背景图总会黑屏影响观感//还可以缩短编图片数组的工作量~~

    self_fyp(i);
    charb_fyp(i);
    charc_fyp(i);
    col_fyp(i);
    changing_fyp(i);
    talk.style.transition="color 0s linear";
    talk.style.color="rgba(0,0,0,1.0)";
    //window.clearInterval(a);
}

function changing_fyp(i)
{
    if(i==14){
        var screen = document.getElementById("screenshot_fyp");
        screen.style.display="block";
        whiteon_fyp();
    }
    if(i==15){
        var screen = document.getElementById("screenshot_fyp");
        screen.style.display="none";
        whiteoff_fyp();
    }
    if(i==20){
        divon_fyp();
        var choice1 = document.getElementById("choice1_gxq");
        var choice2 = document.getElementById("choice2_gxq");
        choice1.innerHTML ="What an unbengable thing!老子辛辛苦苦肝了一个星期好不容易奖励一下自己，哪能便宜了这外卖贼？";
        choice2.innerHTML ="算了，忍忍吧，身边同学不少遇到这种事情的不也忍了吗，大不了重新点一个";
    }
    if(i==21||i==141||i==25||i==35||i==42||i==97||i==89||i==121||i==126||i==137){
        var choice = document.getElementById("choice_gxq");
        choice.style.display="none";
        var skip = document.getElementById("skip_gxq");
        skip.style.display="block";
        var skip1 = document.getElementById("skip1_gxq");
        skip1.style.display="none";
        whiteoff_fyp();
    }
    if(i==24){
        divon_fyp();
        var choice1 = document.getElementById("choice1_gxq");
        var choice2 = document.getElementById("choice2_gxq");
        choice1.innerHTML ="商家";
        choice2.innerHTML ="宿舍楼门口的保安大叔";
    }
    if(i==41){
        divon_fyp();
        var choice1 = document.getElementById("choice1_gxq");
        var choice2 = document.getElementById("choice2_gxq");
        choice1.innerHTML ="监控找到了又能怎样呢？这简直是在浪费时间。还是算了吧。";
        choice2.innerHTML ="有再一再二就有再三再四，这件事情我一定要追查到底！";
    }
    if(i==88){
        divon_fyp();
        var choice1 = document.getElementById("choice1_gxq");
        var choice2 = document.getElementById("choice2_gxq");
        choice1.innerHTML ="就此放弃";
        choice2.innerHTML ="去派出所";
    }
    if(i==120){
        divon_fyp();
        var choice1 = document.getElementById("choice1_gxq");
        var choice2 = document.getElementById("choice2_gxq");
        choice1.innerHTML ="我不要钱。";
        choice2.innerHTML ="外卖费加上我的维权费用。";
        var choice3 = document.getElementById("choice3_gxq");
        if(data_game["num_collection"]==5)
        {
            choice3.style.display ="block";
            choice3.innerHTML ="我代表圣嘉然原谅你力！";
        }
    }
    if(i==96){
        ending_fyp();
        var endtitle=document.getElementById("end-title_gxq");
        var endcontent=document.getElementById("end-content_gxq");
        endtitle.innerHTML="Normal end";
        endcontent.innerHTML="友谊的披萨进行曲";
    }
    if(i==125){
        ending_fyp();
        var endtitle=document.getElementById("end-title_gxq");
        var endcontent=document.getElementById("end-content_gxq");
        endtitle.innerHTML="Happy end 1";
        endcontent.innerHTML="正义可能会迟到，但绝不会缺席";
    }
    if(i==135){
        ending_fyp();
        var endtitle=document.getElementById("end-title_gxq");
        var endcontent=document.getElementById("end-content_gxq");
        endtitle.innerHTML="Happy end 2";
        endcontent.innerHTML="如果让你重新来过~~";
    }
    if(i==140){
        ending_fyp();
        var endtitle=document.getElementById("end-title_gxq");
        var endcontent=document.getElementById("end-content_gxq");
        endtitle.innerHTML="Special end";
        endcontent.innerHTML="小的要来了！";
    }
    if(i==142){
        ending_fyp();
        var endtitle=document.getElementById("end-title_gxq");
        var endcontent=document.getElementById("end-content_gxq");
        endtitle.innerHTML="Bad end";
        endcontent.innerHTML="不翼而飞的外卖和忍气吞声的人";
    }
}
function whiteon_fyp()
{
    var white = document.getElementById("white_fyp");
    white.style.backgroundColor="rgba(255,255,255,0.7)";
}
function whiteoff_fyp()
{
    var white = document.getElementById("white_fyp");
    white.style.backgroundColor="rgba(255,255,255,0)";
}
function divon_fyp()
{
    var skip = document.getElementById("skip_gxq");
        skip.style.display="none";
    var skip1 = document.getElementById("skip1_gxq");
        skip1.style.display="block";
    var choice = document.getElementById("choice_gxq");
        choice.style.display="block";
    whiteon_fyp();
}
function ending_fyp()
{
    var skip = document.getElementById("skip_gxq");
        skip.style.display="none";
     var skip1 = document.getElementById("skip1_gxq");
        skip1.style.display="block";
    var endtitle=document.getElementById("end-title_gxq");
    var endcontent=document.getElementById("end-content_gxq");
    endtitle.style.display="block";
    endcontent.style.display="block";
    whiteon_fyp();	
}

function self_fyp(i){
    if(i==1||i==5||i==28||i==31||i==33){
        var c1 = document.getElementById("character1_fyp");
        c1.style.display="block";
    }
    if(i==4||i==27||i==30||i==32){
        var c1 = document.getElementById("character1_fyp");
        c1.style.display="none";
    }
}

function charb_fyp(i){
    if(i==2||i==118||i==136){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="block";
        c2.style.width="240px";
        c2.style.left="900px";
        c2.style.backgroundImage="url(人物/r2b.png)";
    }
    if(i==27||i==30||i==32){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="block";
        c2.style.backgroundImage="url(人物/r27.png)";
    }
    if(i==36||i==42){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="block";
        c2.style.backgroundImage="url(人物/r36b.png)";
    }
    if(i==66){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="block";
        c2.style.backgroundImage="url(人物/r44c.png)";
    }
    if(i==73){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="block";
        c2.style.backgroundImage="url(人物/r73-84d.png)";
    }
    if(i==100){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="block";
        c2.style.width="380px";
        c2.style.left="780px";
        c2.style.backgroundImage="url(人物/r99-111e.png)";
    }
    if(i==5||i==28||i==31||i==33||i==49||i==85||i==41||i==141||i==113||i==133||i==138){
        var c2 =document.getElementById("character2_fyp");
        c2.style.display="none";
    }
}

function charc_fyp(i){
    if(i==42){
        var c3 =document.getElementById("character3_fyp");
        c3.style.display="block";
        c3.style.backgroundImage="url(人物/r66-72c.png)";
    }
    if(i==118){
        var c3 =document.getElementById("character3_fyp");
        c3.style.display="block";
        c3.style.width="380px";
        c3.style.left="330px";
        c3.style.backgroundImage="url(人物/r99-111e.png)";
    }
    if(i==133||i==113){
        var c3 =document.getElementById("character3_fyp");
        c3.style.display="none";
    }
}

function col_fyp(i){
    if(i==6||i==8){
        var col=document.getElementById("col_yhf1");
        if(i==6)
            col.style.display="block";
        if(i==8)
            col.style.display="none";
    }
    if(i==8||i==14){
        var col1=document.getElementById("col_yhf2");
        var col2=document.getElementById("col_yhf3");
        if(i==8){
            col1.style.display="block";
            col2.style.display="block";}
        if(i==14){
            col1.style.display="none";
            col2.style.display="none";}
    }
    if(i==35||i==41){
        var col1=document.getElementById("col_yhf4");
        var col2=document.getElementById("col_yhf5");
        if(i==35){
            col1.style.display="block";
            col2.style.display="block";}
        if(i==41){
            col1.style.display="none";
            col2.style.display="none";}
    }
}
var gotoscene=
["skip_fyp(words,bkimg,i,names)",//skip的执行函数
//以下五个函数都是完成auto功能所用到的
"appearing_fyp(words,bkimg,i,names)",//auto时文字逐渐浮现的执行函数
"clear_fyp()",//auto换幕时把原有文字立即去掉的函数，因为若要让下一幕文字浮现须先立即删去原有文字，让文字透明度归零（另外我也不知道当时怎么想的非要把变量名换个名QAQ)
"appear_fyp(words,bkimg,i,names)",//令appearing_fyp函数延迟1ms后再执行，避免其与clear_fyp函数同时进行（不知道为啥同时进行的效果是默认只执行appearing_fyp,即文字直接转换没有逐渐浮现的效果QAQ）
"assignment_fyp(words,bkimg,i,names)",//将clear与appear打包成一个执行一次auto换页的总函数（如果没记错的话不打包的后果也是没有逐渐浮现的效果QAQ）
"auto_fyp()",//设置每6秒执行一次assignment_fyp函数的定时器
//特殊页变换函数
"changing_fyp()",//到某些页面需要特殊变换的总处理函数（如判断是否为特殊页，执行弹出选项，弹出结局等）
"divon_fyp()",//弹出选项时的执行函数（把skip、auto键去掉、屏幕变白、弹出选项栏）
"ending_fyp()",//弹出结局时的执行函数（把skip、auto键去掉、屏幕变白、弹出结局，弹出返回键）
"whiteon_fyp()",//屏幕变白
"whiteoff_fyp()"//屏幕还原
];


// 已修改 读档
var data_game=window.localStorage;
// data_game["num_save"]=undefined;
if(data_game["num_save"]==undefined||data_game["num_save"]=="undefined"||data_game["num_save"]==0)data_game["num_save"]=0;
console.log("now!!!"+data_game["now_scene"]);
console.log("num_save: "+data_game["num_save"]);
// data_game["now_sence"]=undefined;
i=data_game["now_scene"];
if(i=="undefined"||i==0||i==undefined) {i=0;console.log("!!!"+i);}
else {i=parseInt(i)-1;skip_fyp(words,bkimg,i,names);data_game["now_scene"]=undefined;}
// 已修改 存档
//存档描述输入框 已提前
var saveinput=document.getElementById("saveinput");//input
function saved()
{
    console.log("num_save: "+data_game["num_save"]);
    data_game["num_save"]++;
    var num_save=data_game["num_save"];
    data_game["save"+num_save]=i;
    console.log("Save: "+i);
    var temp_yhf=saveinput.value;
    if(temp_yhf.length==0)temp_yhf="Save "+num_save;
    data_game["describe"+num_save]=temp_yhf;
    console.log(data_game["num_save"]);
    alert("存档成功！");
    savediv.style.display="none";
}
function saveclicked_yhf()
{
    console.log("saveclicked");
    console.log(savediv);
    savediv.style.display="block";
    console.log(savediv);
}
function savedis_yhf()
{
    console.log("savedis");
    console.log(this);
    savediv.style.display="none";
}
// 已修改 收集品
function getcol1()
{
    if(data_game["num_collection"]==undefined)data_game["num_collection"]=0;
    if(data_game["collection1"]!=1){data_game["num_collection"]++;alert("收集品已解锁");}
    data_game["collection1"]=1;
}
function getcol2()
{
    if(data_game["num_collection"]==undefined)data_game["num_collection"]=0;
    if(data_game["collection2"]!=1){data_game["num_collection"]++;alert("收集品已解锁")}
    data_game["collection2"]=1;
}
function getcol3()
{
    if(data_game["num_collection"]==undefined)data_game["num_collection"]=0;
    if(data_game["collection3"]!=1){data_game["num_collection"]++;alert("收集品已解锁")}
    data_game["collection3"]=1;
}
function getcol4()
{
    if(data_game["num_collection"]==undefined)data_game["num_collection"]=0;
    if(data_game["collection4"]!=1){data_game["num_collection"]++;alert("收集品已解锁")}
    data_game["collection4"]=1;
}
function getcol5()
{
    if(data_game["num_collection"]==undefined)data_game["num_collection"]=0;
    if(data_game["collection5"]!=1){data_game["num_collection"]++;alert("收集品已解锁")}
    data_game["collection5"]=1;
}
// 已修改 返回主菜单
function back_main()
{
    console.log("back_main");
    window.location.href="../main.html";
}
function load_clicked()
{
    window.location.href="../load/load.html";
}

function next_yhf()//点击文字框下一幕
{
    console.log("next");
    if(i==20||i==24||i==41||i==88||i==120)return ;
    if(i==125||i==135||i==140||i==142||i==96)return;
    savedis_yhf();
    auto_changing=0,i++,skip_fyp(words,bkimg,i,names);
}
// --------------------------------------------------

/*待完成：
    // 人物立绘 人物名字 
        // 人物那个黑框可以去掉了
    // 在选择界面skip和back位置相同容易按错
        // 可以不用让skip和auto消失，此时auto我已无效化，skip没看懂、你看看能不能让他无效
    收藏品（最后再做）
        加5个盒子，id分别是 col_yhf1,col_yhf2，col_yhf3，col_yhf4，col_yhf5；display none; 10*10px black;
        在i=(暂时还没确定)，时分别显示出来

    点击语言框下一页 文字渐变消失 文字渐变出现
    Save
    Name
*/
/*
特殊结局未完成
*/
