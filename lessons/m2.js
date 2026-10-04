// Bài học tuần 5–8: Phân tích cơ bản (Báo cáo tài chính, Định giá, Phân tích ngành)
// Tuần 5: Báo cáo tài chính 1
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w05-1",
  week: 5,
  day: 1,
  title: "Tổng quan bộ báo cáo tài chính",
  minutes: 120,
  summary: "Bộ BCTC gồm những gì, kỳ quý/bán niên/năm khác nhau thế nào, hợp nhất hay riêng, tải ở đâu.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 1 tin về "kết quả kinh doanh" hoặc "báo cáo tài chính quý" trên CafeF. Ghi lại: công ty nào, kỳ nào (quý mấy, năm nào), doanh thu và lợi nhuận tăng hay giảm so với cùng kỳ. Để ý xem bài báo dùng số "hợp nhất" hay "công ty mẹ".</div>

<h3>1. Báo cáo tài chính (BCTC) là gì?</h3>
<p>BCTC là "bảng điểm" mà doanh nghiệp bắt buộc phải công bố định kỳ. Nó cho biết công ty đang có gì, nợ ai bao nhiêu, kinh doanh lãi hay lỗ và tiền thật sự chảy vào/ra ra sao. Khi mua cổ phiếu, bạn trở thành đồng sở hữu doanh nghiệp, nên BCTC chính là cách để bạn "kiểm tra sức khỏe" doanh nghiệp mình sở hữu.</p>
<p><b>Ví dụ:</b> Bạn góp vốn mở quán cà phê với bạn bè. Cuối tháng bạn muốn biết: quán bán được bao nhiêu (doanh thu), trừ tiền nguyên liệu, mặt bằng, lương thì còn lãi bao nhiêu (lợi nhuận), trong két còn bao nhiêu tiền mặt (dòng tiền), và quán đang có máy pha cà phê, bàn ghế trị giá bao nhiêu, còn nợ ai không (tài sản và nợ). BCTC của doanh nghiệp niêm yết trả lời đúng những câu hỏi đó, chỉ là ở quy mô hàng nghìn tỷ đồng.</p>

<h3>2. Bộ BCTC gồm 4 phần</h3>
<table>
<tr><th>Báo cáo</th><th>Trả lời câu hỏi</th><th>Hình ảnh dễ nhớ</th></tr>
<tr><td>Bảng cân đối kế toán (CĐKT)</td><td>Công ty đang có tài sản gì? Nợ bao nhiêu? Vốn của chủ sở hữu bao nhiêu?</td><td>Ảnh chụp tại 1 thời điểm</td></tr>
<tr><td>Báo cáo kết quả kinh doanh (KQKD)</td><td>Trong kỳ bán được bao nhiêu, chi phí bao nhiêu, lãi/lỗ bao nhiêu?</td><td>Đoạn phim cả kỳ</td></tr>
<tr><td>Báo cáo lưu chuyển tiền tệ (LCTT)</td><td>Tiền mặt thật sự vào/ra từ đâu?</td><td>Sao kê tài khoản</td></tr>
<tr><td>Thuyết minh BCTC</td><td>Giải thích chi tiết các con số ở trên</td><td>Phần chú thích</td></tr>
</table>
<p><b>Ví dụ:</b> Ngày 31/12, CĐKT của Công ty A ghi "Tiền: 150 tỷ, Hàng tồn kho: 180 tỷ" — đó là ảnh chụp đúng ngày 31/12. Còn KQKD năm ghi "Doanh thu cả năm: 1.000 tỷ" — đó là cộng dồn từ 1/1 đến 31/12. Nếu muốn biết 180 tỷ tồn kho gồm những gì (nguyên liệu, thành phẩm…), bạn mở phần Thuyết minh.</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Sơ đồ 4 phần của bộ báo cáo tài chính">
<rect x="220" y="10" width="200" height="36" rx="8" style="fill:var(--accent);fill-opacity:0.2;stroke:var(--accent)"/>
<text x="320" y="33" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:bold">Bộ báo cáo tài chính</text>
<line x1="320" y1="46" x2="320" y2="62" style="stroke:var(--muted)"/>
<line x1="80" y1="62" x2="560" y2="62" style="stroke:var(--muted)"/>
<line x1="80" y1="62" x2="80" y2="80" style="stroke:var(--muted)"/>
<line x1="240" y1="62" x2="240" y2="80" style="stroke:var(--muted)"/>
<line x1="400" y1="62" x2="400" y2="80" style="stroke:var(--muted)"/>
<line x1="560" y1="62" x2="560" y2="80" style="stroke:var(--muted)"/>
<rect x="10" y="80" width="140" height="120" rx="8" style="fill:var(--card);stroke:var(--up)"/>
<text x="80" y="104" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:bold">Cân đối kế toán</text>
<text x="80" y="130" text-anchor="middle" style="fill:var(--text);font-size:12px">Tài sản = Nợ + Vốn</text>
<text x="80" y="152" text-anchor="middle" style="fill:var(--muted);font-size:12px">"Ảnh chụp"</text>
<text x="80" y="172" text-anchor="middle" style="fill:var(--muted);font-size:12px">tại 1 thời điểm</text>
<rect x="170" y="80" width="140" height="120" rx="8" style="fill:var(--card);stroke:var(--accent)"/>
<text x="240" y="104" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:bold">Kết quả kinh doanh</text>
<text x="240" y="130" text-anchor="middle" style="fill:var(--text);font-size:12px">Doanh thu − Chi phí</text>
<text x="240" y="152" text-anchor="middle" style="fill:var(--muted);font-size:12px">"Đoạn phim"</text>
<text x="240" y="172" text-anchor="middle" style="fill:var(--muted);font-size:12px">cả kỳ: lãi hay lỗ</text>
<rect x="330" y="80" width="140" height="120" rx="8" style="fill:var(--card);stroke:var(--c2)"/>
<text x="400" y="104" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:bold">Lưu chuyển tiền tệ</text>
<text x="400" y="130" text-anchor="middle" style="fill:var(--text);font-size:12px">Tiền vào − Tiền ra</text>
<text x="400" y="152" text-anchor="middle" style="fill:var(--muted);font-size:12px">"Sao kê"</text>
<text x="400" y="172" text-anchor="middle" style="fill:var(--muted);font-size:12px">tiền thật trong kỳ</text>
<rect x="490" y="80" width="140" height="120" rx="8" style="fill:var(--card);stroke:var(--c3)"/>
<text x="560" y="104" text-anchor="middle" style="fill:var(--c3);font-size:13px;font-weight:bold">Thuyết minh</text>
<text x="560" y="130" text-anchor="middle" style="fill:var(--text);font-size:12px">Chi tiết từng khoản</text>
<text x="560" y="152" text-anchor="middle" style="fill:var(--muted);font-size:12px">"Chú thích"</text>
<text x="560" y="172" text-anchor="middle" style="fill:var(--muted);font-size:12px">rất nhiều thông tin</text>
</svg><figcaption>Hình: 4 phần của bộ báo cáo tài chính và vai trò của từng phần</figcaption></figure>

<h3>3. Kỳ báo cáo: quý, bán niên, năm</h3>
<ul>
<li><b>BCTC quý</b>: doanh nghiệp tự lập, <b>không bắt buộc kiểm toán</b>. Ra nhanh nhất (khoảng 20–45 ngày sau khi hết quý), nhưng độ tin cậy thấp nhất.</li>
<li><b>BCTC bán niên</b> (6 tháng): phải được công ty kiểm toán <b>soát xét</b> (kiểm tra ở mức hạn chế).</li>
<li><b>BCTC năm</b>: phải được <b>kiểm toán</b> đầy đủ. Đáng tin cậy nhất, thường công bố trong vòng 90 ngày sau khi kết thúc năm tài chính.</li>
</ul>
<p><b>Ví dụ:</b> Năm tài chính của Công ty A trùng năm dương lịch. BCTC quý 1 (tháng 1–3) công bố khoảng cuối tháng 4. BCTC năm 2025 đã kiểm toán công bố khoảng cuối tháng 3/2026. Nếu BCTC quý 4 (tự lập) báo lãi cả năm 150 tỷ, nhưng BCTC năm sau kiểm toán chỉ còn 120 tỷ, thì công ty đã ghi nhận lợi nhuận "lạc quan" hơn thực tế 30 tỷ — đây là tín hiệu cần chú ý.</p>
<p class="muted">Thời hạn công bố cụ thể do quy định về công bố thông tin trên thị trường chứng khoán, có thể thay đổi, hãy kiểm tra lại trên website HOSE/HNX hoặc UBCKNN.</p>

<figure class="fig"><svg viewBox="0 0 640 200" role="img" aria-label="Dòng thời gian công bố báo cáo tài chính trong năm">
<line x1="40" y1="130" x2="600" y2="130" style="stroke:var(--line);stroke-width:2"/>
<rect x="40" y="122" width="448" height="16" style="fill:var(--accent);fill-opacity:0.12"/>
<rect x="488" y="122" width="112" height="16" style="fill:var(--c2);fill-opacity:0.12"/>
<text x="59" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T1</text>
<text x="96" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T2</text>
<text x="133" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T3</text>
<text x="171" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T4</text>
<text x="208" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T5</text>
<text x="245" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T6</text>
<text x="283" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T7</text>
<text x="320" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T8</text>
<text x="357" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T9</text>
<text x="395" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T10</text>
<text x="432" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T11</text>
<text x="469" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T12</text>
<text x="507" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T1</text>
<text x="544" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T2</text>
<text x="581" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">T3</text>
<text x="264" y="30" text-anchor="middle" style="fill:var(--accent);font-size:12px">Năm N</text>
<text x="544" y="30" text-anchor="middle" style="fill:var(--c2);font-size:12px">Năm N+1</text>
<circle cx="189" cy="130" r="6" style="fill:var(--accent)"/>
<line x1="189" y1="124" x2="189" y2="100" style="stroke:var(--accent)"/>
<text x="189" y="94" text-anchor="middle" style="fill:var(--text);font-size:12px">BCTC Q1</text>
<circle cx="301" cy="130" r="6" style="fill:var(--accent)"/>
<line x1="301" y1="136" x2="301" y2="166" style="stroke:var(--accent)"/>
<text x="301" y="182" text-anchor="middle" style="fill:var(--text);font-size:12px">BCTC Q2</text>
<circle cx="320" cy="130" r="6" style="fill:var(--ref)"/>
<line x1="320" y1="124" x2="320" y2="70" style="stroke:var(--ref)"/>
<text x="320" y="64" text-anchor="middle" style="fill:var(--text);font-size:12px">Bán niên (soát xét)</text>
<circle cx="413" cy="130" r="6" style="fill:var(--accent)"/>
<line x1="413" y1="136" x2="413" y2="166" style="stroke:var(--accent)"/>
<text x="413" y="182" text-anchor="middle" style="fill:var(--text);font-size:12px">BCTC Q3</text>
<circle cx="525" cy="130" r="6" style="fill:var(--accent)"/>
<line x1="525" y1="124" x2="525" y2="100" style="stroke:var(--accent)"/>
<text x="525" y="94" text-anchor="middle" style="fill:var(--text);font-size:12px">BCTC Q4</text>
<circle cx="598" cy="130" r="6" style="fill:var(--up)"/>
<line x1="598" y1="136" x2="598" y2="166" style="stroke:var(--up)"/>
<text x="600" y="182" text-anchor="end" style="fill:var(--text);font-size:12px">Năm N (kiểm toán)</text>
</svg><figcaption>Hình: Lịch công bố BCTC điển hình của một công ty có năm tài chính trùng năm dương lịch (mốc gần đúng)</figcaption></figure>

<h3>4. Hợp nhất hay riêng (công ty mẹ)?</h3>
<p>Nhiều doanh nghiệp lớn là "tập đoàn" có nhiều công ty con. Họ lập 2 loại BCTC:</p>
<ul>
<li><b>BCTC riêng (công ty mẹ)</b>: chỉ số liệu của riêng công ty mẹ. Khoản đầu tư vào công ty con chỉ hiện như một khoản đầu tư, lợi nhuận công ty con chỉ chảy về khi được chia cổ tức.</li>
<li><b>BCTC hợp nhất</b>: cộng gộp công ty mẹ và các công ty con như một khối thống nhất. <b>Nhà đầu tư nên dùng BCTC hợp nhất</b> để phân tích.</li>
</ul>
<p><b>Ví dụ:</b> Tập đoàn X sở hữu 100% Công ty con Y. Năm nay riêng X lãi 50 tỷ, Y lãi 200 tỷ nhưng chưa chia cổ tức cho X. BCTC riêng của X chỉ báo lãi 50 tỷ. BCTC hợp nhất báo lãi 250 tỷ (50 + 200) — đây mới là bức tranh đúng về toàn bộ tập đoàn mà bạn đang sở hữu. Ngược lại, nếu năm sau Y chia cổ tức 200 tỷ cho X, BCTC riêng của X sẽ "đột biến" lãi 250 tỷ, dù tập đoàn không làm ăn tốt hơn.</p>

<h3>5. Tải BCTC ở đâu?</h3>
<ul>
<li><b>Website công ty</b>, mục "Quan hệ cổ đông / Nhà đầu tư" — nguồn gốc, đầy đủ nhất (file PDF).</li>
<li><b>CafeF, Vietstock</b>: tab "Tài chính" có số liệu đã nhập sẵn thành bảng, và mục "Tải BCTC" có file gốc.</li>
<li><b>Website HOSE/HNX</b>: mục công bố thông tin của từng mã.</li>
</ul>
<p><b>Ví dụ:</b> Gõ "VNM" vào ô tìm kiếm của CafeF → vào trang mã → chọn tab "Tài chính" → chọn "Kết quả kinh doanh", chế độ "Năm". Bạn sẽ thấy bảng số liệu nhiều năm liên tiếp. Muốn xem file gốc, chọn mục "Báo cáo tài chính" và tải file PDF của kỳ cần xem.</p>
<div class="warn">⚠ Số liệu trên các trang tổng hợp đôi khi bị nhập sai hoặc phân loại khác nhau giữa các trang. Khi thấy con số bất thường, hãy đối chiếu lại với file PDF gốc.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Vào website của FPT (hoặc tìm "FPT báo cáo tài chính" trên CafeF), tải BCTC hợp nhất năm gần nhất (file PDF).</li>
<li>Lật qua file và đánh dấu trang bắt đầu của 4 phần: CĐKT, KQKD, LCTT, Thuyết minh.</li>
<li>Tìm trang có "Báo cáo của kiểm toán viên độc lập" và ghi lại tên công ty kiểm toán.</li>
<li>Ghi lại: đơn vị tính (đồng hay triệu đồng?), ngày kết thúc kỳ, số trang thuyết minh.</li>
</ol>
<p>Kết quả mong đợi: một ghi chú 5 dòng gồm tên file, đơn vị tính, tên công ty kiểm toán, số trang của từng phần.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Bộ BCTC gồm 4 phần: CĐKT, KQKD, LCTT và Thuyết minh.</li>
<li>BCTC năm (kiểm toán) đáng tin nhất; BCTC quý ra nhanh nhưng không được kiểm toán.</li>
<li>Dùng BCTC <b>hợp nhất</b> để phân tích doanh nghiệp có công ty con.</li>
<li>Đối chiếu file PDF gốc khi thấy số liệu bất thường trên trang tổng hợp.</li>
</ul></div>
`,
  quiz: [
    { q: "Báo cáo nào giống \"ảnh chụp\" tại một thời điểm?", options: ["Báo cáo kết quả kinh doanh", "Bảng cân đối kế toán", "Báo cáo lưu chuyển tiền tệ", "Thuyết minh"], answer: 1, explain: "Bảng cân đối kế toán thể hiện tài sản, nợ và vốn tại đúng một ngày (vd 31/12), còn KQKD và LCTT là cộng dồn cả kỳ." },
    { q: "BCTC nào bắt buộc phải được kiểm toán đầy đủ?", options: ["BCTC quý", "BCTC bán niên", "BCTC năm", "Cả ba"], answer: 2, explain: "BCTC năm phải kiểm toán; bán niên chỉ cần soát xét; BCTC quý không bắt buộc." },
    { q: "Tập đoàn có nhiều công ty con, nhà đầu tư nên dùng BCTC nào để phân tích?", options: ["BCTC riêng công ty mẹ", "BCTC hợp nhất", "BCTC của công ty con lớn nhất", "Không quan trọng"], answer: 1, explain: "BCTC hợp nhất gộp cả công ty mẹ và công ty con, phản ánh đúng toàn bộ doanh nghiệp mà cổ đông sở hữu." }
  ]
},
{
  id: "w05-2",
  week: 5,
  day: 2,
  title: "Báo cáo kết quả kinh doanh từng dòng",
  minutes: 120,
  summary: "Đi từ doanh thu xuống lợi nhuận của cổ đông công ty mẹ, hiểu từng dòng của báo cáo KQKD.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm một bài báo về lợi nhuận quý của 1 doanh nghiệp. Ghi lại bài báo nói về "lợi nhuận trước thuế" hay "lợi nhuận sau thuế" — hai con số này khác nhau và báo chí hay dùng lẫn lộn.</div>

<h3>1. Báo cáo KQKD đọc từ trên xuống dưới</h3>
<p>Báo cáo KQKD giống một cái phễu: bắt đầu bằng toàn bộ tiền bán hàng ở trên cùng, rồi lần lượt trừ đi từng loại chi phí, cuối cùng còn lại phần lợi nhuận thuộc về cổ đông. Ta sẽ đi qua từng dòng với ví dụ <b>Công ty A</b> (số liệu minh họa, đơn vị: tỷ đồng).</p>

<h3>2. Từ doanh thu đến lợi nhuận gộp</h3>
<ul>
<li><b>Doanh thu bán hàng</b>: tổng tiền ghi trên hóa đơn bán hàng.</li>
<li><b>Các khoản giảm trừ</b>: chiết khấu thương mại, hàng bán bị trả lại, giảm giá hàng bán.</li>
<li><b>Doanh thu thuần</b> = Doanh thu − Giảm trừ. Đây là con số "doanh thu" mà mọi người hay nói tới.</li>
<li><b>Giá vốn hàng bán</b>: chi phí trực tiếp để làm ra sản phẩm đã bán (nguyên liệu, nhân công sản xuất, khấu hao máy móc nhà xưởng).</li>
<li><b>Lợi nhuận gộp</b> = Doanh thu thuần − Giá vốn.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A bán sữa, hóa đơn ghi 1.030 tỷ, chiết khấu cho đại lý 30 tỷ → doanh thu thuần = 1.030 − 30 = <b>1.000 tỷ</b>. Chi phí sữa tươi, bao bì, điện nước nhà máy, lương công nhân là 650 tỷ → lợi nhuận gộp = 1.000 − 650 = <b>350 tỷ</b>. Nghĩa là mỗi 100 đồng bán hàng, sau khi trừ chi phí làm ra sản phẩm, công ty còn 35 đồng.</p>

<h3>3. Chi phí bán hàng, quản lý và hoạt động tài chính</h3>
<ul>
<li><b>Chi phí bán hàng</b>: quảng cáo, khuyến mãi, lương nhân viên bán hàng, vận chuyển.</li>
<li><b>Chi phí quản lý doanh nghiệp (QLDN)</b>: lương ban giám đốc và văn phòng, thuê trụ sở, phần mềm quản lý.</li>
<li><b>Doanh thu tài chính</b>: lãi tiền gửi, cổ tức nhận được, lãi chênh lệch tỷ giá.</li>
<li><b>Chi phí tài chính</b>: quan trọng nhất là <b>chi phí lãi vay</b>; ngoài ra là lỗ tỷ giá, dự phòng đầu tư.</li>
<li><b>Lợi nhuận thuần từ HĐKD</b> = LN gộp − CP bán hàng − CP QLDN + DT tài chính − CP tài chính (cộng phần lãi/lỗ công ty liên doanh, liên kết nếu có).</li>
</ul>
<p><b>Ví dụ:</b> Công ty A chi quảng cáo và lương đội bán hàng 120 tỷ, chi văn phòng và ban giám đốc 50 tỷ. Công ty có lãi tiền gửi 20 tỷ nhưng trả lãi vay ngân hàng 30 tỷ. LN thuần từ HĐKD = 350 − 120 − 50 + 20 − 30 = <b>170 tỷ</b>.</p>

<h3>4. Lợi nhuận khác, thuế và lợi nhuận sau thuế</h3>
<ul>
<li><b>Lợi nhuận khác</b>: các khoản không thường xuyên như thanh lý tài sản, tiền phạt vi phạm hợp đồng nhận được.</li>
<li><b>Lợi nhuận trước thuế (LNTT)</b> = LN thuần HĐKD + LN khác.</li>
<li><b>Thuế thu nhập doanh nghiệp (TNDN)</b>: thuế suất phổ thông 20% (một số doanh nghiệp được ưu đãi thấp hơn).</li>
<li><b>Lợi nhuận sau thuế (LNST)</b> = LNTT − Thuế TNDN.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A bán một xe tải cũ, lãi thanh lý 5 tỷ → LNTT = 170 + 5 = <b>175 tỷ</b>. Thuế TNDN 20% = 175 × 20% = 35 tỷ → LNST = 175 − 35 = <b>140 tỷ</b>.</p>

<h3>5. Lợi nhuận của cổ đông công ty mẹ</h3>
<p>Nếu Công ty A có công ty con không sở hữu 100%, một phần lợi nhuận thuộc về các cổ đông khác của công ty con, gọi là <b>cổ đông không kiểm soát</b> (hay cổ đông thiểu số). Phần còn lại là <b>LNST của cổ đông công ty mẹ</b> — đây là con số thuộc về bạn khi bạn mua cổ phiếu của A, và là con số dùng để tính EPS (sẽ học ở tuần 7).</p>
<p><b>Ví dụ:</b> Công ty A sở hữu 60% công ty con B. B lãi 25 tỷ, trong đó 40% × 25 = 10 tỷ thuộc về cổ đông khác của B. Vậy LNST cổ đông công ty mẹ = 140 − 10 = <b>130 tỷ</b>.</p>

<figure class="fig"><svg viewBox="0 0 640 290" role="img" aria-label="Biểu đồ thác nước từ doanh thu xuống lợi nhuận cổ đông công ty mẹ">
<line x1="15" y1="230" x2="625" y2="230" style="stroke:var(--line)"/>
<rect x="20" y="30" width="56" height="200" style="fill:var(--accent)"/>
<text x="48" y="24" text-anchor="middle" style="fill:var(--text);font-size:12px">1.000</text>
<rect x="96" y="30" width="56" height="130" style="fill:var(--down)"/>
<text x="124" y="24" text-anchor="middle" style="fill:var(--down);font-size:12px">−650</text>
<line x1="76" y1="30" x2="96" y2="30" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="172" y="160" width="56" height="70" style="fill:var(--accent)"/>
<text x="200" y="154" text-anchor="middle" style="fill:var(--text);font-size:12px">350</text>
<line x1="152" y1="160" x2="172" y2="160" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="248" y="160" width="56" height="35" style="fill:var(--down)"/>
<text x="276" y="154" text-anchor="middle" style="fill:var(--down);font-size:12px">−175</text>
<line x1="228" y1="160" x2="248" y2="160" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="324" y="195" width="56" height="35" style="fill:var(--accent)"/>
<text x="352" y="189" text-anchor="middle" style="fill:var(--text);font-size:12px">175</text>
<line x1="304" y1="195" x2="324" y2="195" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="400" y="195" width="56" height="7" style="fill:var(--down)"/>
<text x="428" y="189" text-anchor="middle" style="fill:var(--down);font-size:12px">−35</text>
<rect x="476" y="202" width="56" height="28" style="fill:var(--accent)"/>
<text x="504" y="196" text-anchor="middle" style="fill:var(--text);font-size:12px">140</text>
<rect x="552" y="204" width="56" height="26" style="fill:var(--up)"/>
<text x="580" y="198" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:bold">130</text>
<text x="48" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">Doanh thu</text>
<text x="48" y="262" text-anchor="middle" style="fill:var(--text);font-size:11px">thuần</text>
<text x="124" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">Giá vốn</text>
<text x="200" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">LN gộp</text>
<text x="276" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">CP bán hàng,</text>
<text x="276" y="262" text-anchor="middle" style="fill:var(--text);font-size:11px">TC ròng, khác</text>
<text x="352" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">LN trước</text>
<text x="352" y="262" text-anchor="middle" style="fill:var(--text);font-size:11px">thuế</text>
<text x="428" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">Thuế</text>
<text x="428" y="262" text-anchor="middle" style="fill:var(--text);font-size:11px">TNDN</text>
<text x="504" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">LN sau</text>
<text x="504" y="262" text-anchor="middle" style="fill:var(--text);font-size:11px">thuế</text>
<text x="580" y="248" text-anchor="middle" style="fill:var(--text);font-size:11px">LN cổ đông</text>
<text x="580" y="262" text-anchor="middle" style="fill:var(--text);font-size:11px">công ty mẹ</text>
<text x="620" y="282" text-anchor="end" style="fill:var(--muted);font-size:11px">Đơn vị: tỷ đồng (số liệu minh họa)</text>
</svg><figcaption>Hình: "Thác nước" lợi nhuận của Công ty A — mỗi cột đỏ là phần bị trừ đi. Cột thứ 4 gộp nhiều dòng: −120 (bán hàng) − 50 (QLDN) + 20 − 30 (tài chính) + 5 (khác) = −175</figcaption></figure>

<table>
<tr><th>Dòng (Công ty A)</th><th>Tỷ đồng</th><th>Cách tính</th></tr>
<tr><td>Doanh thu thuần</td><td>1.000</td><td>1.030 − 30</td></tr>
<tr><td>Giá vốn hàng bán</td><td>(650)</td><td></td></tr>
<tr><td><b>Lợi nhuận gộp</b></td><td><b>350</b></td><td>1.000 − 650</td></tr>
<tr><td>Chi phí bán hàng</td><td>(120)</td><td></td></tr>
<tr><td>Chi phí QLDN</td><td>(50)</td><td></td></tr>
<tr><td>Doanh thu tài chính</td><td>20</td><td></td></tr>
<tr><td>Chi phí tài chính (lãi vay)</td><td>(30)</td><td></td></tr>
<tr><td><b>LN thuần từ HĐKD</b></td><td><b>170</b></td><td>350 − 120 − 50 + 20 − 30</td></tr>
<tr><td>Lợi nhuận khác</td><td>5</td><td></td></tr>
<tr><td><b>LN trước thuế</b></td><td><b>175</b></td><td>170 + 5</td></tr>
<tr><td>Thuế TNDN (20%)</td><td>(35)</td><td>175 × 20%</td></tr>
<tr><td><b>LN sau thuế</b></td><td><b>140</b></td><td>175 − 35</td></tr>
<tr><td>Cổ đông không kiểm soát</td><td>(10)</td><td></td></tr>
<tr><td><b>LNST cổ đông công ty mẹ</b></td><td><b>130</b></td><td>140 − 10</td></tr>
</table>

<div class="warn">⚠ Trên BCTC, số trong ngoặc ( ) là số âm (khoản trừ đi). Đừng nhầm "LN trước thuế" với "LN sau thuế" khi so sánh giữa các công ty hoặc giữa các năm.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở KQKD năm gần nhất của VNM trên CafeF (tab Tài chính → Kết quả kinh doanh → Năm).</li>
<li>Chép ra 8 dòng: doanh thu thuần, giá vốn, LN gộp, CP bán hàng, CP QLDN, LNTT, LNST, LNST cổ đông công ty mẹ.</li>
<li>Tự kiểm tra: LN gộp có đúng bằng doanh thu thuần − giá vốn không? LNST có nhỏ hơn LNTT không?</li>
<li>Tính xem chi phí bán hàng bằng bao nhiêu % doanh thu thuần.</li>
</ol>
<p>Kết quả mong đợi: một bảng 8 dòng giống bảng của Công ty A, kèm 1 dòng nhận xét "Chi phí bán hàng chiếm …% doanh thu".</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Thứ tự: Doanh thu thuần → LN gộp → LN thuần HĐKD → LNTT → LNST → LNST cổ đông công ty mẹ.</li>
<li>Lợi nhuận gộp cho biết sản phẩm có "lời" không; các chi phí bên dưới cho biết bộ máy vận hành có hiệu quả không.</li>
<li>Lãi vay nằm trong chi phí tài chính — công ty vay nhiều thì dòng này lớn.</li>
<li>Con số thuộc về cổ đông là <b>LNST của cổ đông công ty mẹ</b>.</li>
</ul></div>
`,
  quiz: [
    { q: "Doanh thu thuần 800 tỷ, giá vốn 560 tỷ. Lợi nhuận gộp là bao nhiêu?", options: ["1.360 tỷ", "240 tỷ", "560 tỷ", "300 tỷ"], answer: 1, explain: "LN gộp = 800 − 560 = 240 tỷ." },
    { q: "Chi phí lãi vay nằm ở dòng nào của báo cáo KQKD?", options: ["Giá vốn hàng bán", "Chi phí bán hàng", "Chi phí tài chính", "Chi phí QLDN"], answer: 2, explain: "Lãi vay được ghi nhận trong chi phí tài chính (BCTC thường ghi rõ \"trong đó: chi phí lãi vay\")." },
    { q: "LNTT 200 tỷ, thuế suất 20%. LNST là bao nhiêu?", options: ["40 tỷ", "180 tỷ", "160 tỷ", "220 tỷ"], answer: 2, explain: "Thuế = 200 × 20% = 40 tỷ; LNST = 200 − 40 = 160 tỷ." }
  ]
},
{
  id: "w05-3",
  week: 5,
  day: 3,
  title: "Biên lợi nhuận, tăng trưởng và tính mùa vụ",
  minutes: 120,
  summary: "Tính biên lợi nhuận gộp/ròng, tăng trưởng YoY, QoQ, CAGR và tránh bẫy mùa vụ.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Khi đọc tin kết quả kinh doanh, để ý cụm "so với cùng kỳ" (YoY) và "so với quý trước" (QoQ). Ghi lại 1 ví dụ mỗi loại và tự hỏi: so sánh nào hợp lý hơn với doanh nghiệp đó?</div>

<h3>1. Biên lợi nhuận gộp</h3>
<p><b>Biên lợi nhuận gộp</b> = Lợi nhuận gộp ÷ Doanh thu thuần × 100%. Nó cho biết sản phẩm của công ty "lời" đến đâu trước khi tính chi phí bán hàng, quản lý. Biên gộp cao và ổn định thường là dấu hiệu công ty có thương hiệu mạnh hoặc lợi thế chi phí.</p>
<p><b>Ví dụ:</b> Công ty A có LN gộp 350 tỷ trên doanh thu thuần 1.000 tỷ → biên gộp = 350 ÷ 1.000 = <b>35%</b>. Một siêu thị mini có thể chỉ có biên gộp khoảng 20% (mua vào 80 đồng, bán ra 100 đồng), trong khi một công ty phần mềm có thể có biên gộp 40–50%. Vì vậy chỉ nên so sánh biên lợi nhuận giữa các công ty <b>cùng ngành</b>.</p>

<h3>2. Biên lợi nhuận ròng</h3>
<p><b>Biên lợi nhuận ròng</b> = LNST ÷ Doanh thu thuần × 100%. Nó cho biết cuối cùng 100 đồng doanh thu còn lại bao nhiêu đồng lãi sau khi trừ <b>tất cả</b> chi phí và thuế.</p>
<p><b>Ví dụ:</b> Công ty A có LNST 140 tỷ → biên ròng = 140 ÷ 1.000 = <b>14%</b>. Nếu năm sau biên gộp vẫn 35% nhưng biên ròng giảm còn 10%, nghĩa là sản phẩm vẫn lời như cũ nhưng chi phí bán hàng, quản lý hoặc lãi vay đã tăng mạnh — bạn cần tìm hiểu vì sao.</p>

<h3>3. Tăng trưởng YoY và QoQ</h3>
<ul>
<li><b>YoY (Year over Year – so với cùng kỳ năm trước)</b> = (Kỳ này ÷ Cùng kỳ năm trước − 1) × 100%.</li>
<li><b>QoQ (Quarter over Quarter – so với quý liền trước)</b> = (Quý này ÷ Quý trước − 1) × 100%.</li>
</ul>
<p><b>Ví dụ:</b> Công ty B (bán lẻ, số liệu minh họa) có doanh thu quý 4 năm 1 là 390 tỷ, quý 1 năm 2 là 330 tỷ, quý 1 năm 1 là 300 tỷ.</p>
<ul>
<li>QoQ quý 1 năm 2 = 330 ÷ 390 − 1 = <b>−15,4%</b> → nghe có vẻ rất tệ.</li>
<li>YoY quý 1 năm 2 = 330 ÷ 300 − 1 = <b>+10%</b> → thực ra công ty vẫn tăng trưởng tốt.</li>
</ul>
<p>Lý do: quý 4 có mùa mua sắm cuối năm, Tết nên doanh thu luôn cao hơn quý 1. Đây gọi là <b>tính mùa vụ</b>.</p>

<figure class="fig"><svg viewBox="0 0 640 270" role="img" aria-label="Doanh thu theo quý của Công ty B qua 2 năm, thể hiện tính mùa vụ">
<line x1="40" y1="220" x2="620" y2="220" style="stroke:var(--line)"/>
<rect x="80" y="100" width="40" height="120" style="fill:var(--muted);fill-opacity:0.6"/>
<rect x="125" y="88" width="40" height="132" style="fill:var(--accent)"/>
<text x="100" y="94" text-anchor="middle" style="fill:var(--muted);font-size:11px">300</text>
<text x="145" y="82" text-anchor="middle" style="fill:var(--text);font-size:11px">330</text>
<rect x="220" y="120" width="40" height="100" style="fill:var(--muted);fill-opacity:0.6"/>
<rect x="265" y="112" width="40" height="108" style="fill:var(--accent)"/>
<text x="240" y="114" text-anchor="middle" style="fill:var(--muted);font-size:11px">250</text>
<text x="285" y="106" text-anchor="middle" style="fill:var(--text);font-size:11px">270</text>
<rect x="360" y="116" width="40" height="104" style="fill:var(--muted);fill-opacity:0.6"/>
<rect x="405" y="104" width="40" height="116" style="fill:var(--accent)"/>
<text x="380" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">260</text>
<text x="425" y="98" text-anchor="middle" style="fill:var(--text);font-size:11px">290</text>
<rect x="500" y="64" width="40" height="156" style="fill:var(--muted);fill-opacity:0.6"/>
<rect x="545" y="52" width="40" height="168" style="fill:var(--accent)"/>
<text x="520" y="58" text-anchor="middle" style="fill:var(--muted);font-size:11px">390</text>
<text x="565" y="46" text-anchor="middle" style="fill:var(--text);font-size:11px">420</text>
<text x="122" y="238" text-anchor="middle" style="fill:var(--text);font-size:12px">Quý 1</text>
<text x="262" y="238" text-anchor="middle" style="fill:var(--text);font-size:12px">Quý 2</text>
<text x="402" y="238" text-anchor="middle" style="fill:var(--text);font-size:12px">Quý 3</text>
<text x="542" y="238" text-anchor="middle" style="fill:var(--text);font-size:12px">Quý 4 (mùa cao điểm)</text>
<rect x="60" y="14" width="14" height="14" style="fill:var(--muted);fill-opacity:0.6"/>
<text x="80" y="26" style="fill:var(--text);font-size:12px">Năm 1</text>
<rect x="140" y="14" width="14" height="14" style="fill:var(--accent)"/>
<text x="160" y="26" style="fill:var(--text);font-size:12px">Năm 2</text>
<text x="620" y="260" text-anchor="end" style="fill:var(--muted);font-size:11px">Doanh thu, tỷ đồng (số liệu minh họa)</text>
</svg><figcaption>Hình: Quý nào của năm 2 cũng cao hơn cùng quý năm 1 (tăng trưởng YoY), dù quý 1 năm 2 thấp hơn quý 4 năm 1 (QoQ âm)</figcaption></figure>

<h3>4. Tăng trưởng kép nhiều năm (CAGR)</h3>
<p>Khi xem 5 năm, tăng trưởng mỗi năm thường lên xuống. <b>CAGR</b> (tốc độ tăng trưởng kép bình quân năm) cho bạn một con số trung bình duy nhất:</p>
<p><b>CAGR = (Giá trị cuối ÷ Giá trị đầu)^(1 ÷ số năm) − 1</b></p>
<p><b>Ví dụ:</b> Doanh thu năm 2020 là 1.000 tỷ, năm 2025 là 1.610 tỷ. Khoảng cách là 5 năm (2020→2025). CAGR = (1.610 ÷ 1.000)^(1/5) − 1 = 1,61^0,2 − 1 ≈ <b>10%/năm</b>. Kiểm tra lại: 1.000 × 1,1 × 1,1 × 1,1 × 1,1 × 1,1 ≈ 1.610 ✓. Lưu ý: dữ liệu từ 2020 đến 2025 là 6 năm số liệu nhưng chỉ có <b>5 khoảng</b> tăng trưởng.</p>
<p>Trong Excel/Google Sheets: <code>=(B7/B2)^(1/5)-1</code> (B2 là năm đầu, B7 là năm cuối).</p>

<h3>5. Chất lượng lợi nhuận: lãi "cốt lõi" hay lãi "bất thường"?</h3>
<p>Lợi nhuận tăng mạnh chưa chắc là tốt. Hãy kiểm tra lợi nhuận đến từ hoạt động kinh doanh chính hay từ khoản một lần (bán tài sản, bán công ty con, hoàn nhập dự phòng).</p>
<p><b>Ví dụ:</b> Công ty C báo LNST tăng 80% lên 180 tỷ. Đọc kỹ thấy 70 tỷ là lãi bán một mảnh đất (ghi ở "lợi nhuận khác" hoặc "doanh thu tài chính"). Lợi nhuận cốt lõi = 180 − 70 = 110 tỷ, trong khi năm trước là 100 tỷ → tăng trưởng thật chỉ khoảng 10%. Năm sau không còn đất để bán, lợi nhuận có thể "giảm" mạnh dù kinh doanh vẫn bình thường.</p>

<div class="warn">⚠ Đừng mua cổ phiếu chỉ vì một quý lãi tăng đột biến. Luôn hỏi: "Tăng vì đâu? Có lặp lại được không?"</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Dùng bảng 8 dòng VNM bạn chép hôm qua, thêm số liệu của năm liền trước.</li>
<li>Tính biên gộp và biên ròng của cả 2 năm.</li>
<li>Tính tăng trưởng YoY của doanh thu thuần và LNST cổ đông công ty mẹ.</li>
<li>Vào KQKD theo <b>quý</b> của VNM, xem 8 quý gần nhất: quý nào thường cao nhất? Có tính mùa vụ rõ không?</li>
</ol>
<p>Kết quả mong đợi: 4 con số biên lợi nhuận, 2 con số tăng trưởng, 1 câu nhận xét về tính mùa vụ.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Biên gộp = LN gộp ÷ DT thuần; biên ròng = LNST ÷ DT thuần. So sánh trong cùng ngành.</li>
<li>Doanh nghiệp có tính mùa vụ thì so sánh <b>YoY</b> (cùng kỳ) thay vì QoQ.</li>
<li>CAGR giúp tóm tắt tăng trưởng nhiều năm; số khoảng = số năm dữ liệu − 1.</li>
<li>Tách lợi nhuận bất thường ra khỏi lợi nhuận cốt lõi trước khi kết luận.</li>
</ul></div>
`,
  quiz: [
    { q: "Doanh thu thuần 500 tỷ, LN gộp 150 tỷ, LNST 50 tỷ. Biên ròng là bao nhiêu?", options: ["30%", "10%", "33%", "50%"], answer: 1, explain: "Biên ròng = LNST ÷ DT thuần = 50 ÷ 500 = 10%. (30% là biên gộp.)" },
    { q: "Doanh nghiệp bán bánh kẹo Tết có doanh thu quý 1 thấp hơn quý 4. Nên so sánh tăng trưởng thế nào?", options: ["So với quý liền trước (QoQ)", "So với cùng kỳ năm trước (YoY)", "Không cần so sánh", "Chỉ xem số tuyệt đối"], answer: 1, explain: "Do tính mùa vụ, so với cùng quý năm trước (YoY) mới phản ánh đúng tăng trưởng." },
    { q: "Lợi nhuận 100 tỷ năm 2021 và 200 tỷ năm 2025. CAGR gần nhất với?", options: ["25%/năm", "19%/năm", "20%/năm", "15%/năm"], answer: 1, explain: "4 khoảng: (200/100)^(1/4) − 1 = 2^0,25 − 1 ≈ 18,9% ≈ 19%/năm." }
  ]
},
{
  id: "w05-4",
  week: 5,
  day: 4,
  title: "Bảng cân đối kế toán: Tài sản = Nợ + Vốn",
  minutes: 120,
  summary: "Hiểu cấu trúc tài sản ngắn hạn/dài hạn, nợ phải trả, vốn chủ sở hữu và phương trình kế toán.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về một doanh nghiệp "tăng vốn", "phát hành thêm cổ phiếu" hoặc "vay nợ". Ghi lại: việc này sẽ làm thay đổi phần nào trên bảng cân đối kế toán (tài sản, nợ hay vốn chủ)?</div>

<h3>1. Phương trình kế toán</h3>
<p>Mọi bảng cân đối kế toán đều tuân theo một phương trình luôn đúng:</p>
<p style="text-align:center;font-size:18px"><b>Tổng tài sản = Nợ phải trả + Vốn chủ sở hữu</b></p>
<p>Bên trái (tài sản) cho biết công ty <b>đang có gì</b>. Bên phải (nguồn vốn) cho biết <b>tiền ở đâu ra</b> để có những tài sản đó: đi vay/nợ người khác, hay tiền của chủ sở hữu.</p>
<p><b>Ví dụ:</b> Bạn mua căn nhà 3 tỷ: 1 tỷ tiền tiết kiệm, 2 tỷ vay ngân hàng. "Bảng cân đối" của bạn: Tài sản (nhà) 3 tỷ = Nợ 2 tỷ + Vốn chủ 1 tỷ. Nếu giá nhà giảm còn 2,5 tỷ, khoản nợ vẫn 2 tỷ, nên vốn chủ của bạn chỉ còn 0,5 tỷ — đây là lý do nợ nhiều làm rủi ro tăng mạnh.</p>

<h3>2. Tài sản ngắn hạn và dài hạn</h3>
<ul>
<li><b>Tài sản ngắn hạn</b>: có thể chuyển thành tiền trong vòng 12 tháng — tiền và tương đương tiền, đầu tư tài chính ngắn hạn (tiền gửi kỳ hạn), phải thu khách hàng, hàng tồn kho.</li>
<li><b>Tài sản dài hạn</b>: dùng lâu dài cho sản xuất kinh doanh — tài sản cố định (nhà xưởng, máy móc), xây dựng cơ bản dở dang (nhà máy đang xây), bất động sản đầu tư, đầu tư vào công ty liên kết.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A (số liệu minh họa, tỷ đồng) có: tiền 150, tiền gửi kỳ hạn 100, phải thu khách hàng 150, tồn kho 180, khác 20 → <b>tài sản ngắn hạn 600</b>. Nhà máy và máy móc 700, nhà máy mới đang xây 100, đầu tư công ty liên kết 80, khác 20 → <b>tài sản dài hạn 900</b>. Tổng tài sản = 600 + 900 = <b>1.500 tỷ</b>.</p>

<h3>3. Nợ phải trả</h3>
<ul>
<li><b>Nợ ngắn hạn</b> (đến hạn trong 12 tháng): vay ngắn hạn ngân hàng, phải trả người bán (mua nguyên liệu chưa trả tiền), người mua trả tiền trước, thuế và lương phải trả.</li>
<li><b>Nợ dài hạn</b>: vay dài hạn, trái phiếu dài hạn.</li>
</ul>
<p>Lưu ý: không phải nợ nào cũng xấu. <b>Nợ vay</b> phải trả lãi, nhưng <b>phải trả người bán</b> hay <b>người mua trả tiền trước</b> là nợ "không lãi suất", thậm chí cho thấy công ty có vị thế mạnh.</p>
<p><b>Ví dụ:</b> Công ty A có vay ngắn hạn 200, phải trả người bán 120, người mua trả trước 30, khác 50 → nợ ngắn hạn 400; vay dài hạn 180, khác 20 → nợ dài hạn 200. Tổng nợ phải trả = <b>600 tỷ</b>, trong đó nợ vay có lãi = 200 + 180 = <b>380 tỷ</b>. Khoản 120 tỷ phải trả người bán nghĩa là nhà cung cấp sữa tươi đang "cho A nợ" không tính lãi.</p>

<h3>4. Vốn chủ sở hữu</h3>
<ul>
<li><b>Vốn góp của chủ sở hữu</b> (vốn điều lệ): số cổ phiếu × mệnh giá 10.000đ.</li>
<li><b>Thặng dư vốn cổ phần</b>: phần chênh lệch khi phát hành cổ phiếu cao hơn mệnh giá.</li>
<li><b>Lợi nhuận sau thuế chưa phân phối</b>: lãi tích lũy qua các năm chưa chia cổ tức.</li>
<li><b>Các quỹ</b> (đầu tư phát triển…) và <b>lợi ích cổ đông không kiểm soát</b>.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A có 50 triệu cổ phiếu × 10.000đ = vốn góp <b>500 tỷ</b>. Lúc IPO bán giá 11.000đ/cp nên thặng dư = 50 triệu × 1.000đ = <b>50 tỷ</b>. Lãi tích lũy chưa chia 300 tỷ, quỹ 50 tỷ. Vốn chủ sở hữu = 500 + 50 + 300 + 50 = <b>900 tỷ</b>. Kiểm tra: Nợ 600 + Vốn 900 = 1.500 = Tổng tài sản ✓.</p>

<figure class="fig"><svg viewBox="0 0 640 280" role="img" aria-label="Hai cột cân bằng: tài sản bằng nợ cộng vốn chủ sở hữu">
<text x="200" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:bold">TÀI SẢN = 1.500</text>
<text x="440" y="22" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:bold">NỢ + VỐN = 1.500</text>
<rect x="120" y="34" width="160" height="84" style="fill:var(--accent);fill-opacity:0.35;stroke:var(--accent)"/>
<text x="200" y="70" text-anchor="middle" style="fill:var(--text);font-size:13px">Ngắn hạn</text>
<text x="200" y="90" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">600</text>
<rect x="120" y="118" width="160" height="126" style="fill:var(--accent);fill-opacity:0.15;stroke:var(--accent)"/>
<text x="200" y="175" text-anchor="middle" style="fill:var(--text);font-size:13px">Dài hạn</text>
<text x="200" y="195" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">900</text>
<rect x="360" y="34" width="160" height="56" style="fill:var(--down);fill-opacity:0.3;stroke:var(--down)"/>
<text x="440" y="58" text-anchor="middle" style="fill:var(--text);font-size:13px">Nợ ngắn hạn</text>
<text x="440" y="76" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">400</text>
<rect x="360" y="90" width="160" height="28" style="fill:var(--down);fill-opacity:0.18;stroke:var(--down)"/>
<text x="440" y="109" text-anchor="middle" style="fill:var(--text);font-size:12px">Nợ dài hạn 200</text>
<rect x="360" y="118" width="160" height="126" style="fill:var(--up);fill-opacity:0.25;stroke:var(--up)"/>
<text x="440" y="175" text-anchor="middle" style="fill:var(--text);font-size:13px">Vốn chủ sở hữu</text>
<text x="440" y="195" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">900</text>
<text x="320" y="146" text-anchor="middle" style="fill:var(--text);font-size:26px;font-weight:bold">=</text>
<text x="110" y="80" text-anchor="end" style="fill:var(--muted);font-size:11px">tiền, phải thu,</text>
<text x="110" y="94" text-anchor="end" style="fill:var(--muted);font-size:11px">tồn kho</text>
<text x="110" y="180" text-anchor="end" style="fill:var(--muted);font-size:11px">nhà máy,</text>
<text x="110" y="194" text-anchor="end" style="fill:var(--muted);font-size:11px">máy móc</text>
<text x="530" y="66" style="fill:var(--muted);font-size:11px">vay NH, phải</text>
<text x="530" y="80" style="fill:var(--muted);font-size:11px">trả người bán</text>
<text x="530" y="180" style="fill:var(--muted);font-size:11px">vốn góp, lãi</text>
<text x="530" y="194" style="fill:var(--muted);font-size:11px">giữ lại</text>
<text x="320" y="270" text-anchor="middle" style="fill:var(--muted);font-size:11px">Công ty A, tỷ đồng (số liệu minh họa) — chiều cao các khối tỷ lệ với giá trị</text>
</svg><figcaption>Hình: Bảng cân đối kế toán luôn cân bằng — hai cột luôn cao bằng nhau</figcaption></figure>

<h3>5. CĐKT kết nối với KQKD thế nào?</h3>
<p>Lợi nhuận trong năm (từ KQKD) sau khi trừ cổ tức đã chia sẽ được cộng vào "LNST chưa phân phối" trên CĐKT, làm vốn chủ sở hữu tăng lên.</p>
<p><b>Ví dụ:</b> Đầu năm vốn chủ Công ty A là 840 tỷ. Trong năm lãi (LNST cổ đông mẹ) 130 tỷ, chia cổ tức tiền mặt 70 tỷ. Cuối năm vốn chủ ≈ 840 + 130 − 70 = <b>900 tỷ</b>. Đây là lý do một công ty làm ăn có lãi và giữ lại lợi nhuận thì vốn chủ (giá trị sổ sách) tăng dần qua các năm.</p>

<div class="warn">⚠ Tài sản lớn chưa chắc là công ty mạnh. Tài sản 10.000 tỷ nhưng nợ 9.000 tỷ thì vốn chủ chỉ 1.000 tỷ — chỉ cần tài sản mất giá 10% là vốn chủ bị xóa sạch.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở CĐKT năm gần nhất của VNM trên CafeF (tab Tài chính → Cân đối kế toán → Năm).</li>
<li>Chép 6 con số: tài sản ngắn hạn, tài sản dài hạn, tổng tài sản, nợ ngắn hạn, nợ dài hạn, vốn chủ sở hữu.</li>
<li>Kiểm tra phương trình: tổng tài sản có đúng bằng nợ + vốn chủ không?</li>
<li>Tính tỷ lệ Nợ phải trả ÷ Tổng tài sản. Vẽ tay 2 cột giống hình trên.</li>
</ol>
<p>Kết quả mong đợi: bảng 6 con số, phương trình cân bằng, hình vẽ 2 cột và 1 câu nhận xét "Công ty dùng nợ nhiều hay ít?".</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Tổng tài sản = Nợ phải trả + Vốn chủ sở hữu — luôn luôn đúng.</li>
<li>Ngắn hạn: chuyển thành tiền/đến hạn trong 12 tháng; dài hạn: trên 12 tháng.</li>
<li>Phân biệt nợ vay có lãi với nợ không lãi (phải trả người bán, người mua trả trước).</li>
<li>Lãi giữ lại làm vốn chủ sở hữu tăng — CĐKT và KQKD nối với nhau qua dòng này.</li>
</ul></div>
`,
  quiz: [
    { q: "Tổng tài sản 2.000 tỷ, nợ phải trả 1.200 tỷ. Vốn chủ sở hữu là bao nhiêu?", options: ["3.200 tỷ", "800 tỷ", "1.200 tỷ", "Không tính được"], answer: 1, explain: "Vốn chủ = Tài sản − Nợ = 2.000 − 1.200 = 800 tỷ." },
    { q: "Khoản nào sau đây là nợ KHÔNG phải trả lãi?", options: ["Vay ngắn hạn ngân hàng", "Trái phiếu doanh nghiệp", "Người mua trả tiền trước", "Vay dài hạn"], answer: 2, explain: "Người mua trả tiền trước là khách hàng ứng tiền trước, công ty không phải trả lãi cho khoản này." },
    { q: "Hàng tồn kho thuộc nhóm nào trên CĐKT?", options: ["Tài sản ngắn hạn", "Tài sản dài hạn", "Nợ ngắn hạn", "Vốn chủ sở hữu"], answer: 0, explain: "Hàng tồn kho dự kiến bán được trong vòng 12 tháng nên thuộc tài sản ngắn hạn." }
  ]
},
{
  id: "w05-5",
  week: 5,
  day: 5,
  title: "Nối 3 báo cáo và đọc BCTC thật lần đầu",
  minutes: 120,
  summary: "Hiểu 3 báo cáo liên kết với nhau, mã số chỉ tiêu, và quy trình đọc một BCTC thật trong 30 phút.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 1 doanh nghiệp vừa công bố BCTC trong tuần. Đọc tiêu đề tin và tự đoán: lợi nhuận tăng/giảm do doanh thu, do biên lợi nhuận, hay do khoản bất thường? Lát nữa thực hành sẽ kiểm tra.</div>

<h3>1. Ba báo cáo kết nối với nhau</h3>
<p>Ba báo cáo chính không đứng riêng lẻ mà "khớp" với nhau như bánh răng:</p>
<ul>
<li><b>KQKD → CĐKT</b>: LNST trong kỳ (trừ cổ tức) làm tăng "LNST chưa phân phối" trong vốn chủ sở hữu.</li>
<li><b>KQKD → LCTT</b>: báo cáo LCTT (phương pháp gián tiếp) bắt đầu từ LNTT rồi điều chỉnh để ra tiền thật.</li>
<li><b>LCTT → CĐKT</b>: tiền cuối kỳ trên LCTT đúng bằng "tiền và tương đương tiền" trên CĐKT.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A đầu năm có 140 tỷ tiền mặt. Trong năm, kinh doanh mang về 200 tỷ, chi 150 tỷ xây nhà máy và đầu tư, trả nợ và cổ tức ròng 40 tỷ. Tiền cuối năm = 140 + 200 − 150 − 40 = <b>150 tỷ</b> — đúng bằng dòng "Tiền" 150 tỷ trên CĐKT cuối năm ở bài hôm qua. Tuần sau ta sẽ học kỹ báo cáo LCTT.</p>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Ba báo cáo tài chính kết nối với nhau">
<rect x="20" y="70" width="170" height="100" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="105" y="102" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:bold">Kết quả kinh doanh</text>
<text x="105" y="128" text-anchor="middle" style="fill:var(--text);font-size:12px">LNST = 140</text>
<text x="105" y="148" text-anchor="middle" style="fill:var(--muted);font-size:11px">(cả năm)</text>
<rect x="450" y="20" width="170" height="100" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="535" y="52" text-anchor="middle" style="fill:var(--up);font-size:14px;font-weight:bold">Cân đối kế toán</text>
<text x="535" y="78" text-anchor="middle" style="fill:var(--text);font-size:12px">Vốn chủ: lãi giữ lại ↑</text>
<text x="535" y="98" text-anchor="middle" style="fill:var(--text);font-size:12px">Tiền: 150</text>
<rect x="450" y="140" width="170" height="90" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="535" y="170" text-anchor="middle" style="fill:var(--c2);font-size:14px;font-weight:bold">Lưu chuyển tiền tệ</text>
<text x="535" y="196" text-anchor="middle" style="fill:var(--text);font-size:12px">140 + 200 − 150 − 40</text>
<text x="535" y="216" text-anchor="middle" style="fill:var(--text);font-size:12px">= tiền cuối kỳ 150</text>
<line x1="190" y1="100" x2="446" y2="70" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="446,70 436,66 438,76" style="fill:var(--muted)"/>
<text x="300" y="72" text-anchor="middle" style="fill:var(--text);font-size:12px">LN giữ lại → vốn chủ</text>
<line x1="190" y1="140" x2="446" y2="180" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="446,180 436,174 435,184" style="fill:var(--muted)"/>
<text x="300" y="182" text-anchor="middle" style="fill:var(--text);font-size:12px">LNTT là điểm bắt đầu</text>
<line x1="560" y1="140" x2="560" y2="124" style="stroke:var(--c2);stroke-width:2"/>
<polygon points="560,120 555,130 565,130" style="fill:var(--c2)"/>
<text x="572" y="134" style="fill:var(--c2);font-size:11px">tiền khớp</text>
</svg><figcaption>Hình: Lợi nhuận chảy vào vốn chủ; dòng tiền cuối kỳ khớp với tiền trên bảng cân đối (Công ty A, tỷ đồng, minh họa)</figcaption></figure>

<h3>2. Mã số chỉ tiêu — "địa chỉ" của từng dòng</h3>
<p>BCTC doanh nghiệp (sản xuất, thương mại, dịch vụ) lập theo mẫu của chế độ kế toán doanh nghiệp, mỗi dòng có một <b>mã số</b>. Biết mã số giúp bạn tìm nhanh con số cần dùng. Một số mã hay dùng (mẫu phổ biến hiện nay; có thể khác đôi chút nếu mẫu biểu được cập nhật):</p>
<table>
<tr><th>Báo cáo</th><th>Mã số</th><th>Chỉ tiêu</th></tr>
<tr><td>KQKD</td><td>10</td><td>Doanh thu thuần</td></tr>
<tr><td>KQKD</td><td>20</td><td>Lợi nhuận gộp</td></tr>
<tr><td>KQKD</td><td>23</td><td>Trong đó: chi phí lãi vay</td></tr>
<tr><td>KQKD</td><td>50</td><td>Tổng lợi nhuận trước thuế</td></tr>
<tr><td>KQKD</td><td>60</td><td>Lợi nhuận sau thuế</td></tr>
<tr><td>CĐKT</td><td>100 / 200</td><td>Tài sản ngắn hạn / dài hạn</td></tr>
<tr><td>CĐKT</td><td>270</td><td>Tổng tài sản</td></tr>
<tr><td>CĐKT</td><td>300 / 400</td><td>Nợ phải trả / Vốn chủ sở hữu</td></tr>
</table>
<p><b>Ví dụ:</b> Bạn muốn biết chi phí lãi vay của VNM: mở BCTC PDF, vào báo cáo KQKD, tìm dòng có mã số 23 ngay dưới "Chi phí tài chính". Ngân hàng, công ty chứng khoán, bảo hiểm dùng <b>mẫu khác</b> (không có "giá vốn", "lợi nhuận gộp"), nên khi phân tích những ngành này cần học mẫu riêng (tuần 8).</p>

<h3>3. Quy trình đọc nhanh một BCTC trong 30 phút</h3>
<ol>
<li><b>Ý kiến kiểm toán</b> (với BCTC năm): có phải "chấp nhận toàn phần" không? (5 phút)</li>
<li><b>KQKD</b>: doanh thu, LN gộp, LNST tăng/giảm bao nhiêu % so với cùng kỳ? Biên lợi nhuận thay đổi thế nào? (10 phút)</li>
<li><b>CĐKT</b>: tổng tài sản, nợ vay, tiền mặt thay đổi ra sao? (5 phút)</li>
<li><b>LCTT</b>: dòng tiền kinh doanh dương hay âm? (5 phút)</li>
<li><b>Ghi 3 câu hỏi</b> cần tìm hiểu thêm trong thuyết minh. (5 phút)</li>
</ol>
<p><b>Ví dụ:</b> Đọc nhanh BCTC Công ty A: kiểm toán chấp nhận toàn phần ✓; doanh thu +10%, LNST +8%, biên gộp giảm từ 36% xuống 35% → câu hỏi: "Giá nguyên liệu tăng hay giảm giá bán?"; nợ vay tăng 50 tỷ → câu hỏi: "Vay để làm gì?" (gợi ý: có 100 tỷ nhà máy đang xây); dòng tiền kinh doanh +200 tỷ, lớn hơn LNST 140 tỷ ✓ tốt.</p>

<h3>4. Những lỗi người mới hay mắc</h3>
<ul>
<li><b>Nhầm đơn vị</b>: file ghi "đồng" hay "triệu đồng".
<p><b>Ví dụ:</b> Dòng doanh thu ghi 1.000.000.000.000 với đơn vị "VND" là 1.000 tỷ; nếu đơn vị là "triệu đồng" và ghi 1.000.000 thì cũng là 1.000 tỷ.</p></li>
<li><b>So sánh lũy kế với quý</b>: BCTC quý thường có cả cột "quý này" và "lũy kế từ đầu năm".
<p><b>Ví dụ:</b> BCTC quý 3 ghi "Quý 3: 300 tỷ; Lũy kế 9 tháng: 850 tỷ". Nếu so 850 tỷ với doanh thu quý 3 năm trước (280 tỷ) thì sai hoàn toàn — phải so 300 với 280 (tăng 7,1%).</p></li>
<li><b>Quên số liệu được trình bày lại</b>: cột năm trước đôi khi được điều chỉnh so với BCTC cũ.
<p><b>Ví dụ:</b> BCTC năm 2025 ghi cột 2024 là LNST 95 tỷ, trong khi BCTC năm 2024 đã công bố là 100 tỷ — công ty đã "trình bày lại" số liệu, thuyết minh sẽ giải thích lý do.</p></li>
</ul>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy BCTC năm gần nhất của FPT (file đã tải hôm thứ 2).</li>
<li>Làm đúng quy trình 5 bước ở mục 3, bấm giờ cho từng bước.</li>
<li>Kiểm tra liên kết: tiền cuối kỳ trên LCTT có bằng tiền trên CĐKT không?</li>
<li>Viết ra 3 câu hỏi cần tìm hiểu thêm.</li>
</ol>
<p>Kết quả mong đợi: một ghi chú gồm các con số chính, 1 dòng xác nhận "tiền khớp" và 3 câu hỏi.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>KQKD → vốn chủ (lãi giữ lại); LCTT → tiền trên CĐKT.</li>
<li>Mã số chỉ tiêu giúp tìm nhanh: 10 doanh thu thuần, 20 LN gộp, 50 LNTT, 60 LNST, 270 tổng tài sản.</li>
<li>Đọc theo thứ tự: kiểm toán → KQKD → CĐKT → LCTT → câu hỏi.</li>
<li>Cẩn thận đơn vị tính, cột quý và cột lũy kế.</li>
</ul></div>
`,
  quiz: [
    { q: "Tiền cuối kỳ trên báo cáo LCTT phải khớp với chỉ tiêu nào?", options: ["Doanh thu thuần", "Tiền và tương đương tiền trên CĐKT", "LNST", "Vốn góp chủ sở hữu"], answer: 1, explain: "LCTT giải thích sự thay đổi của tiền, nên tiền cuối kỳ phải bằng tiền và tương đương tiền trên CĐKT cùng ngày." },
    { q: "BCTC quý 3 có cột \"lũy kế 9 tháng\". Để tính tăng trưởng doanh thu riêng quý 3, bạn so sánh?", options: ["Lũy kế 9 tháng năm nay với quý 3 năm trước", "Quý 3 năm nay với quý 3 năm trước", "Lũy kế 9 tháng với quý 3 năm nay", "Quý 3 năm nay với cả năm trước"], answer: 1, explain: "So sánh cùng loại kỳ: quý 3 với quý 3 năm trước." },
    { q: "Vì sao không dùng mẫu \"lợi nhuận gộp\" để phân tích ngân hàng?", options: ["Ngân hàng không có lợi nhuận", "Ngân hàng dùng mẫu BCTC riêng, không có giá vốn hàng bán", "Ngân hàng không được kiểm toán", "Ngân hàng không công bố BCTC"], answer: 1, explain: "Ngân hàng có mẫu BCTC riêng (thu nhập lãi thuần, dự phòng rủi ro tín dụng…), không có giá vốn và LN gộp." }
  ]
},
{
  id: "w05-6",
  week: 5,
  day: 6,
  title: "Bài tập lớn: Bảng KQKD 5 năm của VNM và FPT",
  minutes: 240,
  summary: "Tự lập bảng kết quả kinh doanh 5 năm của VNM và FPT, tính tăng trưởng, biên lợi nhuận và CAGR.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p>Mục tiêu: tự tay xây bảng KQKD 5 năm của hai doanh nghiệp rất khác nhau — VNM (sản xuất sữa, tiêu dùng thiết yếu) và FPT (công nghệ, viễn thông, giáo dục) — để thấy mỗi mô hình kinh doanh "để lại dấu vết" thế nào trên báo cáo KQKD. Bài tập này chỉ nhằm luyện kỹ năng, không phải khuyến nghị đầu tư.</p>

<h4>Bước 1 — Lấy số liệu (40 phút)</h4>
<ol>
<li>Trên CafeF hoặc Vietstock: vào trang mã VNM → tab Tài chính → Kết quả kinh doanh → chọn chế độ <b>Năm</b>, hiển thị 5 năm gần nhất.</li>
<li>Chép vào Google Sheets/Excel 4 dòng: Doanh thu thuần, Lợi nhuận gộp, LNST, LNST của cổ đông công ty mẹ.</li>
<li>Làm tương tự cho FPT ở một sheet khác.</li>
<li>Đối chiếu ngẫu nhiên 2 con số với file BCTC PDF gốc để chắc chắn không sai.</li>
</ol>

<h4>Bước 2 — Điền vào bảng mẫu (60 phút)</h4>
<table>
<tr><th>Chỉ tiêu (tỷ đồng)</th><th>Năm 1</th><th>Năm 2</th><th>Năm 3</th><th>Năm 4</th><th>Năm 5</th><th>CAGR</th></tr>
<tr><td>Doanh thu thuần</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Tăng trưởng DT (YoY)</td><td>—</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Lợi nhuận gộp</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Biên LN gộp</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>LNST cổ đông công ty mẹ</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Tăng trưởng LNST (YoY)</td><td>—</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Biên LN ròng</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p>Công thức gợi ý (giả sử doanh thu ở hàng 2, cột B→F):</p>
<ul>
<li>Tăng trưởng YoY ô C3: <code>=C2/B2-1</code></li>
<li>Biên LN gộp: <code>=B4/B2</code></li>
<li>CAGR doanh thu (5 năm dữ liệu = 4 khoảng): <code>=(F2/B2)^(1/4)-1</code></li>
</ul>
<p><b>Ví dụ:</b> Với một công ty giả định có doanh thu 5 năm lần lượt 1.000 – 1.080 – 1.150 – 1.260 – 1.360 tỷ: tăng trưởng năm 2 = 1.080 ÷ 1.000 − 1 = 8%; năm 5 = 1.360 ÷ 1.260 − 1 ≈ 7,9%; CAGR = (1.360 ÷ 1.000)^(1/4) − 1 = 1,36^0,25 − 1 ≈ <b>8,0%/năm</b>. Nếu LN gộp năm 5 là 476 tỷ thì biên gộp = 476 ÷ 1.360 = <b>35%</b>.</p>

<h4>Bước 3 — Vẽ biểu đồ (20 phút)</h4>
<p>Vẽ 2 biểu đồ: (1) cột doanh thu 5 năm của mỗi công ty; (2) đường biên LN gộp và biên LN ròng của cả 2 công ty trên cùng một hình.</p>

<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Mẫu biểu đồ đường so sánh biên lợi nhuận của hai công ty">
<line x1="60" y1="200" x2="600" y2="200" style="stroke:var(--line)"/>
<line x1="60" y1="30" x2="60" y2="200" style="stroke:var(--line)"/>
<line x1="60" y1="143" x2="600" y2="143" style="stroke:var(--line);stroke-dasharray:3 4"/>
<line x1="60" y1="87" x2="600" y2="87" style="stroke:var(--line);stroke-dasharray:3 4"/>
<text x="52" y="204" text-anchor="end" style="fill:var(--muted);font-size:11px">0%</text>
<text x="52" y="147" text-anchor="end" style="fill:var(--muted);font-size:11px">15%</text>
<text x="52" y="91" text-anchor="end" style="fill:var(--muted);font-size:11px">30%</text>
<text x="52" y="35" text-anchor="end" style="fill:var(--muted);font-size:11px">45%</text>
<polyline points="110,61 230,65 350,72 470,68 590,64" style="fill:none;stroke:var(--accent);stroke-width:3"/>
<polyline points="110,121 230,124 350,128 470,126 590,124" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:6 4"/>
<polyline points="110,94 230,90 350,87 470,84 590,83" style="fill:none;stroke:var(--c2);stroke-width:3"/>
<polyline points="110,151 230,149 350,147 470,146 590,145" style="fill:none;stroke:var(--c2);stroke-width:2;stroke-dasharray:6 4"/>
<text x="110" y="220" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 1</text>
<text x="230" y="220" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 2</text>
<text x="350" y="220" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 3</text>
<text x="470" y="220" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 4</text>
<text x="590" y="220" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 5</text>
<line x1="80" y1="240" x2="110" y2="240" style="stroke:var(--accent);stroke-width:3"/>
<text x="115" y="244" style="fill:var(--text);font-size:11px">Biên gộp – Công ty X</text>
<line x1="250" y1="240" x2="280" y2="240" style="stroke:var(--c2);stroke-width:3"/>
<text x="285" y="244" style="fill:var(--text);font-size:11px">Biên gộp – Công ty Y</text>
<line x1="420" y1="240" x2="450" y2="240" style="stroke:var(--muted);stroke-width:2;stroke-dasharray:6 4"/>
<text x="455" y="244" style="fill:var(--text);font-size:11px">Nét đứt: biên ròng</text>
</svg><figcaption>Hình: Mẫu biểu đồ biên lợi nhuận 5 năm của 2 công ty giả định X và Y (số liệu minh họa) — bạn vẽ lại với số thật của VNM và FPT</figcaption></figure>

<h4>Bước 4 — Viết nhận xét (30 phút)</h4>
<p>Trả lời bằng 5–8 câu:</p>
<ul>
<li>Công ty nào tăng trưởng doanh thu nhanh hơn (theo CAGR)? Tăng đều hay thất thường?</li>
<li>Công ty nào có biên gộp cao hơn? Biên lợi nhuận đang mở rộng hay thu hẹp?</li>
<li>Có năm nào lợi nhuận tăng/giảm đột biến không? Tìm trong tin tức xem lý do là gì.</li>
<li>Từ những con số này, bạn đoán mô hình kinh doanh của mỗi công ty khác nhau thế nào?</li>
</ul>
<p><b>Ví dụ:</b> Một nhận xét mẫu (với số giả định): "Công ty X tăng trưởng chậm (CAGR 4%) nhưng biên gộp rất ổn định quanh 40% → sản phẩm thiết yếu, thương hiệu mạnh nhưng thị trường đã bão hòa. Công ty Y tăng trưởng nhanh (CAGR 18%) và biên gộp tăng dần từ 32% lên 37% → đang mở rộng sang mảng có biên cao hơn."</p>

<h4>Tiêu chí tự đánh giá</h4>
<ul>
<li>☐ Đủ 5 năm cho cả 2 công ty, đã đối chiếu ít nhất 2 số với file gốc.</li>
<li>☐ Tính đúng tăng trưởng YoY, biên gộp, biên ròng, CAGR (dùng 4 khoảng).</li>
<li>☐ Có 2 biểu đồ.</li>
<li>☐ Nhận xét dựa trên số liệu, có giải thích nguyên nhân cho ít nhất 1 năm bất thường.</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Bắt đầu cuốn <b>"Cổ phiếu thường, lợi nhuận phi thường"</b> (Philip Fisher). Đọc khoảng 50–80 trang đầu. Fisher là người tiên phong của trường phái <b>đầu tư vào doanh nghiệp tăng trưởng</b>: tìm những công ty có thể tăng doanh số và lợi nhuận mạnh trong nhiều năm, rồi nắm giữ lâu dài.</p>
<p>Khi đọc, chú ý:</p>
<ul>
<li>Fisher thu thập thông tin từ đâu ngoài báo cáo tài chính?</li>
<li>Ông quan tâm đến chất lượng ban lãnh đạo như thế nào?</li>
<li>Vì sao ông cho rằng con số quá khứ là chưa đủ?</li>
</ul>
<p><b>Ví dụ:</b> Bảng KQKD bạn vừa làm cho biết quá khứ (5 năm qua tăng trưởng 8%/năm). Fisher sẽ hỏi tiếp: "Sản phẩm của công ty còn thị trường để tăng trưởng trong 5–10 năm tới không?" — đó là câu hỏi mà bảng số liệu không trả lời được.</p>
<p><b>Câu hỏi tự trả lời sau khi đọc:</b> (1) Ý tưởng nào của Fisher khác với cách tiếp cận của Graham (sách tháng 1)? (2) Bạn có thể áp dụng ý tưởng nào của Fisher cho VNM hoặc FPT?</p>
`,
  quiz: [
    { q: "Bạn có số liệu doanh thu 5 năm liên tiếp. Khi tính CAGR, số mũ là?", options: ["1/5", "1/4", "1/6", "5"], answer: 1, explain: "5 năm số liệu chỉ có 4 khoảng tăng trưởng, nên dùng mũ 1/4." },
    { q: "Biên LN gộp tăng dần qua các năm thường gợi ý điều gì?", options: ["Công ty đang lỗ", "Công ty bán được giá tốt hơn hoặc giảm được chi phí sản xuất", "Công ty vay nợ nhiều hơn", "Công ty phát hành thêm cổ phiếu"], answer: 1, explain: "Biên gộp = (DT − giá vốn) ÷ DT; tăng khi giá bán tăng nhanh hơn chi phí sản xuất hoặc cơ cấu sản phẩm chuyển sang loại có lời cao hơn." }
  ]
},
{
  id: "w05-7",
  week: 5,
  day: 7,
  title: "Ôn tập tuần 5 & Fisher: tìm cổ phiếu tăng trưởng",
  minutes: 240,
  summary: "Đọc Fisher (scuttlebutt, 15 điểm), ôn KQKD và CĐKT, tổng kết tuần và chuẩn bị cho tuần 6.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp "Cổ phiếu thường, lợi nhuận phi thường" khoảng 50–80 trang. Hai ý tưởng nổi tiếng nhất của Fisher cần nắm:</p>
<ul>
<li><b>Phương pháp "scuttlebutt" (thu thập tin đồn/thông tin thực địa)</b>: tìm hiểu doanh nghiệp qua khách hàng, nhà cung cấp, đối thủ, nhân viên cũ — những người biết rõ công ty hơn mọi bản báo cáo.</li>
<li><b>15 điểm cần xem xét</b> ở một cổ phiếu tăng trưởng, xoay quanh: sản phẩm có tiềm năng tăng doanh số nhiều năm; ban lãnh đạo quyết tâm phát triển sản phẩm mới; nghiên cứu phát triển hiệu quả; đội bán hàng mạnh; biên lợi nhuận tốt và được cải thiện; quan hệ tốt với nhân viên; kiểm soát chi phí; tầm nhìn dài hạn; không pha loãng cổ đông quá mức; ban lãnh đạo minh bạch, chính trực kể cả khi gặp khó khăn.</li>
</ul>
<p><b>Ví dụ:</b> Áp dụng scuttlebutt cho một chuỗi bán lẻ: bạn ghé 3 cửa hàng vào cuối tuần, quan sát có đông khách không, nhân viên có nhiệt tình không, hàng hóa có hết hàng không; hỏi bạn bè vì sao họ chọn mua ở đó thay vì đối thủ. Những quan sát này không có trong BCTC, nhưng có thể báo trước doanh thu quý tới.</p>
<p><b>Câu hỏi sau khi đọc:</b> Trong 15 điểm của Fisher, điểm nào bạn có thể kiểm tra được bằng BCTC? Điểm nào chỉ kiểm tra được bằng quan sát, tin tức?</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Sơ đồ tóm tắt kiến thức tuần 5">
<rect x="245" y="105" width="150" height="50" rx="10" style="fill:var(--accent);fill-opacity:0.2;stroke:var(--accent)"/>
<text x="320" y="128" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Tuần 5</text>
<text x="320" y="145" text-anchor="middle" style="fill:var(--text);font-size:12px">Báo cáo tài chính 1</text>
<rect x="20" y="20" width="190" height="80" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="115" y="42" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">Bộ BCTC</text>
<text x="115" y="62" text-anchor="middle" style="fill:var(--text);font-size:11px">4 phần · quý/bán niên/năm</text>
<text x="115" y="80" text-anchor="middle" style="fill:var(--text);font-size:11px">hợp nhất vs riêng</text>
<rect x="430" y="20" width="190" height="80" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="525" y="42" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">KQKD</text>
<text x="525" y="62" text-anchor="middle" style="fill:var(--text);font-size:11px">DT → LN gộp → LNTT</text>
<text x="525" y="80" text-anchor="middle" style="fill:var(--text);font-size:11px">→ LNST → LN cổ đông mẹ</text>
<rect x="20" y="160" width="190" height="80" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="115" y="182" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">Biên & tăng trưởng</text>
<text x="115" y="202" text-anchor="middle" style="fill:var(--text);font-size:11px">biên gộp, biên ròng</text>
<text x="115" y="220" text-anchor="middle" style="fill:var(--text);font-size:11px">YoY · QoQ · CAGR · mùa vụ</text>
<rect x="430" y="160" width="190" height="80" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="525" y="182" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">CĐKT</text>
<text x="525" y="202" text-anchor="middle" style="fill:var(--text);font-size:11px">Tài sản = Nợ + Vốn</text>
<text x="525" y="220" text-anchor="middle" style="fill:var(--text);font-size:11px">ngắn hạn / dài hạn</text>
<line x1="210" y1="70" x2="245" y2="112" style="stroke:var(--muted)"/>
<line x1="430" y1="70" x2="395" y2="112" style="stroke:var(--muted)"/>
<line x1="210" y1="190" x2="245" y2="148" style="stroke:var(--muted)"/>
<line x1="430" y1="190" x2="395" y2="148" style="stroke:var(--muted)"/>
</svg><figcaption>Hình: Bản đồ kiến thức tuần 5</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu</b> (nói to hoặc viết ra):</p>
<ol>
<li>4 phần của bộ BCTC là gì? Phần nào là "ảnh chụp", phần nào là "đoạn phim"?</li>
<li>Đi từ doanh thu thuần xuống LNST cổ đông công ty mẹ gồm những bước nào?</li>
<li>Vì sao doanh nghiệp có tính mùa vụ nên so sánh YoY?</li>
<li>Viết phương trình kế toán và cho một ví dụ cá nhân.</li>
</ol>
<p><b>Ví dụ:</b> Câu 4 có thể trả lời: "Tôi có xe máy 30 triệu, mua trả góp còn nợ 10 triệu → Tài sản 30 = Nợ 10 + Vốn chủ 20."</p>
<p>Làm bài trắc nghiệm cuối buổi; câu nào sai hãy đọc lại bài tương ứng.</p>

<h3>Tổng kết tuần (1 giờ)</h3>
<ul>
<li>☐ Đã tải và lật qua ít nhất 1 BCTC PDF gốc.</li>
<li>☐ Đã tự tính biên gộp, biên ròng, tăng trưởng YoY cho VNM.</li>
<li>☐ Đã hoàn thành bảng KQKD 5 năm VNM và FPT.</li>
<li>☐ Đã đọc khoảng 100–150 trang sách Fisher.</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Phần nào của tuần này khó nhất? Bạn mất bao lâu để đọc 1 BCTC? Mục tiêu tuần sau là giảm thời gian đó xuống.</p>
<p><b>Chuẩn bị tuần 6:</b> Tuần sau học sâu hơn về CĐKT (phải thu, tồn kho, nợ vay), báo cáo lưu chuyển tiền tệ và các dấu hiệu cảnh báo. Hãy giữ lại file BCTC VNM và FPT — sẽ dùng tiếp.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Hoàn thành phần còn dở của bài tập lớn thứ 7, hoặc đọc lại bài có câu trắc nghiệm làm sai. Nếu đã xong hết, xem lại watchlist và cập nhật biên lợi nhuận gộp cho 2–3 mã trong đó.</p>
`,
  quiz: [
    { q: "Báo cáo nào cho biết công ty lãi hay lỗ trong kỳ?", options: ["Bảng cân đối kế toán", "Báo cáo kết quả kinh doanh", "Thuyết minh", "Báo cáo thường niên"], answer: 1, explain: "Báo cáo KQKD trình bày doanh thu, chi phí và lợi nhuận trong kỳ." },
    { q: "BCTC bán niên phải được kiểm toán viên làm gì?", options: ["Kiểm toán đầy đủ", "Soát xét", "Không cần làm gì", "Phê duyệt giá cổ phiếu"], answer: 1, explain: "BCTC bán niên được soát xét; BCTC năm mới phải kiểm toán đầy đủ." },
    { q: "Doanh thu thuần 2.000 tỷ, giá vốn 1.400 tỷ. Biên LN gộp là?", options: ["70%", "30%", "40%", "60%"], answer: 1, explain: "LN gộp = 600 tỷ; biên gộp = 600 ÷ 2.000 = 30%." },
    { q: "LNST 140 tỷ, phần của cổ đông không kiểm soát 10 tỷ. LNST cổ đông công ty mẹ là?", options: ["150 tỷ", "140 tỷ", "130 tỷ", "10 tỷ"], answer: 2, explain: "140 − 10 = 130 tỷ thuộc cổ đông công ty mẹ." },
    { q: "Doanh thu quý 2 năm nay 450 tỷ, quý 2 năm trước 400 tỷ. Tăng trưởng YoY?", options: ["12,5%", "11,1%", "50%", "−11,1%"], answer: 0, explain: "450 ÷ 400 − 1 = 12,5%." },
    { q: "Tổng tài sản 1.000 tỷ, vốn chủ sở hữu 300 tỷ. Nợ phải trả?", options: ["1.300 tỷ", "300 tỷ", "700 tỷ", "Không xác định"], answer: 2, explain: "Nợ = Tài sản − Vốn chủ = 1.000 − 300 = 700 tỷ." },
    { q: "Lợi nhuận tăng 80% chủ yếu nhờ bán một mảnh đất. Nhận định nào đúng?", options: ["Kinh doanh cốt lõi chắc chắn tăng 80%", "Cần tách khoản lãi bất thường để xem tăng trưởng cốt lõi", "Đây là lợi nhuận lặp lại mỗi năm", "Không ảnh hưởng gì"], answer: 1, explain: "Lãi bán tài sản là khoản một lần; phải loại ra để đánh giá tăng trưởng cốt lõi." },
    { q: "Ý tưởng \"scuttlebutt\" của Fisher là gì?", options: ["Chỉ đọc báo cáo tài chính", "Thu thập thông tin từ khách hàng, nhà cung cấp, đối thủ, nhân viên", "Mua theo tin đồn trên mạng xã hội", "Đầu tư theo phân tích kỹ thuật"], answer: 1, explain: "Scuttlebutt là tìm hiểu doanh nghiệp qua những người trong hệ sinh thái của nó — không phải mua theo tin đồn." },
    { q: "Lợi nhuận giữ lại (sau khi chia cổ tức) làm thay đổi phần nào trên CĐKT?", options: ["Nợ ngắn hạn tăng", "Vốn chủ sở hữu tăng", "Hàng tồn kho tăng", "Không thay đổi gì"], answer: 1, explain: "Lãi giữ lại được cộng vào \"LNST chưa phân phối\" — một phần của vốn chủ sở hữu." }
  ]
}
);

// Tuần 6: Báo cáo tài chính 2
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w06-1",
  week: 6,
  day: 1,
  title: "Soi kỹ bảng cân đối: phải thu, tồn kho, nợ vay",
  minutes: 120,
  summary: "Các khoản mục quan trọng trên CĐKT, số ngày phải thu, số ngày tồn kho, chu kỳ tiền mặt và nợ vay ròng.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin có cụm "hàng tồn kho tăng", "nợ vay" hoặc "trích lập dự phòng". Ghi lại doanh nghiệp nào, khoản mục nào thay đổi và báo chí đánh giá đó là tốt hay xấu.</div>

<h3>1. Tiền và các khoản đầu tư ngắn hạn</h3>
<p>Tiền và tương đương tiền (tiền mặt, tiền gửi không kỳ hạn, tiền gửi kỳ hạn dưới 3 tháng) cùng với tiền gửi kỳ hạn dài hơn (thường nằm ở "đầu tư nắm giữ đến ngày đáo hạn") là "tấm đệm" an toàn của doanh nghiệp. Công ty có nhiều tiền, ít nợ vay thì chống chịu tốt khi kinh tế khó khăn.</p>
<p><b>Ví dụ:</b> Công ty A có tiền 150 tỷ + tiền gửi kỳ hạn 100 tỷ = 250 tỷ "tiền thật", trong khi nợ vay là 380 tỷ. <b>Nợ vay ròng</b> = Nợ vay − Tiền và tiền gửi = 380 − 250 = <b>130 tỷ</b>. Nếu một công ty khác có tiền 500 tỷ mà nợ vay chỉ 100 tỷ thì nợ vay ròng = −400 tỷ, tức là "tiền ròng" dương: công ty có thể trả hết nợ ngay mà vẫn còn 400 tỷ.</p>

<h3>2. Phải thu khách hàng và số ngày phải thu (DSO)</h3>
<p>Phải thu là tiền khách hàng đã mua hàng nhưng chưa trả. Bán chịu nhiều giúp tăng doanh thu nhưng nếu khách không trả được thì doanh thu đó chỉ là "trên giấy".</p>
<p><b>Số ngày phải thu (DSO)</b> = Phải thu khách hàng ÷ Doanh thu thuần × 365. Cho biết trung bình bao nhiêu ngày công ty mới thu được tiền.</p>
<p><b>Ví dụ:</b> Công ty A có phải thu 150 tỷ, doanh thu năm 1.000 tỷ → DSO = 150 ÷ 1.000 × 365 ≈ <b>55 ngày</b>. Nếu năm sau doanh thu tăng 10% (1.100 tỷ) mà phải thu tăng 60% (240 tỷ) → DSO = 240 ÷ 1.100 × 365 ≈ <b>80 ngày</b>. Công ty đang "nới lỏng" bán chịu để đẩy doanh số — một dấu hiệu cần cảnh giác.</p>

<h3>3. Hàng tồn kho và số ngày tồn kho (DIO)</h3>
<p>Tồn kho gồm nguyên vật liệu, sản phẩm dở dang và thành phẩm chưa bán. Tồn kho quá nhiều làm "chôn" tiền, có thể bị lỗi thời hoặc giảm giá (phải trích <b>dự phòng giảm giá hàng tồn kho</b>).</p>
<p><b>Số ngày tồn kho (DIO)</b> = Hàng tồn kho ÷ Giá vốn hàng bán × 365.</p>
<p><b>Ví dụ:</b> Công ty A có tồn kho 180 tỷ, giá vốn 650 tỷ → DIO = 180 ÷ 650 × 365 ≈ <b>101 ngày</b>: hàng nằm trong kho trung bình hơn 3 tháng mới bán được. Với một công ty bán điện thoại, tồn kho 101 ngày rất nguy hiểm vì mẫu mới ra liên tục làm hàng cũ mất giá. Với công ty thép, nếu giá thép đang giảm thì kho lớn sẽ gây lỗ.</p>

<h3>4. Phải trả người bán, chu kỳ tiền mặt (CCC)</h3>
<p><b>Số ngày phải trả (DPO)</b> = Phải trả người bán ÷ Giá vốn × 365: công ty được nhà cung cấp cho nợ bao lâu.</p>
<p><b>Chu kỳ tiền mặt (CCC)</b> = DSO + DIO − DPO: số ngày từ lúc bỏ tiền mua nguyên liệu đến lúc thu tiền về. CCC càng ngắn, công ty càng ít cần vốn lưu động (ít phải vay).</p>
<p><b>Ví dụ:</b> Công ty A có phải trả người bán 120 tỷ → DPO = 120 ÷ 650 × 365 ≈ <b>67 ngày</b>. CCC = 55 + 101 − 67 = <b>89 ngày</b>. Nghĩa là mỗi đồng bỏ ra mua nguyên liệu phải chờ khoảng 89 ngày mới quay về. Một chuỗi siêu thị có thể có CCC âm: bán hàng thu tiền mặt ngay (DSO ≈ 0), hàng quay vòng 30 ngày, nhưng được nợ nhà cung cấp 45 ngày → CCC = 0 + 30 − 45 = −15 ngày: nhà cung cấp đang "tài trợ vốn" cho siêu thị.</p>

<figure class="fig"><svg viewBox="0 0 640 220" role="img" aria-label="Dòng thời gian chu kỳ tiền mặt">
<line x1="30" y1="110" x2="610" y2="110" style="stroke:var(--line);stroke-width:2"/>
<circle cx="40" cy="110" r="6" style="fill:var(--accent)"/>
<text x="40" y="135" text-anchor="middle" style="fill:var(--text);font-size:11px">Ngày 0</text>
<text x="40" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">nhập nguyên liệu</text>
<rect x="40" y="60" width="364" height="22" style="fill:var(--c2);fill-opacity:0.35"/>
<text x="222" y="76" text-anchor="middle" style="fill:var(--text);font-size:12px">Tồn kho DIO ≈ 101 ngày</text>
<rect x="404" y="60" width="198" height="22" style="fill:var(--accent);fill-opacity:0.35"/>
<text x="503" y="76" text-anchor="middle" style="fill:var(--text);font-size:12px">Phải thu DSO ≈ 55 ngày</text>
<circle cx="404" cy="110" r="6" style="fill:var(--c2)"/>
<text x="404" y="135" text-anchor="middle" style="fill:var(--text);font-size:11px">Bán hàng</text>
<circle cx="602" cy="110" r="6" style="fill:var(--up)"/>
<text x="600" y="135" text-anchor="end" style="fill:var(--text);font-size:11px">Thu tiền (ngày 156)</text>
<rect x="40" y="165" width="241" height="22" style="fill:var(--up);fill-opacity:0.3"/>
<text x="160" y="181" text-anchor="middle" style="fill:var(--text);font-size:12px">Được nợ NCC DPO ≈ 67 ngày</text>
<circle cx="281" cy="110" r="6" style="fill:var(--down)"/>
<line x1="281" y1="116" x2="281" y2="165" style="stroke:var(--down);stroke-dasharray:3 3"/>
<text x="290" y="160" style="fill:var(--down);font-size:11px">Trả tiền NCC</text>
<line x1="281" y1="40" x2="602" y2="40" style="stroke:var(--down);stroke-width:2"/>
<line x1="281" y1="34" x2="281" y2="46" style="stroke:var(--down);stroke-width:2"/>
<line x1="602" y1="34" x2="602" y2="46" style="stroke:var(--down);stroke-width:2"/>
<text x="441" y="30" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:bold">Chu kỳ tiền mặt CCC ≈ 89 ngày (phải tự bỏ vốn)</text>
</svg><figcaption>Hình: CCC = DSO + DIO − DPO = 55 + 101 − 67 ≈ 89 ngày (Công ty A, số liệu minh họa; 1 ngày ≈ 3,6 px)</figcaption></figure>

<h3>5. Nợ vay và người mua trả tiền trước</h3>
<ul>
<li><b>Vay ngắn hạn</b> lớn so với tiền mặt → áp lực trả nợ trong 12 tháng.</li>
<li><b>Vay dài hạn</b> thường dùng đầu tư nhà máy, dự án — chấp nhận được nếu dự án sinh lời.</li>
<li><b>Người mua trả tiền trước</b>: với doanh nghiệp bất động sản, đây là tiền khách đặt cọc mua nhà chưa bàn giao → báo trước doanh thu tương lai.</li>
</ul>
<p><b>Ví dụ:</b> Công ty BĐS B có "người mua trả tiền trước" tăng từ 500 tỷ lên 2.000 tỷ trong năm, dù doanh thu năm nay thấp. Lý do: dự án mới bán rất tốt nhưng chưa bàn giao nên chưa được ghi nhận doanh thu. Khi bàn giao vào năm sau, phần lớn khoản này có thể chuyển thành doanh thu và lợi nhuận.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy CĐKT và KQKD năm gần nhất của VNM.</li>
<li>Tính DSO, DIO, DPO và CCC.</li>
<li>Tính nợ vay ròng = (vay ngắn hạn + vay dài hạn) − (tiền + tiền gửi/đầu tư nắm giữ đến ngày đáo hạn).</li>
<li>Làm lại với số liệu năm trước. CCC đang dài ra hay ngắn lại?</li>
</ol>
<p>Kết quả mong đợi: bảng 2 năm × 5 chỉ số và 1 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>DSO = Phải thu ÷ DT × 365; DIO = Tồn kho ÷ Giá vốn × 365; DPO = Phải trả NB ÷ Giá vốn × 365.</li>
<li>CCC = DSO + DIO − DPO; càng ngắn càng ít cần vốn.</li>
<li>Phải thu/tồn kho tăng nhanh hơn doanh thu là dấu hiệu cảnh báo.</li>
<li>Nợ vay ròng âm = công ty có nhiều tiền hơn nợ vay.</li>
</ul></div>
`,
  quiz: [
    { q: "Phải thu 90 tỷ, doanh thu năm 730 tỷ. DSO khoảng bao nhiêu ngày?", options: ["12 ngày", "45 ngày", "90 ngày", "8 ngày"], answer: 1, explain: "DSO = 90 ÷ 730 × 365 = 45 ngày." },
    { q: "DSO 30, DIO 60, DPO 40. Chu kỳ tiền mặt là?", options: ["130 ngày", "50 ngày", "10 ngày", "70 ngày"], answer: 1, explain: "CCC = 30 + 60 − 40 = 50 ngày." },
    { q: "Doanh thu tăng 10% nhưng phải thu tăng 60%. Điều này gợi ý?", options: ["Công ty thu tiền nhanh hơn", "Công ty có thể đang bán chịu nhiều hơn để đẩy doanh số", "Công ty trả nợ nhanh hơn", "Không có ý nghĩa gì"], answer: 1, explain: "Phải thu tăng nhanh hơn doanh thu cho thấy thu tiền chậm đi — cần kiểm tra chất lượng doanh thu." }
  ]
},
{
  id: "w06-2",
  week: 6,
  day: 2,
  title: "Báo cáo lưu chuyển tiền tệ và dòng tiền tự do",
  minutes: 120,
  summary: "Ba dòng tiền kinh doanh, đầu tư, tài chính; phương pháp gián tiếp; FCF = CFO − capex.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về doanh nghiệp "chia cổ tức tiền mặt" hoặc "đầu tư nhà máy mới". Tự hỏi: khoản tiền này sẽ xuất hiện ở dòng tiền nào trong báo cáo LCTT?</div>

<h3>1. Vì sao cần báo cáo lưu chuyển tiền tệ?</h3>
<p>Lợi nhuận là con số kế toán, có thể ghi nhận khi chưa thu được tiền. Tiền mặt thì không nói dối: doanh nghiệp phá sản vì <b>hết tiền</b>, không phải vì hết lợi nhuận. Báo cáo LCTT cho biết tiền thật sự đến từ đâu và đi đâu.</p>
<p><b>Ví dụ:</b> Bạn bán 10 chiếc laptop cho công ty quen, giá 200 triệu, cho nợ 6 tháng. Sổ sách ghi lãi 30 triệu, nhưng túi bạn chưa có đồng nào; trong khi bạn đã trả 170 triệu tiền nhập hàng. Nếu phải trả tiền nhà tháng này, bạn có thể "lãi mà vẫn hết tiền".</p>

<h3>2. Ba dòng tiền</h3>
<table>
<tr><th>Dòng tiền</th><th>Gồm</th><th>Thường mong muốn</th></tr>
<tr><td><b>Kinh doanh (CFO)</b></td><td>Tiền thu từ bán hàng, chi trả nhà cung cấp, lương, thuế, lãi vay</td><td>Dương và lớn</td></tr>
<tr><td><b>Đầu tư (CFI)</b></td><td>Mua sắm tài sản cố định (capex), đầu tư công ty khác, gửi tiền có kỳ hạn; thu từ thanh lý tài sản</td><td>Thường âm (đang đầu tư cho tương lai)</td></tr>
<tr><td><b>Tài chính (CFF)</b></td><td>Đi vay, trả nợ gốc, phát hành cổ phiếu, trả cổ tức</td><td>Tùy giai đoạn</td></tr>
</table>
<p><b>Ví dụ:</b> Công ty A (số liệu minh họa, tỷ đồng): tiền đầu năm 140. CFO = +200 (thu tiền bán hàng trừ các khoản chi hoạt động). CFI = −150 (xây nhà máy 120, đầu tư khác 30). CFF = −40 (vay thêm 30, trả cổ tức 70 → 30 − 70 = −40). Tiền cuối năm = 140 + 200 − 150 − 40 = <b>150 tỷ</b>.</p>

<figure class="fig"><svg viewBox="0 0 640 270" role="img" aria-label="Biểu đồ thác nước dòng tiền từ tiền đầu kỳ đến tiền cuối kỳ">
<line x1="20" y1="230" x2="620" y2="230" style="stroke:var(--line)"/>
<rect x="40" y="146" width="90" height="84" style="fill:var(--muted);fill-opacity:0.6"/>
<text x="85" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">140</text>
<rect x="160" y="26" width="90" height="120" style="fill:var(--up)"/>
<text x="205" y="20" text-anchor="middle" style="fill:var(--up);font-size:12px">+200</text>
<line x1="130" y1="146" x2="160" y2="146" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="280" y="26" width="90" height="90" style="fill:var(--down)"/>
<text x="325" y="132" text-anchor="middle" style="fill:var(--down);font-size:12px">−150</text>
<line x1="250" y1="26" x2="280" y2="26" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="400" y="116" width="90" height="24" style="fill:var(--down)"/>
<text x="445" y="156" text-anchor="middle" style="fill:var(--down);font-size:12px">−40</text>
<line x1="370" y1="116" x2="400" y2="116" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<rect x="520" y="140" width="90" height="90" style="fill:var(--accent)"/>
<text x="565" y="134" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">150</text>
<line x1="490" y1="140" x2="520" y2="140" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<text x="85" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">Tiền đầu kỳ</text>
<text x="205" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">CFO</text>
<text x="205" y="264" text-anchor="middle" style="fill:var(--muted);font-size:11px">kinh doanh</text>
<text x="325" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">CFI</text>
<text x="325" y="264" text-anchor="middle" style="fill:var(--muted);font-size:11px">đầu tư</text>
<text x="445" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">CFF</text>
<text x="445" y="264" text-anchor="middle" style="fill:var(--muted);font-size:11px">tài chính</text>
<text x="565" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">Tiền cuối kỳ</text>
</svg><figcaption>Hình: Tiền đầu kỳ 140 + CFO 200 − CFI 150 − CFF 40 = tiền cuối kỳ 150 (Công ty A, tỷ đồng, minh họa)</figcaption></figure>

<h3>3. Phương pháp gián tiếp: từ lợi nhuận đến tiền</h3>
<p>Hầu hết doanh nghiệp VN lập CFO theo <b>phương pháp gián tiếp</b>: bắt đầu từ LNTT, rồi:</p>
<ul>
<li><b>Cộng lại khấu hao</b>: khấu hao là chi phí trên sổ sách nhưng không tốn tiền trong kỳ (tiền đã chi lúc mua máy).</li>
<li><b>Trừ phần tăng phải thu, tăng tồn kho</b>: tiền bị "giam" lại.</li>
<li><b>Cộng phần tăng phải trả</b>: được nợ nhà cung cấp, chưa phải chi tiền.</li>
<li>Trừ thuế và lãi vay đã thực trả.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A: LNTT 175 + khấu hao 80 − phải thu tăng 30 − tồn kho tăng 20 + phải trả người bán tăng 25 − thuế đã nộp 30 = <b>CFO 200 tỷ</b>. Kiểm tra: 175 + 80 = 255; 255 − 30 − 20 = 205; 205 + 25 = 230; 230 − 30 = 200 ✓.</p>

<h3>4. Dòng tiền tự do (FCF)</h3>
<p><b>FCF = CFO − Capex</b> (capex = tiền chi mua sắm, xây dựng tài sản cố định). FCF là tiền "thực sự rảnh" sau khi duy trì và mở rộng sản xuất — dùng để trả cổ tức, trả nợ hoặc mua lại cổ phiếu.</p>
<p><b>Ví dụ:</b> Công ty A có CFO 200, capex 120 → FCF = <b>80 tỷ</b>. Nhưng công ty trả cổ tức 70 tỷ, vay thêm 30 tỷ. Tạm ổn vì FCF 80 &gt; cổ tức 70. Nếu một công ty có FCF chỉ 20 tỷ mà trả cổ tức 100 tỷ, nghĩa là nó đang <b>đi vay để trả cổ tức</b> — không bền vững.</p>

<h3>5. Đọc "chân dung" doanh nghiệp qua dấu của 3 dòng tiền</h3>
<table>
<tr><th>CFO</th><th>CFI</th><th>CFF</th><th>Chân dung thường gặp</th></tr>
<tr><td>+</td><td>−</td><td>−</td><td>Trưởng thành, khỏe: tự kiếm tiền, đầu tư, trả nợ/cổ tức</td></tr>
<tr><td>+</td><td>−</td><td>+</td><td>Đang mở rộng mạnh, vay thêm để đầu tư</td></tr>
<tr><td>−</td><td>−</td><td>+</td><td>Kinh doanh chưa ra tiền, sống nhờ đi vay/phát hành — rủi ro cao</td></tr>
<tr><td>−</td><td>+</td><td>±</td><td>Bán tài sản để bù đắp — cần cảnh giác</td></tr>
</table>
<p><b>Ví dụ:</b> Công ty A có CFO +200, CFI −150, CFF −40 → dạng (+, −, −): tự tạo tiền, đầu tư nhà máy mới và vẫn trả được cổ tức. Một startup công nghệ mới niêm yết có (−, −, +): đốt tiền và cần gọi vốn liên tục — có thể tăng trưởng nhanh nhưng rủi ro cao hơn nhiều.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở báo cáo LCTT năm gần nhất của VNM (CafeF → Tài chính → Lưu chuyển tiền tệ).</li>
<li>Ghi 3 con số: CFO, CFI, CFF và tiền đầu kỳ, cuối kỳ. Kiểm tra cộng trừ có khớp không.</li>
<li>Tìm dòng "Tiền chi để mua sắm, xây dựng TSCĐ" → tính FCF = CFO − capex.</li>
<li>Tìm dòng "Cổ tức, lợi nhuận đã trả cho chủ sở hữu". So sánh với FCF.</li>
</ol>
<p>Kết quả mong đợi: dấu (+/−) của 3 dòng tiền, FCF và câu kết luận "FCF có đủ trả cổ tức không".</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>3 dòng tiền: kinh doanh (CFO), đầu tư (CFI), tài chính (CFF).</li>
<li>Phương pháp gián tiếp: LNTT + khấu hao ± thay đổi vốn lưu động − thuế, lãi đã trả = CFO.</li>
<li>FCF = CFO − capex: tiền thật sự có thể trả cổ tức, trả nợ.</li>
<li>Dạng (+, −, −) thường là doanh nghiệp khỏe; (−, −, +) cần thận trọng.</li>
</ul></div>
`,
  quiz: [
    { q: "Trả cổ tức tiền mặt nằm ở dòng tiền nào?", options: ["Kinh doanh", "Đầu tư", "Tài chính", "Không có trong LCTT"], answer: 2, explain: "Trả cổ tức là giao dịch với chủ sở hữu, thuộc dòng tiền tài chính (CFF)." },
    { q: "CFO 300 tỷ, capex 180 tỷ. FCF là?", options: ["480 tỷ", "120 tỷ", "180 tỷ", "300 tỷ"], answer: 1, explain: "FCF = 300 − 180 = 120 tỷ." },
    { q: "Theo phương pháp gián tiếp, vì sao cộng lại khấu hao?", options: ["Vì khấu hao là thu nhập", "Vì khấu hao là chi phí không tốn tiền mặt trong kỳ", "Vì khấu hao là thuế", "Vì luật quy định ngẫu nhiên"], answer: 1, explain: "Khấu hao làm giảm lợi nhuận nhưng không phải chi tiền trong kỳ, nên cộng lại khi tính tiền thực tế." }
  ]
},
{
  id: "w06-3",
  week: 6,
  day: 3,
  title: "Lợi nhuận và dòng tiền: dấu hiệu cảnh báo",
  minutes: 120,
  summary: "Khi lợi nhuận tăng mà tiền không về: tỷ lệ CFO/LNST và các \"cờ đỏ\" trên BCTC.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về một doanh nghiệp bị "kiểm toán ngoại trừ", "chênh lệch lợi nhuận sau kiểm toán" hoặc "giải trình biến động lợi nhuận". Ghi lại nguyên nhân doanh nghiệp đưa ra.</div>

<h3>1. Lợi nhuận tốt phải đi kèm dòng tiền tốt</h3>
<p>Với doanh nghiệp khỏe, <b>CFO cộng dồn nhiều năm</b> phải xấp xỉ hoặc lớn hơn <b>LNST cộng dồn</b>. Một năm lệch có thể do thời vụ, nhưng lệch kéo dài nhiều năm là tín hiệu nguy hiểm.</p>
<p><b>Tỷ lệ CFO/LNST</b>: trên 1 là tốt (lợi nhuận đã thành tiền), dưới 1 kéo dài là đáng ngờ.</p>
<p><b>Ví dụ:</b> Công ty A có LNST 140 tỷ, CFO 200 tỷ → CFO/LNST = 200 ÷ 140 ≈ <b>1,43</b>: mỗi đồng lợi nhuận mang về 1,43 đồng tiền thật (nhờ cộng lại khấu hao). Còn Công ty C bên dưới thì ngược lại.</p>

<h3>2. Câu chuyện của Công ty C</h3>
<p>Công ty C (số liệu minh họa) báo lợi nhuận tăng đều 5 năm liền. Nhưng nhìn dòng tiền kinh doanh:</p>
<figure class="fig"><svg viewBox="0 0 640 280" role="img" aria-label="Lợi nhuận tăng nhưng dòng tiền kinh doanh giảm và âm của Công ty C">
<line x1="40" y1="190" x2="620" y2="190" style="stroke:var(--text);stroke-width:1"/>
<text x="34" y="194" text-anchor="end" style="fill:var(--muted);font-size:11px">0</text>
<rect x="80" y="140" width="34" height="50" style="fill:var(--accent)"/>
<rect x="118" y="150" width="34" height="40" style="fill:var(--up)"/>
<text x="97" y="134" text-anchor="middle" style="fill:var(--text);font-size:11px">100</text>
<text x="135" y="144" text-anchor="middle" style="fill:var(--up);font-size:11px">80</text>
<rect x="190" y="125" width="34" height="65" style="fill:var(--accent)"/>
<rect x="228" y="170" width="34" height="20" style="fill:var(--up)"/>
<text x="207" y="119" text-anchor="middle" style="fill:var(--text);font-size:11px">130</text>
<text x="245" y="164" text-anchor="middle" style="fill:var(--up);font-size:11px">40</text>
<rect x="300" y="105" width="34" height="85" style="fill:var(--accent)"/>
<rect x="338" y="190" width="34" height="10" style="fill:var(--down)"/>
<text x="317" y="99" text-anchor="middle" style="fill:var(--text);font-size:11px">170</text>
<text x="355" y="214" text-anchor="middle" style="fill:var(--down);font-size:11px">−20</text>
<rect x="410" y="80" width="34" height="110" style="fill:var(--accent)"/>
<rect x="448" y="190" width="34" height="30" style="fill:var(--down)"/>
<text x="427" y="74" text-anchor="middle" style="fill:var(--text);font-size:11px">220</text>
<text x="465" y="234" text-anchor="middle" style="fill:var(--down);font-size:11px">−60</text>
<rect x="520" y="50" width="34" height="140" style="fill:var(--accent)"/>
<rect x="558" y="190" width="34" height="45" style="fill:var(--down)"/>
<text x="537" y="44" text-anchor="middle" style="fill:var(--text);font-size:11px">280</text>
<text x="575" y="249" text-anchor="middle" style="fill:var(--down);font-size:11px">−90</text>
<text x="116" y="266" text-anchor="middle" style="fill:var(--muted);font-size:12px">Năm 1</text>
<text x="226" y="266" text-anchor="middle" style="fill:var(--muted);font-size:12px">Năm 2</text>
<text x="336" y="266" text-anchor="middle" style="fill:var(--muted);font-size:12px">Năm 3</text>
<text x="446" y="266" text-anchor="middle" style="fill:var(--muted);font-size:12px">Năm 4</text>
<text x="556" y="266" text-anchor="middle" style="fill:var(--muted);font-size:12px">Năm 5</text>
<rect x="60" y="14" width="14" height="14" style="fill:var(--accent)"/>
<text x="80" y="26" style="fill:var(--text);font-size:12px">LNST</text>
<rect x="140" y="14" width="14" height="14" style="fill:var(--up)"/>
<rect x="156" y="14" width="14" height="14" style="fill:var(--down)"/>
<text x="176" y="26" style="fill:var(--text);font-size:12px">Dòng tiền kinh doanh (CFO)</text>
</svg><figcaption>Hình: Công ty C — LNST cộng dồn 5 năm 900 tỷ, nhưng CFO cộng dồn −50 tỷ (tỷ đồng, số liệu minh họa)</figcaption></figure>
<p><b>Ví dụ:</b> Cộng dồn 5 năm: LNST = 100 + 130 + 170 + 220 + 280 = <b>900 tỷ</b>; CFO = 80 + 40 − 20 − 60 − 90 = <b>−50 tỷ</b>. Công ty "lãi" 900 tỷ nhưng không thu được đồng tiền ròng nào từ kinh doanh. Đọc CĐKT thì thấy phải thu tăng từ 200 lên 1.000 tỷ — doanh thu chủ yếu là bán chịu, có thể khó thu hồi. Để có tiền hoạt động, công ty liên tục vay thêm.</p>

<h3>3. Các "cờ đỏ" (red flags) thường gặp</h3>
<ol>
<li><b>LN tăng nhưng CFO âm/giảm kéo dài</b> (như Công ty C).</li>
<li><b>Phải thu, tồn kho tăng nhanh hơn doanh thu.</b>
<p><b>Ví dụ:</b> Doanh thu +15% nhưng tồn kho +70% → hàng bán chậm, có rủi ro phải trích dự phòng giảm giá.</p></li>
<li><b>Lợi nhuận chủ yếu từ hoạt động tài chính/khác</b>, không phải kinh doanh chính.
<p><b>Ví dụ:</b> LNTT 200 tỷ, trong đó lãi bán cổ phần công ty con 150 tỷ, kinh doanh chính chỉ lãi 50 tỷ.</p></li>
<li><b>Nợ vay tăng liên tục</b> để trả cổ tức hoặc bù đắp CFO âm.
<p><b>Ví dụ:</b> FCF −100 tỷ nhưng vẫn trả cổ tức 80 tỷ, vay ròng thêm 180 tỷ.</p></li>
<li><b>Giao dịch lớn với bên liên quan</b> (công ty của lãnh đạo, cổ đông lớn) — xem thuyết minh.
<p><b>Ví dụ:</b> 40% doanh thu bán cho một công ty do chủ tịch sở hữu, và khoản phải thu từ công ty đó chiếm phần lớn phải thu.</p></li>
<li><b>Lợi nhuận sau kiểm toán chênh nhiều so với số tự lập</b>, hoặc liên tục thay đổi công ty kiểm toán.
<p><b>Ví dụ:</b> BCTC tự lập báo lãi 120 tỷ, sau kiểm toán còn 60 tỷ do phải trích lập dự phòng nợ khó đòi.</p></li>
<li><b>Vốn hóa chi phí bất thường</b>: ghi chi phí vào tài sản (xây dựng dở dang, chi phí trả trước) để làm đẹp lợi nhuận.
<p><b>Ví dụ:</b> Chi phí trả trước dài hạn tăng từ 20 lên 300 tỷ trong một năm mà không có giải thích rõ trong thuyết minh.</p></li>
</ol>

<h3>4. Một cờ đỏ chưa phải là kết luận</h3>
<p>Mỗi dấu hiệu có thể có lý do hợp lý. Việc của bạn là <b>đặt câu hỏi và tìm câu trả lời</b> trong thuyết minh, báo cáo thường niên, tin tức. Nhiều cờ đỏ cùng lúc thì nên tránh xa.</p>
<p><b>Ví dụ:</b> Tồn kho của một công ty bánh kẹo tăng mạnh vào quý 3 là bình thường (chuẩn bị hàng Tết). Nhưng tồn kho tăng mạnh vào quý 1 sau Tết, cộng thêm doanh thu giảm và vay nợ tăng → 3 cờ đỏ cùng lúc.</p>

<div class="warn">⚠ Những vụ doanh nghiệp "lãi trên giấy" rồi sụp đổ thường có chung đặc điểm: lợi nhuận đẹp nhiều năm nhưng dòng tiền kinh doanh âm. Đừng bỏ qua báo cáo LCTT.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy LNST và CFO 5 năm gần nhất của VNM và FPT.</li>
<li>Tính tổng LNST 5 năm và tổng CFO 5 năm của mỗi công ty, rồi tính tỷ lệ CFO/LNST cộng dồn.</li>
<li>Kiểm tra 3 cờ đỏ đầu tiên trong danh sách cho từng công ty.</li>
</ol>
<p>Kết quả mong đợi: 2 tỷ lệ CFO/LNST và bảng "cờ đỏ: có/không" cho 2 công ty.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>CFO cộng dồn nhiều năm nên ≥ LNST cộng dồn.</li>
<li>Phải thu, tồn kho tăng nhanh hơn doanh thu là cảnh báo.</li>
<li>Lợi nhuận cốt lõi mới quan trọng; cẩn thận lãi từ hoạt động tài chính, bất thường.</li>
<li>Một cờ đỏ → đặt câu hỏi; nhiều cờ đỏ → tránh xa.</li>
</ul></div>
`,
  quiz: [
    { q: "LNST cộng dồn 5 năm 500 tỷ, CFO cộng dồn 5 năm −100 tỷ. Nhận định hợp lý nhất?", options: ["Công ty rất khỏe", "Lợi nhuận chưa chuyển thành tiền — dấu hiệu cảnh báo", "Không liên quan", "Công ty sắp tăng cổ tức"], answer: 1, explain: "Lãi nhiều năm mà dòng tiền kinh doanh âm cho thấy lợi nhuận có thể chỉ \"trên giấy\"." },
    { q: "Doanh thu +10%, tồn kho +80%. Đây là?", options: ["Dấu hiệu tốt chắc chắn", "Cờ đỏ cần tìm hiểu thêm", "Không cần quan tâm", "Bằng chứng gian lận"], answer: 1, explain: "Tồn kho tăng nhanh hơn doanh thu là cờ đỏ, nhưng cần tìm nguyên nhân (mùa vụ, dự trữ nguyên liệu…) trước khi kết luận." },
    { q: "Tỷ lệ CFO/LNST = 1,3 nghĩa là?", options: ["Lợi nhuận đã được chuyển thành tiền tốt", "Công ty đang lỗ", "Công ty nợ quá nhiều", "Công ty không trả thuế"], answer: 0, explain: "CFO lớn hơn LNST: mỗi đồng lợi nhuận mang về 1,3 đồng tiền từ kinh doanh." }
  ]
},
{
  id: "w06-4",
  week: 6,
  day: 4,
  title: "Thuyết minh BCTC và ý kiến kiểm toán",
  minutes: 120,
  summary: "Các mức ý kiến kiểm toán, đoạn nhấn mạnh và những mục thuyết minh nên đọc.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về một cổ phiếu "bị đưa vào diện cảnh báo/kiểm soát" hoặc "bị hủy niêm yết". Ghi lại nguyên nhân — rất nhiều trường hợp liên quan đến BCTC và ý kiến kiểm toán.</div>

<h3>1. Kiểm toán độc lập là gì?</h3>
<p>Công ty kiểm toán độc lập kiểm tra xem BCTC có phản ánh <b>trung thực và hợp lý</b> tình hình tài chính hay không, rồi đưa ra <b>ý kiến</b> ở trang đầu bộ BCTC năm. Đây là trang bạn nên đọc <b>đầu tiên</b>.</p>
<p><b>Ví dụ:</b> Giống như khi mua xe cũ, bạn nhờ thợ quen kiểm tra trước. Thợ có thể nói: "Xe ổn" (chấp nhận toàn phần), "Xe ổn trừ hộp số chưa kiểm tra được" (ngoại trừ), "Xe đã bị tai nạn, không như người bán nói" (trái ngược), hoặc "Không cho tôi xem máy, tôi không nói được gì" (từ chối).</p>

<h3>2. Bốn mức ý kiến kiểm toán</h3>
<figure class="fig"><svg viewBox="0 0 640 220" role="img" aria-label="Bốn mức ý kiến kiểm toán từ tốt đến xấu">
<rect x="20" y="40" width="140" height="110" rx="10" style="fill:var(--up);fill-opacity:0.2;stroke:var(--up)"/>
<text x="90" y="68" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:bold">Chấp nhận</text>
<text x="90" y="86" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:bold">toàn phần</text>
<text x="90" y="114" text-anchor="middle" style="fill:var(--text);font-size:11px">BCTC trung thực,</text>
<text x="90" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">hợp lý</text>
<rect x="175" y="40" width="140" height="110" rx="10" style="fill:var(--ref);fill-opacity:0.2;stroke:var(--ref)"/>
<text x="245" y="68" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Ngoại trừ</text>
<text x="245" y="114" text-anchor="middle" style="fill:var(--text);font-size:11px">Hợp lý, trừ một</text>
<text x="245" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">số khoản mục</text>
<rect x="330" y="40" width="140" height="110" rx="10" style="fill:var(--c2);fill-opacity:0.2;stroke:var(--c2)"/>
<text x="400" y="68" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:bold">Từ chối đưa</text>
<text x="400" y="86" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:bold">ra ý kiến</text>
<text x="400" y="114" text-anchor="middle" style="fill:var(--text);font-size:11px">Không đủ bằng</text>
<text x="400" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">chứng để kết luận</text>
<rect x="485" y="40" width="140" height="110" rx="10" style="fill:var(--down);fill-opacity:0.2;stroke:var(--down)"/>
<text x="555" y="68" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:bold">Trái ngược</text>
<text x="555" y="114" text-anchor="middle" style="fill:var(--text);font-size:11px">BCTC sai lệch</text>
<text x="555" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">trọng yếu, lan tỏa</text>
<line x1="20" y1="180" x2="620" y2="180" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="625,180 613,174 613,186" style="fill:var(--muted)"/>
<text x="20" y="204" style="fill:var(--up);font-size:12px">An tâm hơn</text>
<text x="620" y="204" text-anchor="end" style="fill:var(--down);font-size:12px">Rủi ro rất cao</text>
</svg><figcaption>Hình: Các mức ý kiến kiểm toán — chỉ "chấp nhận toàn phần" là hoàn toàn ổn</figcaption></figure>
<ul>
<li><b>Chấp nhận toàn phần</b>: BCTC trung thực, hợp lý trên các khía cạnh trọng yếu.</li>
<li><b>Ngoại trừ</b>: nhìn chung hợp lý, nhưng có một/vài khoản mục kiểm toán viên không đồng ý hoặc không thu thập được bằng chứng.</li>
<li><b>Từ chối đưa ra ý kiến</b>: không có đủ bằng chứng để kết luận về BCTC.</li>
<li><b>Trái ngược</b>: BCTC sai lệch trọng yếu và lan tỏa.</li>
</ul>
<p><b>Ví dụ:</b> Công ty D có ý kiến ngoại trừ: "Chúng tôi không thể xác nhận khoản phải thu 200 tỷ từ Công ty E". Nếu vốn chủ của D là 1.000 tỷ, khoản này bằng 20% vốn chủ — nếu không thu được, giá trị sổ sách có thể giảm 20%. Với mức ý kiến xấu hoặc kéo dài, cổ phiếu có thể bị đưa vào diện cảnh báo, kiểm soát, thậm chí hủy niêm yết theo quy định.</p>

<h3>3. Đoạn "Vấn đề cần nhấn mạnh"</h3>
<p>Đây <b>không phải</b> ý kiến ngoại trừ, nhưng là điều kiểm toán viên muốn bạn chú ý. Hay gặp nhất: <b>nghi ngờ về khả năng hoạt động liên tục</b> (công ty lỗ lũy kế lớn, nợ ngắn hạn vượt tài sản ngắn hạn).</p>
<p><b>Ví dụ:</b> "Chúng tôi lưu ý người đọc: Công ty lỗ lũy kế 500 tỷ và nợ ngắn hạn vượt tài sản ngắn hạn 300 tỷ. Các điều kiện này cho thấy sự tồn tại của yếu tố không chắc chắn trọng yếu về khả năng hoạt động liên tục." — Ý kiến vẫn có thể là chấp nhận toàn phần, nhưng đây là lời cảnh báo rất nghiêm trọng.</p>

<h3>4. Những mục thuyết minh nên đọc</h3>
<table>
<tr><th>Mục</th><th>Vì sao cần đọc</th></tr>
<tr><td>Chính sách kế toán</td><td>Khấu hao bao nhiêu năm, ghi nhận doanh thu khi nào</td></tr>
<tr><td>Chi tiết doanh thu theo mảng/khu vực</td><td>Mảng nào đóng góp chính, mảng nào tăng trưởng</td></tr>
<tr><td>Chi tiết vay nợ</td><td>Vay ai, lãi suất, kỳ hạn, tài sản đảm bảo</td></tr>
<tr><td>Hàng tồn kho, dự phòng</td><td>Tồn kho gồm gì, đã trích dự phòng chưa</td></tr>
<tr><td>Giao dịch với bên liên quan</td><td>Có "chuyển lợi ích" cho người nội bộ không</td></tr>
<tr><td>Nợ tiềm tàng, sự kiện sau ngày kết thúc kỳ</td><td>Kiện tụng, bảo lãnh, sự kiện lớn sắp ảnh hưởng</td></tr>
</table>
<p><b>Ví dụ:</b> Hai công ty cùng mua máy móc 1.000 tỷ. Công ty X khấu hao 10 năm (100 tỷ/năm), Công ty Y khấu hao 20 năm (50 tỷ/năm). Mỗi năm Y có lợi nhuận cao hơn X 50 tỷ chỉ vì chính sách kế toán, dù hoạt động giống hệt nhau. Chỉ đọc thuyết minh mới thấy được điều này.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở BCTC năm của FPT, đọc toàn bộ trang "Báo cáo kiểm toán độc lập". Ghi lại loại ý kiến và có đoạn nhấn mạnh không.</li>
<li>Trong thuyết minh, tìm mục doanh thu theo bộ phận (mảng kinh doanh). Ghi tỷ trọng doanh thu của 3 mảng lớn nhất.</li>
<li>Tìm mục vay: tổng vay, có vay ngoại tệ không.</li>
</ol>
<p>Kết quả mong đợi: 1 dòng về ý kiến kiểm toán, bảng tỷ trọng 3 mảng, 1 dòng về cơ cấu vay.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Đọc ý kiến kiểm toán đầu tiên; chỉ "chấp nhận toàn phần" là hoàn toàn ổn.</li>
<li>Đoạn "nhấn mạnh" về hoạt động liên tục là cảnh báo rất nghiêm trọng.</li>
<li>Thuyết minh cho biết chính sách kế toán, cơ cấu doanh thu, nợ vay, giao dịch bên liên quan.</li>
<li>Chính sách khấu hao khác nhau có thể làm lợi nhuận khác nhau dù kinh doanh như nhau.</li>
</ul></div>
`,
  quiz: [
    { q: "Ý kiến kiểm toán nào cho thấy BCTC sai lệch trọng yếu và lan tỏa?", options: ["Chấp nhận toàn phần", "Ngoại trừ", "Trái ngược", "Có đoạn nhấn mạnh"], answer: 2, explain: "Ý kiến trái ngược nghĩa là BCTC không trung thực hợp lý một cách trọng yếu và lan tỏa." },
    { q: "Đoạn \"vấn đề cần nhấn mạnh\" có phải là ý kiến ngoại trừ không?", options: ["Có, luôn luôn", "Không, nhưng là điều cần đặc biệt chú ý", "Có nghĩa là BCTC sai", "Là lời khen của kiểm toán"], answer: 1, explain: "Đoạn nhấn mạnh không thay đổi ý kiến, nhưng lưu ý vấn đề quan trọng như khả năng hoạt động liên tục." },
    { q: "Muốn biết doanh nghiệp vay ngân hàng nào, lãi suất bao nhiêu, bạn đọc ở đâu?", options: ["Báo cáo KQKD", "Thuyết minh BCTC", "Bảng giá chứng khoán", "Biểu đồ kỹ thuật"], answer: 1, explain: "Chi tiết khoản vay được trình bày trong thuyết minh BCTC." }
  ]
},
{
  id: "w06-5",
  week: 6,
  day: 5,
  title: "So sánh hai công ty bằng tỷ lệ",
  minutes: 120,
  summary: "Báo cáo quy mô chung (common-size), chọn đối tượng so sánh phù hợp, bảng chấm điểm nhiều tiêu chí.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Chọn 2 doanh nghiệp cùng ngành vừa có tin kết quả kinh doanh (vd 2 ngân hàng, 2 công ty thép). Ghi lại doanh thu, lợi nhuận của cả hai. Hôm nay bạn sẽ học cách so sánh chúng cho công bằng.</div>

<h3>1. Đừng so sánh số tuyệt đối</h3>
<p>Công ty lớn đương nhiên có doanh thu và lợi nhuận lớn hơn. Muốn biết công ty nào <b>làm ăn tốt hơn</b>, cần so sánh bằng <b>tỷ lệ</b> (%, số lần, số ngày).</p>
<p><b>Ví dụ:</b> Công ty X lãi 1.000 tỷ trên vốn chủ 10.000 tỷ; Công ty Y lãi 300 tỷ trên vốn chủ 1.500 tỷ. Nhìn số tuyệt đối X lãi gấp hơn 3 lần, nhưng tỷ suất lợi nhuận trên vốn chủ: X = 10%, Y = 20%. Mỗi đồng vốn của Y sinh lời gấp đôi X.</p>

<h3>2. Báo cáo quy mô chung (common-size)</h3>
<p>Chuyển mọi dòng thành <b>% của một con số gốc</b>: KQKD tính theo % doanh thu thuần, CĐKT tính theo % tổng tài sản. Nhờ vậy so sánh được công ty lớn với công ty nhỏ, năm nay với năm trước.</p>
<p><b>Ví dụ:</b> (số liệu minh họa, tỷ đồng)</p>
<table>
<tr><th>Dòng</th><th>Công ty X</th><th>% DT</th><th>Công ty Y</th><th>% DT</th></tr>
<tr><td>Doanh thu thuần</td><td>5.000</td><td>100%</td><td>800</td><td>100%</td></tr>
<tr><td>Giá vốn</td><td>3.750</td><td>75%</td><td>520</td><td>65%</td></tr>
<tr><td>LN gộp</td><td>1.250</td><td>25%</td><td>280</td><td>35%</td></tr>
<tr><td>CP bán hàng + QLDN</td><td>750</td><td>15%</td><td>136</td><td>17%</td></tr>
<tr><td>LNST</td><td>400</td><td>8%</td><td>104</td><td>13%</td></tr>
</table>
<p>Y nhỏ hơn X rất nhiều, nhưng cứ 100 đồng doanh thu, Y giữ lại 13 đồng lãi so với 8 đồng của X. Y có sản phẩm "lời" hơn (biên gộp 35% vs 25%).</p>

<h3>3. Chọn đúng đối tượng để so sánh</h3>
<ul>
<li><b>Cùng ngành, cùng mô hình kinh doanh</b>: so ngân hàng với ngân hàng, thép với thép.</li>
<li><b>Cùng kỳ</b>: năm 2025 với năm 2025, quý 2 với quý 2.</li>
<li><b>Cùng chuẩn kế toán, cùng loại BCTC</b> (hợp nhất với hợp nhất).</li>
</ul>
<p><b>Ví dụ:</b> So biên gộp của một công ty phần mềm (50%) với một nhà bán lẻ điện máy (20%) rồi kết luận công ty phần mềm "tốt hơn" là sai — mô hình kinh doanh khác nhau nên biên khác nhau. Nên so nhà bán lẻ điện máy này với một nhà bán lẻ điện máy khác.</p>

<h3>4. Bảng chấm điểm nhiều tiêu chí</h3>
<p>Một chỉ số không nói lên tất cả. Hãy dùng 6–8 tiêu chí và chấm điểm, ví dụ:</p>
<figure class="fig"><svg viewBox="0 0 640 280" role="img" aria-label="So sánh 6 chỉ tiêu của hai công ty bằng thanh ngang">
<text x="190" y="24" text-anchor="end" style="fill:var(--muted);font-size:12px">Chỉ tiêu</text>
<rect x="210" y="12" width="14" height="14" style="fill:var(--accent)"/>
<text x="230" y="24" style="fill:var(--text);font-size:12px">Công ty X</text>
<rect x="320" y="12" width="14" height="14" style="fill:var(--c2)"/>
<text x="340" y="24" style="fill:var(--text);font-size:12px">Công ty Y</text>
<text x="190" y="56" text-anchor="end" style="fill:var(--text);font-size:12px">Tăng trưởng DT (CAGR)</text>
<rect x="200" y="42" width="120" height="10" style="fill:var(--accent)"/><text x="326" y="51" style="fill:var(--text);font-size:11px">6%</text>
<rect x="200" y="54" width="300" height="10" style="fill:var(--c2)"/><text x="506" y="63" style="fill:var(--text);font-size:11px">15%</text>
<text x="190" y="96" text-anchor="end" style="fill:var(--text);font-size:12px">Biên LN gộp</text>
<rect x="200" y="82" width="250" height="10" style="fill:var(--accent)"/><text x="456" y="91" style="fill:var(--text);font-size:11px">25%</text>
<rect x="200" y="94" width="350" height="10" style="fill:var(--c2)"/><text x="556" y="103" style="fill:var(--text);font-size:11px">35%</text>
<text x="190" y="136" text-anchor="end" style="fill:var(--text);font-size:12px">Biên LN ròng</text>
<rect x="200" y="122" width="160" height="10" style="fill:var(--accent)"/><text x="366" y="131" style="fill:var(--text);font-size:11px">8%</text>
<rect x="200" y="134" width="260" height="10" style="fill:var(--c2)"/><text x="466" y="143" style="fill:var(--text);font-size:11px">13%</text>
<text x="190" y="176" text-anchor="end" style="fill:var(--text);font-size:12px">CFO / LNST</text>
<rect x="200" y="162" width="300" height="10" style="fill:var(--accent)"/><text x="506" y="171" style="fill:var(--text);font-size:11px">1,5 lần</text>
<rect x="200" y="174" width="160" height="10" style="fill:var(--c2)"/><text x="366" y="183" style="fill:var(--text);font-size:11px">0,8 lần</text>
<text x="190" y="216" text-anchor="end" style="fill:var(--text);font-size:12px">Nợ vay / Vốn chủ</text>
<rect x="200" y="202" width="60" height="10" style="fill:var(--accent)"/><text x="266" y="211" style="fill:var(--text);font-size:11px">0,3 lần</text>
<rect x="200" y="214" width="240" height="10" style="fill:var(--c2)"/><text x="446" y="223" style="fill:var(--text);font-size:11px">1,2 lần</text>
<text x="190" y="256" text-anchor="end" style="fill:var(--text);font-size:12px">Chu kỳ tiền mặt</text>
<rect x="200" y="242" width="120" height="10" style="fill:var(--accent)"/><text x="326" y="251" style="fill:var(--text);font-size:11px">40 ngày</text>
<rect x="200" y="254" width="270" height="10" style="fill:var(--c2)"/><text x="476" y="263" style="fill:var(--text);font-size:11px">90 ngày</text>
</svg><figcaption>Hình: Y thắng về tăng trưởng và biên lợi nhuận; X thắng về dòng tiền, nợ vay và chu kỳ tiền mặt (số liệu minh họa)</figcaption></figure>
<p><b>Ví dụ:</b> Từ hình trên: Y tăng trưởng nhanh, biên cao nhưng dòng tiền yếu (CFO/LNST 0,8), vay nhiều (1,2 lần vốn chủ), vốn bị giam lâu (CCC 90 ngày). X tăng chậm nhưng rất "an toàn". Nhà đầu tư thích tăng trưởng có thể chọn Y nhưng phải theo dõi nợ vay; nhà đầu tư thận trọng có thể chọn X. Không có đáp án tuyệt đối — điều quan trọng là bạn <b>biết mình đang chấp nhận rủi ro gì</b>.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Chọn 2 công ty cùng ngành trong watchlist của bạn.</li>
<li>Lập báo cáo KQKD dạng % doanh thu cho năm gần nhất (5 dòng như bảng mục 2).</li>
<li>Điền 6 tiêu chí như hình và đánh dấu công ty thắng ở từng tiêu chí.</li>
</ol>
<p>Kết quả mong đợi: bảng common-size, bảng 6 tiêu chí và 2–3 câu kết luận "công ty nào mạnh ở đâu, yếu ở đâu".</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>So sánh bằng tỷ lệ, không bằng số tuyệt đối.</li>
<li>Common-size: KQKD theo % doanh thu, CĐKT theo % tổng tài sản.</li>
<li>Chỉ so sánh trong cùng ngành, cùng kỳ, cùng loại BCTC.</li>
<li>Dùng nhiều tiêu chí; mỗi công ty có điểm mạnh, điểm yếu riêng.</li>
</ul></div>
`,
  quiz: [
    { q: "Vì sao nên dùng báo cáo common-size?", options: ["Để số liệu lớn hơn", "Để so sánh được công ty có quy mô khác nhau", "Để tránh phải đọc BCTC", "Để tính thuế"], answer: 1, explain: "Chuyển các dòng thành % giúp so sánh công bằng giữa công ty lớn và nhỏ." },
    { q: "Doanh thu 800 tỷ, LNST 104 tỷ. Theo common-size, LNST chiếm?", options: ["8%", "13%", "10,4%", "80%"], answer: 1, explain: "104 ÷ 800 = 13%." },
    { q: "So sánh nào hợp lý nhất?", options: ["Biên gộp ngân hàng với công ty thép", "Biên gộp hai công ty bán lẻ điện máy cùng năm", "Doanh thu quý 1 năm nay với cả năm trước", "BCTC riêng công ty mẹ của X với hợp nhất của Y"], answer: 1, explain: "Cùng ngành, cùng kỳ là điều kiện để so sánh có ý nghĩa." }
  ]
},
{
  id: "w06-6",
  week: 6,
  day: 6,
  title: "Bài tập lớn: VNM và FPT — cân đối kế toán và dòng tiền",
  minutes: 240,
  summary: "So sánh cơ cấu tài sản, nguồn vốn, vốn lưu động và dòng tiền của VNM và FPT.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p>Mục tiêu: dùng kiến thức tuần này để so sánh "sức khỏe tài chính" của VNM và FPT. Lưu ý hai công ty khác ngành: mục đích là hiểu <b>mô hình kinh doanh khác nhau tạo ra cấu trúc tài chính khác nhau thế nào</b>, không phải chấm "ai giỏi hơn". Đây là bài luyện tập, không phải khuyến nghị đầu tư.</p>

<h4>Bước 1 — Cơ cấu tài sản và nguồn vốn (45 phút)</h4>
<p>Lấy CĐKT năm gần nhất. Điền bảng theo % tổng tài sản:</p>
<table>
<tr><th>Khoản mục</th><th>VNM (tỷ đ)</th><th>VNM (% TTS)</th><th>FPT (tỷ đ)</th><th>FPT (% TTS)</th></tr>
<tr><td>Tiền + tiền gửi/đầu tư ngắn hạn</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Phải thu khách hàng</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Hàng tồn kho</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Tài sản cố định</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Nợ vay (ngắn + dài hạn)</td><td></td><td></td><td></td><td></td></tr>
<tr><td>Vốn chủ sở hữu</td><td></td><td></td><td></td><td></td></tr>
<tr><td><b>Tổng tài sản</b></td><td></td><td>100%</td><td></td><td>100%</td></tr>
</table>
<p><b>Ví dụ:</b> Một công ty giả định có tổng tài sản 1.500 tỷ, tồn kho 180 tỷ → tồn kho chiếm 180 ÷ 1.500 = <b>12%</b> tổng tài sản; tài sản cố định 700 tỷ → <b>46,7%</b>. Công ty sản xuất thường có tài sản cố định và tồn kho cao; công ty dịch vụ/công nghệ thường có tồn kho thấp hơn.</p>

<h4>Bước 2 — Vốn lưu động (30 phút)</h4>
<table>
<tr><th>Chỉ số</th><th>VNM</th><th>FPT</th></tr>
<tr><td>DSO (ngày)</td><td></td><td></td></tr>
<tr><td>DIO (ngày)</td><td></td><td></td></tr>
<tr><td>DPO (ngày)</td><td></td><td></td></tr>
<tr><td>CCC (ngày)</td><td></td><td></td></tr>
<tr><td>Nợ vay ròng (tỷ đ)</td><td></td><td></td></tr>
</table>

<h4>Bước 3 — Dòng tiền 3 năm (45 phút)</h4>
<table>
<tr><th>Chỉ tiêu (tỷ đ)</th><th colspan="3">VNM</th><th colspan="3">FPT</th></tr>
<tr><td></td><td>Năm 1</td><td>Năm 2</td><td>Năm 3</td><td>Năm 1</td><td>Năm 2</td><td>Năm 3</td></tr>
<tr><td>LNST</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>CFO</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Capex</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>FCF = CFO − Capex</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Cổ tức tiền đã trả</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Dấu (CFO, CFI, CFF)</td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ:</b> Năm 1 một công ty giả định có CFO 200, capex 120 → FCF 80; cổ tức đã trả 70 → FCF đủ trả cổ tức, còn dư 10. Nếu năm 2 capex tăng lên 250 vì xây nhà máy lớn → FCF = 200 − 250 = −50: không đủ trả cổ tức, phải dùng tiền tích lũy hoặc đi vay. Điều đó chấp nhận được nếu nhà máy mới sẽ sinh lời — hãy tìm hiểu kế hoạch đầu tư trong báo cáo thường niên.</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Mẫu so sánh cơ cấu tài sản của hai công ty dạng cột chồng 100%">
<text x="180" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Công ty sản xuất (giả định)</text>
<text x="460" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Công ty công nghệ (giả định)</text>
<rect x="110" y="34" width="140" height="32" style="fill:var(--up);fill-opacity:0.5"/>
<text x="180" y="54" text-anchor="middle" style="fill:var(--text);font-size:11px">Tiền, tiền gửi 20%</text>
<rect x="110" y="66" width="140" height="16" style="fill:var(--accent);fill-opacity:0.5"/>
<text x="180" y="78" text-anchor="middle" style="fill:var(--text);font-size:11px">Phải thu 10%</text>
<rect x="110" y="82" width="140" height="24" style="fill:var(--c2);fill-opacity:0.5"/>
<text x="180" y="98" text-anchor="middle" style="fill:var(--text);font-size:11px">Tồn kho 15%</text>
<rect x="110" y="106" width="140" height="90" style="fill:var(--muted);fill-opacity:0.4"/>
<text x="180" y="155" text-anchor="middle" style="fill:var(--text);font-size:11px">TSCĐ, dài hạn 55%</text>
<rect x="390" y="34" width="140" height="57" style="fill:var(--up);fill-opacity:0.5"/>
<text x="460" y="66" text-anchor="middle" style="fill:var(--text);font-size:11px">Tiền, tiền gửi 35%</text>
<rect x="390" y="91" width="140" height="40" style="fill:var(--accent);fill-opacity:0.5"/>
<text x="460" y="115" text-anchor="middle" style="fill:var(--text);font-size:11px">Phải thu 25%</text>
<rect x="390" y="131" width="140" height="8" style="fill:var(--c2);fill-opacity:0.5"/>
<text x="540" y="139" style="fill:var(--text);font-size:11px">Tồn kho 5%</text>
<rect x="390" y="139" width="140" height="57" style="fill:var(--muted);fill-opacity:0.4"/>
<text x="460" y="171" text-anchor="middle" style="fill:var(--text);font-size:11px">TSCĐ, dài hạn 35%</text>
<text x="320" y="220" text-anchor="middle" style="fill:var(--muted);font-size:11px">Cột cao = 100% tổng tài sản (số liệu minh họa) — vẽ lại với số thật của VNM và FPT</text>
</svg><figcaption>Hình: Mẫu cột chồng 100% so sánh cơ cấu tài sản của 2 mô hình kinh doanh</figcaption></figure>

<h4>Bước 4 — Kết luận (30 phút)</h4>
<p>Viết 6–10 câu trả lời: (1) Cơ cấu tài sản khác nhau thế nào và vì sao (gắn với mô hình kinh doanh)? (2) Công ty nào dùng nợ vay nhiều hơn? (3) Lợi nhuận của công ty nào chuyển thành tiền tốt hơn? (4) FCF có đủ trả cổ tức không? (5) Có cờ đỏ nào không?</p>

<h4>Tiêu chí tự đánh giá</h4>
<ul>
<li>☐ Điền đủ 3 bảng, số liệu đã đối chiếu với BCTC gốc ít nhất 3 con số.</li>
<li>☐ Có hình cột chồng 100% cho 2 công ty.</li>
<li>☐ Kết luận giải thích bằng mô hình kinh doanh, không chỉ liệt kê số.</li>
<li>☐ Có kiểm tra cờ đỏ và nêu rõ "có/không".</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp Fisher khoảng 50–80 trang. Chú ý phần Fisher nói về <b>khi nào nên mua</b> và <b>khi nào nên bán</b>. Ông nổi tiếng với quan điểm: nếu đã chọn đúng một công ty xuất sắc thì hiếm khi cần bán.</p>
<p><b>Ví dụ:</b> Theo quan điểm của Fisher, giá cổ phiếu tăng 50% không phải lý do để bán; lý do bán hợp lý là: bạn đã phân tích sai ngay từ đầu, công ty không còn đáp ứng các tiêu chí ban đầu (ban lãnh đạo thay đổi xấu, hết dư địa tăng trưởng), hoặc tìm được cơ hội tốt hơn rõ rệt.</p>
<p><b>Câu hỏi sau khi đọc:</b> Bạn đồng ý hay không đồng ý với quan điểm "hiếm khi bán"? Nó phù hợp với người mới như bạn ở điểm nào, không phù hợp ở điểm nào?</p>
`,
  quiz: [
    { q: "Tồn kho 300 tỷ, tổng tài sản 2.000 tỷ. Tồn kho chiếm bao nhiêu % tổng tài sản?", options: ["6,7%", "15%", "30%", "66,7%"], answer: 1, explain: "300 ÷ 2.000 = 15%." },
    { q: "FCF âm trong năm công ty xây nhà máy lớn. Nhận định đúng nhất?", options: ["Chắc chắn là cờ đỏ, phải bán ngay", "Có thể chấp nhận nếu dự án sinh lời; cần tìm hiểu kế hoạch đầu tư", "Không liên quan đến công ty", "FCF không bao giờ âm"], answer: 1, explain: "Capex lớn làm FCF âm tạm thời; điều quan trọng là khoản đầu tư có hiệu quả không." }
  ]
},
{
  id: "w06-7",
  week: 6,
  day: 7,
  title: "Ôn tập tuần 6: Dòng tiền là vua",
  minutes: 240,
  summary: "Ôn CĐKT chi tiết, báo cáo LCTT, cờ đỏ, ý kiến kiểm toán và so sánh công ty.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Hoàn thành phần lớn cuốn Fisher. Chú ý những <b>sai lầm nhà đầu tư nên tránh</b> mà Fisher liệt kê, ví dụ: quá chú trọng vào việc mua rẻ vài đồng, đa dạng hóa quá mức vào những công ty mình không hiểu, chạy theo đám đông.</p>
<p><b>Ví dụ:</b> Bạn định mua 100 cổ phiếu của một công ty tốt ở giá 50.000đ nhưng cố đặt lệnh 49.500đ để "rẻ hơn" 50.000đ tổng cộng. Giá chạy lên 60.000đ và bạn không mua được. Fisher cho rằng tiết kiệm vài trăm đồng mỗi cổ phiếu có thể làm bạn lỡ một cơ hội lớn — nếu đã phân tích kỹ, đừng "mặc cả" từng bước giá.</p>
<p><b>Câu hỏi sau khi đọc:</b> Tóm tắt Fisher trong 5 câu. Ý tưởng nào bạn sẽ áp dụng ngay khi chọn cổ phiếu ở tuần 8?</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Sơ đồ tóm tắt kiến thức tuần 6">
<rect x="235" y="100" width="170" height="50" rx="10" style="fill:var(--c2);fill-opacity:0.2;stroke:var(--c2)"/>
<text x="320" y="122" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Tuần 6</text>
<text x="320" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">Dòng tiền là vua</text>
<rect x="15" y="15" width="200" height="85" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="115" y="37" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">CĐKT chi tiết</text>
<text x="115" y="57" text-anchor="middle" style="fill:var(--text);font-size:11px">DSO · DIO · DPO · CCC</text>
<text x="115" y="75" text-anchor="middle" style="fill:var(--text);font-size:11px">nợ vay ròng · người mua trả trước</text>
<rect x="425" y="15" width="200" height="85" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="525" y="37" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">Lưu chuyển tiền tệ</text>
<text x="525" y="57" text-anchor="middle" style="fill:var(--text);font-size:11px">CFO · CFI · CFF</text>
<text x="525" y="75" text-anchor="middle" style="fill:var(--text);font-size:11px">FCF = CFO − capex</text>
<rect x="15" y="150" width="200" height="85" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="115" y="172" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:bold">Cờ đỏ</text>
<text x="115" y="192" text-anchor="middle" style="fill:var(--text);font-size:11px">LN tăng, CFO âm · phải thu,</text>
<text x="115" y="210" text-anchor="middle" style="fill:var(--text);font-size:11px">tồn kho phình · vay trả cổ tức</text>
<rect x="425" y="150" width="200" height="85" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="525" y="172" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:bold">Kiểm toán & so sánh</text>
<text x="525" y="192" text-anchor="middle" style="fill:var(--text);font-size:11px">4 mức ý kiến · đoạn nhấn mạnh</text>
<text x="525" y="210" text-anchor="middle" style="fill:var(--text);font-size:11px">common-size · cùng ngành</text>
<line x1="215" y1="70" x2="235" y2="105" style="stroke:var(--muted)"/>
<line x1="425" y1="70" x2="405" y2="105" style="stroke:var(--muted)"/>
<line x1="215" y1="180" x2="235" y2="145" style="stroke:var(--muted)"/>
<line x1="425" y1="180" x2="405" y2="145" style="stroke:var(--muted)"/>
</svg><figcaption>Hình: Bản đồ kiến thức tuần 6</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ol>
<li>Công thức DSO, DIO, DPO, CCC. CCC âm có nghĩa gì?</li>
<li>Ba dòng tiền gồm những gì? Cho một ví dụ giao dịch thuộc mỗi dòng.</li>
<li>Vì sao "lãi mà vẫn phá sản" có thể xảy ra?</li>
<li>Kể 5 cờ đỏ trên BCTC.</li>
<li>Bốn mức ý kiến kiểm toán từ tốt đến xấu.</li>
</ol>
<p><b>Ví dụ:</b> Câu 2 có thể trả lời: "Thu tiền bán hàng → CFO; mua máy móc mới → CFI; vay ngân hàng → CFF."</p>

<h3>Tổng kết tuần (1 giờ)</h3>
<ul>
<li>☐ Tính được CCC và FCF cho ít nhất 1 công ty.</li>
<li>☐ Đã đọc trang ý kiến kiểm toán và ít nhất 2 mục thuyết minh.</li>
<li>☐ Hoàn thành bài tập lớn VNM – FPT.</li>
<li>☐ Đã đọc gần hết sách Fisher.</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Khi nhìn một doanh nghiệp, giờ bạn sẽ xem những gì mà 2 tuần trước bạn chưa biết xem? Ghi lại 3 điều.</p>
<p><b>Chuẩn bị tuần 7:</b> Tuần sau học <b>định giá</b>: EPS, P/E, P/B, ROE… Hãy ghi sẵn giá cổ phiếu hiện tại của VNM, FPT, VCB, TCB, MBB vào sổ tay.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Hoàn thiện bài tập lớn hoặc ôn lại bài về cờ đỏ. Nếu còn thời gian, chọn 1 mã bất kỳ trong watchlist và kiểm tra nhanh 3 cờ đỏ đầu tiên.</p>
`,
  quiz: [
    { q: "CCC âm nghĩa là gì?", options: ["Công ty đang lỗ", "Công ty thu tiền khách trước khi phải trả nhà cung cấp", "Công ty không có tồn kho", "Công ty không bán chịu"], answer: 1, explain: "CCC âm: tiền từ khách về trước khi phải trả nhà cung cấp — nhà cung cấp đang tài trợ vốn lưu động." },
    { q: "Mua máy móc mới thuộc dòng tiền nào?", options: ["Kinh doanh", "Đầu tư", "Tài chính", "Không thuộc dòng nào"], answer: 1, explain: "Chi mua sắm tài sản cố định (capex) thuộc dòng tiền đầu tư." },
    { q: "Tồn kho 200 tỷ, giá vốn 730 tỷ. DIO khoảng?", options: ["27 ngày", "100 ngày", "365 ngày", "3,65 ngày"], answer: 1, explain: "200 ÷ 730 × 365 = 100 ngày." },
    { q: "CFO 150, capex 200, cổ tức đã trả 100. Công ty lấy tiền trả cổ tức từ đâu?", options: ["Từ FCF dương", "Từ tiền tích lũy hoặc đi vay vì FCF âm 50", "Từ doanh thu tương lai", "Không cần tiền"], answer: 1, explain: "FCF = 150 − 200 = −50, nên cổ tức phải trả bằng tiền tích lũy hoặc vay thêm." },
    { q: "Ý kiến kiểm toán nào tốt nhất?", options: ["Ngoại trừ", "Từ chối đưa ra ý kiến", "Chấp nhận toàn phần", "Trái ngược"], answer: 2, explain: "Chấp nhận toàn phần: BCTC trung thực, hợp lý trên các khía cạnh trọng yếu." },
    { q: "Đoạn nhấn mạnh về \"khả năng hoạt động liên tục\" cảnh báo điều gì?", options: ["Công ty có thể không tiếp tục hoạt động bình thường", "Công ty sắp chia cổ tức lớn", "Công ty đổi kiểm toán", "Không có gì đáng lo"], answer: 0, explain: "Đây là cảnh báo nghiêm trọng về rủi ro công ty không duy trì được hoạt động." },
    { q: "Công ty X lãi 1.000 tỷ/vốn chủ 10.000 tỷ, Y lãi 300 tỷ/vốn chủ 1.500 tỷ. Ai sinh lời trên vốn tốt hơn?", options: ["X", "Y", "Bằng nhau", "Không so sánh được"], answer: 1, explain: "X: 10%; Y: 20% — Y sinh lời trên mỗi đồng vốn gấp đôi." },
    { q: "Cách nào giúp phát hiện chính sách khấu hao \"làm đẹp\" lợi nhuận?", options: ["Xem biểu đồ giá", "Đọc thuyết minh chính sách kế toán", "Xem số lượng cổ đông", "Xem khối lượng giao dịch"], answer: 1, explain: "Thời gian khấu hao được trình bày trong phần chính sách kế toán của thuyết minh." },
    { q: "Theo phương pháp gián tiếp, phải thu khách hàng tăng 50 tỷ thì CFO sẽ?", options: ["Cộng thêm 50 tỷ", "Trừ đi 50 tỷ", "Không đổi", "Nhân đôi"], answer: 1, explain: "Phải thu tăng nghĩa là tiền bị giam ở khách hàng, nên trừ khỏi CFO." }
  ]
}
);

// Tuần 7: Định giá
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w07-1",
  week: 7,
  day: 1,
  title: "EPS, P/E và PEG",
  minutes: 120,
  summary: "Tính EPS (cơ bản, pha loãng, 4 quý gần nhất), hiểu P/E là gì, PEG và những bẫy P/E thường gặp.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 1 bài báo hoặc báo cáo phân tích có nhắc "P/E". Ghi lại: P/E của mã đó, P/E trung bình ngành hoặc VN-Index nếu bài có nhắc, và bài báo cho rằng như vậy là đắt hay rẻ.</div>

<h3>1. EPS — lợi nhuận trên mỗi cổ phiếu</h3>
<p><b>EPS</b> (Earnings Per Share) = LNST của cổ đông công ty mẹ ÷ Số cổ phiếu đang lưu hành bình quân. Nó cho biết mỗi cổ phiếu bạn cầm "làm ra" bao nhiêu đồng lợi nhuận mỗi năm.</p>
<p><b>Ví dụ:</b> Công ty A (số liệu minh họa) có LNST cổ đông mẹ 130 tỷ, 50 triệu cổ phiếu lưu hành → EPS = 130.000.000.000 ÷ 50.000.000 = <b>2.600đ/cp</b>. Nếu bạn có 1.000 cổ phiếu, phần lợi nhuận "thuộc về bạn" là 2,6 triệu đồng/năm (dù công ty có thể không chia hết bằng tiền mặt).</p>
<p>Lưu ý: ở Việt Nam, nhiều nguồn trừ thêm <b>quỹ khen thưởng, phúc lợi</b> khỏi lợi nhuận trước khi chia cho số cổ phiếu, nên EPS giữa các trang có thể chênh nhau một chút.</p>
<p><b>Ví dụ:</b> Nếu Công ty A trích quỹ khen thưởng phúc lợi 5 tỷ → EPS = (130 − 5) tỷ ÷ 50 triệu = <b>2.500đ</b>, thấp hơn 100đ so với cách tính không trừ quỹ.</p>

<h3>2. Số cổ phiếu bình quân, EPS pha loãng và EPS 4 quý</h3>
<ul>
<li><b>Bình quân gia quyền</b>: nếu số cổ phiếu thay đổi trong năm, tính theo thời gian lưu hành.</li>
</ul>
<p><b>Ví dụ:</b> Đầu năm có 50 triệu cp; ngày 1/7 phát hành thêm 10 triệu cp. Số cp bình quân = 50 + 10 × 6/12 = <b>55 triệu</b>. EPS = 130 tỷ ÷ 55 triệu ≈ <b>2.364đ</b>.</p>
<ul>
<li><b>EPS pha loãng</b>: tính thêm các cổ phiếu "có thể phát sinh" (trái phiếu chuyển đổi, cổ phiếu thưởng cho nhân viên ESOP…).</li>
</ul>
<p><b>Ví dụ:</b> Ngoài 50 triệu cp, Công ty A có trái phiếu có thể chuyển đổi thành 2,5 triệu cp. EPS pha loãng ≈ 130 tỷ ÷ 52,5 triệu ≈ <b>2.476đ</b> (bỏ qua phần lãi trái phiếu tiết kiệm được cho đơn giản).</p>
<ul>
<li><b>EPS 4 quý gần nhất (trailing)</b>: cộng LNST của 4 quý gần nhất rồi chia số cp. Dùng con số này để P/E luôn cập nhật, không phải chờ hết năm.</li>
</ul>
<p><b>Ví dụ:</b> LNST cổ đông mẹ 4 quý gần nhất: 30 + 35 + 32 + 40 = 137 tỷ → EPS 4 quý = 137 tỷ ÷ 50 triệu = <b>2.740đ</b>.</p>

<h3>3. P/E — trả bao nhiêu đồng cho 1 đồng lợi nhuận</h3>
<p><b>P/E</b> = Giá cổ phiếu ÷ EPS. Nghĩa là nhà đầu tư đang sẵn sàng trả bao nhiêu đồng cho 1 đồng lợi nhuận mỗi năm.</p>
<p><b>Ví dụ:</b> Cổ phiếu Công ty A giá 27.000đ, EPS 2.600đ → P/E = 27.000 ÷ 2.600 ≈ <b>10,4 lần</b>. Ba cách hiểu:</p>
<ul>
<li>Trả 10,4 đồng để "mua" 1 đồng lợi nhuận mỗi năm.</li>
<li>Nếu lợi nhuận giữ nguyên mãi, cần khoảng 10,4 năm để lợi nhuận tích lũy bằng số tiền bỏ ra.</li>
<li><b>Lợi suất lợi nhuận</b> (earnings yield) = 1 ÷ P/E = 1 ÷ 10,4 ≈ <b>9,6%/năm</b> — có thể so sánh với lãi suất tiết kiệm (nhưng nhớ: cổ phiếu rủi ro hơn tiết kiệm nhiều).</li>
</ul>
<p>P/E cao không có nghĩa là "đắt" và P/E thấp không có nghĩa là "rẻ": thị trường trả P/E cao cho công ty được <b>kỳ vọng tăng trưởng mạnh</b>.</p>
<p><b>Ví dụ:</b> Công ty M và N cùng có EPS 2.000đ. M được kỳ vọng tăng lợi nhuận 25%/năm nên giá 40.000đ (P/E 20). N tăng trưởng 2%/năm nên giá 16.000đ (P/E 8). Sau 4 năm, nếu đúng kỳ vọng, EPS của M ≈ 2.000 × 1,25^4 ≈ 4.883đ, của N ≈ 2.000 × 1,02^4 ≈ 2.165đ. Lúc đó P/E của M theo giá mua 40.000đ chỉ còn ≈ 8,2 lần.</p>

<figure class="fig"><svg viewBox="0 0 640 270" role="img" aria-label="Biểu đồ dải P/E: giá cổ phiếu so với các đường EPS nhân 8, 12 và 16 lần">
<line x1="50" y1="230" x2="610" y2="230" style="stroke:var(--line)"/>
<line x1="50" y1="30" x2="50" y2="230" style="stroke:var(--line)"/>
<text x="44" y="234" text-anchor="end" style="fill:var(--muted);font-size:11px">0</text>
<text x="44" y="154" text-anchor="end" style="fill:var(--muted);font-size:11px">20</text>
<text x="44" y="74" text-anchor="end" style="fill:var(--muted);font-size:11px">40</text>
<line x1="50" y1="150" x2="610" y2="150" style="stroke:var(--line);stroke-dasharray:2 4"/>
<line x1="50" y1="70" x2="610" y2="70" style="stroke:var(--line);stroke-dasharray:2 4"/>
<polyline points="80,166 200,159.6 320,150 440,146.8 560,134" style="fill:none;stroke:var(--up);stroke-width:2;stroke-dasharray:6 4"/>
<polyline points="80,134 200,124.4 320,110 440,105.2 560,86" style="fill:none;stroke:var(--ref);stroke-width:2;stroke-dasharray:6 4"/>
<polyline points="80,102 200,89.2 320,70 440,63.6 560,38" style="fill:none;stroke:var(--down);stroke-width:2;stroke-dasharray:6 4"/>
<polyline points="80,142 200,110 320,78 440,122 560,98" style="fill:none;stroke:var(--accent);stroke-width:3"/>
<circle cx="80" cy="142" r="4" style="fill:var(--accent)"/>
<circle cx="200" cy="110" r="4" style="fill:var(--accent)"/>
<circle cx="320" cy="78" r="4" style="fill:var(--accent)"/>
<circle cx="440" cy="122" r="4" style="fill:var(--accent)"/>
<circle cx="560" cy="98" r="4" style="fill:var(--accent)"/>
<text x="566" y="138" style="fill:var(--up);font-size:11px">P/E 8</text>
<text x="566" y="90" style="fill:var(--ref);font-size:11px">P/E 12</text>
<text x="566" y="42" style="fill:var(--down);font-size:11px">P/E 16</text>
<text x="330" y="84" style="fill:var(--text);font-size:11px">P/E ≈ 15</text>
<text x="452" y="128" style="fill:var(--text);font-size:11px">P/E ≈ 10</text>
<text x="80" y="250" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 1</text>
<text x="200" y="250" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 2</text>
<text x="320" y="250" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 3</text>
<text x="440" y="250" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 4</text>
<text x="560" y="250" text-anchor="middle" style="fill:var(--muted);font-size:11px">Năm 5</text>
<text x="56" y="22" style="fill:var(--muted);font-size:11px">Giá (nghìn đồng)</text>
<line x1="300" y1="16" x2="330" y2="16" style="stroke:var(--accent);stroke-width:3"/>
<text x="336" y="20" style="fill:var(--text);font-size:11px">Giá cổ phiếu</text>
<line x1="430" y1="16" x2="460" y2="16" style="stroke:var(--muted);stroke-width:2;stroke-dasharray:6 4"/>
<text x="466" y="20" style="fill:var(--text);font-size:11px">Giá = EPS × P/E</text>
</svg><figcaption>Hình: Dải P/E — EPS tăng từ 2.000đ lên 3.000đ qua 5 năm; giá dao động giữa vùng P/E 10 và 15 (số liệu minh họa)</figcaption></figure>

<h3>4. PEG — P/E có "xứng" với tăng trưởng không?</h3>
<p><b>PEG</b> = P/E ÷ Tốc độ tăng trưởng EPS dự kiến (tính bằng số %, không phải số thập phân). PEG quanh 1 thường được xem là hợp lý; dưới 1 có thể là rẻ so với tăng trưởng (nếu dự báo đúng).</p>
<p><b>Ví dụ:</b> Công ty M: P/E 20, EPS tăng 25%/năm → PEG = 20 ÷ 25 = <b>0,8</b>. Công ty N: P/E 8, EPS tăng 2%/năm → PEG = 8 ÷ 2 = <b>4</b>. Dù P/E của N thấp hơn nhiều, xét theo tăng trưởng thì M lại "rẻ" hơn. Điểm yếu: PEG phụ thuộc hoàn toàn vào dự báo tăng trưởng — dự báo sai thì PEG vô nghĩa.</p>

<h3>5. Những bẫy P/E thường gặp</h3>
<ul>
<li><b>Lợi nhuận đột biến một lần</b> làm P/E thấp giả tạo.
<p><b>Ví dụ:</b> Lợi nhuận bình thường 100 tỷ, P/E 15. Năm nay lãi 250 tỷ nhờ bán đất → P/E "rơi" xuống 6. Năm sau lợi nhuận về 100 tỷ, P/E lại là 15.</p></li>
<li><b>Lợi nhuận giảm tạm thời</b> làm P/E cao giả tạo.
<p><b>Ví dụ:</b> Công ty trích lập dự phòng một lần 80 tỷ, lợi nhuận chỉ còn 20 tỷ → P/E vọt lên 75. Nếu khó khăn chỉ tạm thời, cổ phiếu có thể không đắt như con số P/E.</p></li>
<li><b>Ngành chu kỳ</b> (thép, phân bón, chứng khoán): P/E thấp nhất thường ở <b>đỉnh chu kỳ</b>, khi lợi nhuận cao bất thường.
<p><b>Ví dụ:</b> Năm giá thép tăng vọt, công ty thép lãi kỷ lục, P/E chỉ 4 — trông rất rẻ. Năm sau giá thép giảm, lợi nhuận giảm 80%, giá cổ phiếu giảm mạnh dù P/E lúc mua "thấp".</p></li>
</ul>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy LNST cổ đông mẹ 4 quý gần nhất và số cổ phiếu lưu hành của VNM và FPT.</li>
<li>Tự tính EPS 4 quý và P/E theo giá hiện tại.</li>
<li>So sánh với EPS, P/E hiển thị trên CafeF/Vietstock. Nếu chênh lệch, đoán xem vì sao (quỹ KTPL, số cp, thời điểm cập nhật).</li>
<li>Tính lợi suất lợi nhuận (1 ÷ P/E) và so với lãi suất tiết kiệm 12 tháng hiện tại.</li>
</ol>
<p>Kết quả mong đợi: bảng 2 mã × (EPS tự tính, EPS trên web, P/E, 1/PE) và 1 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>EPS = LNST cổ đông mẹ ÷ số cp bình quân; dùng EPS 4 quý gần nhất cho cập nhật.</li>
<li>P/E = Giá ÷ EPS: trả bao nhiêu đồng cho 1 đồng lợi nhuận/năm.</li>
<li>P/E cao thường phản ánh kỳ vọng tăng trưởng; PEG = P/E ÷ tăng trưởng (%).</li>
<li>Cẩn thận P/E bị méo bởi lợi nhuận bất thường và ngành chu kỳ.</li>
</ul></div>
`,
  quiz: [
    { q: "LNST cổ đông mẹ 200 tỷ, 100 triệu cổ phiếu. EPS là?", options: ["200đ", "2.000đ", "20.000đ", "500đ"], answer: 1, explain: "200.000.000.000 ÷ 100.000.000 = 2.000đ/cp." },
    { q: "Giá 36.000đ, EPS 3.000đ. P/E là?", options: ["8", "10", "12", "108"], answer: 2, explain: "P/E = 36.000 ÷ 3.000 = 12 lần." },
    { q: "P/E 15, EPS dự kiến tăng 30%/năm. PEG là?", options: ["0,5", "2", "4,5", "45"], answer: 0, explain: "PEG = 15 ÷ 30 = 0,5." }
  ]
},
{
  id: "w07-2",
  week: 7,
  day: 2,
  title: "P/B và giá trị sổ sách",
  minutes: 120,
  summary: "BVPS, P/B, khi nào dùng P/B (ngân hàng, chứng khoán), mối liên hệ P/B = P/E × ROE.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về một ngân hàng hoặc công ty chứng khoán, để ý xem bài báo dùng P/E hay P/B. Ghi lại P/B nếu có. Hôm nay bạn sẽ hiểu vì sao ngành này hay dùng P/B.</div>

<h3>1. Giá trị sổ sách mỗi cổ phiếu (BVPS)</h3>
<p><b>BVPS</b> (Book Value Per Share) = Vốn chủ sở hữu (của cổ đông công ty mẹ) ÷ Số cổ phiếu lưu hành. Đây là giá trị tài sản ròng "trên sổ sách" ứng với mỗi cổ phiếu: nếu bán hết tài sản theo giá sổ sách và trả hết nợ, mỗi cổ phiếu nhận được khoảng chừng đó.</p>
<p><b>Ví dụ:</b> Công ty A có vốn chủ sở hữu 900 tỷ, 50 triệu cổ phiếu → BVPS = 900 tỷ ÷ 50 triệu = <b>18.000đ</b>. Lưu ý BVPS khác với <b>mệnh giá</b> 10.000đ: mệnh giá chỉ là con số danh nghĩa khi phát hành, còn BVPS tăng dần khi công ty tích lũy lợi nhuận.</p>

<h3>2. P/B — trả bao nhiêu lần giá trị sổ sách</h3>
<p><b>P/B</b> = Giá cổ phiếu ÷ BVPS.</p>
<p><b>Ví dụ:</b> Giá Công ty A là 27.000đ, BVPS 18.000đ → P/B = 27.000 ÷ 18.000 = <b>1,5 lần</b>. Nhà đầu tư đang trả 1,5 đồng cho mỗi 1 đồng tài sản ròng trên sổ sách, vì họ tin công ty dùng số vốn đó sinh lời tốt.</p>
<ul>
<li><b>P/B &lt; 1</b>: giá thấp hơn giá trị sổ sách. Có thể là rẻ, nhưng cũng có thể thị trường nghi ngờ tài sản trên sổ bị "thổi phồng" (nợ xấu ẩn, tồn kho mất giá) hoặc công ty sinh lời rất kém.</li>
</ul>
<p><b>Ví dụ:</b> Ngân hàng Z có BVPS 20.000đ nhưng giá chỉ 15.000đ (P/B 0,75). Có thể thị trường lo rằng một phần khoản cho vay sẽ không thu hồi được — nếu nợ xấu thực tế làm vốn chủ giảm 30%, BVPS thật chỉ còn 14.000đ và P/B thật là 1,07.</p>

<h3>3. Khi nào dùng P/B?</h3>
<p>P/B phù hợp với doanh nghiệp mà <b>tài sản chủ yếu là tài sản tài chính</b>, được ghi gần với giá trị thị trường: <b>ngân hàng, công ty chứng khoán, bảo hiểm</b>. Với những ngành này, "vốn" chính là nguyên liệu để kinh doanh (cho vay, cho vay margin, đầu tư).</p>
<p>P/B kém hữu ích với công ty có nhiều tài sản vô hình (thương hiệu, phần mềm, con người) không được ghi đầy đủ trên sổ sách.</p>
<p><b>Ví dụ:</b> Một công ty phần mềm có vốn chủ 5.000 tỷ nhưng giá trị chính là đội ngũ 20.000 kỹ sư và hợp đồng với khách hàng — những thứ không có trên bảng cân đối. P/B của nó có thể là 5 mà vẫn hợp lý. Một ngân hàng có P/B 5 thì gần như chắc chắn là đắt, vì tài sản của ngân hàng (khoản cho vay) đã nằm hết trên sổ.</p>

<h3>4. Liên hệ: P/B = P/E × ROE</h3>
<p>Vì P/B = Giá/BVPS = (Giá/EPS) × (EPS/BVPS) = <b>P/E × ROE</b>. Nghĩa là công ty có ROE cao "xứng đáng" P/B cao hơn.</p>
<p><b>Ví dụ:</b> Công ty A có EPS 2.600đ, BVPS 18.000đ → ROE ≈ 2.600 ÷ 18.000 ≈ 14,4%. P/E = 10,4. Kiểm tra: P/E × ROE = 10,4 × 14,4% ≈ <b>1,5</b> = P/B ✓. Nếu hai ngân hàng cùng P/B 1,5, ngân hàng có ROE 22% sẽ có P/E chỉ 1,5 ÷ 22% ≈ 6,8, còn ngân hàng ROE 12% có P/E 12,5 — ngân hàng ROE cao "rẻ" hơn.</p>

<figure class="fig"><svg viewBox="0 0 640 270" role="img" aria-label="Biểu đồ phân tán P/B theo ROE của các ngân hàng giả định">
<line x1="60" y1="220" x2="610" y2="220" style="stroke:var(--line)"/>
<line x1="60" y1="30" x2="60" y2="220" style="stroke:var(--line)"/>
<text x="60" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">0%</text>
<text x="240" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">10%</text>
<text x="420" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">20%</text>
<text x="600" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">30%</text>
<text x="330" y="258" text-anchor="middle" style="fill:var(--text);font-size:12px">ROE</text>
<text x="54" y="224" text-anchor="end" style="fill:var(--muted);font-size:11px">0</text>
<text x="54" y="164" text-anchor="end" style="fill:var(--muted);font-size:11px">1,0</text>
<text x="54" y="104" text-anchor="end" style="fill:var(--muted);font-size:11px">2,0</text>
<text x="54" y="44" text-anchor="end" style="fill:var(--muted);font-size:11px">3,0</text>
<text x="70" y="24" style="fill:var(--text);font-size:12px">P/B</text>
<line x1="150" y1="196" x2="546" y2="64" style="stroke:var(--muted);stroke-width:2;stroke-dasharray:6 4"/>
<circle cx="204" cy="178" r="7" style="fill:var(--accent)"/>
<text x="214" y="194" style="fill:var(--text);font-size:11px">NH 1</text>
<circle cx="276" cy="154" r="7" style="fill:var(--accent)"/>
<text x="286" y="170" style="fill:var(--text);font-size:11px">NH 2</text>
<circle cx="330" cy="136" r="7" style="fill:var(--accent)"/>
<text x="340" y="152" style="fill:var(--text);font-size:11px">NH 3</text>
<circle cx="420" cy="106" r="7" style="fill:var(--accent)"/>
<text x="380" y="98" style="fill:var(--text);font-size:11px">NH 4</text>
<circle cx="492" cy="82" r="7" style="fill:var(--accent)"/>
<text x="502" y="98" style="fill:var(--text);font-size:11px">NH 5</text>
<circle cx="420" cy="160" r="8" style="fill:var(--c2)"/>
<text x="432" y="164" style="fill:var(--c2);font-size:11px">NH 6: ROE 20%, P/B 1,0</text>
<text x="432" y="180" style="fill:var(--c2);font-size:11px">rẻ thật hay có rủi ro ẩn?</text>
</svg><figcaption>Hình: Ngân hàng ROE cao thường có P/B cao. Điểm nằm dưới đường xu hướng (NH 6) đáng để tìm hiểu thêm (số liệu minh họa)</figcaption></figure>

<h3>5. P/B ở doanh nghiệp làm ăn thua lỗ</h3>
<p>Khi công ty lỗ, EPS âm nên P/E không dùng được. P/B vẫn tính được, nhưng cần nhớ: lỗ liên tục sẽ <b>bào mòn</b> vốn chủ, làm BVPS giảm dần.</p>
<p><b>Ví dụ:</b> Công ty L có BVPS 12.000đ, giá 8.000đ (P/B 0,67) — trông rẻ. Nhưng mỗi năm lỗ 1.500đ/cp. Sau 2 năm BVPS còn 9.000đ; nếu giá vẫn 8.000đ thì P/B đã là 0,89. Cái "rẻ" ban đầu biến mất dần — đây gọi là <b>bẫy giá trị</b> (value trap).</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy vốn chủ sở hữu (cổ đông công ty mẹ) và số cổ phiếu của 3 ngân hàng VCB, TCB, MBB từ BCTC quý gần nhất.</li>
<li>Tính BVPS và P/B theo giá hiện tại. So với P/B hiển thị trên trang tra cứu.</li>
<li>Tính ROE 4 quý gần nhất của từng ngân hàng (LNST 4 quý ÷ vốn chủ).</li>
<li>Đặt 3 ngân hàng lên một biểu đồ giống hình trên (vẽ tay cũng được).</li>
</ol>
<p>Kết quả mong đợi: bảng 3 ngân hàng × (BVPS, P/B, ROE) và 1 biểu đồ phân tán. Bài này là bước chuẩn bị cho bài tập lớn thứ 7.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>BVPS = Vốn chủ (cổ đông mẹ) ÷ số cp; P/B = Giá ÷ BVPS.</li>
<li>P/B phù hợp với ngân hàng, chứng khoán, bảo hiểm; kém phù hợp với công ty nhiều tài sản vô hình.</li>
<li>P/B = P/E × ROE: ROE cao xứng đáng P/B cao.</li>
<li>P/B &lt; 1 có thể là rẻ, cũng có thể là bẫy giá trị.</li>
</ul></div>
`,
  quiz: [
    { q: "Vốn chủ 2.400 tỷ, 120 triệu cổ phiếu, giá 30.000đ. P/B là?", options: ["1,0", "1,5", "2,0", "0,67"], answer: 1, explain: "BVPS = 2.400 tỷ ÷ 120 triệu = 20.000đ; P/B = 30.000 ÷ 20.000 = 1,5." },
    { q: "P/E 8 và ROE 20%. P/B là?", options: ["0,4", "1,6", "2,5", "28"], answer: 1, explain: "P/B = P/E × ROE = 8 × 0,2 = 1,6." },
    { q: "Ngành nào thường dùng P/B để định giá?", options: ["Phần mềm", "Ngân hàng", "Bán lẻ thời trang", "Quảng cáo"], answer: 1, explain: "Tài sản ngân hàng chủ yếu là tài sản tài chính trên sổ sách, nên P/B có ý nghĩa." }
  ]
},
{
  id: "w07-3",
  week: 7,
  day: 3,
  title: "ROE, ROA và mô hình DuPont",
  minutes: 120,
  summary: "Đo hiệu quả sử dụng vốn và tài sản; tách ROE thành biên lợi nhuận, vòng quay tài sản và đòn bẩy.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về doanh nghiệp có "ROE cao nhất ngành" hoặc báo cáo phân tích nhắc đến ROE. Ghi lại ROE và tự hỏi: ROE cao nhờ đâu — lời nhiều, bán nhiều hay vay nhiều?</div>

<h3>1. ROE — lợi nhuận trên vốn chủ sở hữu</h3>
<p><b>ROE</b> = LNST ÷ Vốn chủ sở hữu bình quân × 100%. Cho biết mỗi 100 đồng vốn của cổ đông tạo ra bao nhiêu đồng lãi mỗi năm. Đây là chỉ số được Warren Buffett và nhiều nhà đầu tư giá trị rất coi trọng.</p>
<p><b>Ví dụ:</b> Công ty A có LNST 140 tỷ, vốn chủ đầu năm 840 tỷ, cuối năm 900 tỷ → vốn chủ bình quân = (840 + 900) ÷ 2 = 870 tỷ → ROE = 140 ÷ 870 ≈ <b>16,1%</b>. Nếu dùng vốn chủ cuối kỳ cho đơn giản: 140 ÷ 900 ≈ 15,6%. Một doanh nghiệp duy trì ROE trên 15% nhiều năm liền thường là doanh nghiệp tốt.</p>

<h3>2. ROA — lợi nhuận trên tổng tài sản</h3>
<p><b>ROA</b> = LNST ÷ Tổng tài sản bình quân × 100%. Cho biết toàn bộ tài sản (dù được tài trợ bằng nợ hay vốn chủ) sinh lời bao nhiêu.</p>
<p><b>Ví dụ:</b> Công ty A có tổng tài sản 1.500 tỷ → ROA ≈ 140 ÷ 1.500 ≈ <b>9,3%</b>. Ngân hàng thường có ROA chỉ khoảng 1–2% vì tài sản rất lớn (tiền cho vay) nhưng biên lãi mỏng; ngân hàng có ROA 2% đã được xem là rất tốt.</p>

<h3>3. Mô hình DuPont: ROE đến từ đâu?</h3>
<p>ROE có thể tách thành 3 thành phần:</p>
<p style="text-align:center"><b>ROE = Biên LN ròng × Vòng quay tài sản × Đòn bẩy tài chính</b><br>= (LNST/Doanh thu) × (Doanh thu/Tổng TS) × (Tổng TS/Vốn chủ)</p>
<p><b>Ví dụ:</b> Công ty A: biên ròng = 140 ÷ 1.000 = 14%; vòng quay tài sản = 1.000 ÷ 1.500 ≈ 0,667 lần; đòn bẩy = 1.500 ÷ 900 ≈ 1,667 lần. ROE = 14% × 0,667 × 1,667 ≈ <b>15,6%</b> ✓ (khớp với 140 ÷ 900).</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Cây DuPont tách ROE thành ba thành phần">
<rect x="240" y="15" width="160" height="50" rx="10" style="fill:var(--accent);fill-opacity:0.2;stroke:var(--accent);stroke-width:2"/>
<text x="320" y="37" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:bold">ROE 15,6%</text>
<text x="320" y="55" text-anchor="middle" style="fill:var(--muted);font-size:11px">LNST ÷ Vốn chủ</text>
<line x1="320" y1="65" x2="320" y2="90" style="stroke:var(--muted)"/>
<line x1="105" y1="90" x2="535" y2="90" style="stroke:var(--muted)"/>
<line x1="105" y1="90" x2="105" y2="110" style="stroke:var(--muted)"/>
<line x1="320" y1="90" x2="320" y2="110" style="stroke:var(--muted)"/>
<line x1="535" y1="90" x2="535" y2="110" style="stroke:var(--muted)"/>
<rect x="20" y="110" width="170" height="90" rx="10" style="fill:var(--card);stroke:var(--up)"/>
<text x="105" y="134" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:bold">Biên LN ròng</text>
<text x="105" y="158" text-anchor="middle" style="fill:var(--text);font-size:13px">14%</text>
<text x="105" y="182" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lời bao nhiêu/đồng bán</text>
<text x="212" y="160" text-anchor="middle" style="fill:var(--text);font-size:20px">×</text>
<rect x="235" y="110" width="170" height="90" rx="10" style="fill:var(--card);stroke:var(--c2)"/>
<text x="320" y="134" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:bold">Vòng quay tài sản</text>
<text x="320" y="158" text-anchor="middle" style="fill:var(--text);font-size:13px">0,667 lần</text>
<text x="320" y="182" text-anchor="middle" style="fill:var(--muted);font-size:11px">Bán được bao nhiêu/đồng TS</text>
<text x="428" y="160" text-anchor="middle" style="fill:var(--text);font-size:20px">×</text>
<rect x="450" y="110" width="170" height="90" rx="10" style="fill:var(--card);stroke:var(--down)"/>
<text x="535" y="134" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:bold">Đòn bẩy</text>
<text x="535" y="158" text-anchor="middle" style="fill:var(--text);font-size:13px">1,667 lần</text>
<text x="535" y="182" text-anchor="middle" style="fill:var(--muted);font-size:11px">Tổng TS ÷ Vốn chủ</text>
<text x="320" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">Công ty A (số liệu minh họa): 14% × 0,667 × 1,667 ≈ 15,6%</text>
</svg><figcaption>Hình: Cây DuPont — ROE là tích của biên lợi nhuận, vòng quay tài sản và đòn bẩy</figcaption></figure>

<h3>4. Hai công ty cùng ROE 20% nhưng rất khác nhau</h3>
<table>
<tr><th></th><th>Biên ròng</th><th>Vòng quay TS</th><th>Đòn bẩy</th><th>ROE</th></tr>
<tr><td>Công ty P (hàng tiêu dùng cao cấp)</td><td>20%</td><td>0,5</td><td>2</td><td>20%</td></tr>
<tr><td>Công ty Q (thương mại, vay nhiều)</td><td>2%</td><td>2,5</td><td>4</td><td>20%</td></tr>
</table>
<p><b>Ví dụ:</b> Tính lại: P = 20% × 0,5 × 2 = 20%; Q = 2% × 2,5 × 4 = 20%. Bây giờ giả sử chi phí tăng làm biên lợi nhuận của cả hai giảm 2 điểm %: P còn 18% → ROE = 18% × 0,5 × 2 = 18% (giảm nhẹ). Q còn 0% → ROE = 0% (mất trắng lợi nhuận). Đòn bẩy cao (tài sản gấp 4 lần vốn chủ) cũng nghĩa là tài sản chỉ cần mất giá 25% là vốn chủ của Q bị xóa sạch. ROE của P "chất lượng" hơn nhiều.</p>

<h3>5. Cách dùng ROE đúng</h3>
<ul>
<li>Xem ROE <b>nhiều năm</b> (5 năm), ưu tiên ROE cao <b>và ổn định</b>.</li>
<li>Luôn dùng DuPont để biết ROE đến từ đâu; cẩn thận ROE cao nhờ đòn bẩy.</li>
<li>Cẩn thận ROE cao do vốn chủ quá nhỏ (công ty lỗ lũy kế nhiều, vốn chủ bị bào mòn).</li>
</ul>
<p><b>Ví dụ:</b> Công ty R lỗ nhiều năm, vốn chủ chỉ còn 50 tỷ. Năm nay lãi 25 tỷ → ROE = 50%. Con số trông rất ấn tượng nhưng chỉ vì mẫu số quá nhỏ, không phải vì công ty xuất sắc.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy số liệu năm gần nhất của VNM và FPT: LNST, doanh thu thuần, tổng tài sản, vốn chủ sở hữu.</li>
<li>Tính ROE, ROA và 3 thành phần DuPont của mỗi công ty.</li>
<li>Kiểm tra: tích 3 thành phần có bằng ROE không (sai số nhỏ do làm tròn là bình thường)?</li>
<li>Viết 2 câu: ROE của mỗi công ty chủ yếu đến từ thành phần nào?</li>
</ol>
<p>Kết quả mong đợi: bảng DuPont 2 công ty và 2 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>ROE = LNST ÷ Vốn chủ bình quân; ROA = LNST ÷ Tổng TS bình quân.</li>
<li>DuPont: ROE = Biên ròng × Vòng quay TS × Đòn bẩy.</li>
<li>ROE cao nhờ biên lợi nhuận bền vững tốt hơn ROE cao nhờ vay nợ.</li>
<li>Xem ROE nhiều năm, cẩn thận vốn chủ quá nhỏ.</li>
</ul></div>
`,
  quiz: [
    { q: "LNST 60 tỷ, vốn chủ bình quân 400 tỷ. ROE là?", options: ["6,7%", "15%", "60%", "4%"], answer: 1, explain: "ROE = 60 ÷ 400 = 15%." },
    { q: "Biên ròng 10%, vòng quay tài sản 1,2, đòn bẩy 1,5. ROE là?", options: ["12,7%", "18%", "15%", "10%"], answer: 1, explain: "ROE = 10% × 1,2 × 1,5 = 18%." },
    { q: "Hai công ty cùng ROE 20%. Công ty nào có ROE \"chất lượng\" hơn?", options: ["Công ty có đòn bẩy 5 lần", "Công ty có biên ròng cao, đòn bẩy thấp", "Như nhau", "Công ty có vốn chủ âm"], answer: 1, explain: "ROE đến từ biên lợi nhuận cao và ít nợ bền vững, ít rủi ro hơn ROE nhờ đòn bẩy." }
  ]
},
{
  id: "w07-4",
  week: 7,
  day: 4,
  title: "Sức khỏe tài chính và cổ tức",
  minutes: 120,
  summary: "Nợ/vốn chủ, khả năng thanh toán, khả năng trả lãi; cổ tức tiền mặt, cổ tức cổ phiếu, tỷ suất và các mốc ngày.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Vào mục "Lịch sự kiện" trên CafeF/Vietstock, tìm 2 doanh nghiệp sắp chốt quyền nhận cổ tức. Ghi lại: cổ tức tiền hay cổ phiếu, tỷ lệ bao nhiêu, ngày giao dịch không hưởng quyền.</div>

<h3>1. Nợ trên vốn chủ (D/E)</h3>
<p><b>D/E</b> = Nợ vay (ngắn + dài hạn) ÷ Vốn chủ sở hữu. Một số nguồn dùng tổng nợ phải trả thay vì nợ vay — khi so sánh, nhớ dùng cùng một cách tính.</p>
<p><b>Ví dụ:</b> Công ty A có nợ vay 380 tỷ (200 ngắn hạn + 180 dài hạn), vốn chủ 900 tỷ → D/E = 380 ÷ 900 ≈ <b>0,42 lần</b>. Tính theo tổng nợ phải trả: 600 ÷ 900 ≈ 0,67 lần. Với doanh nghiệp sản xuất, D/E (nợ vay) dưới 1 thường được xem là an toàn; ngân hàng và công ty bất động sản có đặc thù đòn bẩy cao hơn, cần so trong ngành.</p>

<h3>2. Khả năng thanh toán ngắn hạn</h3>
<ul>
<li><b>Hệ số thanh toán hiện hành</b> = Tài sản ngắn hạn ÷ Nợ ngắn hạn.</li>
<li><b>Hệ số thanh toán nhanh</b> = (Tài sản ngắn hạn − Hàng tồn kho) ÷ Nợ ngắn hạn (loại tồn kho vì khó bán gấp).</li>
</ul>
<p><b>Ví dụ:</b> Công ty A có tài sản ngắn hạn 600, tồn kho 180, nợ ngắn hạn 400 (tỷ đồng). Thanh toán hiện hành = 600 ÷ 400 = <b>1,5</b>; thanh toán nhanh = (600 − 180) ÷ 400 = <b>1,05</b>. Nghĩa là kể cả không bán được hàng tồn kho, công ty vẫn đủ tài sản ngắn hạn để trả hết nợ ngắn hạn. Hệ số dưới 1 kéo dài là dấu hiệu căng thẳng thanh khoản.</p>

<h3>3. Khả năng trả lãi vay</h3>
<p><b>Hệ số khả năng trả lãi</b> = EBIT ÷ Chi phí lãi vay, với EBIT = LNTT + Chi phí lãi vay.</p>
<p><b>Ví dụ:</b> Công ty A có LNTT 175 tỷ, lãi vay 30 tỷ → EBIT = 205 tỷ → hệ số = 205 ÷ 30 ≈ <b>6,8 lần</b>: lợi nhuận hoạt động gấp gần 7 lần tiền lãi phải trả, rất an toàn. Nếu hệ số chỉ 1,2 lần, chỉ cần lợi nhuận giảm 20% là công ty không đủ tiền trả lãi.</p>

<figure class="fig"><svg viewBox="0 0 640 200" role="img" aria-label="Thang đánh giá các chỉ số sức khỏe tài chính">
<text x="20" y="40" style="fill:var(--text);font-size:12px">Nợ vay/Vốn chủ</text>
<rect x="170" y="26" width="140" height="20" style="fill:var(--up);fill-opacity:0.5"/>
<rect x="310" y="26" width="140" height="20" style="fill:var(--ref);fill-opacity:0.5"/>
<rect x="450" y="26" width="140" height="20" style="fill:var(--down);fill-opacity:0.5"/>
<text x="240" y="41" text-anchor="middle" style="fill:var(--text);font-size:11px">dưới 0,5</text>
<text x="380" y="41" text-anchor="middle" style="fill:var(--text);font-size:11px">0,5 – 1,5</text>
<text x="520" y="41" text-anchor="middle" style="fill:var(--text);font-size:11px">trên 1,5</text>
<polygon points="229,20 223,10 235,10" style="fill:var(--accent)"/>
<text x="20" y="90" style="fill:var(--text);font-size:12px">Thanh toán hiện hành</text>
<rect x="170" y="76" width="140" height="20" style="fill:var(--down);fill-opacity:0.5"/>
<rect x="310" y="76" width="140" height="20" style="fill:var(--ref);fill-opacity:0.5"/>
<rect x="450" y="76" width="140" height="20" style="fill:var(--up);fill-opacity:0.5"/>
<text x="240" y="91" text-anchor="middle" style="fill:var(--text);font-size:11px">dưới 1</text>
<text x="380" y="91" text-anchor="middle" style="fill:var(--text);font-size:11px">1 – 1,5</text>
<text x="520" y="91" text-anchor="middle" style="fill:var(--text);font-size:11px">trên 1,5</text>
<polygon points="450,70 444,60 456,60" style="fill:var(--accent)"/>
<text x="20" y="140" style="fill:var(--text);font-size:12px">EBIT/Lãi vay</text>
<rect x="170" y="126" width="140" height="20" style="fill:var(--down);fill-opacity:0.5"/>
<rect x="310" y="126" width="140" height="20" style="fill:var(--ref);fill-opacity:0.5"/>
<rect x="450" y="126" width="140" height="20" style="fill:var(--up);fill-opacity:0.5"/>
<text x="240" y="141" text-anchor="middle" style="fill:var(--text);font-size:11px">dưới 2 lần</text>
<text x="380" y="141" text-anchor="middle" style="fill:var(--text);font-size:11px">2 – 5 lần</text>
<text x="520" y="141" text-anchor="middle" style="fill:var(--text);font-size:11px">trên 5 lần</text>
<polygon points="490,120 484,110 496,110" style="fill:var(--accent)"/>
<polygon points="30,178 24,168 36,168" style="fill:var(--accent)"/>
<text x="42" y="178" style="fill:var(--text);font-size:11px">= vị trí của Công ty A (0,42 · 1,5 · 6,8). Ngưỡng chỉ mang tính tham khảo cho doanh nghiệp sản xuất, khác nhau theo ngành.</text>
</svg><figcaption>Hình: Thang tham khảo 3 chỉ số sức khỏe tài chính và vị trí của Công ty A (minh họa)</figcaption></figure>

<h3>4. Cổ tức tiền mặt</h3>
<p>Ở Việt Nam, cổ tức thường công bố theo <b>% mệnh giá</b> (mệnh giá 10.000đ).</p>
<ul>
<li><b>Tỷ suất cổ tức</b> = Cổ tức tiền mỗi cp ÷ Giá cổ phiếu.</li>
<li><b>Tỷ lệ chi trả</b> = Cổ tức mỗi cp ÷ EPS.</li>
</ul>
<p><b>Ví dụ:</b> Công ty A trả cổ tức 10% bằng tiền = 1.000đ/cp. Giá 27.000đ → tỷ suất cổ tức = 1.000 ÷ 27.000 ≈ <b>3,7%</b>. EPS 2.600đ → tỷ lệ chi trả = 1.000 ÷ 2.600 ≈ <b>38%</b>: công ty chia 38% lợi nhuận, giữ lại 62% để tái đầu tư. Bạn có 1.000 cp → nhận 1.000.000đ, trừ thuế TNCN 5% (50.000đ) → thực nhận <b>950.000đ</b>.</p>
<p>Vào <b>ngày giao dịch không hưởng quyền (GDKHQ)</b>, giá tham chiếu được điều chỉnh giảm đúng bằng cổ tức tiền.</p>
<p><b>Ví dụ:</b> Giá đóng cửa trước ngày GDKHQ là 27.000đ, cổ tức 1.000đ → giá tham chiếu ngày GDKHQ = 26.000đ. Bạn không "giàu thêm" nhờ cổ tức: 27.000đ giá trị cổ phiếu chỉ tách thành 26.000đ cổ phiếu + 1.000đ tiền (trước thuế).</p>

<h3>5. Cổ tức cổ phiếu và các mốc ngày</h3>
<p><b>Cổ tức bằng cổ phiếu</b> (hoặc cổ phiếu thưởng): bạn nhận thêm cổ phiếu, giá điều chỉnh giảm tương ứng — tổng giá trị không đổi.</p>
<p><b>Ví dụ:</b> Bạn có 100 cp giá 27.000đ (tổng 2,7 triệu). Công ty chia cổ tức cổ phiếu 20% (100 cp nhận thêm 20 cp). Giá tham chiếu ngày GDKHQ = 27.000 ÷ 1,2 = 22.500đ. Bạn có 120 cp × 22.500đ = 2,7 triệu — không đổi. Cổ tức cổ phiếu chỉ tốt khi công ty dùng phần lợi nhuận giữ lại để tăng trưởng thực sự.</p>

<figure class="fig"><svg viewBox="0 0 640 190" role="img" aria-label="Dòng thời gian các mốc ngày nhận cổ tức">
<line x1="30" y1="90" x2="610" y2="90" style="stroke:var(--line);stroke-width:2"/>
<circle cx="70" cy="90" r="7" style="fill:var(--muted)"/>
<text x="70" y="65" text-anchor="middle" style="fill:var(--text);font-size:12px">Công bố</text>
<text x="70" y="118" text-anchor="middle" style="fill:var(--muted);font-size:11px">HĐQT thông báo</text>
<rect x="150" y="80" width="110" height="20" style="fill:var(--up);fill-opacity:0.3"/>
<text x="205" y="65" text-anchor="middle" style="fill:var(--up);font-size:12px">Mua trong giai đoạn này</text>
<text x="205" y="118" text-anchor="middle" style="fill:var(--up);font-size:11px">→ được nhận cổ tức</text>
<circle cx="290" cy="90" r="7" style="fill:var(--down)"/>
<text x="290" y="65" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:bold">Ngày GDKHQ</text>
<text x="290" y="118" text-anchor="middle" style="fill:var(--muted);font-size:11px">mua từ ngày này:</text>
<text x="290" y="132" text-anchor="middle" style="fill:var(--muted);font-size:11px">KHÔNG nhận</text>
<circle cx="400" cy="90" r="7" style="fill:var(--accent)"/>
<text x="400" y="65" text-anchor="middle" style="fill:var(--text);font-size:12px">Ngày ĐKCC</text>
<text x="400" y="118" text-anchor="middle" style="fill:var(--muted);font-size:11px">chốt danh sách</text>
<text x="400" y="132" text-anchor="middle" style="fill:var(--muted);font-size:11px">(sau GDKHQ 1 ngày LV)</text>
<circle cx="560" cy="90" r="7" style="fill:var(--up)"/>
<text x="560" y="65" text-anchor="middle" style="fill:var(--text);font-size:12px">Ngày thanh toán</text>
<text x="560" y="118" text-anchor="middle" style="fill:var(--muted);font-size:11px">tiền/cp về tài khoản</text>
<text x="320" y="176" text-anchor="middle" style="fill:var(--muted);font-size:11px">GDKHQ = giao dịch không hưởng quyền · ĐKCC = đăng ký cuối cùng · LV = làm việc</text>
</svg><figcaption>Hình: Phải mua cổ phiếu chậm nhất trong phiên liền trước ngày GDKHQ mới có tên nhận cổ tức (theo chu kỳ thanh toán T+2; kiểm tra thông báo cụ thể của từng đợt)</figcaption></figure>

<div class="warn">⚠ Đừng mua cổ phiếu chỉ để "ăn cổ tức" ngay trước ngày GDKHQ: giá sẽ bị điều chỉnh giảm tương ứng và bạn còn mất thuế 5% cùng phí giao dịch.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Tính D/E, thanh toán hiện hành, thanh toán nhanh, EBIT/lãi vay cho VNM năm gần nhất.</li>
<li>Tra lịch sử cổ tức tiền mặt 3 năm của VNM và FPT. Tính tỷ suất cổ tức theo giá hiện tại và tỷ lệ chi trả so với EPS năm tương ứng.</li>
<li>Đánh dấu vị trí của VNM trên 3 thang trong hình.</li>
</ol>
<p>Kết quả mong đợi: 4 chỉ số sức khỏe của VNM, bảng cổ tức 3 năm × 2 công ty.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>D/E, thanh toán hiện hành/nhanh, EBIT/lãi vay cho biết công ty có "khỏe" về tài chính không.</li>
<li>Cổ tức % mệnh giá: 10% = 1.000đ/cp; tỷ suất cổ tức = cổ tức ÷ giá; tỷ lệ chi trả = cổ tức ÷ EPS.</li>
<li>Ngày GDKHQ giá được điều chỉnh giảm — cổ tức không làm bạn giàu thêm ngay lập tức.</li>
<li>Mua chậm nhất phiên liền trước ngày GDKHQ mới được nhận quyền.</li>
</ul></div>
`,
  quiz: [
    { q: "Cổ tức tiền 15% mệnh giá, giá cổ phiếu 50.000đ. Tỷ suất cổ tức là?", options: ["15%", "3%", "1,5%", "7,5%"], answer: 1, explain: "15% × 10.000 = 1.500đ; 1.500 ÷ 50.000 = 3%." },
    { q: "Tài sản ngắn hạn 500, tồn kho 200, nợ ngắn hạn 400. Hệ số thanh toán nhanh?", options: ["1,25", "0,75", "0,5", "1,75"], answer: 1, explain: "(500 − 200) ÷ 400 = 0,75." },
    { q: "Giá 30.000đ trước GDKHQ, chia cổ tức cổ phiếu 50% (2:1). Giá tham chiếu ngày GDKHQ?", options: ["15.000đ", "20.000đ", "25.000đ", "30.000đ"], answer: 1, explain: "30.000 ÷ (1 + 50%) = 20.000đ." }
  ]
},
{
  id: "w07-5",
  week: 7,
  day: 5,
  title: "So sánh trong ngành và biên an toàn",
  minutes: 120,
  summary: "Định giá tương đối trong cùng ngành, vì sao các ngân hàng có P/E, P/B khác nhau, và nguyên tắc biên an toàn.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 1 báo cáo phân tích (của công ty chứng khoán) có "giá mục tiêu". Ghi lại giá mục tiêu, giá hiện tại và phương pháp định giá họ dùng (P/E, P/B hay chiết khấu dòng tiền). Giá mục tiêu chỉ là ước tính, không phải lời hứa.</div>

<h3>1. Định giá tương đối: so với "hàng xóm"</h3>
<p>Cách định giá đơn giản và phổ biến nhất: so P/E, P/B của công ty với các công ty <b>cùng ngành</b> và với <b>lịch sử của chính nó</b>.</p>
<p><b>Ví dụ:</b> Các công ty sữa giả định trong ngành có P/E trung bình 15. Công ty A đang có P/E 10,4. Có 2 khả năng: (1) A đang bị định giá thấp — cơ hội; (2) A có vấn đề (tăng trưởng thấp hơn, rủi ro cao hơn) nên thị trường trả giá thấp. Việc của bạn là tìm xem khả năng nào đúng, bằng những gì đã học: tăng trưởng, biên lợi nhuận, ROE, nợ vay, dòng tiền.</p>

<h3>2. Vì sao các ngân hàng có P/E, P/B khác nhau?</h3>
<p>Dù cùng ngành, thị trường trả giá khác nhau cho từng ngân hàng vì:</p>
<table>
<tr><th>Yếu tố</th><th>Ý nghĩa</th><th>Ảnh hưởng đến định giá</th></tr>
<tr><td>Chất lượng tài sản (nợ xấu, tỷ lệ bao phủ nợ xấu)</td><td>Bao nhiêu khoản vay có nguy cơ mất, đã trích dự phòng đủ chưa</td><td>Nợ xấu thấp, dự phòng dày → định giá cao hơn</td></tr>
<tr><td>CASA (tiền gửi không kỳ hạn)</td><td>Nguồn vốn rẻ, ngân hàng trả lãi rất thấp</td><td>CASA cao → chi phí vốn thấp → biên lãi tốt</td></tr>
<tr><td>Tăng trưởng tín dụng, lợi nhuận</td><td>Quy mô và lợi nhuận tăng nhanh đến đâu</td><td>Tăng trưởng cao → P/E cao hơn</td></tr>
<tr><td>ROE</td><td>Hiệu quả sinh lời trên vốn</td><td>ROE cao → P/B cao hơn</td></tr>
<tr><td>Cơ cấu sở hữu, minh bạch</td><td>Sở hữu nhà nước, room ngoại, chất lượng công bố thông tin</td><td>Minh bạch, được khối ngoại ưa chuộng → định giá cao hơn</td></tr>
</table>
<p><b>Ví dụ:</b> (ngân hàng giả định) Ngân hàng K có nợ xấu 1%, tỷ lệ bao phủ nợ xấu 200% (đã trích dự phòng gấp đôi nợ xấu), CASA 35%, ROE 20% → thị trường trả P/B 2,0. Ngân hàng L có nợ xấu 3%, bao phủ 60%, CASA 10%, ROE 12% → P/B chỉ 0,9. P/B thấp của L không hẳn là "rẻ": nếu phải trích thêm dự phòng cho phần nợ xấu chưa được bao phủ, lợi nhuận và vốn chủ của L sẽ giảm.</p>

<h3>3. Giá trị nội tại — ước tính đơn giản</h3>
<p><b>Giá trị nội tại</b> là giá trị "thật" của doanh nghiệp theo ước tính của bạn. Cách đơn giản nhất: <b>Giá trị = EPS dự kiến × P/E hợp lý</b>.</p>
<p><b>Ví dụ:</b> Bạn ước tính EPS năm tới của Công ty A là 3.000đ (tăng ~15% so với 2.600đ). Bạn cho rằng P/E hợp lý cho A là 12 (thấp hơn trung bình ngành 15 vì A tăng trưởng chậm hơn) → giá trị nội tại ≈ 3.000 × 12 = <b>36.000đ</b>. Đây chỉ là <b>ước tính</b> dựa trên 2 giả định — mỗi giả định đều có thể sai.</p>

<h3>4. Biên an toàn (margin of safety)</h3>
<p>Ý tưởng nổi tiếng của Benjamin Graham: chỉ mua khi giá thấp hơn giá trị nội tại một khoảng đủ lớn, để <b>chừa chỗ cho sai sót</b> trong ước tính.</p>
<p><b>Biên an toàn</b> = (Giá trị nội tại − Giá thị trường) ÷ Giá trị nội tại.</p>
<p><b>Ví dụ:</b> Giá trị nội tại ước tính 36.000đ, giá hiện tại 27.000đ → biên an toàn = (36.000 − 27.000) ÷ 36.000 = <b>25%</b>. Giả sử bạn đã quá lạc quan và EPS thực tế chỉ 2.400đ → giá trị = 2.400 × 12 = 28.800đ — vẫn cao hơn giá mua 27.000đ. Biên an toàn đã "bảo vệ" bạn khỏi sai lầm dự báo.</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Biên an toàn giữa giá thị trường và giá trị nội tại">
<line x1="60" y1="190" x2="600" y2="190" style="stroke:var(--line)"/>
<rect x="100" y="70" width="120" height="120" style="fill:var(--accent);fill-opacity:0.7"/>
<text x="160" y="62" text-anchor="middle" style="fill:var(--text);font-size:12px">27.000đ</text>
<text x="160" y="208" text-anchor="middle" style="fill:var(--text);font-size:12px">Giá thị trường</text>
<rect x="420" y="30" width="120" height="160" style="fill:var(--up);fill-opacity:0.7"/>
<text x="480" y="22" text-anchor="middle" style="fill:var(--text);font-size:12px">36.000đ</text>
<text x="480" y="208" text-anchor="middle" style="fill:var(--text);font-size:12px">Giá trị nội tại (ước tính)</text>
<rect x="420" y="30" width="120" height="40" style="fill:var(--ref);fill-opacity:0.6"/>
<text x="480" y="55" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">Biên an toàn 25%</text>
<line x1="220" y1="70" x2="420" y2="70" style="stroke:var(--muted);stroke-dasharray:4 4"/>
<line x1="420" y1="62" x2="545" y2="62" style="stroke:var(--down);stroke-width:2;stroke-dasharray:3 3"/>
<text x="560" y="66" style="fill:var(--down);font-size:11px">28.800đ</text>
<text x="560" y="80" style="fill:var(--down);font-size:11px">nếu dự báo</text>
<text x="560" y="94" style="fill:var(--down);font-size:11px">quá lạc quan</text>
<text x="320" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">Dù ước tính sai,</text>
<text x="320" y="124" text-anchor="middle" style="fill:var(--muted);font-size:11px">giá trị vẫn trên giá mua</text>
</svg><figcaption>Hình: Biên an toàn là "tấm đệm" giữa giá mua và giá trị ước tính (Công ty A, số liệu minh họa)</figcaption></figure>

<h3>5. Định giá là một khoảng, không phải một con số</h3>
<p>Hãy luôn tính 3 kịch bản: xấu – cơ sở – tốt.</p>
<p><b>Ví dụ:</b></p>
<table>
<tr><th>Kịch bản</th><th>EPS dự kiến</th><th>P/E</th><th>Giá trị</th></tr>
<tr><td>Xấu</td><td>2.400đ</td><td>10</td><td>24.000đ</td></tr>
<tr><td>Cơ sở</td><td>3.000đ</td><td>12</td><td>36.000đ</td></tr>
<tr><td>Tốt</td><td>3.300đ</td><td>14</td><td>46.200đ</td></tr>
</table>
<p>Ở giá 27.000đ: kịch bản xấu lỗ khoảng 11% (24.000 ÷ 27.000 − 1), kịch bản tốt lãi khoảng 71% (46.200 ÷ 27.000 − 1). Rủi ro giảm nhỏ hơn nhiều so với tiềm năng tăng — đó là một thương vụ có tỷ lệ lời/lỗ hấp dẫn (nếu các giả định hợp lý).</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Chọn 1 trong 2 mã VNM hoặc FPT.</li>
<li>Ước tính EPS năm tới theo 3 kịch bản (dựa trên tăng trưởng lợi nhuận 5 năm qua bạn đã tính ở tuần 5).</li>
<li>Chọn P/E hợp lý cho từng kịch bản (tham khảo P/E lịch sử 5 năm của chính mã đó).</li>
<li>Tính giá trị 3 kịch bản và biên an toàn ở kịch bản cơ sở so với giá hiện tại.</li>
</ol>
<p>Kết quả mong đợi: bảng 3 kịch bản và 1 câu "giá hiện tại có biên an toàn bao nhiêu". Đây là bài luyện tập, không phải khuyến nghị mua/bán.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>So sánh P/E, P/B trong cùng ngành và với lịch sử của chính công ty.</li>
<li>Ngân hàng định giá khác nhau do nợ xấu, CASA, tăng trưởng, ROE, minh bạch.</li>
<li>Giá trị nội tại đơn giản = EPS dự kiến × P/E hợp lý; luôn là ước tính.</li>
<li>Biên an toàn = (Giá trị − Giá) ÷ Giá trị; tính 3 kịch bản xấu – cơ sở – tốt.</li>
</ul></div>
`,
  quiz: [
    { q: "Giá trị nội tại ước tính 50.000đ, giá thị trường 40.000đ. Biên an toàn?", options: ["10%", "20%", "25%", "80%"], answer: 1, explain: "(50.000 − 40.000) ÷ 50.000 = 20%." },
    { q: "EPS dự kiến 4.000đ, P/E hợp lý 11. Giá trị ước tính?", options: ["36.400đ", "44.000đ", "40.000đ", "15.000đ"], answer: 1, explain: "4.000 × 11 = 44.000đ." },
    { q: "Ngân hàng có CASA cao thường có lợi thế gì?", options: ["Chi phí vốn thấp hơn", "Không cần trích dự phòng", "Được miễn thuế", "Không có nợ xấu"], answer: 0, explain: "Tiền gửi không kỳ hạn có lãi suất rất thấp, giúp giảm chi phí vốn và tăng biên lãi." }
  ]
},
{
  id: "w07-6",
  week: 7,
  day: 6,
  title: "Bài tập lớn: So sánh định giá VCB, TCB, MBB",
  minutes: 240,
  summary: "Tự tra P/E, P/B, ROE và các chỉ số đặc thù của 3 ngân hàng, giải thích vì sao định giá khác nhau.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p>Mục tiêu: hiểu vì sao 3 ngân hàng lớn được thị trường định giá khác nhau. Bạn tự tra số liệu thật (BCTC quý gần nhất, trang tra cứu), không có đáp án "đúng" duy nhất — điều quan trọng là lập luận. Đây là bài luyện tập, không phải khuyến nghị đầu tư.</p>

<h4>Bước 1 — Bảng định giá (40 phút)</h4>
<table>
<tr><th>Chỉ tiêu</th><th>VCB</th><th>TCB</th><th>MBB</th><th>Nguồn / cách tính</th></tr>
<tr><td>Giá hiện tại (đ)</td><td></td><td></td><td></td><td>Bảng giá</td></tr>
<tr><td>EPS 4 quý (đ)</td><td></td><td></td><td></td><td>LNST cổ đông mẹ 4 quý ÷ số cp</td></tr>
<tr><td>P/E</td><td></td><td></td><td></td><td>Giá ÷ EPS</td></tr>
<tr><td>BVPS (đ)</td><td></td><td></td><td></td><td>Vốn chủ ÷ số cp</td></tr>
<tr><td>P/B</td><td></td><td></td><td></td><td>Giá ÷ BVPS</td></tr>
<tr><td>ROE 4 quý</td><td></td><td></td><td></td><td>LNST 4 quý ÷ vốn chủ bình quân</td></tr>
<tr><td>Tăng trưởng LNST 3 năm (CAGR)</td><td></td><td></td><td></td><td>BCTC năm</td></tr>
</table>
<p><b>Ví dụ:</b> (ngân hàng giả định) LNST cổ đông mẹ 4 quý 12.000 tỷ, 4 tỷ cổ phiếu → EPS = 3.000đ. Vốn chủ 72.000 tỷ → BVPS = 18.000đ. Giá 27.000đ → P/E = 9, P/B = 1,5. ROE ≈ 12.000 ÷ 72.000 ≈ 16,7% (dùng vốn chủ cuối kỳ cho đơn giản). Kiểm tra: P/E × ROE = 9 × 16,7% ≈ 1,5 = P/B ✓.</p>

<h4>Bước 2 — Chỉ số đặc thù ngân hàng (50 phút)</h4>
<p>Tìm trong BCTC (thuyết minh) hoặc báo cáo phân tích, trang tra cứu. Tuần sau sẽ học kỹ từng chỉ số; hôm nay chỉ cần ghi số:</p>
<table>
<tr><th>Chỉ tiêu</th><th>VCB</th><th>TCB</th><th>MBB</th></tr>
<tr><td>Tỷ lệ nợ xấu (nhóm 3–5 ÷ tổng dư nợ)</td><td></td><td></td><td></td></tr>
<tr><td>Tỷ lệ bao phủ nợ xấu (dự phòng ÷ nợ xấu)</td><td></td><td></td><td></td></tr>
<tr><td>CASA (tiền gửi không kỳ hạn ÷ tổng tiền gửi)</td><td></td><td></td><td></td></tr>
<tr><td>Tăng trưởng cho vay khách hàng (năm)</td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ:</b> Nợ nhóm 3–5 là 6.000 tỷ, tổng dư nợ cho vay 400.000 tỷ → tỷ lệ nợ xấu = 1,5%. Dự phòng rủi ro cho vay 9.000 tỷ → tỷ lệ bao phủ = 9.000 ÷ 6.000 = 150%.</p>

<h4>Bước 3 — Biểu đồ (20 phút)</h4>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Khung biểu đồ phân tán P/B theo ROE để tự điền 3 ngân hàng">
<line x1="70" y1="210" x2="600" y2="210" style="stroke:var(--line)"/>
<line x1="70" y1="30" x2="70" y2="210" style="stroke:var(--line)"/>
<line x1="70" y1="150" x2="600" y2="150" style="stroke:var(--line);stroke-dasharray:2 4"/>
<line x1="70" y1="90" x2="600" y2="90" style="stroke:var(--line);stroke-dasharray:2 4"/>
<line x1="247" y1="30" x2="247" y2="210" style="stroke:var(--line);stroke-dasharray:2 4"/>
<line x1="423" y1="30" x2="423" y2="210" style="stroke:var(--line);stroke-dasharray:2 4"/>
<text x="64" y="214" text-anchor="end" style="fill:var(--muted);font-size:11px">0</text>
<text x="64" y="154" text-anchor="end" style="fill:var(--muted);font-size:11px">1,0</text>
<text x="64" y="94" text-anchor="end" style="fill:var(--muted);font-size:11px">2,0</text>
<text x="64" y="34" text-anchor="end" style="fill:var(--muted);font-size:11px">3,0</text>
<text x="70" y="228" text-anchor="middle" style="fill:var(--muted);font-size:11px">0%</text>
<text x="247" y="228" text-anchor="middle" style="fill:var(--muted);font-size:11px">10%</text>
<text x="423" y="228" text-anchor="middle" style="fill:var(--muted);font-size:11px">20%</text>
<text x="600" y="228" text-anchor="middle" style="fill:var(--muted);font-size:11px">30%</text>
<text x="335" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">ROE</text>
<text x="80" y="24" style="fill:var(--text);font-size:12px">P/B</text>
<circle cx="360" cy="120" r="9" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:3 3"/>
<text x="374" y="124" style="fill:var(--accent);font-size:11px">VCB?</text>
<circle cx="450" cy="100" r="9" style="fill:none;stroke:var(--c2);stroke-width:2;stroke-dasharray:3 3"/>
<text x="464" y="104" style="fill:var(--c2);font-size:11px">TCB?</text>
<circle cx="500" cy="140" r="9" style="fill:none;stroke:var(--c3);stroke-width:2;stroke-dasharray:3 3"/>
<text x="514" y="144" style="fill:var(--c3);font-size:11px">MBB?</text>
<text x="335" y="48" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vị trí các vòng tròn chỉ để minh họa — hãy đặt lại theo số liệu bạn tra được</text>
</svg><figcaption>Hình: Khung biểu đồ để tự đặt 3 ngân hàng theo ROE (trục ngang) và P/B (trục dọc)</figcaption></figure>

<h4>Bước 4 — Câu hỏi dẫn dắt và kết luận (40 phút)</h4>
<ol>
<li>Ngân hàng nào có P/B cao nhất? ROE của nó có cao nhất không? Nếu không, thị trường đang trả thêm cho điều gì (nợ xấu thấp, CASA cao, thương hiệu, sở hữu nhà nước…)?</li>
<li>Ngân hàng nào có P/E thấp nhất? Vì sao thị trường trả ít cho mỗi đồng lợi nhuận của nó?</li>
<li>Có ngân hàng nào nằm "dưới đường xu hướng" (ROE cao nhưng P/B thấp) không? Lý do có thể là gì?</li>
<li>Nếu chỉ được chọn 1 để nghiên cứu sâu hơn, bạn chọn ngân hàng nào và cần tìm hiểu thêm điều gì?</li>
</ol>
<p><b>Ví dụ:</b> Một câu trả lời mẫu (với ngân hàng giả định): "Ngân hàng K có P/B 2,0 dù ROE chỉ 18%, thấp hơn ngân hàng M (ROE 22%, P/B 1,3). Thị trường trả thêm cho K vì nợ xấu thấp hơn (0,8% so với 1,8%), bao phủ nợ xấu cao hơn nhiều (250% so với 90%) và CASA cao hơn — tức lợi nhuận của K được xem là an toàn, bền vững hơn."</p>

<h4>Tiêu chí tự đánh giá</h4>
<ul>
<li>☐ Điền đủ 2 bảng, ghi rõ nguồn và kỳ số liệu.</li>
<li>☐ Kiểm tra lại P/B ≈ P/E × ROE cho từng ngân hàng.</li>
<li>☐ Có biểu đồ phân tán.</li>
<li>☐ Trả lời 4 câu hỏi với lập luận dựa trên số liệu.</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Hoàn thành "Cổ phiếu thường, lợi nhuận phi thường". Sau đó, lật lại "Nhà đầu tư thông minh" (sách tháng 1) và đọc lại phần Graham nói về <b>biên an toàn</b>.</p>
<p><b>Ví dụ:</b> So sánh cách hai tác giả nhìn cùng một cổ phiếu giá 27.000đ, giá trị ước tính 36.000đ: Graham hài lòng vì có biên an toàn 25%. Fisher sẽ hỏi trước: "Công ty có thể tăng trưởng mạnh trong 10 năm tới không?" — nếu có, ông sẵn sàng mua cả khi biên an toàn nhỏ hơn.</p>
<p><b>Câu hỏi sau khi đọc:</b> Bạn nghiêng về cách tiếp cận của Graham hay Fisher? Có thể kết hợp cả hai như thế nào khi chọn cổ phiếu?</p>
`,
  quiz: [
    { q: "Một ngân hàng có P/E 9 và ROE 16,7%. P/B xấp xỉ?", options: ["0,54", "1,5", "2,5", "25,7"], answer: 1, explain: "P/B = P/E × ROE = 9 × 0,167 ≈ 1,5." },
    { q: "Nợ xấu 4.000 tỷ, dự phòng 6.000 tỷ. Tỷ lệ bao phủ nợ xấu?", options: ["67%", "150%", "40%", "250%"], answer: 1, explain: "6.000 ÷ 4.000 = 150%." }
  ]
},
{
  id: "w07-7",
  week: 7,
  day: 7,
  title: "Ôn tập tuần 7: Bộ công cụ định giá",
  minutes: 240,
  summary: "Ôn EPS, P/E, PEG, P/B, ROE/DuPont, sức khỏe tài chính, cổ tức, biên an toàn.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Nếu đã đọc xong Fisher, dành thời gian viết <b>bản tóm tắt 1 trang</b> cuốn sách theo cấu trúc: 3 ý tưởng chính → 2 điều bạn sẽ áp dụng → 1 điều bạn còn nghi ngờ. Phần còn lại: đọc lại các trang bạn đánh dấu.</p>
<p><b>Ví dụ:</b> "3 ý tưởng chính: (1) tìm doanh nghiệp có tiềm năng tăng doanh số nhiều năm; (2) chất lượng và sự chính trực của ban lãnh đạo; (3) tìm hiểu thực địa (scuttlebutt). Áp dụng: hỏi khách hàng/nhân viên khi phân tích một công ty; xem kế hoạch sản phẩm mới trong báo cáo thường niên. Còn nghi ngờ: 'hiếm khi bán' liệu có phù hợp với người mới chưa giỏi chọn công ty?"</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Bảng tóm tắt công thức định giá tuần 7">
<rect x="10" y="10" width="300" height="115" rx="8" style="fill:var(--card);stroke:var(--accent)"/>
<text x="160" y="32" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:bold">Định giá theo lợi nhuận</text>
<text x="25" y="56" style="fill:var(--text);font-size:12px">EPS = LNST cổ đông mẹ ÷ số cp</text>
<text x="25" y="78" style="fill:var(--text);font-size:12px">P/E = Giá ÷ EPS · 1/PE = lợi suất</text>
<text x="25" y="100" style="fill:var(--text);font-size:12px">PEG = P/E ÷ tăng trưởng EPS (%)</text>
<rect x="330" y="10" width="300" height="115" rx="8" style="fill:var(--card);stroke:var(--c2)"/>
<text x="480" y="32" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:bold">Định giá theo tài sản</text>
<text x="345" y="56" style="fill:var(--text);font-size:12px">BVPS = Vốn chủ ÷ số cp</text>
<text x="345" y="78" style="fill:var(--text);font-size:12px">P/B = Giá ÷ BVPS</text>
<text x="345" y="100" style="fill:var(--text);font-size:12px">P/B = P/E × ROE</text>
<rect x="10" y="135" width="300" height="115" rx="8" style="fill:var(--card);stroke:var(--up)"/>
<text x="160" y="157" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:bold">Hiệu quả & sức khỏe</text>
<text x="25" y="181" style="fill:var(--text);font-size:12px">ROE = Biên ròng × Vòng quay × Đòn bẩy</text>
<text x="25" y="203" style="fill:var(--text);font-size:12px">D/E · thanh toán hiện hành / nhanh</text>
<text x="25" y="225" style="fill:var(--text);font-size:12px">EBIT ÷ lãi vay</text>
<rect x="330" y="135" width="300" height="115" rx="8" style="fill:var(--card);stroke:var(--ref)"/>
<text x="480" y="157" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Cổ tức & biên an toàn</text>
<text x="345" y="181" style="fill:var(--text);font-size:12px">Tỷ suất cổ tức = Cổ tức ÷ Giá</text>
<text x="345" y="203" style="fill:var(--text);font-size:12px">Tỷ lệ chi trả = Cổ tức ÷ EPS</text>
<text x="345" y="225" style="fill:var(--text);font-size:12px">Biên an toàn = (GT − Giá) ÷ GT</text>
</svg><figcaption>Hình: Bộ công thức định giá cần thuộc lòng sau tuần 7</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ol>
<li>P/E 10 có 3 cách hiểu nào?</li>
<li>Vì sao ngân hàng dùng P/B còn công ty phần mềm thì không?</li>
<li>Viết công thức DuPont và cho ví dụ hai công ty cùng ROE nhưng chất lượng khác nhau.</li>
<li>Cổ tức tiền 10% nghĩa là bao nhiêu đồng/cp? Giá tham chiếu ngày GDKHQ thay đổi thế nào?</li>
<li>Biên an toàn là gì, vì sao cần?</li>
</ol>
<p><b>Ví dụ:</b> Câu 4: "Cổ tức tiền 10% = 10% × 10.000đ = 1.000đ/cp; ngày GDKHQ giá tham chiếu giảm 1.000đ."</p>

<h3>Tổng kết tuần (1 giờ)</h3>
<ul>
<li>☐ Tự tính được EPS, P/E, P/B, ROE cho ít nhất 3 mã.</li>
<li>☐ Đã làm DuPont cho VNM và FPT.</li>
<li>☐ Hoàn thành bài so sánh VCB, TCB, MBB.</li>
<li>☐ Đã tính 3 kịch bản định giá cho 1 mã.</li>
<li>☐ Đọc xong sách Fisher, có bản tóm tắt 1 trang.</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Trước tuần này, bạn có từng nghĩ "P/E thấp là rẻ" không? Bây giờ bạn sẽ kiểm tra thêm những gì trước khi kết luận một cổ phiếu rẻ?</p>
<p><b>Chuẩn bị tuần 8:</b> Tuần cuối tháng 2 học phân tích ngành và viết bản phân tích 1 trang. Chọn trước 1 cổ phiếu trong watchlist mà bạn muốn phân tích (gợi ý: chọn doanh nghiệp có mô hình kinh doanh dễ hiểu).</p>

<h3>Dự phòng (30 phút)</h3>
<p>Hoàn thiện bài so sánh 3 ngân hàng hoặc làm lại các câu trắc nghiệm sai trong tuần.</p>
`,
  quiz: [
    { q: "Giá 45.000đ, EPS 3.000đ. Lợi suất lợi nhuận (1/PE)?", options: ["15%", "6,7%", "3%", "45%"], answer: 1, explain: "P/E = 15; 1 ÷ 15 ≈ 6,7%." },
    { q: "Vốn chủ 1.800 tỷ, 100 triệu cp, giá 27.000đ. P/B?", options: ["1,0", "1,5", "2,7", "0,67"], answer: 1, explain: "BVPS = 18.000đ; P/B = 27.000 ÷ 18.000 = 1,5." },
    { q: "Biên ròng 5%, vòng quay tài sản 2, đòn bẩy 3. ROE?", options: ["10%", "30%", "15%", "6%"], answer: 1, explain: "5% × 2 × 3 = 30%." },
    { q: "ROE cao nhờ đòn bẩy 6 lần có rủi ro gì?", options: ["Không có rủi ro", "Tài sản giảm giá nhẹ cũng làm vốn chủ giảm mạnh", "Cổ tức chắc chắn tăng", "Thuế cao hơn"], answer: 1, explain: "Với đòn bẩy 6 lần, tài sản giảm ~17% là vốn chủ bị xóa sạch." },
    { q: "Lợi nhuận tăng đột biến do bán tài sản làm P/E thay đổi thế nào?", options: ["P/E thấp giả tạo", "P/E cao giả tạo", "Không đổi", "P/E âm"], answer: 0, explain: "EPS bị đẩy lên bởi khoản một lần nên P/E trông thấp hơn thực tế." },
    { q: "EBIT 300 tỷ, lãi vay 100 tỷ. Khả năng trả lãi?", options: ["3 lần", "0,33 lần", "200 lần", "30%"], answer: 0, explain: "300 ÷ 100 = 3 lần." },
    { q: "Cổ tức 2.000đ/cp, EPS 5.000đ. Tỷ lệ chi trả?", options: ["2,5%", "40%", "250%", "20%"], answer: 1, explain: "2.000 ÷ 5.000 = 40%." },
    { q: "Muốn nhận cổ tức, bạn phải mua cổ phiếu chậm nhất khi nào?", options: ["Trong ngày GDKHQ", "Phiên liền trước ngày GDKHQ", "Ngày thanh toán cổ tức", "Bất kỳ lúc nào trước ngày thanh toán"], answer: 1, explain: "Mua từ ngày GDKHQ trở đi sẽ không có tên trong danh sách nhận quyền." },
    { q: "Định giá 3 kịch bản: xấu 24.000đ, cơ sở 36.000đ, tốt 46.000đ; giá hiện tại 27.000đ. Nhận định hợp lý?", options: ["Rủi ro giảm nhỏ so với tiềm năng tăng, nếu giả định hợp lý", "Chắc chắn lãi", "Chắc chắn lỗ", "Không có ý nghĩa"], answer: 0, explain: "Kịch bản xấu lỗ ~11%, kịch bản tốt lãi ~70% — tỷ lệ lời/lỗ hấp dẫn, nhưng phụ thuộc giả định." }
  ]
}
);

// Tuần 8: Phân tích ngành
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w08-1",
  week: 8,
  day: 1,
  title: "Ngành ngân hàng: NIM, nợ xấu, CASA, LDR, CAR",
  minutes: 120,
  summary: "Ngân hàng kiếm tiền thế nào và 5 chỉ số đặc thù cần xem khi phân tích cổ phiếu ngân hàng.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về "tăng trưởng tín dụng", "lãi suất huy động" hoặc "nợ xấu ngân hàng". Ghi lại: lãi suất huy động đang tăng hay giảm? Điều này ảnh hưởng thế nào đến lợi nhuận ngân hàng?</div>

<h3>1. Ngân hàng kiếm tiền thế nào?</h3>
<p>Ngân hàng nhận tiền gửi (trả lãi thấp) rồi cho vay (thu lãi cao hơn). Phần chênh lệch là <b>thu nhập lãi thuần (NII)</b> — thường chiếm phần lớn thu nhập. Ngoài ra có <b>thu nhập ngoài lãi</b>: phí dịch vụ (thanh toán, thẻ, bảo hiểm…), kinh doanh ngoại hối, chứng khoán. Chi phí lớn nhất cần theo dõi: <b>chi phí dự phòng rủi ro tín dụng</b> (trích trước cho những khoản vay có thể không thu hồi được).</p>
<p><b>Ví dụ:</b> Ngân hàng X (giả định) huy động 100 tỷ, trả lãi bình quân 5%/năm = 5 tỷ. Cho vay 85 tỷ với lãi bình quân 9%/năm = 7,65 tỷ; 15 tỷ còn lại gửi liên ngân hàng/mua trái phiếu lãi 3% = 0,45 tỷ. Thu nhập lãi thuần = 7,65 + 0,45 − 5 = <b>3,1 tỷ</b>. Nếu phải trích dự phòng 1 tỷ cho khoản vay xấu, lợi nhuận giảm đáng kể.</p>

<figure class="fig"><svg viewBox="0 0 640 210" role="img" aria-label="Mô hình kinh doanh của ngân hàng">
<rect x="20" y="70" width="150" height="70" rx="10" style="fill:var(--card);stroke:var(--accent)"/>
<text x="95" y="100" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Người gửi tiền</text>
<text x="95" y="120" text-anchor="middle" style="fill:var(--muted);font-size:11px">nhận lãi ~5%</text>
<rect x="245" y="55" width="150" height="100" rx="10" style="fill:var(--accent);fill-opacity:0.15;stroke:var(--accent);stroke-width:2"/>
<text x="320" y="92" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:bold">Ngân hàng</text>
<text x="320" y="114" text-anchor="middle" style="fill:var(--up);font-size:12px">giữ chênh lệch ~4%</text>
<text x="320" y="132" text-anchor="middle" style="fill:var(--muted);font-size:11px">− chi phí, − dự phòng</text>
<rect x="470" y="70" width="150" height="70" rx="10" style="fill:var(--card);stroke:var(--c2)"/>
<text x="545" y="100" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Người đi vay</text>
<text x="545" y="120" text-anchor="middle" style="fill:var(--muted);font-size:11px">trả lãi ~9%</text>
<line x1="170" y1="90" x2="240" y2="90" style="stroke:var(--accent);stroke-width:2"/>
<polygon points="244,90 234,85 234,95" style="fill:var(--accent)"/>
<text x="207" y="82" text-anchor="middle" style="fill:var(--text);font-size:11px">tiền gửi</text>
<line x1="245" y1="125" x2="174" y2="125" style="stroke:var(--accent);stroke-width:1;stroke-dasharray:4 3"/>
<text x="207" y="143" text-anchor="middle" style="fill:var(--muted);font-size:11px">trả lãi</text>
<line x1="395" y1="90" x2="465" y2="90" style="stroke:var(--c2);stroke-width:2"/>
<polygon points="469,90 459,85 459,95" style="fill:var(--c2)"/>
<text x="432" y="82" text-anchor="middle" style="fill:var(--text);font-size:11px">cho vay</text>
<line x1="470" y1="125" x2="399" y2="125" style="stroke:var(--c2);stroke-width:1;stroke-dasharray:4 3"/>
<text x="432" y="143" text-anchor="middle" style="fill:var(--muted);font-size:11px">thu lãi</text>
<text x="320" y="190" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lãi suất minh họa — thực tế thay đổi theo thời kỳ và từng ngân hàng</text>
</svg><figcaption>Hình: Ngân hàng sống nhờ chênh lệch lãi suất giữa cho vay và huy động</figcaption></figure>

<h3>2. NIM — biên lãi thuần</h3>
<p><b>NIM</b> = Thu nhập lãi thuần ÷ Tài sản sinh lãi bình quân. Cho biết mỗi 100 đồng tài sản sinh lãi mang về bao nhiêu đồng chênh lệch lãi.</p>
<p><b>Ví dụ:</b> Ngân hàng X có thu nhập lãi thuần 17.500 tỷ, tài sản sinh lãi bình quân 500.000 tỷ → NIM = 17.500 ÷ 500.000 = <b>3,5%</b>. Nếu lãi suất huy động tăng nhanh hơn lãi cho vay, NIM bị "bóp" lại; ngân hàng cho vay bán lẻ, tiêu dùng nhiều thường có NIM cao hơn (nhưng rủi ro cũng cao hơn).</p>

<h3>3. Nợ xấu (NPL) và tỷ lệ bao phủ</h3>
<p>Khoản vay được chia thành 5 nhóm theo mức độ rủi ro (chủ yếu theo số ngày quá hạn): nhóm 1 – đủ tiêu chuẩn; nhóm 2 – cần chú ý; nhóm 3 – dưới tiêu chuẩn; nhóm 4 – nghi ngờ; nhóm 5 – có khả năng mất vốn. <b>Nợ xấu = nhóm 3 + 4 + 5</b>.</p>
<ul>
<li><b>Tỷ lệ nợ xấu</b> = Nợ nhóm 3–5 ÷ Tổng dư nợ cho vay.</li>
<li><b>Tỷ lệ bao phủ nợ xấu</b> = Dự phòng rủi ro cho vay ÷ Nợ xấu. Càng cao, ngân hàng càng có "đệm" để hấp thụ tổn thất.</li>
</ul>
<p><b>Ví dụ:</b> Tổng dư nợ 400.000 tỷ, nợ nhóm 3–5 là 6.000 tỷ → tỷ lệ nợ xấu = <b>1,5%</b>. Dự phòng đã trích 9.000 tỷ → bao phủ = <b>150%</b>. Lưu ý thêm <b>nợ nhóm 2</b>: nếu nhóm 2 tăng vọt từ 4.000 lên 12.000 tỷ, có thể một phần sẽ "trượt" xuống nợ xấu trong các quý tới.</p>

<figure class="fig"><svg viewBox="0 0 640 170" role="img" aria-label="Năm nhóm nợ từ đủ tiêu chuẩn đến có khả năng mất vốn">
<rect x="20" y="40" width="116" height="60" style="fill:var(--up);fill-opacity:0.5"/>
<rect x="140" y="40" width="116" height="60" style="fill:var(--ref);fill-opacity:0.5"/>
<rect x="260" y="40" width="116" height="60" style="fill:var(--c2);fill-opacity:0.5"/>
<rect x="380" y="40" width="116" height="60" style="fill:var(--down);fill-opacity:0.45"/>
<rect x="500" y="40" width="116" height="60" style="fill:var(--down);fill-opacity:0.8"/>
<text x="78" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">Nhóm 1</text>
<text x="78" y="86" text-anchor="middle" style="fill:var(--text);font-size:11px">Đủ tiêu chuẩn</text>
<text x="198" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">Nhóm 2</text>
<text x="198" y="86" text-anchor="middle" style="fill:var(--text);font-size:11px">Cần chú ý</text>
<text x="318" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">Nhóm 3</text>
<text x="318" y="86" text-anchor="middle" style="fill:var(--text);font-size:11px">Dưới tiêu chuẩn</text>
<text x="438" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">Nhóm 4</text>
<text x="438" y="86" text-anchor="middle" style="fill:var(--text);font-size:11px">Nghi ngờ</text>
<text x="558" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:bold">Nhóm 5</text>
<text x="558" y="86" text-anchor="middle" style="fill:var(--text);font-size:11px">Có khả năng mất vốn</text>
<line x1="260" y1="115" x2="616" y2="115" style="stroke:var(--down);stroke-width:2"/>
<line x1="260" y1="109" x2="260" y2="121" style="stroke:var(--down);stroke-width:2"/>
<line x1="616" y1="109" x2="616" y2="121" style="stroke:var(--down);stroke-width:2"/>
<text x="438" y="138" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:bold">NỢ XẤU (nhóm 3–5)</text>
<text x="198" y="138" text-anchor="middle" style="fill:var(--muted);font-size:11px">theo dõi: có thể trượt nhóm</text>
<text x="320" y="24" text-anchor="middle" style="fill:var(--muted);font-size:11px">Rủi ro tăng dần, tỷ lệ trích lập dự phòng tăng dần →</text>
</svg><figcaption>Hình: Phân loại 5 nhóm nợ; nợ xấu là nhóm 3, 4, 5</figcaption></figure>

<h3>4. CASA, LDR và CAR</h3>
<ul>
<li><b>CASA</b> = Tiền gửi không kỳ hạn ÷ Tổng tiền gửi khách hàng. Tiền gửi không kỳ hạn gần như không phải trả lãi → CASA cao = vốn rẻ.</li>
</ul>
<p><b>Ví dụ:</b> Ngân hàng có 300.000 tỷ tiền gửi, trong đó 90.000 tỷ không kỳ hạn (lãi ~0,1–0,5%) → CASA = <b>30%</b>. Nếu phần không kỳ hạn này phải huy động bằng tiền gửi kỳ hạn 5%, chi phí lãi tăng thêm khoảng 90.000 × 4,5% ≈ 4.000 tỷ/năm. Đó là lý do ngân hàng cạnh tranh mạnh bằng ứng dụng, miễn phí chuyển khoản để thu hút CASA.</p>
<ul>
<li><b>LDR</b> (tỷ lệ cho vay/huy động) = Dư nợ cho vay ÷ Tiền gửi. LDR quá cao nghĩa là ngân hàng "cho vay gần hết" số tiền huy động, ít dư địa tăng trưởng và rủi ro thanh khoản cao hơn. NHNN có quy định trần với cách tính riêng — kiểm tra quy định hiện hành.</li>
</ul>
<p><b>Ví dụ:</b> Dư nợ 400.000 tỷ, tiền gửi 450.000 tỷ → LDR ≈ <b>89%</b> (theo cách tính đơn giản). Nếu tín dụng muốn tăng 15% (thêm 60.000 tỷ) mà tiền gửi không tăng, LDR sẽ lên ~102% — ngân hàng buộc phải huy động thêm, thường với lãi suất cao hơn.</p>
<ul>
<li><b>CAR</b> (hệ số an toàn vốn) = Vốn tự có ÷ Tài sản có rủi ro (đã quy đổi theo mức rủi ro). Mức tối thiểu theo chuẩn Basel II thường là 8%. CAR sát ngưỡng → ngân hàng phải tăng vốn (thường phát hành thêm cổ phiếu, có thể pha loãng) mới cho vay thêm được.</li>
</ul>
<p><b>Ví dụ:</b> Ngân hàng có vốn tự có 40.000 tỷ, tài sản có rủi ro quy đổi 450.000 tỷ → CAR ≈ <b>8,9%</b>, chỉ hơn ngưỡng 8% một chút. Muốn tăng tín dụng 20%, ngân hàng có thể phải giữ lại lợi nhuận (ít chia cổ tức tiền) hoặc phát hành thêm cổ phiếu.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở BCTC quý gần nhất của 1 ngân hàng trong watchlist (vd MBB). Lưu ý mẫu báo cáo khác với doanh nghiệp thường.</li>
<li>Tìm: thu nhập lãi thuần, chi phí dự phòng rủi ro tín dụng, LNTT.</li>
<li>Trong thuyết minh, tìm bảng phân loại nợ theo nhóm: tính tỷ lệ nợ xấu và tỷ lệ bao phủ.</li>
<li>Tìm tiền gửi không kỳ hạn và tổng tiền gửi khách hàng: tính CASA.</li>
</ol>
<p>Kết quả mong đợi: 5 con số (NII, dự phòng, tỷ lệ nợ xấu, bao phủ, CASA) và 1 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Ngân hàng sống nhờ chênh lệch lãi (NII); chi phí dự phòng là "biến số" lớn của lợi nhuận.</li>
<li>NIM = NII ÷ tài sản sinh lãi bình quân.</li>
<li>Nợ xấu = nhóm 3–5; theo dõi cả nhóm 2 và tỷ lệ bao phủ.</li>
<li>CASA cao = vốn rẻ; LDR cao = ít dư địa; CAR sát ngưỡng = phải tăng vốn.</li>
</ul></div>
`,
  quiz: [
    { q: "Nợ xấu của ngân hàng gồm những nhóm nào?", options: ["Nhóm 1–2", "Nhóm 2–5", "Nhóm 3–5", "Chỉ nhóm 5"], answer: 2, explain: "Nợ xấu là nợ nhóm 3 (dưới tiêu chuẩn), 4 (nghi ngờ), 5 (có khả năng mất vốn)." },
    { q: "Thu nhập lãi thuần 12.000 tỷ, tài sản sinh lãi bình quân 400.000 tỷ. NIM?", options: ["3%", "4%", "33%", "0,3%"], answer: 0, explain: "12.000 ÷ 400.000 = 3%." },
    { q: "CASA cao có lợi gì cho ngân hàng?", options: ["Chi phí vốn thấp hơn", "Nợ xấu bằng 0", "Không phải trích dự phòng", "CAR tự động tăng"], answer: 0, explain: "Tiền gửi không kỳ hạn có lãi suất rất thấp, giảm chi phí huy động." }
  ]
},
{
  id: "w08-2",
  week: 8,
  day: 2,
  title: "Bất động sản và thép: hai ngành chu kỳ",
  minutes: 120,
  summary: "Đặc thù ghi nhận doanh thu, quỹ đất, pháp lý, nợ vay của BĐS; chu kỳ giá hàng hóa và tồn kho của ngành thép.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 1 tin về thị trường nhà đất (mở bán dự án, pháp lý, lãi suất cho vay mua nhà) và 1 tin về giá thép hoặc giá quặng sắt. Ghi lại xu hướng giá đang lên hay xuống.</div>

<h3>1. Bất động sản: doanh thu "theo đợt"</h3>
<p>Doanh nghiệp phát triển BĐS thường chỉ ghi nhận doanh thu khi <b>bàn giao</b> nhà/đất cho khách, không phải lúc bán. Vì vậy doanh thu, lợi nhuận lên xuống thất thường theo tiến độ bàn giao dự án.</p>
<p><b>Ví dụ:</b> Công ty BĐS B mở bán dự án năm 1, khách trả trước 30% (2.000 tỷ, ghi vào "người mua trả tiền trước"). Năm 1 và 2 lợi nhuận gần như bằng 0 vì đang xây. Năm 3 bàn giao, ghi nhận doanh thu 7.000 tỷ và lãi 1.500 tỷ một lần. Nếu chỉ nhìn P/E năm 3 (rất thấp) hoặc năm 2 (rất cao), bạn sẽ kết luận sai.</p>

<h3>2. Bất động sản: những điều cần xem</h3>
<ul>
<li><b>Quỹ đất</b>: diện tích, vị trí, giá vốn đất (mua rẻ từ lâu hay mới mua giá cao).</li>
<li><b>Pháp lý</b>: dự án đã đủ giấy phép, được phép mở bán chưa — vướng pháp lý có thể "đóng băng" dự án nhiều năm.</li>
<li><b>Người mua trả tiền trước</b> và <b>hàng tồn kho</b> (BĐS dở dang): báo trước doanh thu tương lai.</li>
<li><b>Nợ vay và trái phiếu</b>: thời điểm đáo hạn, lãi suất. BĐS rất nhạy cảm với lãi suất và dòng vốn.</li>
</ul>
<p><b>Ví dụ:</b> Công ty BĐS C có tồn kho 20.000 tỷ, vốn chủ 10.000 tỷ, nợ vay và trái phiếu 15.000 tỷ, trong đó 6.000 tỷ đáo hạn trong 12 tháng tới, tiền mặt chỉ 1.000 tỷ. Nếu thị trường trầm lắng, không bán được hàng, công ty khó có tiền trả 6.000 tỷ — đây là rủi ro thanh khoản điển hình của ngành.</p>

<h3>3. Thép: giá bán và chi phí đầu vào</h3>
<p>Lợi nhuận của doanh nghiệp thép phụ thuộc vào <b>chênh lệch giữa giá thép bán ra và giá nguyên liệu</b> (quặng sắt, than cốc, thép phế). Cả hai đều biến động theo thị trường thế giới, đặc biệt là cung cầu tại Trung Quốc.</p>
<p><b>Ví dụ:</b> Giá bán 15 triệu/tấn, chi phí sản xuất 12 triệu/tấn → lãi gộp 3 triệu/tấn (biên 20%). Giá thép giảm 10% còn 13,5 triệu, chi phí chưa kịp giảm (vẫn dùng nguyên liệu mua giá cũ) → lãi gộp chỉ còn 1,5 triệu/tấn (biên 11%). Giá bán chỉ giảm 10% nhưng lãi gộp mỗi tấn giảm <b>50%</b>.</p>

<h3>4. Thép: tồn kho là con dao hai lưỡi</h3>
<p>Doanh nghiệp thép thường giữ tồn kho nguyên liệu lớn (vài tháng sản xuất).</p>
<ul>
<li>Giá đang <b>tăng</b>: hàng tồn mua giá thấp, bán giá cao → lãi "kép".</li>
<li>Giá đang <b>giảm</b>: hàng tồn mua giá cao, bán giá thấp → lỗ, phải trích dự phòng giảm giá tồn kho.</li>
</ul>
<p><b>Ví dụ:</b> Công ty thép T có 500.000 tấn nguyên liệu quy đổi, mua giá trung bình 12 triệu/tấn. Nếu giá nguyên liệu thị trường giảm 15% (còn 10,2 triệu), giá thép bán ra cũng giảm theo → T có thể phải trích dự phòng tới 500.000 × 1,8 triệu = <b>900 tỷ</b> nếu giá trị thuần có thể thực hiện của tồn kho giảm tương ứng.</p>

<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Chu kỳ lợi nhuận ngành thép và P/E tương ứng">
<line x1="40" y1="140" x2="610" y2="140" style="stroke:var(--line)"/>
<path d="M40,140 C90,140 110,50 160,50 C210,50 230,230 280,230 C330,230 350,50 400,50 C450,50 470,230 520,230 C560,230 580,140 610,140" style="fill:none;stroke:var(--accent);stroke-width:3"/>
<circle cx="160" cy="50" r="6" style="fill:var(--up)"/>
<text x="160" y="30" text-anchor="middle" style="fill:var(--text);font-size:12px">Đỉnh: lãi kỷ lục</text>
<text x="160" y="72" text-anchor="middle" style="fill:var(--down);font-size:11px">P/E rất THẤP</text>
<circle cx="280" cy="230" r="6" style="fill:var(--down)"/>
<text x="280" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">Đáy: lãi rất thấp/lỗ</text>
<text x="280" y="212" text-anchor="middle" style="fill:var(--up);font-size:11px">P/E rất CAO hoặc âm</text>
<circle cx="400" cy="50" r="6" style="fill:var(--up)"/>
<text x="400" y="30" text-anchor="middle" style="fill:var(--text);font-size:12px">Đỉnh tiếp theo</text>
<circle cx="520" cy="230" r="6" style="fill:var(--down)"/>
<text x="520" y="250" text-anchor="middle" style="fill:var(--text);font-size:12px">Đáy tiếp theo</text>
<text x="46" y="132" style="fill:var(--muted);font-size:11px">Lợi nhuận</text>
<text x="610" y="158" text-anchor="end" style="fill:var(--muted);font-size:11px">Thời gian →</text>
</svg><figcaption>Hình: Với ngành chu kỳ, P/E thấp nhất thường xuất hiện ở đỉnh chu kỳ — trông "rẻ" nhưng lợi nhuận sắp giảm (minh họa)</figcaption></figure>

<h3>5. Định giá ngành chu kỳ cần cẩn thận</h3>
<p>Với ngành chu kỳ, đừng dùng P/E của một năm. Hãy nhìn <b>lợi nhuận bình quân cả chu kỳ</b> (5–7 năm) hoặc dùng P/B.</p>
<p><b>Ví dụ:</b> Công ty thép có lợi nhuận 7 năm: 500, 1.200, 3.000, 400, −200, 800, 2.000 tỷ → bình quân ≈ (500 + 1.200 + 3.000 + 400 − 200 + 800 + 2.000) ÷ 7 = 7.700 ÷ 7 = <b>1.100 tỷ</b>. Nếu vốn hóa 20.000 tỷ, P/E theo năm đỉnh (3.000 tỷ) chỉ 6,7 nhưng P/E theo bình quân chu kỳ là 18,2 — đắt hơn nhiều so với vẻ ngoài.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Chọn 1 doanh nghiệp thép niêm yết, lấy LNST 7 năm gần nhất. Tính lợi nhuận bình quân và P/E theo năm gần nhất so với P/E theo bình quân.</li>
<li>Chọn 1 doanh nghiệp BĐS niêm yết, ghi: tồn kho, người mua trả tiền trước, nợ vay (gồm trái phiếu), tiền mặt.</li>
<li>Viết 2 câu: rủi ro lớn nhất của mỗi doanh nghiệp là gì?</li>
</ol>
<p>Kết quả mong đợi: bảng 7 năm lợi nhuận thép + 2 P/E; bảng 4 chỉ tiêu BĐS; 2 câu về rủi ro.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>BĐS ghi nhận doanh thu khi bàn giao → lợi nhuận "theo đợt"; xem người mua trả trước, tồn kho, pháp lý, nợ đáo hạn.</li>
<li>Thép: lợi nhuận = chênh lệch giá bán − giá nguyên liệu; tồn kho khuếch đại lãi/lỗ.</li>
<li>Ngành chu kỳ: P/E thấp nhất thường ở đỉnh chu kỳ.</li>
<li>Dùng lợi nhuận bình quân cả chu kỳ hoặc P/B để định giá ngành chu kỳ.</li>
</ul></div>
`,
  quiz: [
    { q: "Doanh nghiệp BĐS thường ghi nhận doanh thu khi nào?", options: ["Khi khách đặt cọc", "Khi bàn giao nhà/đất cho khách", "Khi khởi công", "Khi được cấp phép"], answer: 1, explain: "Doanh thu BĐS thường được ghi nhận khi bàn giao; tiền khách trả trước nằm ở \"người mua trả tiền trước\"." },
    { q: "Giá thép bán ra giảm mạnh khi doanh nghiệp đang có tồn kho lớn mua giá cao. Điều gì có thể xảy ra?", options: ["Lãi đột biến", "Phải trích dự phòng giảm giá tồn kho, lợi nhuận giảm mạnh", "Không ảnh hưởng", "Doanh thu tăng"], answer: 1, explain: "Tồn kho giá cao bán ra giá thấp dẫn đến lỗ và trích dự phòng." },
    { q: "Vì sao không nên dùng P/E của năm đỉnh chu kỳ để định giá cổ phiếu thép?", options: ["Vì lợi nhuận năm đỉnh cao bất thường, P/E trông rẻ giả tạo", "Vì cổ phiếu thép không có EPS", "Vì thép không được niêm yết", "Vì P/E chỉ dùng cho ngân hàng"], answer: 0, explain: "Lợi nhuận đỉnh chu kỳ không bền vững; nên dùng lợi nhuận bình quân chu kỳ hoặc P/B." }
  ]
},
{
  id: "w08-3",
  week: 8,
  day: 3,
  title: "Bán lẻ, công nghệ và chứng khoán",
  minutes: 120,
  summary: "Chỉ số đặc thù: SSSG và vòng quay tồn kho (bán lẻ), hợp đồng ký mới và tỷ giá (công nghệ), thanh khoản và margin (chứng khoán).",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 3 tin: doanh thu một chuỗi bán lẻ, hợp đồng/doanh thu xuất khẩu phần mềm, và giá trị giao dịch bình quân trên sàn HOSE. Ghi lại 3 con số.</div>

<h3>1. Bán lẻ: tăng trưởng từ đâu?</h3>
<p>Doanh thu bán lẻ tăng nhờ 2 nguồn: <b>mở thêm cửa hàng</b> và <b>bán được nhiều hơn ở cửa hàng cũ</b>. Nguồn thứ hai đo bằng <b>SSSG</b> (Same-Store Sales Growth – tăng trưởng doanh thu cửa hàng hiện hữu) và quan trọng hơn, vì mở cửa hàng mới thì tốn vốn, còn cửa hàng cũ bán tốt hơn cho thấy sức hút thật.</p>
<p><b>Ví dụ:</b> Chuỗi R có 100 cửa hàng, doanh thu năm trước 1.000 tỷ. Năm nay mở thêm 25 cửa hàng, tổng doanh thu 1.200 tỷ (+20%) — nghe rất tốt. Nhưng 100 cửa hàng cũ chỉ bán được 950 tỷ (SSSG = 950 ÷ 1.000 − 1 = <b>−5%</b>), 25 cửa hàng mới mang về 250 tỷ. Thực chất sức mua tại cửa hàng cũ đang giảm; tăng trưởng hoàn toàn nhờ "đổ vốn" mở rộng.</p>

<h3>2. Bán lẻ: biên mỏng, vòng quay quyết định</h3>
<ul>
<li>Biên gộp bán lẻ thường thấp (khoảng 15–25%), biên ròng chỉ vài %.</li>
<li><b>Vòng quay hàng tồn kho</b> = Giá vốn ÷ Tồn kho bình quân: hàng quay càng nhanh, vốn càng ít bị giam.</li>
<li>Doanh thu/m², chi phí thuê mặt bằng, số cửa hàng đóng/mở.</li>
</ul>
<p><b>Ví dụ:</b> Chuỗi R có giá vốn 960 tỷ, tồn kho bình quân 160 tỷ → vòng quay = 960 ÷ 160 = <b>6 vòng/năm</b> (hàng nằm kho khoảng 365 ÷ 6 ≈ 61 ngày). Một chuỗi bán lẻ điện thoại có vòng quay 3 vòng (122 ngày) sẽ dễ gặp rủi ro hàng lỗi mốt hơn.</p>

<h3>3. Công nghệ: hợp đồng ký mới và tỷ giá</h3>
<ul>
<li><b>Doanh thu xuất khẩu phần mềm</b> theo thị trường (Mỹ, Nhật, châu Âu, châu Á – Thái Bình Dương).</li>
<li><b>Giá trị hợp đồng ký mới</b> (hoặc backlog – hợp đồng chưa thực hiện): báo trước doanh thu các quý tới.</li>
<li><b>Tỷ giá</b>: doanh thu bằng ngoại tệ, chi phí chủ yếu là lương bằng VND → ngoại tệ tăng giá thường có lợi.</li>
<li><b>Nhân sự</b>: số kỹ sư, tỷ lệ nghỉ việc — vì "tài sản" chính là con người.</li>
</ul>
<p><b>Ví dụ:</b> Công ty phần mềm S có doanh thu từ Nhật 10 tỷ yên/năm. Nếu tỷ giá JPY/VND là 170 → 1.700 tỷ đồng; nếu yên mất giá 10% (còn 153) → chỉ còn 1.530 tỷ đồng, dù khách hàng Nhật không giảm đơn hàng. Ngược lại, nếu S ký mới hợp đồng tăng 30% so với cùng kỳ, doanh thu các quý tới nhiều khả năng tăng tốt.</p>

<h3>4. Chứng khoán: "ăn theo" thị trường</h3>
<p>Lợi nhuận công ty chứng khoán (CTCK) đến từ 4 mảng chính:</p>
<table>
<tr><th>Mảng</th><th>Phụ thuộc vào</th></tr>
<tr><td>Môi giới</td><td>Thanh khoản thị trường × thị phần × mức phí</td></tr>
<tr><td>Cho vay margin</td><td>Dư nợ margin × lãi suất cho vay</td></tr>
<tr><td>Tự doanh</td><td>Lãi/lỗ đầu tư cổ phiếu, trái phiếu của chính CTCK — biến động rất mạnh</td></tr>
<tr><td>Ngân hàng đầu tư (IB)</td><td>Tư vấn phát hành, niêm yết, M&amp;A</td></tr>
</table>
<p><b>Ví dụ:</b> (giả định) Thanh khoản bình quân toàn thị trường 20.000 tỷ/phiên, CTCK có thị phần môi giới 5% → giá trị khách giao dịch qua CTCK ≈ 1.000 tỷ/phiên. Phí bình quân 0,15% → 1,5 tỷ/phiên × 250 phiên ≈ <b>375 tỷ/năm</b>. Dư nợ margin 10.000 tỷ × lãi 11% ≈ <b>1.100 tỷ/năm</b>. Nếu thanh khoản thị trường giảm một nửa, doanh thu môi giới cũng giảm khoảng một nửa và dư nợ margin thường giảm theo. Vì vậy cổ phiếu chứng khoán thường biến động mạnh hơn thị trường (beta cao): tăng mạnh khi thị trường sôi động, giảm mạnh khi thị trường đi xuống.</p>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Ba thẻ chỉ số đặc thù của ngành bán lẻ, công nghệ và chứng khoán">
<rect x="10" y="20" width="195" height="200" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="107" y="48" text-anchor="middle" style="fill:var(--c2);font-size:14px;font-weight:bold">Bán lẻ</text>
<text x="25" y="80" style="fill:var(--text);font-size:12px">• SSSG</text>
<text x="25" y="104" style="fill:var(--text);font-size:12px">• Số cửa hàng mở/đóng</text>
<text x="25" y="128" style="fill:var(--text);font-size:12px">• Vòng quay tồn kho</text>
<text x="25" y="152" style="fill:var(--text);font-size:12px">• Doanh thu/m²</text>
<text x="25" y="176" style="fill:var(--text);font-size:12px">• Biên gộp mỏng</text>
<text x="107" y="206" text-anchor="middle" style="fill:var(--muted);font-size:11px">Nhạy với sức mua</text>
<rect x="222" y="20" width="195" height="200" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="319" y="48" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:bold">Công nghệ</text>
<text x="237" y="80" style="fill:var(--text);font-size:12px">• Hợp đồng ký mới</text>
<text x="237" y="104" style="fill:var(--text);font-size:12px">• Doanh thu xuất khẩu</text>
<text x="237" y="128" style="fill:var(--text);font-size:12px">• Tỷ giá USD, JPY…</text>
<text x="237" y="152" style="fill:var(--text);font-size:12px">• Số kỹ sư, nghỉ việc</text>
<text x="237" y="176" style="fill:var(--text);font-size:12px">• Biên gộp cao</text>
<text x="319" y="206" text-anchor="middle" style="fill:var(--muted);font-size:11px">Nhạy với kinh tế toàn cầu</text>
<rect x="434" y="20" width="195" height="200" rx="10" style="fill:var(--card);stroke:var(--c3);stroke-width:2"/>
<text x="531" y="48" text-anchor="middle" style="fill:var(--c3);font-size:14px;font-weight:bold">Chứng khoán</text>
<text x="449" y="80" style="fill:var(--text);font-size:12px">• Thanh khoản thị trường</text>
<text x="449" y="104" style="fill:var(--text);font-size:12px">• Thị phần môi giới</text>
<text x="449" y="128" style="fill:var(--text);font-size:12px">• Dư nợ margin</text>
<text x="449" y="152" style="fill:var(--text);font-size:12px">• Lãi/lỗ tự doanh</text>
<text x="449" y="176" style="fill:var(--text);font-size:12px">• Vốn chủ (P/B)</text>
<text x="531" y="206" text-anchor="middle" style="fill:var(--muted);font-size:11px">Nhạy với thị trường CK</text>
</svg><figcaption>Hình: Chỉ số đặc thù cần theo dõi của 3 ngành</figcaption></figure>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Chọn 1 doanh nghiệp trong 3 ngành trên có trong watchlist.</li>
<li>Tìm trong báo cáo thường niên / tài liệu đại hội cổ đông / tin tức ít nhất 2 chỉ số đặc thù của ngành đó (vd SSSG và số cửa hàng; hợp đồng ký mới và doanh thu nước ngoài; thị phần môi giới và dư nợ margin).</li>
<li>Viết 3 câu: chỉ số đó đang tốt lên hay xấu đi, và ảnh hưởng gì đến lợi nhuận năm tới.</li>
</ol>
<p>Kết quả mong đợi: 2 chỉ số đặc thù có nguồn và 3 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Bán lẻ: SSSG quan trọng hơn tổng doanh thu; vòng quay tồn kho quyết định hiệu quả vốn.</li>
<li>Công nghệ: hợp đồng ký mới báo trước doanh thu; tỷ giá ảnh hưởng doanh thu quy đổi.</li>
<li>Chứng khoán: lợi nhuận phụ thuộc thanh khoản thị trường, margin, tự doanh — biến động mạnh.</li>
<li>Mỗi ngành có "nhiệt kế" riêng; học đúng chỉ số trước khi phân tích.</li>
</ul></div>
`,
  quiz: [
    { q: "Chuỗi bán lẻ tăng doanh thu 20% nhưng SSSG là −5%. Điều này cho thấy?", options: ["Cửa hàng cũ bán kém đi, tăng trưởng nhờ mở mới", "Mọi cửa hàng đều tăng trưởng tốt", "Công ty đóng cửa hàng", "Không có ý nghĩa"], answer: 0, explain: "SSSG âm nghĩa là doanh thu tại cửa hàng hiện hữu giảm; tăng trưởng đến từ cửa hàng mới." },
    { q: "Giá vốn 1.200 tỷ, tồn kho bình quân 200 tỷ. Vòng quay hàng tồn kho?", options: ["6 vòng", "0,17 vòng", "1.400 vòng", "60 vòng"], answer: 0, explain: "1.200 ÷ 200 = 6 vòng/năm." },
    { q: "Lợi nhuận mảng môi giới của công ty chứng khoán phụ thuộc lớn nhất vào?", options: ["Giá thép", "Thanh khoản thị trường và thị phần", "Số cửa hàng", "Giá dầu"], answer: 1, explain: "Doanh thu môi giới ≈ giá trị giao dịch thị trường × thị phần × phí." }
  ]
},
{
  id: "w08-4",
  week: 8,
  day: 4,
  title: "Ngành chu kỳ, ngành phòng thủ và chu kỳ kinh tế",
  minutes: 120,
  summary: "Phân biệt cổ phiếu chu kỳ, phòng thủ, tăng trưởng; mô hình luân chuyển ngành theo chu kỳ kinh tế.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về tăng trưởng GDP, PMI hoặc lãi suất gần nhất. Tự đánh giá: nền kinh tế đang ở giai đoạn phục hồi, tăng trưởng, đỉnh hay suy giảm? (Không có đáp án chắc chắn — hãy ghi lý do của bạn.)</div>

<h3>1. Ngành chu kỳ</h3>
<p>Doanh thu và lợi nhuận <b>tăng mạnh khi kinh tế tốt, giảm mạnh khi kinh tế xấu</b>. Thường là ngành bán hàng hóa "không thiết yếu" hoặc phụ thuộc vào đầu tư, tín dụng: thép, vật liệu xây dựng, bất động sản, chứng khoán, hóa chất, ô tô, hàng không.</p>
<p><b>Ví dụ:</b> Khi kinh tế suy giảm, các công ty hoãn xây nhà xưởng, người dân hoãn mua nhà → nhu cầu thép, xi măng giảm mạnh. Một công ty thép có thể từ lãi 3.000 tỷ xuống lỗ chỉ trong 1–2 năm, cổ phiếu có thể giảm 50–70%.</p>

<h3>2. Ngành phòng thủ</h3>
<p>Bán sản phẩm, dịch vụ <b>thiết yếu</b> mà người dân vẫn dùng dù kinh tế tốt hay xấu: thực phẩm, đồ uống, sữa, điện, nước, dược phẩm, viễn thông. Doanh thu ổn định, thường trả cổ tức đều, nhưng tăng trưởng chậm.</p>
<p><b>Ví dụ:</b> Khi kinh tế khó khăn, một gia đình có thể hoãn mua xe máy mới, nhưng vẫn mua sữa cho con, vẫn trả tiền điện nước. Doanh thu của công ty sữa có thể chỉ giảm 2–3%, trong khi doanh thu công ty bán xe giảm 20–30%.</p>

<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Mức giảm lợi nhuận giả định của các ngành khi kinh tế suy giảm">
<line x1="400" y1="20" x2="400" y2="225" style="stroke:var(--text)"/>
<text x="400" y="242" text-anchor="middle" style="fill:var(--muted);font-size:11px">0%</text>
<text x="200" y="242" text-anchor="middle" style="fill:var(--muted);font-size:11px">−40%</text>
<line x1="200" y1="20" x2="200" y2="225" style="stroke:var(--line);stroke-dasharray:2 4"/>
<text x="190" y="42" text-anchor="end" style="fill:var(--text);font-size:12px">Sữa, thực phẩm</text>
<rect x="380" y="28" width="20" height="18" style="fill:var(--up)"/>
<text x="408" y="42" style="fill:var(--text);font-size:11px">−4%</text>
<text x="190" y="76" text-anchor="end" style="fill:var(--text);font-size:12px">Điện, nước</text>
<rect x="390" y="62" width="10" height="18" style="fill:var(--up)"/>
<text x="408" y="76" style="fill:var(--text);font-size:11px">−2%</text>
<text x="190" y="110" text-anchor="end" style="fill:var(--text);font-size:12px">Dược phẩm</text>
<rect x="385" y="96" width="15" height="18" style="fill:var(--up)"/>
<text x="408" y="110" style="fill:var(--text);font-size:11px">−3%</text>
<text x="190" y="144" text-anchor="end" style="fill:var(--text);font-size:12px">Thép</text>
<rect x="250" y="130" width="150" height="18" style="fill:var(--down)"/>
<text x="408" y="144" style="fill:var(--text);font-size:11px">−30%</text>
<text x="190" y="178" text-anchor="end" style="fill:var(--text);font-size:12px">Bất động sản</text>
<rect x="200" y="164" width="200" height="18" style="fill:var(--down)"/>
<text x="408" y="178" style="fill:var(--text);font-size:11px">−40%</text>
<text x="190" y="212" text-anchor="end" style="fill:var(--text);font-size:12px">Chứng khoán</text>
<rect x="225" y="198" width="175" height="18" style="fill:var(--down)"/>
<text x="408" y="212" style="fill:var(--text);font-size:11px">−35%</text>
<rect x="440" y="40" width="14" height="14" style="fill:var(--up)"/><text x="460" y="52" style="fill:var(--text);font-size:12px">Phòng thủ</text>
<rect x="440" y="64" width="14" height="14" style="fill:var(--down)"/><text x="460" y="76" style="fill:var(--text);font-size:12px">Chu kỳ</text>
</svg><figcaption>Hình: Mức giảm lợi nhuận giả định của từng nhóm ngành trong một năm kinh tế suy giảm (số liệu minh họa, không phải dữ liệu thật)</figcaption></figure>

<h3>3. Ngành tăng trưởng</h3>
<p>Doanh thu tăng nhanh nhờ xu hướng dài hạn (chuyển đổi số, tiêu dùng hiện đại, du lịch…), ít phụ thuộc chu kỳ hơn ngành chu kỳ nhưng vẫn chịu ảnh hưởng khi kinh tế xấu. Thường có P/E cao vì thị trường trả tiền cho tăng trưởng tương lai.</p>
<p><b>Ví dụ:</b> Một công ty dịch vụ công nghệ tăng lợi nhuận 20%/năm trong 5 năm, P/E 20. Khi kinh tế chậm lại, tăng trưởng giảm còn 12%: lợi nhuận vẫn tăng nhưng thị trường có thể "hạ" P/E xuống 15 → giá cổ phiếu vẫn có thể giảm dù lợi nhuận tăng (vì 1,12 × 15/20 = 0,84, tức giá giảm khoảng 16%).</p>

<h3>4. Luân chuyển ngành theo chu kỳ kinh tế</h3>
<p>Một mô hình lý thuyết phổ biến cho rằng mỗi giai đoạn của chu kỳ kinh tế có nhóm ngành thường hưởng lợi nhiều hơn:</p>
<figure class="fig"><svg viewBox="0 0 640 300" role="img" aria-label="Vòng tròn chu kỳ kinh tế và các nhóm ngành thường hưởng lợi">
<circle cx="320" cy="150" r="100" style="fill:none;stroke:var(--line);stroke-width:2"/>
<path d="M320,50 A100,100 0 0,1 420,150" style="fill:none;stroke:var(--up);stroke-width:6"/>
<path d="M420,150 A100,100 0 0,1 320,250" style="fill:none;stroke:var(--ref);stroke-width:6"/>
<path d="M320,250 A100,100 0 0,1 220,150" style="fill:none;stroke:var(--down);stroke-width:6"/>
<path d="M220,150 A100,100 0 0,1 320,50" style="fill:none;stroke:var(--accent);stroke-width:6"/>
<text x="320" y="146" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Chu kỳ</text>
<text x="320" y="164" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">kinh tế</text>
<text x="400" y="62" style="fill:var(--up);font-size:13px;font-weight:bold">Tăng trưởng</text>
<text x="400" y="80" style="fill:var(--text);font-size:11px">công nghiệp, vật liệu,</text>
<text x="400" y="94" style="fill:var(--text);font-size:11px">công nghệ, bán lẻ</text>
<text x="400" y="222" style="fill:var(--ref);font-size:13px;font-weight:bold">Đỉnh / quá nóng</text>
<text x="400" y="240" style="fill:var(--text);font-size:11px">năng lượng, hàng hóa cơ bản</text>
<text x="240" y="222" text-anchor="end" style="fill:var(--down);font-size:13px;font-weight:bold">Suy giảm</text>
<text x="240" y="240" text-anchor="end" style="fill:var(--text);font-size:11px">thiết yếu, điện nước, dược</text>
<text x="240" y="62" text-anchor="end" style="fill:var(--accent);font-size:13px;font-weight:bold">Phục hồi</text>
<text x="240" y="80" text-anchor="end" style="fill:var(--text);font-size:11px">ngân hàng, chứng khoán,</text>
<text x="240" y="94" text-anchor="end" style="fill:var(--text);font-size:11px">bất động sản</text>
<polygon points="420,150 414,140 426,140" style="fill:var(--ref)"/>
<polygon points="320,250 330,244 330,256" style="fill:var(--down)"/>
<polygon points="220,150 214,160 226,160" style="fill:var(--accent)"/>
<polygon points="320,50 310,44 310,56" style="fill:var(--up)"/>
<text x="320" y="292" text-anchor="middle" style="fill:var(--muted);font-size:11px">Mô hình lý thuyết mang tính tham khảo — thực tế các giai đoạn không rõ ràng và không lặp lại y hệt</text>
</svg><figcaption>Hình: Luân chuyển ngành theo 4 giai đoạn của chu kỳ kinh tế (chiều kim đồng hồ)</figcaption></figure>
<p><b>Ví dụ:</b> Khi lãi suất bắt đầu giảm sau một thời kỳ khó khăn (giai đoạn phục hồi), tín dụng dễ hơn, thị trường chứng khoán sôi động trở lại → cổ phiếu chứng khoán, ngân hàng, BĐS thường phục hồi sớm. Khi kinh tế bắt đầu yếu đi, dòng tiền thường dịch chuyển sang cổ phiếu phòng thủ như điện, nước, thực phẩm.</p>
<div class="warn">⚠ Đừng cố "đoán" chính xác chu kỳ để mua bán liên tục giữa các ngành. Với người mới, hiểu ngành mình đầu tư thuộc nhóm nào để <b>chuẩn bị tâm lý và đa dạng hóa</b> là đủ.</div>

<h3>5. Ứng dụng: cân bằng danh mục</h3>
<p>Danh mục chỉ gồm cổ phiếu chu kỳ sẽ biến động rất mạnh. Kết hợp cả nhóm phòng thủ giúp giảm biến động.</p>
<p><b>Ví dụ:</b> Danh mục 100 triệu: 60 triệu cổ phiếu chu kỳ + 40 triệu phòng thủ. Kinh tế suy giảm: nhóm chu kỳ giảm 40% (−24 triệu), nhóm phòng thủ giảm 10% (−4 triệu) → danh mục giảm 28%. Nếu 100% là cổ phiếu chu kỳ, danh mục giảm 40%.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Phân loại 10 mã trong watchlist của bạn vào 3 nhóm: chu kỳ / phòng thủ / tăng trưởng.</li>
<li>Với mỗi nhóm, tra % thay đổi giá của các mã trong năm thị trường giảm mạnh gần nhất mà bạn biết (vd 2022). Nhóm nào giảm nhiều nhất?</li>
<li>Watchlist của bạn đang nghiêng về nhóm nào? Có cần cân bằng lại không?</li>
</ol>
<p>Kết quả mong đợi: bảng phân loại 10 mã và 2 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Chu kỳ: lợi nhuận dao động mạnh theo kinh tế (thép, BĐS, chứng khoán, vật liệu).</li>
<li>Phòng thủ: sản phẩm thiết yếu, lợi nhuận ổn định (thực phẩm, điện nước, dược).</li>
<li>Tăng trưởng: dựa trên xu hướng dài hạn, P/E cao, nhạy với kỳ vọng.</li>
<li>Luân chuyển ngành chỉ là mô hình tham khảo; dùng để đa dạng hóa, không để đoán đỉnh đáy.</li>
</ul></div>
`,
  quiz: [
    { q: "Ngành nào thường được xem là phòng thủ?", options: ["Thép", "Chứng khoán", "Điện, nước", "Bất động sản"], answer: 2, explain: "Điện, nước là dịch vụ thiết yếu, nhu cầu ổn định bất kể chu kỳ kinh tế." },
    { q: "Danh mục 50% chu kỳ (giảm 40%) và 50% phòng thủ (giảm 10%). Danh mục giảm bao nhiêu?", options: ["50%", "25%", "40%", "10%"], answer: 1, explain: "0,5 × 40% + 0,5 × 10% = 25%." },
    { q: "Lợi nhuận tăng 12% nhưng P/E giảm từ 20 xuống 15. Giá cổ phiếu thay đổi khoảng?", options: ["Tăng 12%", "Giảm khoảng 16%", "Không đổi", "Tăng 25%"], answer: 1, explain: "Giá mới/giá cũ = 1,12 × 15/20 = 0,84 → giảm khoảng 16%." }
  ]
},
{
  id: "w08-5",
  week: 8,
  day: 5,
  title: "5 áp lực cạnh tranh và lợi thế cạnh tranh (moat)",
  minutes: 120,
  summary: "Mô hình 5 áp lực của Porter để đánh giá sức hấp dẫn của ngành; 5 loại \"hào kinh tế\" bảo vệ lợi nhuận doanh nghiệp.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về một cuộc "cạnh tranh về giá" (giảm giá, khuyến mãi mạnh) trong một ngành bất kỳ. Ghi lại: ai đang gây áp lực, ai bị ảnh hưởng, biên lợi nhuận của họ có thể thay đổi thế nào?</div>

<h3>1. Vì sao cần phân tích cạnh tranh?</h3>
<p>Lợi nhuận cao sẽ thu hút đối thủ. Nếu không có gì "bảo vệ", đối thủ sẽ nhảy vào, cạnh tranh giá và kéo lợi nhuận về mức trung bình. Câu hỏi quan trọng nhất khi chọn cổ phiếu dài hạn: <b>Lợi nhuận hôm nay có giữ được trong 5–10 năm tới không?</b></p>
<p><b>Ví dụ:</b> Một quán trà sữa mới mở ở phố đông người lãi rất tốt. 6 tháng sau, 5 quán khác mở xung quanh, giảm giá cạnh tranh → lợi nhuận của quán đầu tiên giảm một nửa. Ngành không có rào cản gia nhập thì lợi nhuận cao không bền.</p>

<h3>2. Mô hình 5 áp lực cạnh tranh (Porter)</h3>
<figure class="fig"><svg viewBox="0 0 640 300" role="img" aria-label="Mô hình 5 áp lực cạnh tranh của Porter">
<rect x="230" y="115" width="180" height="70" rx="10" style="fill:var(--accent);fill-opacity:0.2;stroke:var(--accent);stroke-width:2"/>
<text x="320" y="144" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">Cạnh tranh trong ngành</text>
<text x="320" y="164" text-anchor="middle" style="fill:var(--muted);font-size:11px">giữa các đối thủ hiện tại</text>
<rect x="230" y="10" width="180" height="60" rx="10" style="fill:var(--card);stroke:var(--down)"/>
<text x="320" y="36" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:bold">Đối thủ mới gia nhập</text>
<text x="320" y="54" text-anchor="middle" style="fill:var(--muted);font-size:11px">rào cản gia nhập cao hay thấp?</text>
<rect x="230" y="230" width="180" height="60" rx="10" style="fill:var(--card);stroke:var(--c3)"/>
<text x="320" y="256" text-anchor="middle" style="fill:var(--c3);font-size:12px;font-weight:bold">Sản phẩm thay thế</text>
<text x="320" y="274" text-anchor="middle" style="fill:var(--muted);font-size:11px">có thứ khác thay được không?</text>
<rect x="10" y="120" width="170" height="60" rx="10" style="fill:var(--card);stroke:var(--c2)"/>
<text x="95" y="146" text-anchor="middle" style="fill:var(--c2);font-size:12px;font-weight:bold">Nhà cung cấp</text>
<text x="95" y="164" text-anchor="middle" style="fill:var(--muted);font-size:11px">có ép giá đầu vào được?</text>
<rect x="460" y="120" width="170" height="60" rx="10" style="fill:var(--card);stroke:var(--up)"/>
<text x="545" y="146" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:bold">Khách hàng</text>
<text x="545" y="164" text-anchor="middle" style="fill:var(--muted);font-size:11px">có ép giá bán được?</text>
<line x1="320" y1="70" x2="320" y2="111" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="320,115 315,105 325,105" style="fill:var(--muted)"/>
<line x1="320" y1="230" x2="320" y2="189" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="320,185 315,195 325,195" style="fill:var(--muted)"/>
<line x1="180" y1="150" x2="226" y2="150" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="230,150 220,145 220,155" style="fill:var(--muted)"/>
<line x1="460" y1="150" x2="414" y2="150" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="410,150 420,145 420,155" style="fill:var(--muted)"/>
</svg><figcaption>Hình: 5 áp lực cạnh tranh — áp lực càng mạnh, lợi nhuận của ngành càng khó cao</figcaption></figure>
<ol>
<li><b>Đối thủ mới gia nhập</b>: ngành cần vốn lớn, giấy phép, công nghệ thì khó gia nhập.
<p><b>Ví dụ:</b> Mở một ngân hàng cần giấy phép và vốn rất lớn → rào cản cao. Mở quán cà phê thì gần như ai cũng làm được → rào cản thấp.</p></li>
<li><b>Quyền lực nhà cung cấp</b>: ít nhà cung cấp, đầu vào đặc thù → họ dễ tăng giá.
<p><b>Ví dụ:</b> Công ty sản xuất phụ thuộc một nhà cung cấp chip duy nhất; khi chip khan hiếm, nhà cung cấp tăng giá 30%, công ty phải chịu.</p></li>
<li><b>Quyền lực khách hàng</b>: khách hàng lớn, ít, dễ chuyển sang đối thủ → họ ép giá.
<p><b>Ví dụ:</b> Nhà sản xuất bánh kẹo bán 40% sản lượng qua một chuỗi siêu thị lớn; chuỗi này đòi chiết khấu cao hơn mỗi năm.</p></li>
<li><b>Sản phẩm thay thế</b>: có thứ khác đáp ứng cùng nhu cầu.
<p><b>Ví dụ:</b> Nước ngọt có ga bị thay thế dần bởi trà, nước ép, nước khoáng khi người tiêu dùng quan tâm sức khỏe hơn.</p></li>
<li><b>Cạnh tranh giữa các đối thủ hiện tại</b>: nhiều đối thủ, sản phẩm giống nhau, tăng trưởng chậm → cạnh tranh giá khốc liệt.
<p><b>Ví dụ:</b> Ngành có 10 công ty bán sản phẩm gần như giống hệt nhau (như tôn mạ, phân bón phổ thông) thường phải cạnh tranh bằng giá, biên lợi nhuận mỏng.</p></li>
</ol>

<h3>3. Lợi thế cạnh tranh bền vững — "hào kinh tế" (moat)</h3>
<p>Thuật ngữ Warren Buffett hay dùng: doanh nghiệp như một lâu đài, "hào nước" bao quanh càng rộng thì đối thủ càng khó tấn công. 5 loại hào phổ biến:</p>
<table>
<tr><th>Loại hào</th><th>Ý nghĩa</th></tr>
<tr><td>Thương hiệu</td><td>Khách hàng sẵn sàng trả giá cao hơn hoặc chọn theo thói quen</td></tr>
<tr><td>Chi phí chuyển đổi</td><td>Khách hàng đổi sang đối thủ rất tốn kém, phiền phức</td></tr>
<tr><td>Hiệu ứng mạng lưới</td><td>Càng nhiều người dùng, sản phẩm càng giá trị</td></tr>
<tr><td>Lợi thế chi phí</td><td>Sản xuất rẻ hơn đối thủ nhờ quy mô, công nghệ, vị trí</td></tr>
<tr><td>Tài sản vô hình, giấy phép</td><td>Giấy phép, bằng sáng chế, quyền khai thác mà đối thủ không có</td></tr>
</table>
<p><b>Ví dụ:</b></p>
<ul>
<li><b>Thương hiệu</b>: hai hộp sữa chất lượng tương tự, phụ huynh vẫn chọn thương hiệu quen thuộc dù đắt hơn 10%.</li>
<li><b>Chi phí chuyển đổi</b>: doanh nghiệp dùng một phần mềm quản lý (ERP) 5 năm, chuyển sang phần mềm khác phải đào tạo lại nhân viên, chuyển dữ liệu, rủi ro gián đoạn → hiếm khi đổi.</li>
<li><b>Hiệu ứng mạng lưới</b>: một ví điện tử mà hầu hết cửa hàng đều chấp nhận → người dùng mới cũng chọn ví đó → càng nhiều cửa hàng chấp nhận.</li>
<li><b>Lợi thế chi phí</b>: nhà máy thép công suất lớn có chi phí mỗi tấn thấp hơn nhà máy nhỏ vài trăm nghìn đồng → vẫn lãi khi đối thủ đã lỗ.</li>
<li><b>Giấy phép</b>: một doanh nghiệp được độc quyền khai thác một cảng biển hoặc sân bay trong nhiều năm.</li>
</ul>

<h3>4. Dấu hiệu có hào kinh tế trên BCTC</h3>
<p>Hào kinh tế để lại "dấu vết" trên số liệu: <b>biên lợi nhuận gộp cao và ổn định</b>, <b>ROE cao nhiều năm</b> (trên 15%) mà <b>không cần vay nhiều</b>, dòng tiền tự do dương đều đặn.</p>
<p><b>Ví dụ:</b> Công ty có biên gộp 40–42% suốt 10 năm, kể cả những năm giá nguyên liệu tăng mạnh → có khả năng chuyển chi phí tăng sang giá bán mà không mất khách (sức mạnh định giá) — dấu hiệu của thương hiệu mạnh. Ngược lại, công ty có biên gộp dao động 8% → 20% → 5% cho thấy giá bán do thị trường quyết định, không có hào.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Chọn cổ phiếu bạn định viết bản phân tích vào thứ 7.</li>
<li>Chấm điểm 5 áp lực cạnh tranh từ 1 (yếu) đến 5 (mạnh), ghi 1 lý do cho mỗi điểm.</li>
<li>Công ty có loại hào kinh tế nào? Tìm 1 bằng chứng định tính (sản phẩm, thị phần) và 1 bằng chứng số liệu (biên gộp, ROE nhiều năm).</li>
</ol>
<p>Kết quả mong đợi: bảng 5 áp lực có điểm và lý do; 2 bằng chứng về hào kinh tế (hoặc kết luận "không có hào rõ ràng").</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>5 áp lực: đối thủ mới, nhà cung cấp, khách hàng, sản phẩm thay thế, cạnh tranh nội ngành.</li>
<li>5 loại hào: thương hiệu, chi phí chuyển đổi, hiệu ứng mạng lưới, lợi thế chi phí, giấy phép/tài sản vô hình.</li>
<li>Hào kinh tế thể hiện qua biên gộp cao ổn định, ROE cao nhiều năm, ít nợ.</li>
<li>Câu hỏi then chốt: lợi nhuận hôm nay có giữ được 5–10 năm tới không?</li>
</ul></div>
`,
  quiz: [
    { q: "Khách hàng phải tốn nhiều chi phí, công sức mới đổi sang đối thủ. Đây là loại hào nào?", options: ["Thương hiệu", "Chi phí chuyển đổi", "Lợi thế chi phí", "Hiệu ứng mạng lưới"], answer: 1, explain: "Chi phí chuyển đổi cao giữ chân khách hàng." },
    { q: "Dấu hiệu nào trên BCTC gợi ý doanh nghiệp có hào kinh tế?", options: ["Biên gộp dao động mạnh", "ROE cao ổn định nhiều năm, ít vay", "Lỗ liên tục", "Nợ vay tăng mạnh"], answer: 1, explain: "ROE cao bền vững mà không cần đòn bẩy cho thấy khả năng giữ lợi nhuận trước cạnh tranh." },
    { q: "Ngành có rào cản gia nhập thấp thường có đặc điểm gì?", options: ["Lợi nhuận cao bền vững", "Lợi nhuận cao dễ bị đối thủ mới kéo xuống", "Không có cạnh tranh", "Luôn được nhà nước bảo hộ"], answer: 1, explain: "Rào cản thấp khiến đối thủ dễ gia nhập khi thấy lợi nhuận cao, kéo biên lợi nhuận về mức trung bình." }
  ]
},
{
  id: "w08-6",
  week: 8,
  day: 6,
  title: "Bài tập lớn: Bản phân tích 1 trang một cổ phiếu",
  minutes: 240,
  summary: "Viết bản phân tích 1 trang trả lời 3 câu hỏi: công ty kiếm tiền thế nào, có tăng trưởng không, giá đắt hay rẻ.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p>Đây là bài tổng hợp của cả tháng 2. Bạn sẽ viết <b>1 trang</b> (khoảng 400–600 chữ + 1 bảng số liệu) về 1 cổ phiếu, trả lời đúng 3 câu hỏi trong lộ trình. Giới hạn 1 trang buộc bạn phải chọn điều quan trọng nhất. Đây là bài luyện tập, không phải khuyến nghị đầu tư.</p>

<h4>Bước 1 — Chuẩn bị số liệu (45 phút)</h4>
<p>Gom các bảng bạn đã làm trong tháng: KQKD 5 năm, CĐKT, dòng tiền, chỉ số định giá, 5 áp lực cạnh tranh. Điền bảng tóm tắt:</p>
<table>
<tr><th>Chỉ tiêu</th><th>Năm −4</th><th>Năm −3</th><th>Năm −2</th><th>Năm −1</th><th>Năm gần nhất</th></tr>
<tr><td>Doanh thu thuần (tỷ đ)</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>LNST cổ đông mẹ (tỷ đ)</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Biên LN gộp</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>ROE</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>CFO / LNST</td><td></td><td></td><td></td><td></td><td></td></tr>
<tr><td>Nợ vay / Vốn chủ</td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p>Cùng với: giá hiện tại, EPS 4 quý, P/E, P/B, tỷ suất cổ tức, P/E trung bình 5 năm của chính mã đó.</p>

<h4>Bước 2 — Viết theo khung mẫu (75 phút)</h4>
<table>
<tr><th>Phần</th><th>Nội dung cần có</th><th>Độ dài</th></tr>
<tr><td>Tiêu đề</td><td>Mã CK – tên công ty – ngày viết – giá tại ngày viết</td><td>1 dòng</td></tr>
<tr><td>1. Công ty kiếm tiền thế nào?</td><td>Bán gì, cho ai, mảng nào đóng góp chính (% doanh thu, % lợi nhuận), ngành chu kỳ hay phòng thủ, hào kinh tế (nếu có)</td><td>4–6 câu</td></tr>
<tr><td>2. Có tăng trưởng không?</td><td>CAGR doanh thu, lợi nhuận 5 năm; biên lợi nhuận đi lên hay xuống; động lực tăng trưởng 2–3 năm tới; chất lượng lợi nhuận (CFO/LNST)</td><td>4–6 câu</td></tr>
<tr><td>3. Giá hiện tại đắt hay rẻ?</td><td>P/E, P/B so với lịch sử và ngành; 3 kịch bản định giá; biên an toàn</td><td>4–6 câu + bảng 3 kịch bản</td></tr>
<tr><td>Rủi ro chính</td><td>2–3 rủi ro có thể khiến bạn sai</td><td>2–3 gạch đầu dòng</td></tr>
<tr><td>Kết luận &amp; điều cần theo dõi</td><td>Nhận định của bạn + 2–3 chỉ số sẽ theo dõi mỗi quý</td><td>2–3 câu</td></tr>
</table>

<h4>Ví dụ mẫu — Công ty A (giả định, số liệu minh họa)</h4>
<div class="tip">
<p><b>Công ty A – sản xuất sữa – viết ngày …, giá 27.000đ</b></p>
<p><b>1. Kiếm tiền thế nào?</b> A sản xuất và phân phối sữa nước, sữa chua, sữa bột; sữa nước chiếm 55% doanh thu. Bán qua hơn 200.000 điểm bán lẻ và chuỗi siêu thị, 15% doanh thu từ xuất khẩu. Ngành phòng thủ: nhu cầu ổn định cả khi kinh tế xấu. Hào kinh tế: thương hiệu quen thuộc và hệ thống phân phối rộng — biên gộp ổn định 34–36% trong 5 năm, kể cả năm giá nguyên liệu tăng.</p>
<p><b>Ví dụ</b> cách viết câu có số liệu: "Biên gộp chỉ giảm 1 điểm % (36% → 35%) dù giá sữa bột nguyên liệu tăng 20% → A có khả năng tăng giá bán."</p>
<p><b>2. Có tăng trưởng không?</b> Doanh thu tăng từ 820 lên 1.000 tỷ trong 4 năm (CAGR ≈ 5,1%), LNST cổ đông mẹ từ 105 lên 130 tỷ (CAGR ≈ 5,5%). Tăng trưởng chậm nhưng đều. Động lực: nhà máy mới (100 tỷ đang xây) nâng công suất 20% từ năm sau; mở rộng xuất khẩu. Chất lượng lợi nhuận tốt: CFO/LNST ≈ 1,4.</p>
<p><b>3. Đắt hay rẻ?</b> EPS 2.600đ → P/E 10,4, thấp hơn P/E trung bình 5 năm của A (khoảng 13) và trung bình ngành giả định (15). P/B 1,5 với ROE 15–16%.</p>
<table>
<tr><th>Kịch bản</th><th>EPS năm tới</th><th>P/E</th><th>Giá trị</th><th>So với giá 27.000đ</th></tr>
<tr><td>Xấu</td><td>2.400</td><td>10</td><td>24.000</td><td>−11%</td></tr>
<tr><td>Cơ sở</td><td>3.000</td><td>12</td><td>36.000</td><td>+33%</td></tr>
<tr><td>Tốt</td><td>3.300</td><td>14</td><td>46.200</td><td>+71%</td></tr>
</table>
<p>Biên an toàn ở kịch bản cơ sở: 25%.</p>
<p><b>Rủi ro:</b> (1) Giá nguyên liệu nhập khẩu tăng mạnh và tỷ giá USD tăng; (2) cạnh tranh từ thương hiệu ngoại và nhãn hàng riêng của siêu thị; (3) nhà máy mới chậm tiến độ.</p>
<p><b>Kết luận:</b> Doanh nghiệp phòng thủ, tài chính lành mạnh, đang được định giá thấp hơn lịch sử. Theo dõi mỗi quý: biên gộp (cảnh báo nếu dưới 33%), tăng trưởng doanh thu YoY, tiến độ nhà máy mới.</p>
</div>

<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Bố cục mẫu của bản phân tích 1 trang">
<rect x="150" y="10" width="340" height="240" rx="6" style="fill:var(--card);stroke:var(--line);stroke-width:2"/>
<rect x="165" y="22" width="310" height="18" style="fill:var(--accent);fill-opacity:0.3"/>
<text x="320" y="35" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:bold">Mã – Tên công ty – Ngày – Giá</text>
<rect x="165" y="48" width="310" height="40" style="fill:var(--up);fill-opacity:0.18"/>
<text x="175" y="63" style="fill:var(--text);font-size:11px;font-weight:bold">1. Kiếm tiền thế nào?</text>
<text x="175" y="79" style="fill:var(--muted);font-size:10px">sản phẩm · khách hàng · mảng chính · hào kinh tế</text>
<rect x="165" y="94" width="310" height="40" style="fill:var(--c2);fill-opacity:0.18"/>
<text x="175" y="109" style="fill:var(--text);font-size:11px;font-weight:bold">2. Có tăng trưởng không?</text>
<text x="175" y="125" style="fill:var(--muted);font-size:10px">CAGR · biên LN · động lực · CFO/LNST</text>
<rect x="165" y="140" width="310" height="50" style="fill:var(--ref);fill-opacity:0.2"/>
<text x="175" y="155" style="fill:var(--text);font-size:11px;font-weight:bold">3. Đắt hay rẻ?</text>
<text x="175" y="171" style="fill:var(--muted);font-size:10px">P/E, P/B vs lịch sử, ngành · bảng 3 kịch bản</text>
<text x="175" y="184" style="fill:var(--muted);font-size:10px">biên an toàn</text>
<rect x="165" y="196" width="150" height="44" style="fill:var(--down);fill-opacity:0.15"/>
<text x="175" y="212" style="fill:var(--text);font-size:11px;font-weight:bold">Rủi ro</text>
<text x="175" y="228" style="fill:var(--muted);font-size:10px">2–3 rủi ro chính</text>
<rect x="325" y="196" width="150" height="44" style="fill:var(--accent);fill-opacity:0.15"/>
<text x="335" y="212" style="fill:var(--text);font-size:11px;font-weight:bold">Kết luận</text>
<text x="335" y="228" style="fill:var(--muted);font-size:10px">+ chỉ số theo dõi</text>
<text x="140" y="68" text-anchor="end" style="fill:var(--muted);font-size:11px">~25%</text>
<text x="140" y="114" text-anchor="end" style="fill:var(--muted);font-size:11px">~25%</text>
<text x="140" y="168" text-anchor="end" style="fill:var(--muted);font-size:11px">~30%</text>
<text x="140" y="222" text-anchor="end" style="fill:var(--muted);font-size:11px">~20%</text>
</svg><figcaption>Hình: Bố cục gợi ý cho bản phân tích 1 trang và tỷ lệ độ dài mỗi phần</figcaption></figure>

<h4>Bước 3 — Rà soát (30 phút)</h4>
<ul>
<li>Mỗi nhận định đều có ít nhất 1 con số đi kèm?</li>
<li>Có tách được lợi nhuận bất thường (nếu có)?</li>
<li>Đã kiểm tra cờ đỏ (CFO, phải thu, tồn kho, nợ vay, ý kiến kiểm toán)?</li>
<li>Có đúng 1 trang không? Nếu dài hơn, cắt bớt chi tiết ít quan trọng.</li>
</ul>

<h4>Tiêu chí tự đánh giá</h4>
<ul>
<li>☐ Trả lời đủ và rõ 3 câu hỏi.</li>
<li>☐ Có bảng số liệu 5 năm và bảng 3 kịch bản định giá.</li>
<li>☐ Nêu ít nhất 2 rủi ro cụ thể.</li>
<li>☐ Có danh sách 2–3 chỉ số theo dõi hằng quý.</li>
<li>☐ Một người không biết gì về công ty đọc xong hiểu được công ty làm gì và vì sao bạn nghĩ nó đắt/rẻ.</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc lại các phần bạn đã đánh dấu trong sách Fisher, đặc biệt <b>15 điểm cần xem xét</b>. Dùng chúng như một checklist cho cổ phiếu bạn vừa phân tích.</p>
<p><b>Ví dụ:</b> Với Công ty A: "Sản phẩm có tiềm năng tăng doanh số nhiều năm?" → Một phần (thị trường trong nước bão hòa, xuất khẩu còn dư địa). "Biên lợi nhuận tốt?" → Có (biên gộp 35%, ổn định). "Ban lãnh đạo minh bạch khi khó khăn?" → Cần tìm hiểu thêm qua biên bản đại hội cổ đông các năm có kết quả kém.</p>
<p><b>Câu hỏi sau khi đọc:</b> Cổ phiếu bạn chọn đạt bao nhiêu điểm trong 15 điểm của Fisher? Điểm nào bạn chưa có đủ thông tin để đánh giá?</p>
`,
  quiz: [
    { q: "Doanh thu tăng từ 820 lên 1.000 tỷ trong 4 năm. CAGR xấp xỉ?", options: ["22%", "5,1%", "4,4%", "18%"], answer: 1, explain: "(1.000 ÷ 820)^(1/4) − 1 ≈ 1,2195^0,25 − 1 ≈ 5,1%." },
    { q: "Vì sao bản phân tích nên giới hạn trong 1 trang?", options: ["Để tiết kiệm giấy", "Để buộc người viết chọn ra điều quan trọng nhất", "Vì quy định pháp luật", "Vì không có đủ số liệu"], answer: 1, explain: "Giới hạn độ dài giúp tập trung vào các yếu tố quyết định giá trị doanh nghiệp." }
  ]
},
{
  id: "w08-7",
  week: 8,
  day: 7,
  title: "Tổng kết tháng 2: Phân tích cơ bản",
  minutes: 240,
  summary: "Hoàn thiện bản phân tích 1 trang, ôn toàn bộ kiến thức tháng 2 và chuẩn bị bước sang phân tích kỹ thuật.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Dùng 45 phút đầu để <b>hoàn thiện bản phân tích 1 trang</b>: đọc to cả bài, sửa những câu không có số liệu, kiểm tra lại các phép tính. Dùng 45 phút sau đọc lại bản tóm tắt sách Fisher và bổ sung những gì bạn hiểu thêm sau khi tự phân tích một doanh nghiệp.</p>
<p><b>Ví dụ:</b> Một câu cần sửa: "Công ty tăng trưởng tốt." → sửa thành: "Doanh thu tăng đều 5 năm với CAGR 5,1%, chậm nhưng ổn định; lợi nhuận tăng nhanh hơn doanh thu (CAGR 5,5%) nhờ biên gộp giữ vững."</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 280" role="img" aria-label="Quy trình phân tích cơ bản một cổ phiếu gồm 5 bước">
<rect x="10" y="30" width="112" height="90" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="66" y="56" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:bold">1. Hiểu</text>
<text x="66" y="76" text-anchor="middle" style="fill:var(--text);font-size:11px">kinh doanh,</text>
<text x="66" y="92" text-anchor="middle" style="fill:var(--text);font-size:11px">ngành, hào</text>
<text x="66" y="108" text-anchor="middle" style="fill:var(--muted);font-size:10px">tuần 8</text>
<rect x="137" y="30" width="112" height="90" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="193" y="56" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:bold">2. Tăng trưởng</text>
<text x="193" y="76" text-anchor="middle" style="fill:var(--text);font-size:11px">KQKD 5 năm,</text>
<text x="193" y="92" text-anchor="middle" style="fill:var(--text);font-size:11px">biên, CAGR</text>
<text x="193" y="108" text-anchor="middle" style="fill:var(--muted);font-size:10px">tuần 5</text>
<rect x="264" y="30" width="112" height="90" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="320" y="56" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:bold">3. Sức khỏe</text>
<text x="320" y="76" text-anchor="middle" style="fill:var(--text);font-size:11px">CĐKT, dòng tiền,</text>
<text x="320" y="92" text-anchor="middle" style="fill:var(--text);font-size:11px">cờ đỏ, kiểm toán</text>
<text x="320" y="108" text-anchor="middle" style="fill:var(--muted);font-size:10px">tuần 5–6</text>
<rect x="391" y="30" width="112" height="90" rx="10" style="fill:var(--card);stroke:var(--ref);stroke-width:2"/>
<text x="447" y="56" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:bold">4. Hiệu quả</text>
<text x="447" y="76" text-anchor="middle" style="fill:var(--text);font-size:11px">ROE, DuPont,</text>
<text x="447" y="92" text-anchor="middle" style="fill:var(--text);font-size:11px">so sánh ngành</text>
<text x="447" y="108" text-anchor="middle" style="fill:var(--muted);font-size:10px">tuần 6–7</text>
<rect x="518" y="30" width="112" height="90" rx="10" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
<text x="574" y="56" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:bold">5. Định giá</text>
<text x="574" y="76" text-anchor="middle" style="fill:var(--text);font-size:11px">P/E, P/B,</text>
<text x="574" y="92" text-anchor="middle" style="fill:var(--text);font-size:11px">biên an toàn</text>
<text x="574" y="108" text-anchor="middle" style="fill:var(--muted);font-size:10px">tuần 7</text>
<polygon points="127,75 133,70 133,80" style="fill:var(--muted)"/>
<polygon points="254,75 260,70 260,80" style="fill:var(--muted)"/>
<polygon points="381,75 387,70 387,80" style="fill:var(--muted)"/>
<polygon points="508,75 514,70 514,80" style="fill:var(--muted)"/>
<rect x="110" y="160" width="420" height="90" rx="10" style="fill:var(--accent);fill-opacity:0.12;stroke:var(--accent)"/>
<text x="320" y="188" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:bold">Bản phân tích 1 trang</text>
<text x="320" y="212" text-anchor="middle" style="fill:var(--text);font-size:12px">Kiếm tiền thế nào? · Có tăng trưởng không? · Đắt hay rẻ?</text>
<text x="320" y="234" text-anchor="middle" style="fill:var(--muted);font-size:11px">+ rủi ro + chỉ số theo dõi hằng quý</text>
<line x1="320" y1="120" x2="320" y2="156" style="stroke:var(--accent);stroke-width:2"/>
<polygon points="320,160 315,150 325,150" style="fill:var(--accent)"/>
</svg><figcaption>Hình: Quy trình 5 bước phân tích cơ bản đã học trong tháng 2</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu</b> — mỗi câu trả lời trong 1 phút:</p>
<ol>
<li>Đi từ doanh thu thuần đến LNST cổ đông mẹ.</li>
<li>Phương trình kế toán và cách KQKD nối với CĐKT.</li>
<li>Ba dòng tiền, FCF, và vì sao CFO quan trọng.</li>
<li>Năm cờ đỏ trên BCTC.</li>
<li>P/E, P/B, ROE và mối liên hệ P/B = P/E × ROE.</li>
<li>Ba chỉ số đặc thù của ngân hàng.</li>
<li>Ngành chu kỳ khác ngành phòng thủ thế nào.</li>
<li>Năm loại hào kinh tế.</li>
</ol>
<p><b>Ví dụ:</b> Câu 5 trong 1 phút: "P/E = giá ÷ EPS, trả bao nhiêu đồng cho 1 đồng lãi; P/B = giá ÷ BVPS, trả bao nhiêu lần giá trị sổ sách; ROE = LNST ÷ vốn chủ. Vì EPS ÷ BVPS = ROE nên P/B = P/E × ROE — ví dụ P/E 10, ROE 15% thì P/B 1,5."</p>

<h3>Tổng kết tháng 2 (1 giờ)</h3>
<ul>
<li>☐ Đọc được 3 báo cáo chính và tìm được thông tin trong thuyết minh.</li>
<li>☐ Tự tính được biên LN, CAGR, DSO/DIO/CCC, FCF, EPS, P/E, P/B, ROE, DuPont.</li>
<li>☐ Hoàn thành: bảng KQKD VNM–FPT, so sánh CĐKT & dòng tiền, so sánh 3 ngân hàng.</li>
<li>☐ Hoàn thành bản phân tích 1 trang.</li>
<li>☐ Đọc xong sách Fisher.</li>
</ul>
<p><b>Câu hỏi phản tư:</b></p>
<ul>
<li>Bạn mất bao lâu để làm bản phân tích 1 trang? Phần nào tốn thời gian nhất?</li>
<li>Sau tháng này, có cổ phiếu nào trong watchlist bạn muốn loại ra (vì phát hiện cờ đỏ) hoặc thêm vào không?</li>
<li>Bạn tự tin nhất và kém tự tin nhất ở kỹ năng nào?</li>
</ul>
<p><b>Chuẩn bị tháng 3:</b> Tháng 3 học <b>phân tích kỹ thuật và quản lý rủi ro</b>. Phân tích cơ bản giúp chọn <b>mua gì</b>; phân tích kỹ thuật và quản lý vốn giúp quyết định <b>mua lúc nào, mua bao nhiêu, cắt lỗ ở đâu</b>. Tạo sẵn tài khoản TradingView (miễn phí) và thêm 10 mã watchlist vào đó.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Làm lại bài trắc nghiệm của các buổi có điểm thấp, hoặc bổ sung bảng số liệu còn thiếu trong bản phân tích. Lưu bản phân tích vào mục Ghi chú của web để so sánh lại sau 3–6 tháng: nhận định của bạn đúng hay sai, vì sao?</p>
`,
  quiz: [
    { q: "Doanh thu thuần 1.000, giá vốn 700, CP bán hàng + QLDN 150, lãi vay 20, thuế 20%. LNST (không có khoản khác)?", options: ["130", "104", "150", "84"], answer: 1, explain: "LN gộp 300 − 150 − 20 = 130 (LNTT); thuế 26; LNST = 104." },
    { q: "Tài sản 3.000, nợ phải trả 1.800. Vốn chủ và tỷ lệ nợ/tổng tài sản?", options: ["1.200 và 60%", "4.800 và 37%", "1.800 và 40%", "1.200 và 40%"], answer: 0, explain: "Vốn chủ = 3.000 − 1.800 = 1.200; nợ/tài sản = 1.800 ÷ 3.000 = 60%." },
    { q: "LNST tăng đều 5 năm nhưng CFO âm 4/5 năm, phải thu tăng gấp 4. Kết luận hợp lý?", options: ["Doanh nghiệp rất tốt", "Cờ đỏ nghiêm trọng về chất lượng lợi nhuận", "Không cần quan tâm dòng tiền", "Nên mua thêm"], answer: 1, explain: "Lợi nhuận không chuyển thành tiền, phải thu phình to — dấu hiệu cảnh báo." },
    { q: "Giá 40.000đ, EPS 4.000đ, BVPS 25.000đ. P/E, P/B, ROE lần lượt?", options: ["10; 1,6; 16%", "10; 0,625; 10%", "1,6; 10; 16%", "16; 1,6; 10%"], answer: 0, explain: "P/E = 10; P/B = 1,6; ROE = 4.000 ÷ 25.000 = 16% (kiểm tra: 10 × 16% = 1,6)." },
    { q: "Nợ nhóm 3–5 là 8.000 tỷ, tổng dư nợ 500.000 tỷ. Tỷ lệ nợ xấu?", options: ["1,6%", "8%", "16%", "0,16%"], answer: 0, explain: "8.000 ÷ 500.000 = 1,6%." },
    { q: "Ngành nào điển hình cho nhóm chu kỳ?", options: ["Điện", "Thép", "Nước sạch", "Dược phẩm"], answer: 1, explain: "Thép có lợi nhuận dao động mạnh theo chu kỳ kinh tế và giá hàng hóa." },
    { q: "Biên gộp ổn định 40% suốt 10 năm, kể cả khi nguyên liệu tăng giá, gợi ý điều gì?", options: ["Công ty có sức mạnh định giá — dấu hiệu hào kinh tế", "Công ty đang gian lận", "Công ty không có khách hàng", "Không có ý nghĩa"], answer: 0, explain: "Giữ được biên khi chi phí tăng nghĩa là chuyển được chi phí sang giá bán — thường nhờ thương hiệu mạnh." },
    { q: "Chuỗi bán lẻ: doanh thu +15%, SSSG +8%. Nhận định?", options: ["Tăng trưởng đến từ cả cửa hàng cũ và cửa hàng mới", "Cửa hàng cũ bán kém đi", "Chỉ nhờ mở mới", "Doanh thu giảm"], answer: 0, explain: "SSSG dương cho thấy cửa hàng cũ bán tốt hơn, phần còn lại đến từ cửa hàng mới." },
    { q: "Giá trị ước tính 40.000đ, giá thị trường 30.000đ. Biên an toàn?", options: ["25%", "33%", "10%", "75%"], answer: 0, explain: "(40.000 − 30.000) ÷ 40.000 = 25%." },
    { q: "CFO 500 tỷ, capex 300 tỷ, cổ tức 250 tỷ. Nhận định?", options: ["FCF 200 tỷ chưa đủ trả cổ tức 250 tỷ, phần thiếu từ tiền tích lũy hoặc vay", "FCF 800 tỷ dư thừa", "Không cần quan tâm", "FCF bằng cổ tức"], answer: 0, explain: "FCF = 500 − 300 = 200 tỷ < 250 tỷ cổ tức." }
  ]
}
);
