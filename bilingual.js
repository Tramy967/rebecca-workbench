(() => {
  'use strict';
  // Display translations only: saved notes, task titles and command values stay intact.
  const words = {
    'Đến góc học tập':'前往学习空间','GÓC HỌC TẬP CỦA TÔI':'我的学习空间','Học tập':'学习','Tổng quan':'总览','Bài tập cần làm':'待办作业','Mục tiêu học tập':'学习目标','Lịch học & Hạn nộp':'课表与截止日期','Góc cá nhân':'个人空间','Ghi chú & Ý tưởng':'笔记与灵感','Thói quen mỗi ngày':'每日习惯','Kho tài liệu':'资料库','Mỗi ngày một chút.':'每天进步一点。','Mỗi ngày tốt hơn.':'每天成为更好的自己。','Tùy chỉnh':'个性设置','Đã lưu trên thiết bị':'已保存在此设备',
    'Tìm kiếm':'搜索','GÓC NHỎ, KHÁT VỌNG LỚN':'小小空间，远大志向','“thiên thượng thiên hạ duy ngã độc tôn”':'「天上天下，唯我独尊」','Tôi là sinh viên, thích khám phá những điều mới và học hỏi thêm nhiều thông tin hữu ích mỗi ngày.':'我是一名学生，喜欢探索新事物，每天学习有用的新知识。','Bắt đầu học':'开始学习','25 phút tập trung · 5 phút nghỉ':'专注25分钟 · 休息5分钟','Nhập lệnh nhanh':'输入快捷指令','Thêm bài tập':'添加作业','Ghi chú nhanh':'快速笔记','Bắt đầu giờ học':'开始专注学习','Hôm nay của Rebecca':'Rebecca 的今天','Từng bước tiến đến mục tiêu':'一步一步，迈向目标',
    'Giờ học tập trung':'专注学习时长','Nhiệm vụ đã xong':'已完成任务','Mục tiêu tuần này':'本周目标','Chuỗi ngày chăm học':'连续学习天数','giờ':'小时','ngày':'天','Mục tiêu: 4 giờ':'目标：4小时','Mục tiêu: 5':'目标：5项','Mục tiêu: 100%':'目标：100%','Mục tiêu: 30 ngày':'目标：30天','Theo dõi thời gian tập trung học bài và làm bài tập trong ngày.':'记录每天专心学习和完成作业的时间。','Ghi nhận số bài tập và việc học đã hoàn thành hôm nay.':'记录今天完成的作业与学习任务。','Theo dõi tiến độ hoàn thành kế hoạch học tập của tuần hiện tại.':'跟踪本周学习计划的完成进度。','Tạo động lực bằng cách ghi nhận chuỗi ngày duy trì việc học liên tục.':'记录连续学习天数，让坚持更有动力。','Số liệu khởi đầu do Rebecca cung cấp · Giờ học và bài tập cập nhật khi bạn sử dụng.':'初始数据由 Rebecca 提供 · 学习时长与作业进度会随使用更新。',
    'Học có mục tiêu. Nhớ điều hay.':'学有目标，记有所获。','Ưu tiên hôm nay, tiến bộ mỗi ngày':'把握今日重点，每天进步一点','Hôm nay học gì?':'今天学什么？','Tập hợp những việc cần ưu tiên để hoàn thành bài đúng hạn và chủ động hơn trong việc học.':'整理优先事项，按时完成作业，主动安排学习。','Theo dõi tiến độ ôn thi, bài tập nhóm và những kỹ năng đang rèn luyện.':'跟踪备考、小组作业和技能练习的进度。','Góc ghi chú của Rebecca':'Rebecca 的笔记角','Lưu kiến thức hay, ý tưởng mới và những điều muốn tìm hiểu thêm.':'收藏实用知识、新点子和想进一步探索的问题。','Xem tất cả':'查看全部','Hôm nay':'今天','Hôm qua':'昨天','Chưa đặt hạn':'未设截止日期',
    'Hoàn thành bài tập tiếng Anh trước 21 giờ.':'晚上9点前完成英语作业。','Chuẩn bị 5 slide cho bài thuyết trình nhóm.':'为小组展示准备5页幻灯片。','Dành 45 phút ôn lại nội dung đã học trên lớp.':'用45分钟复习课堂所学。','Ôn thi giữa kì':'期中考试复习','Đã hoàn thành 65% kế hoạch.':'已完成计划的65%。','Thuyết trình nhóm':'小组展示','Đã xong dàn ý, đang thiết kế slide.':'已完成提纲，正在制作幻灯片。','Tiếng Anh':'英语','Học 10 từ mới và luyện nghe 15 phút mỗi ngày.':'每天学习10个新单词，并练习15分钟听力。','Mẹo học: thử học 25 phút rồi nghỉ 5 phút.':'学习小贴士：学习25分钟，再休息5分钟。','Ý tưởng: làm flashcard để ôn từ vựng cùng bạn.':'灵感：制作单词卡，和朋友一起复习词汇。','Câu hỏi cần tìm hiểu: làm sao ghi nhớ bài lâu hơn?':'想探索的问题：怎样才能把知识记得更久？',
    'Lưu điều hay':'收藏新知','Ghi nhanh bài cần làm, môn học và hạn nộp để không bỏ sót.':'快速记录作业、科目和截止日期，不遗漏重要任务。','Lưu một kiến thức mới, đường link hữu ích hoặc ý tưởng vừa nghĩ ra.':'保存新知识、实用链接或刚想到的灵感。','Bật bộ đếm thời gian để tập trung học và nghỉ đúng lúc.':'开启计时器，专心学习，适时休息。','Rebecca · Học điều mới, mỗi ngày.':'Rebecca · 每天学一点新东西。','Tùy chỉnh & sao lưu':'设置与备份',
    'Sửa bài tập':'编辑作业','Sửa ghi chú':'编辑笔记','Sửa mục tiêu':'编辑目标','Sửa tài liệu':'编辑资料','Thêm ghi chú':'添加笔记','Thêm mục tiêu':'添加目标','Thêm tài liệu':'添加资料','Tiêu đề':'标题','Nội dung':'内容','Môn học & chi tiết':'科目与详情','Hạn nộp':'截止日期','Đã hoàn thành':'已完成','Xóa':'删除','Hủy':'取消','Lưu bài tập':'保存作业','Lưu ghi chú':'保存笔记','Lưu mục tiêu':'保存目标','Lưu tài liệu':'保存资料','Tiến độ (%)':'进度（%）','Mục tiêu cụ thể':'具体目标','Phân loại':'分类','Đường dẫn':'链接','Mở tài liệu ↗':'打开资料 ↗','Xóa bài tập?':'删除作业？','Xóa ghi chú?':'删除笔记？','Xóa bài tập':'删除作业','Xóa ghi chú':'删除笔记',
    'Giờ học tập trung':'专注学习时长','Bạn muốn học gì?':'你想学习什么？','Thời gian':'时长','Loại phiên học':'学习类型','Làm bài tập':'完成作业','Bắt đầu học':'开始学习','Phiên học tập trung':'专注学习','Nghỉ giải lao · 5 phút':'休息时间 · 5分钟','Tạm dừng':'暂停','Tiếp tục':'继续','Kết thúc & lưu':'结束并保存','Hủy phiên':'取消本次计时','Bạn có thể đóng cửa sổ này, bộ đếm vẫn tiếp tục.':'关闭此窗口后，计时仍会继续。','Chọn một việc để tập trung. Sau mỗi phiên học hoàn tất, bạn sẽ có 5 phút nghỉ.':'选择一件事专心完成。每次学习结束后，休息5分钟。','Học thêm điều mới':'学习新知识','Tập trung hoàn thành bài tập':'专心完成作业',
    'Tìm trong góc học tập':'搜索学习空间','Nhập từ khóa để tìm nội dung đã lưu.':'输入关键词，查找已保存的内容。','Chưa tìm thấy. Hãy thử từ khóa khác.':'暂无结果，请试试其他关键词。','Tùy chỉnh góc học tập':'学习空间设置','Tên hiển thị':'显示名称','Mục tiêu học mỗi tuần (giờ)':'每周学习目标（小时）','Lưu tùy chỉnh':'保存设置','Dữ liệu của bạn':'你的数据','Xuất bản sao lưu':'导出备份','Nhập bản sao lưu':'导入备份','Góc học tập riêng cho Rebecca, những ý tưởng và mục tiêu của bạn.':'属于 Rebecca 的学习空间，收纳你的灵感与目标。','Dữ liệu được lưu trong trình duyệt này. Xuất bản sao lưu để giữ lại hoặc chuyển sang thiết bị khác.':'数据保存在当前浏览器中，可导出备份或转移到其他设备。','Thay đổi được tự động lưu trên thiết bị này.':'更改会自动保存在此设备上。','Đánh dấu những thói quen bạn đã hoàn thành hôm nay.':'勾选今天已完成的习惯。','Học 10 từ mới':'学习10个新单词','Luyện nghe 15 phút':'练习15分钟听力','Ôn bài đã học':'复习所学内容','Bài tập được sắp xếp theo hạn nộp.':'作业按截止日期排序。','Chưa có nội dung ở đây.':'这里还没有内容。','Thêm mới →':'添加内容 →','Thêm nội dung đầu tiên của bạn.':'添加你的第一条内容。','Đã lưu ghi chú.':'笔记已保存。','Đã thêm bài tập hôm nay.':'已添加今天的作业。','Đã hoàn thành bài tập.':'作业已完成。','Đã mở lại bài tập.':'作业已重新打开。','Đã bắt đầu giờ học.':'学习计时已开始。','Đã lưu thói quen hôm nay.':'已保存今天的习惯记录。','Đã hủy phiên học.':'已取消本次学习计时。','Đã hoàn thành và lưu phiên học.':'学习已完成并保存。','Đã lưu thời gian học.':'学习时长已保存。',
    'Close dialog':'关闭窗口','optional':'选填','(optional)':'（选填）','+ Thêm bài tập':'+ 添加作业','+ Thêm ghi chú':'+ 添加笔记','+ Thêm mục tiêu':'+ 添加目标','+ Thêm tài liệu':'+ 添加资料'
  };
  function translation(text) {
    if(words[text])return words[text];
    if(/^Chào .+\.$/.test(text))return text.slice(5,-1)+'，你好。';
    if(/^\d+ mục · đã lưu trong trình duyệt$/.test(text))return text.match(/^\d+/)[0]+'项 · 已保存在浏览器中';
    if(/^Remove “.+” from your workspace\?$/.test(text))return '要从学习空间中移除此条内容吗？';
    return '';
  }
  function decorate(root) {
    const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
    const found=[]; let node;
    while(node=walker.nextNode()) {
      if(node.parentElement.closest('.bi-pair,script,style,svg,textarea,option,code,kbd,[contenteditable]'))continue;
      const text=node.textContent.trim(),zh=node.parentElement.id==='dateLabel'?new Date().toLocaleDateString('zh-CN',{weekday:'long',month:'long',day:'numeric'}):translation(text);
      if(zh)found.push({node,text,zh});
    }
    for(const {node,text,zh} of found){
      const pair=document.createElement('span');pair.className='bi-pair'+(text.length>48?' bi-long':'');
      const vi=document.createElement('span');vi.lang='vi';vi.textContent=text;
      const cn=document.createElement('span');cn.lang='zh-Hans';cn.className='zh-copy';cn.textContent=zh;
      pair.append(vi,cn);node.replaceWith(pair);
    }
  }
  let queued=false;
  const observer=new MutationObserver(()=>{if(!queued){queued=true;queueMicrotask(()=>{queued=false;observer.disconnect();decorate(document.body);observe();});}});
  const observe=()=>observer.observe(document.body,{childList:true,subtree:true,characterData:true});
  decorate(document.body);observe();
})();
