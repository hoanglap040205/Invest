// Bài học tuần 9–12: Phân tích kỹ thuật, quản lý vốn, giao dịch giả lập và tâm lý
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w09-1",
  week: 9,
  day: 1,
  title: "Phân tích kỹ thuật là gì? Sức mạnh và giới hạn",
  minutes: 120,
  summary: "Hiểu PTKT dựa trên giả định nào, khác PTCB ra sao, các loại biểu đồ và vì sao không được tin PTKT tuyệt đối.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Hôm nay hãy tìm 1–2 bài "nhận định thị trường" hoặc "nhận định kỹ thuật" của các công ty chứng khoán trên CafeF/Vietstock. Gạch chân mọi thuật ngữ kỹ thuật bạn thấy (hỗ trợ, kháng cự, MA, RSI, nến...). Cuối tuần 10 bạn sẽ hiểu gần hết các từ này.</div>

<h3>1. Phân tích kỹ thuật (PTKT) là gì?</h3>
<p>Phân tích kỹ thuật là phương pháp nghiên cứu <b>giá và khối lượng giao dịch trong quá khứ</b> để đánh giá <b>xác suất</b> giá sẽ đi theo hướng nào tiếp theo. PTKT không quan tâm công ty bán gì, lãi bao nhiêu; nó chỉ nhìn vào "dấu chân" mà người mua và người bán để lại trên biểu đồ.</p>
<p>PTKT dựa trên ba giả định:</p>
<ol>
<li><b>Giá phản ánh tất cả:</b> mọi thông tin (kết quả kinh doanh, tin đồn, kỳ vọng, tâm lý) cuối cùng đều thể hiện qua giá.</li>
<li><b>Giá di chuyển theo xu hướng:</b> một khi xu hướng đã hình thành, nó thường tiếp diễn lâu hơn là đảo chiều ngay.</li>
<li><b>Lịch sử có xu hướng lặp lại:</b> con người phản ứng với sợ hãi và lòng tham khá giống nhau qua các thời kỳ, nên một số hình dạng giá xuất hiện lặp đi lặp lại.</li>
</ol>
<p><b>Ví dụ:</b> Công ty A (số liệu minh họa) sắp công bố lợi nhuận quý tăng 40%. Một số người biết trước hoặc dự đoán được nên mua dần, giá đi từ 20.000đ lên 23.000đ trong 2 tuần trước khi tin ra (<i>giá phản ánh thông tin</i>). Sau đó giá tiếp tục tạo đỉnh và đáy cao dần thêm 1 tháng (<i>đi theo xu hướng</i>). Ở mức 26.000đ, nơi năm ngoái giá từng quay đầu, giá lại chững lại vì nhiều người từng mua ở đó muốn bán hòa vốn (<i>lịch sử lặp lại do tâm lý</i>).</p>

<h3>2. PTKT khác phân tích cơ bản (PTCB) thế nào?</h3>
<table>
<tr><th></th><th>Phân tích cơ bản (tháng 2)</th><th>Phân tích kỹ thuật (tháng 3)</th></tr>
<tr><td>Câu hỏi chính</td><td>Nên mua <b>cổ phiếu nào</b>?</td><td>Nên mua/bán <b>khi nào</b>?</td></tr>
<tr><td>Dữ liệu</td><td>Báo cáo tài chính, ngành, ban lãnh đạo</td><td>Giá, khối lượng, chỉ báo</td></tr>
<tr><td>Khung thời gian</td><td>Thường nhiều tháng đến nhiều năm</td><td>Vài ngày đến vài tháng</td></tr>
<tr><td>Điểm mạnh</td><td>Biết mình đang sở hữu doanh nghiệp tốt hay xấu</td><td>Xác định điểm vào, điểm cắt lỗ rõ ràng</td></tr>
<tr><td>Điểm yếu</td><td>Giá có thể "rẻ" rất lâu, mua sớm quá phải chờ</td><td>Không cho biết doanh nghiệp có giá trị hay không</td></tr>
</table>
<p>Cách kết hợp phổ biến và hợp lý cho người mới: <b>dùng PTCB để chọn danh sách cổ phiếu tốt, dùng PTKT để chọn thời điểm mua và đặt điểm cắt lỗ.</b></p>
<p><b>Ví dụ:</b> Giống như mua xe máy cũ. PTCB là kiểm tra máy móc, giấy tờ để biết chiếc xe có tốt không. PTKT là theo dõi giá rao bán trên chợ xe vài tuần để biết lúc nào giá đang hạ, mua đúng lúc người bán cần tiền. Một chiếc xe tốt mua lúc giá đang bị "hét" cao vẫn có thể là thương vụ tồi; ngược lại xe rẻ mà hỏng máy thì càng tệ.</p>

<figure class="fig"><svg viewBox="0 0 640 150" role="img" aria-label="Quy trình kết hợp phân tích cơ bản và kỹ thuật">
<rect x="10" y="35" width="180" height="80" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="100" y="65" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700">1. PTCB</text>
<text x="100" y="88" text-anchor="middle" style="fill:var(--text);font-size:13px">Chọn MÃ tốt</text>
<text x="100" y="105" text-anchor="middle" style="fill:var(--muted);font-size:11px">"Mua cái gì?"</text>
<line x1="192" y1="75" x2="228" y2="75" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="228,69 240,75 228,81" style="fill:var(--muted)"/>
<rect x="242" y="35" width="180" height="80" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="332" y="65" text-anchor="middle" style="fill:var(--up);font-size:14px;font-weight:700">2. PTKT</text>
<text x="332" y="88" text-anchor="middle" style="fill:var(--text);font-size:13px">Chọn THỜI ĐIỂM</text>
<text x="332" y="105" text-anchor="middle" style="fill:var(--muted);font-size:11px">"Mua khi nào?"</text>
<line x1="424" y1="75" x2="446" y2="75" style="stroke:var(--muted);stroke-width:2"/>
<polygon points="446,69 458,75 446,81" style="fill:var(--muted)"/>
<rect x="460" y="35" width="170" height="80" rx="10" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
<text x="545" y="65" text-anchor="middle" style="fill:var(--down);font-size:14px;font-weight:700">3. Quản lý rủi ro</text>
<text x="545" y="88" text-anchor="middle" style="fill:var(--text);font-size:13px">Điểm cắt lỗ, tỷ trọng</text>
<text x="545" y="105" text-anchor="middle" style="fill:var(--muted);font-size:11px">"Sai thì thoát ở đâu?"</text>
</svg><figcaption>Hình: Ba bước kết hợp. PTKT là bước thứ hai, không thay thế bước một và bước ba.</figcaption></figure>

<h3>3. Các loại biểu đồ và khung thời gian</h3>
<p>Mỗi phiên giao dịch có 4 mức giá quan trọng: <b>Mở cửa (Open), Cao nhất (High), Thấp nhất (Low), Đóng cửa (Close)</b>, viết tắt là OHLC.</p>
<ul>
<li><b>Biểu đồ đường (line):</b> chỉ nối các giá đóng cửa. Gọn, dễ nhìn xu hướng lớn nhưng mất thông tin trong phiên.</li>
<li><b>Biểu đồ thanh (OHLC bar):</b> mỗi phiên là một thanh dọc với vạch ngang bên trái là giá mở, bên phải là giá đóng.</li>
<li><b>Biểu đồ nến Nhật:</b> thể hiện đủ 4 mức giá, có màu cho biết phiên tăng hay giảm. Đây là loại phổ biến nhất trên các app giao dịch tại Việt Nam và là loại bạn sẽ dùng.</li>
</ul>
<p><b>Ví dụ:</b> Phiên 3 trong hình dưới (số liệu minh họa, nghìn đồng): Mở 21,0 – Cao 21,4 – Thấp 20,4 – Đóng 20,5. Biểu đồ đường chỉ cho thấy giá đóng 20,5 thấp hơn hôm trước (21,0). Biểu đồ nến cho thấy thêm: đầu phiên giá từng lên 21,4 (+1,9%) rồi bị bán mạnh xuống, tức bên bán thắng thế cả phiên. Đó là thông tin quan trọng mà biểu đồ đường bỏ mất.</p>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="So sánh biểu đồ đường và biểu đồ nến cho cùng 6 phiên">
<text x="160" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Biểu đồ đường (chỉ giá đóng cửa)</text>
<text x="470" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Biểu đồ nến (Mở – Cao – Thấp – Đóng)</text>
<line x1="30" y1="240" x2="290" y2="240" style="stroke:var(--line);stroke-width:1"/>
<line x1="340" y1="240" x2="600" y2="240" style="stroke:var(--line);stroke-width:1"/>
<polyline points="50,146.4 90,116 130,154 170,176.8 210,108.4 250,70.4" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>
<circle cx="50" cy="146.4" r="3.5" style="fill:var(--accent)"/><circle cx="90" cy="116" r="3.5" style="fill:var(--accent)"/><circle cx="130" cy="154" r="3.5" style="fill:var(--accent)"/><circle cx="170" cy="176.8" r="3.5" style="fill:var(--accent)"/><circle cx="210" cy="108.4" r="3.5" style="fill:var(--accent)"/><circle cx="250" cy="70.4" r="3.5" style="fill:var(--accent)"/>
<line x1="370" y1="131.2" x2="370" y2="207.2" style="stroke:var(--up);stroke-width:2"/><rect x="360" y="146.4" width="20" height="45.6" style="fill:var(--up)"/>
<line x1="410" y1="100.8" x2="410" y2="169.2" style="stroke:var(--up);stroke-width:2"/><rect x="400" y="116" width="20" height="30.4" style="fill:var(--up)"/>
<line x1="450" y1="85.6" x2="450" y2="161.6" style="stroke:var(--down);stroke-width:2"/><rect x="440" y="116" width="20" height="38" style="fill:var(--down)"/>
<line x1="490" y1="138.8" x2="490" y2="199.6" style="stroke:var(--down);stroke-width:2"/><rect x="480" y="154" width="20" height="22.8" style="fill:var(--down)"/>
<line x1="530" y1="93.2" x2="530" y2="184.4" style="stroke:var(--up);stroke-width:2"/><rect x="520" y="108.4" width="20" height="68.4" style="fill:var(--up)"/>
<line x1="570" y1="55.2" x2="570" y2="123.6" style="stroke:var(--up);stroke-width:2"/><rect x="560" y="70.4" width="20" height="38" style="fill:var(--up)"/>
<text x="160" y="256" text-anchor="middle" style="fill:var(--muted);font-size:11px">6 phiên, cùng dữ liệu (số liệu minh họa)</text>
<text x="470" y="256" text-anchor="middle" style="fill:var(--muted);font-size:11px">Xanh = phiên tăng, đỏ = phiên giảm</text>
</svg><figcaption>Hình: Cùng 6 phiên giao dịch. Biểu đồ nến cho thấy phiên 3 từng lên cao rồi bị bán xuống, điều mà biểu đồ đường không thể hiện.</figcaption></figure>
<p><b>Khung thời gian:</b> mỗi cây nến có thể là 1 phút, 1 giờ, 1 ngày, 1 tuần hoặc 1 tháng. Người mới đầu tư trung hạn nên dùng <b>khung ngày (D)</b> để tìm điểm mua và <b>khung tuần (W)</b> để xem xu hướng lớn. Khung phút, khung giờ rất "nhiễu", dễ khiến bạn giao dịch quá nhiều.</p>
<p><b>Ví dụ:</b> Trên khung tuần, cổ phiếu B tăng từ 30.000đ lên 40.000đ trong 6 tháng. Trên khung 15 phút của một buổi sáng, cùng cổ phiếu đó có thể lên xuống 5–6 lần trong khoảng 39.200–39.800đ. Nếu chỉ nhìn khung 15 phút, bạn dễ hoảng khi thấy giá "giảm 1,5%" trong 1 giờ, dù xu hướng lớn vẫn đang tăng rất rõ.</p>

<h3>4. Giới hạn của phân tích kỹ thuật</h3>
<ul>
<li><b>Chỉ là xác suất, không phải chắc chắn.</b> Một mẫu hình "đẹp" có thể thất bại 40–50% số lần.</li>
<li><b>Tín hiệu giả:</b> giá vượt kháng cự rồi quay đầu ngay (bẫy tăng giá), hoặc thủng hỗ trợ rồi bật lên (bẫy giảm giá).</li>
<li><b>Cổ phiếu thanh khoản thấp dễ bị làm giá:</b> với mã khối lượng nhỏ, một nhóm người có thể "vẽ" biểu đồ đẹp để dụ người khác mua. Vì vậy hãy luyện PTKT chủ yếu trên VN30 và các mã thanh khoản cao.</li>
<li><b>Tin tức bất ngờ</b> (chính sách, sự cố doanh nghiệp) có thể phá vỡ mọi mô hình trong một phiên.</li>
<li><b>Bạn dễ nhìn thấy điều mình muốn thấy:</b> nếu đã muốn mua, bạn sẽ "tìm ra" tín hiệu mua. Đây là lý do cần quy tắc viết sẵn (tuần 11).</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu C (số liệu minh họa) vượt kháng cự 50.000đ lúc 10 giờ sáng, lên 51.000đ. Bạn mua ngay vì "tín hiệu phá vỡ". Đến phiên ATC, giá bị bán xuống đóng cửa ở 49.300đ, tức thấp hơn kháng cự. Đây là một <b>tín hiệu giả</b>: bạn đang lỗ 3,3% chỉ sau vài giờ. Hoặc một mã nhỏ, mỗi ngày chỉ khớp 50.000 cổ phiếu: chỉ cần vài tỷ đồng là một nhóm có thể kéo giá tăng 5 phiên liền tạo biểu đồ "đẹp", rồi bán hết cho người đến sau.</p>
<div class="warn">⚠ Sai lầm phổ biến: học vài chỉ báo rồi tin rằng mình "đọc được" thị trường và giao dịch liên tục. PTKT giúp bạn <b>có kỷ luật</b> (biết điểm vào, điểm thoát), không giúp bạn đoán đúng mọi lúc.</div>

<h3>5. Ví dụ: một quyết định có kết hợp PTKT</h3>
<p><b>Ví dụ:</b> Giả sử sau tháng 2 bạn đã phân tích "Công ty A" và thấy doanh nghiệp tăng trưởng tốt, định giá hợp lý (số liệu minh họa). Giá hiện tại 30.000đ. Thay vì mua ngay, bạn nhìn biểu đồ:</p>
<ul>
<li>Giá đang trong xu hướng tăng, vừa điều chỉnh về vùng 28.500–29.000đ là vùng từng chặn đà giảm nhiều lần (hỗ trợ).</li>
<li>Kế hoạch: chờ giá về gần 29.000đ và có dấu hiệu bật lên mới mua; đặt cắt lỗ dưới hỗ trợ ở 27.000đ (rủi ro khoảng 7%).</li>
</ul>
<p>PTKT không nói chắc chắn giá sẽ tăng. Nó cho bạn <b>một kế hoạch có điểm vào, điểm sai và mức lỗ tối đa</b>.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở app giao dịch hoặc trang FireAnt/Vietstock, xem biểu đồ của 1 mã trong watchlist.</li>
<li>Chuyển lần lượt giữa biểu đồ đường và biểu đồ nến. Chuyển giữa khung ngày và khung tuần.</li>
<li>Ghi vào Ghi chú: "Khung tuần cho thấy giá đang đi lên / đi xuống / đi ngang", "Khung ngày cho thấy...". Viết 3–4 câu.</li>
<li>Chọn 1 cây nến bất kỳ, ghi lại 4 giá O, H, L, C của nó (di chuột lên cây nến để xem).</li>
</ol>
Kết quả mong đợi: bạn đọc được 4 mức giá của một cây nến và mô tả được xu hướng bằng lời.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>PTKT nghiên cứu giá và khối lượng để đánh giá <b>xác suất</b>, không dự đoán chắc chắn.</li>
<li>PTCB trả lời "mua gì", PTKT trả lời "mua khi nào, thoát ở đâu".</li>
<li>Mỗi phiên có 4 giá: Mở, Cao, Thấp, Đóng (OHLC). Biểu đồ nến thể hiện đủ cả 4.</li>
<li>Người mới nên dùng khung ngày và khung tuần, tập trung vào mã thanh khoản cao.</li>
</ul></div>
`,
  quiz: [
    { q: "Phân tích kỹ thuật chủ yếu dựa trên dữ liệu nào?", options: ["Báo cáo tài chính", "Giá và khối lượng giao dịch", "Tin đồn trên mạng xã hội", "Lãi suất ngân hàng"], answer: 1, explain: "PTKT nghiên cứu dấu vết của giá và khối lượng giao dịch trong quá khứ." },
    { q: "Biểu đồ nào thể hiện đủ 4 mức giá Mở – Cao – Thấp – Đóng?", options: ["Biểu đồ đường", "Biểu đồ nến", "Biểu đồ tròn", "Không biểu đồ nào"], answer: 1, explain: "Biểu đồ nến (và biểu đồ thanh OHLC) thể hiện đủ 4 mức giá; biểu đồ đường chỉ nối giá đóng cửa." },
    { q: "Vì sao người mới nên luyện PTKT trên cổ phiếu thanh khoản cao?", options: ["Vì giá luôn tăng", "Vì ít bị làm giá, biểu đồ đáng tin hơn", "Vì không mất phí", "Vì không có biên độ"], answer: 1, explain: "Mã thanh khoản thấp dễ bị một nhóm nhỏ 'vẽ' biểu đồ, khiến tín hiệu kỹ thuật kém tin cậy." }
  ]
},
{
  id: "w09-2",
  week: 9,
  day: 2,
  title: "Nến Nhật: cấu tạo và các mẫu nến đơn",
  minutes: 120,
  summary: "Đọc được thân nến, bóng nến và nhận diện doji, búa, sao băng cùng ý nghĩa tâm lý phía sau.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Khi đọc tổng kết phiên hôm nay, để ý các cụm như "rút chân", "bị bán mạnh cuối phiên", "giằng co". Mỗi cụm này tương ứng với một hình dạng nến. Mở biểu đồ VN-Index ngày hôm nay để đối chiếu.</div>

<h3>1. Cấu tạo một cây nến</h3>
<p>Mỗi cây nến gồm:</p>
<ul>
<li><b>Thân nến:</b> phần hình chữ nhật, nối giá mở cửa và giá đóng cửa.</li>
<li><b>Bóng trên:</b> đường mảnh từ đỉnh thân lên giá cao nhất.</li>
<li><b>Bóng dưới:</b> đường mảnh từ đáy thân xuống giá thấp nhất.</li>
</ul>
<p><b>Nến tăng</b> (thường màu xanh): giá đóng cửa <b>cao hơn</b> giá mở cửa, nên đỉnh thân là giá đóng. <b>Nến giảm</b> (thường màu đỏ): giá đóng cửa <b>thấp hơn</b> giá mở cửa, nên đỉnh thân là giá mở.</p>
<p>Lưu ý: màu nến so sánh <b>giá đóng với giá mở của chính phiên đó</b>. Màu trên bảng giá thì so sánh giá hiện tại với <b>giá tham chiếu</b> (giá đóng cửa phiên trước). Vì vậy có thể gặp phiên mà bảng giá báo đỏ (giảm so với hôm qua) nhưng cây nến lại xanh (mở cửa thấp rồi kéo lên).</p>
<p><b>Ví dụ:</b> Cổ phiếu D (số liệu minh họa) đóng cửa hôm qua 25,00 (giá tham chiếu hôm nay). Hôm nay: Mở 24,20 – Cao 24,90 – Thấp 24,00 – Đóng 24,70.</p>
<ul>
<li>Thân nến: từ 24,20 lên 24,70, dài 0,50. Vì Đóng &gt; Mở nên đây là <b>nến xanh</b>.</li>
<li>Bóng trên: 24,90 − 24,70 = 0,20. Bóng dưới: 24,20 − 24,00 = 0,20.</li>
<li>Trên bảng giá: 24,70 &lt; 25,00 nên hiển thị <b>màu đỏ, giảm 1,2%</b>.</li>
</ul>
<p>Cả hai đều đúng: so với hôm qua thì giảm, nhưng trong phiên hôm nay bên mua đã kéo giá lên từ mức mở cửa.</p>

<figure class="fig"><svg viewBox="0 0 640 270" role="img" aria-label="Cấu tạo nến tăng và nến giảm">
<line x1="170" y1="40" x2="170" y2="220" style="stroke:var(--up);stroke-width:2"/>
<rect x="150" y="80" width="40" height="100" style="fill:var(--up)"/>
<text x="140" y="64" text-anchor="end" style="fill:var(--muted);font-size:12px">Bóng trên</text>
<text x="140" y="134" text-anchor="end" style="fill:var(--muted);font-size:12px">Thân nến</text>
<text x="140" y="204" text-anchor="end" style="fill:var(--muted);font-size:12px">Bóng dưới</text>
<line x1="174" y1="40" x2="200" y2="40" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="204" y="44" style="fill:var(--text);font-size:12px">Giá cao nhất</text>
<line x1="192" y1="80" x2="200" y2="80" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="204" y="84" style="fill:var(--text);font-size:12px">Giá ĐÓNG cửa</text>
<line x1="192" y1="180" x2="200" y2="180" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="204" y="184" style="fill:var(--text);font-size:12px">Giá MỞ cửa</text>
<line x1="174" y1="220" x2="200" y2="220" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="204" y="224" style="fill:var(--text);font-size:12px">Giá thấp nhất</text>
<line x1="470" y1="40" x2="470" y2="220" style="stroke:var(--down);stroke-width:2"/>
<rect x="450" y="80" width="40" height="100" style="fill:var(--down)"/>
<text x="440" y="64" text-anchor="end" style="fill:var(--muted);font-size:12px">Bóng trên</text>
<text x="440" y="134" text-anchor="end" style="fill:var(--muted);font-size:12px">Thân nến</text>
<text x="440" y="204" text-anchor="end" style="fill:var(--muted);font-size:12px">Bóng dưới</text>
<line x1="474" y1="40" x2="500" y2="40" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="504" y="44" style="fill:var(--text);font-size:12px">Giá cao nhất</text>
<line x1="492" y1="80" x2="500" y2="80" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="504" y="84" style="fill:var(--text);font-size:12px">Giá MỞ cửa</text>
<line x1="492" y1="180" x2="500" y2="180" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="504" y="184" style="fill:var(--text);font-size:12px">Giá ĐÓNG cửa</text>
<line x1="474" y1="220" x2="500" y2="220" style="stroke:var(--line);stroke-dasharray:3 3"/><text x="504" y="224" style="fill:var(--text);font-size:12px">Giá thấp nhất</text>
<text x="170" y="256" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">Nến tăng (Đóng &gt; Mở)</text>
<text x="470" y="256" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:700">Nến giảm (Đóng &lt; Mở)</text>
</svg><figcaption>Hình: Ở nến tăng, giá đóng nằm ở đỉnh thân; ở nến giảm, giá đóng nằm ở đáy thân.</figcaption></figure>

<h3>2. Đọc tâm lý từ thân và bóng nến</h3>
<ul>
<li><b>Thân dài, bóng ngắn:</b> một bên áp đảo suốt phiên. Nến xanh thân dài = bên mua mạnh; nến đỏ thân dài = bên bán mạnh.</li>
<li><b>Thân ngắn:</b> hai bên cân bằng, thị trường lưỡng lự.</li>
<li><b>Bóng dưới dài:</b> trong phiên giá bị bán xuống sâu, nhưng bên mua đã kéo giá lên lại. Đây là dấu hiệu lực mua xuất hiện ở vùng giá thấp ("rút chân").</li>
<li><b>Bóng trên dài:</b> giá từng lên cao nhưng bị bán xuống. Đây là dấu hiệu áp lực bán ở vùng giá cao.</li>
</ul>
<p><b>Ví dụ:</b> So sánh hai phiên của cổ phiếu E (số liệu minh họa, giá tham chiếu 40,0):</p>
<ul>
<li>Phiên X: Mở 40,0 – Cao 42,6 – Thấp 39,9 – Đóng 42,5. Thân 2,5 rất dài, gần như không có bóng: bên mua áp đảo từ đầu đến cuối phiên.</li>
<li>Phiên Y: Mở 40,0 – Cao 42,6 – Thấp 39,8 – Đóng 40,2. Thân chỉ 0,2 nhưng bóng trên 2,4: giá từng tăng 6,5% nhưng bị bán gần hết. Người mua đuổi ở 42,0 trong phiên Y đang lỗ khoảng 4,3% ngay cuối ngày.</li>
</ul>
<p>Hai phiên có cùng giá cao nhất nhưng mang ý nghĩa hoàn toàn khác nhau.</p>

<h3>3. Ba mẫu nến đơn quan trọng</h3>
<p><b>Doji:</b> giá mở cửa gần bằng giá đóng cửa, thân gần như chỉ là một vạch ngang. Ý nghĩa: lưỡng lự. Doji sau một chuỗi tăng dài có thể là dấu hiệu bên mua đã mệt; doji trong vùng đi ngang thì ít ý nghĩa.</p>
<p><b>Ví dụ:</b> Cổ phiếu F tăng 8 phiên liền từ 30,0 lên 36,0. Phiên thứ 9: Mở 36,0 – Cao 36,8 – Thấp 35,2 – Đóng 36,05. Thân chỉ 0,05 (khoảng 0,1% giá), trong khi biên độ cả phiên là 1,6. Đây là doji: bên mua và bên bán giằng co cân bằng sau chuỗi tăng dài, nên thận trọng, không mua đuổi.</p>
<p><b>Búa (Hammer):</b> thân nhỏ nằm ở phần trên, bóng dưới dài ít nhất <b>gấp 2 lần thân</b>, bóng trên rất ngắn hoặc không có. Chỉ được gọi là búa khi xuất hiện <b>sau một đợt giảm</b>. Ý nghĩa: bên bán đẩy giá xuống sâu nhưng bên mua đã phản công, có khả năng đảo chiều tăng.</p>
<p><b>Sao băng (Shooting Star):</b> ngược với búa: thân nhỏ ở phần dưới, bóng trên dài ít nhất gấp 2 lần thân, xuất hiện <b>sau một đợt tăng</b>. Ý nghĩa: giá bị từ chối ở vùng cao, có khả năng đảo chiều giảm.</p>
<p><b>Ví dụ:</b> Cổ phiếu G tăng từ 18,0 lên 22,0 trong 3 tuần. Phiên hôm nay: Mở 22,0 – Cao 23,4 – Thấp 21,9 – Đóng 21,95. Thân = 22,0 − 21,95 = 0,05; bóng trên = 23,4 − 22,0 = 1,4 (gấp 28 lần thân); bóng dưới = 21,95 − 21,9 = 0,05. Thân nhỏ nằm sát đáy, bóng trên rất dài, sau đợt tăng: đây là <b>sao băng</b>. Nếu phiên sau đóng cửa dưới 21,9 thì tín hiệu được xác nhận.</p>

<figure class="fig"><svg viewBox="0 0 640 270" role="img" aria-label="Ba mẫu nến doji, búa, sao băng">
<line x1="110" y1="60" x2="110" y2="200" style="stroke:var(--ref);stroke-width:2"/>
<rect x="92" y="128" width="36" height="4" style="fill:var(--ref)"/>
<line x1="320" y1="62" x2="320" y2="210" style="stroke:var(--up);stroke-width:2"/>
<rect x="302" y="68" width="36" height="32" style="fill:var(--up)"/>
<line x1="352" y1="100" x2="352" y2="210" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<text x="358" y="160" style="fill:var(--muted);font-size:11px">bóng dưới ≥ 2× thân</text>
<line x1="530" y1="50" x2="530" y2="206" style="stroke:var(--down);stroke-width:2"/>
<rect x="512" y="170" width="36" height="30" style="fill:var(--down)"/>
<line x1="562" y1="50" x2="562" y2="170" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<text x="568" y="110" style="fill:var(--muted);font-size:11px">bóng trên</text>
<text x="568" y="124" style="fill:var(--muted);font-size:11px">≥ 2× thân</text>
<text x="110" y="236" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:700">Doji</text>
<text x="320" y="236" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:700">Búa (Hammer)</text>
<text x="530" y="236" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:700">Sao băng</text>
<text x="110" y="256" text-anchor="middle" style="fill:var(--muted);font-size:12px">Mở ≈ Đóng: lưỡng lự</text>
<text x="320" y="256" text-anchor="middle" style="fill:var(--muted);font-size:12px">Xuất hiện SAU đợt giảm</text>
<text x="530" y="256" text-anchor="middle" style="fill:var(--muted);font-size:12px">Xuất hiện SAU đợt tăng</text>
</svg><figcaption>Hình: Ba mẫu nến đơn. Màu thân của búa và sao băng không quan trọng bằng vị trí xuất hiện và độ dài bóng.</figcaption></figure>

<h3>4. Ví dụ tính toán: có phải nến búa không?</h3>
<p><b>Ví dụ:</b> Cổ phiếu B đã giảm 6 phiên liên tiếp. Phiên hôm nay (số liệu minh họa, đơn vị nghìn đồng): Mở 30,00 – Cao 30,20 – Thấp 28,40 – Đóng 30,10.</p>
<ul>
<li>Thân nến = |30,10 − 30,00| = 0,10.</li>
<li>Bóng dưới = giá thấp hơn trong (mở, đóng) − giá thấp nhất = 30,00 − 28,40 = 1,60. Gấp 16 lần thân, thỏa điều kiện ≥ 2 lần.</li>
<li>Bóng trên = 30,20 − 30,10 = 0,10, rất ngắn.</li>
<li>Xuất hiện sau đợt giảm, nên đây là <b>nến búa</b>.</li>
</ul>
<p>Diễn giải: trong phiên giá từng giảm khoảng 5,3% (từ 30,00 xuống 28,40), nhưng cuối phiên được mua lên gần như toàn bộ. Tuy nhiên, chưa nên mua ngay chỉ vì một cây búa. Hãy chờ <b>phiên xác nhận</b>: phiên sau tăng và đóng cửa cao hơn giá đóng của nến búa.</p>
<div class="warn">⚠ Một cây nến đơn lẻ là tín hiệu yếu. Luôn hỏi: nó xuất hiện ở đâu (gần hỗ trợ/kháng cự không?), khối lượng thế nào, và phiên sau có xác nhận không?</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Mở biểu đồ ngày của VN-Index và 2 mã trong watchlist, xem lại khoảng 3 tháng gần nhất.</li>
<li>Tìm và chụp màn hình: 1 doji, 1 nến có bóng dưới dài, 1 nến có bóng trên dài.</li>
<li>Với mỗi nến, ghi O-H-L-C, tính thân và bóng, rồi kết luận nó có phải búa/sao băng không (nhớ kiểm tra bối cảnh tăng hay giảm trước đó).</li>
<li>Ghi lại 3 phiên sau đó giá đi thế nào. Tín hiệu có đúng không?</li>
</ol>
Kết quả mong đợi: một bảng nhỏ 3 dòng trong Ghi chú, mỗi dòng có số liệu và kết luận.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Thân nến nối giá mở và giá đóng; bóng nến chạm giá cao nhất và thấp nhất.</li>
<li>Bóng dưới dài = lực mua xuất hiện ở giá thấp; bóng trên dài = áp lực bán ở giá cao.</li>
<li>Búa chỉ có ý nghĩa sau đợt giảm, sao băng chỉ có ý nghĩa sau đợt tăng.</li>
<li>Luôn chờ phiên xác nhận, không hành động chỉ vì một cây nến.</li>
</ul></div>
`,
  quiz: [
    { q: "Ở nến giảm, đỉnh của thân nến là giá nào?", options: ["Giá đóng cửa", "Giá mở cửa", "Giá cao nhất", "Giá tham chiếu"], answer: 1, explain: "Nến giảm có giá đóng thấp hơn giá mở, nên đỉnh thân là giá mở cửa, đáy thân là giá đóng cửa." },
    { q: "Nến có thân nhỏ ở trên, bóng dưới dài gấp 3 lần thân, xuất hiện sau 5 phiên giảm gọi là gì?", options: ["Sao băng", "Doji", "Búa", "Nhấn chìm giảm"], answer: 2, explain: "Đó là nến búa: bóng dưới ≥ 2 lần thân, thân ở phía trên, xuất hiện sau đợt giảm." },
    { q: "Bóng trên dài thể hiện điều gì?", options: ["Lực mua mạnh ở vùng giá thấp", "Giá bị bán xuống từ vùng cao", "Không có giao dịch", "Giá chạm trần"], answer: 1, explain: "Giá từng lên cao trong phiên nhưng bị bán xuống, cho thấy áp lực bán ở vùng cao." }
  ]
},
{
  id: "w09-3",
  week: 9,
  day: 3,
  title: "Mẫu nến đảo chiều: nhấn chìm và nguyên tắc xác nhận",
  minutes: 120,
  summary: "Nhận diện nhấn chìm tăng/giảm, hiểu vì sao vị trí, khối lượng và phiên xác nhận quyết định độ tin cậy.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm một cổ phiếu tăng mạnh hoặc giảm mạnh nhất hôm nay trên CafeF. Mở biểu đồ ngày của nó và xem cây nến hôm nay có "bao trùm" cây nến hôm qua không. Ghi lại khối lượng phiên hôm nay so với hôm qua.</div>

<h3>1. Mẫu nến nhấn chìm (Engulfing)</h3>
<p>Đây là mẫu 2 cây nến, trong đó <b>thân cây thứ hai bao trùm hoàn toàn thân cây thứ nhất</b> và có màu ngược lại.</p>
<ul>
<li><b>Nhấn chìm tăng:</b> xuất hiện sau đợt giảm. Cây 1 là nến giảm (đỏ), cây 2 là nến tăng (xanh) mở cửa thấp hơn hoặc bằng giá đóng cây 1 và đóng cửa cao hơn giá mở cây 1. Ý nghĩa: bên mua đã đảo ngược hoàn toàn thế trận của phiên trước.</li>
<li><b>Nhấn chìm giảm:</b> xuất hiện sau đợt tăng. Cây 1 tăng, cây 2 giảm và thân bao trùm thân cây 1. Ý nghĩa: bên bán chiếm ưu thế.</li>
</ul>
<p>Trên thị trường Việt Nam, giá mở cửa thường sát giá đóng phiên trước nên điều kiện "mở thấp hơn" đôi khi chỉ chênh một bước giá. Điều quan trọng nhất là <b>thân cây 2 lớn hơn và bao trùm thân cây 1</b>.</p>

<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Mẫu nhấn chìm tăng và nhấn chìm giảm">
<text x="120" y="24" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Nhấn chìm tăng (sau đà giảm)</text>
<text x="440" y="24" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Nhấn chìm giảm (sau đà tăng)</text>
<line x1="40" y1="52" x2="40" y2="98" style="stroke:var(--down);stroke-width:2"/><rect x="30" y="60" width="20" height="30" style="fill:var(--down)"/>
<line x1="80" y1="78" x2="80" y2="122" style="stroke:var(--down);stroke-width:2"/><rect x="70" y="85" width="20" height="30" style="fill:var(--down)"/>
<line x1="120" y1="104" x2="120" y2="152" style="stroke:var(--down);stroke-width:2"/><rect x="110" y="110" width="20" height="35" style="fill:var(--down)"/>
<line x1="160" y1="134" x2="160" y2="172" style="stroke:var(--down);stroke-width:2"/><rect x="150" y="140" width="20" height="25" style="fill:var(--down)"/>
<line x1="200" y1="120" x2="200" y2="178" style="stroke:var(--up);stroke-width:2"/><rect x="190" y="128" width="20" height="44" style="fill:var(--up)"/>
<rect x="143" y="122" width="74" height="58" rx="6" style="fill:none;stroke:var(--accent);stroke-width:1.5;stroke-dasharray:4 3"/>
<line x1="360" y1="162" x2="360" y2="206" style="stroke:var(--up);stroke-width:2"/><rect x="350" y="170" width="20" height="30" style="fill:var(--up)"/>
<line x1="400" y1="137" x2="400" y2="182" style="stroke:var(--up);stroke-width:2"/><rect x="390" y="145" width="20" height="30" style="fill:var(--up)"/>
<line x1="440" y1="108" x2="440" y2="156" style="stroke:var(--up);stroke-width:2"/><rect x="430" y="115" width="20" height="35" style="fill:var(--up)"/>
<line x1="480" y1="88" x2="480" y2="126" style="stroke:var(--up);stroke-width:2"/><rect x="470" y="95" width="20" height="25" style="fill:var(--up)"/>
<line x1="520" y1="82" x2="520" y2="136" style="stroke:var(--down);stroke-width:2"/><rect x="510" y="88" width="20" height="40" style="fill:var(--down)"/>
<rect x="463" y="78" width="74" height="62" rx="6" style="fill:none;stroke:var(--accent);stroke-width:1.5;stroke-dasharray:4 3"/>
<text x="120" y="212" text-anchor="middle" style="fill:var(--muted);font-size:12px">Thân xanh bao trùm thân đỏ trước đó</text>
<text x="440" y="232" text-anchor="middle" style="fill:var(--muted);font-size:12px">Thân đỏ bao trùm thân xanh trước đó</text>
</svg><figcaption>Hình: Khung nét đứt đánh dấu cặp nến nhấn chìm. Vị trí xuất hiện (cuối đà giảm/tăng) là điều kiện bắt buộc.</figcaption></figure>

<h3>2. Ví dụ tính toán</h3>
<p><b>Ví dụ:</b> Cổ phiếu C (số liệu minh họa, nghìn đồng) đang giảm từ 28,0 về 24,5.</p>
<table>
<tr><th>Phiên</th><th>Mở</th><th>Cao</th><th>Thấp</th><th>Đóng</th><th>Khối lượng</th></tr>
<tr><td>Hôm qua</td><td>25,00</td><td>25,10</td><td>24,10</td><td>24,20</td><td>1,1 triệu</td></tr>
<tr><td>Hôm nay</td><td>24,10</td><td>25,40</td><td>23,90</td><td>25,30</td><td>2,3 triệu</td></tr>
</table>
<ul>
<li>Thân hôm qua: từ 24,20 đến 25,00 (nến đỏ).</li>
<li>Thân hôm nay: từ 24,10 đến 25,30 (nến xanh). Vì 24,10 &lt; 24,20 và 25,30 &gt; 25,00, thân hôm nay bao trùm thân hôm qua.</li>
<li>Khối lượng hôm nay gấp khoảng 2,1 lần hôm qua: lực mua thật sự, không phải vài lệnh nhỏ.</li>
</ul>
<p>Kết luận: <b>nhấn chìm tăng có khối lượng xác nhận</b>, đáng chú ý. Nhưng vẫn nên kiểm tra thêm vị trí (có gần vùng hỗ trợ không) trước khi lên kế hoạch.</p>

<h3>3. Nhắc qua: sao mai và sao hôm (3 nến)</h3>
<ul>
<li><b>Sao mai</b> (sau đà giảm): nến đỏ dài, tiếp theo là nến thân nhỏ (lưỡng lự), rồi nến xanh dài đóng cửa vào sâu trong thân cây đỏ đầu tiên.</li>
<li><b>Sao hôm</b> (sau đà tăng): ngược lại, gồm nến xanh dài, nến thân nhỏ, rồi nến đỏ dài.</li>
</ul>
<p><b>Ví dụ:</b> Sao mai trên cổ phiếu H (số liệu minh họa, nghìn đồng):</p>
<table>
<tr><th>Phiên</th><th>Mở</th><th>Đóng</th><th>Nhận xét</th></tr>
<tr><td>1</td><td>32,0</td><td>30,0</td><td>Nến đỏ dài (−6,25%): bên bán mạnh</td></tr>
<tr><td>2</td><td>29,8</td><td>29,9</td><td>Thân chỉ 0,1: lưỡng lự, lực bán chững lại</td></tr>
<tr><td>3</td><td>30,0</td><td>31,6</td><td>Nến xanh dài, đóng cửa ở 31,6</td></tr>
</table>
<p>Điểm giữa thân nến 1 là (32,0 + 30,0) ÷ 2 = 31,0. Nến 3 đóng cửa 31,6 &gt; 31,0, tức đã vào sâu quá nửa thân nến đỏ, thỏa điều kiện sao mai.</p>
<p>Bạn không cần thuộc hàng chục mẫu nến. Nắm vững 5–6 mẫu (doji, búa, sao băng, nhấn chìm, sao mai/sao hôm) và <b>tư duy đằng sau chúng</b> là đủ.</p>

<h3>4. Ba bước đánh giá độ tin cậy của mẫu nến</h3>
<figure class="fig"><svg viewBox="0 0 640 160" role="img" aria-label="Ba bước đánh giá mẫu nến: vị trí, khối lượng, xác nhận">
<rect x="10" y="30" width="190" height="100" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="105" y="58" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700">① Vị trí</text>
<text x="105" y="82" text-anchor="middle" style="fill:var(--text);font-size:12px">Ở cuối xu hướng?</text>
<text x="105" y="100" text-anchor="middle" style="fill:var(--text);font-size:12px">Gần hỗ trợ / kháng cự?</text>
<line x1="202" y1="80" x2="214" y2="80" style="stroke:var(--muted);stroke-width:2"/><polygon points="214,74 224,80 214,86" style="fill:var(--muted)"/>
<rect x="226" y="30" width="190" height="100" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="321" y="58" text-anchor="middle" style="fill:var(--c2);font-size:14px;font-weight:700">② Khối lượng</text>
<text x="321" y="82" text-anchor="middle" style="fill:var(--text);font-size:12px">Cao hơn các phiên trước?</text>
<text x="321" y="100" text-anchor="middle" style="fill:var(--text);font-size:12px">Càng lớn càng đáng tin</text>
<line x1="418" y1="80" x2="430" y2="80" style="stroke:var(--muted);stroke-width:2"/><polygon points="430,74 440,80 430,86" style="fill:var(--muted)"/>
<rect x="442" y="30" width="190" height="100" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="537" y="58" text-anchor="middle" style="fill:var(--up);font-size:14px;font-weight:700">③ Xác nhận</text>
<text x="537" y="82" text-anchor="middle" style="fill:var(--text);font-size:12px">Phiên sau đi đúng hướng?</text>
<text x="537" y="100" text-anchor="middle" style="fill:var(--text);font-size:12px">Đóng cửa vượt mẫu nến?</text>
<text x="320" y="152" text-anchor="middle" style="fill:var(--muted);font-size:12px">Đủ cả 3 → tín hiệu đáng chú ý · Thiếu 2/3 → bỏ qua</text>
</svg><figcaption>Hình: Quy trình 3 bước. Một mẫu nến đẹp ở giữa vùng đi ngang, khối lượng thấp gần như vô nghĩa.</figcaption></figure>
<p><b>Ví dụ:</b> Chấm điểm hai mẫu nhấn chìm tăng (số liệu minh họa):</p>
<table>
<tr><th></th><th>Mẫu 1 (mã K)</th><th>Mẫu 2 (mã L)</th></tr>
<tr><td>Vị trí</td><td>Sau đợt giảm 15%, đúng vùng hỗ trợ 40,0 từng bật lên 2 lần → 1 điểm</td><td>Giữa vùng đi ngang 20–22 → 0 điểm</td></tr>
<tr><td>Khối lượng</td><td>1,8 lần trung bình 20 phiên → 1 điểm</td><td>0,7 lần trung bình → 0 điểm</td></tr>
<tr><td>Xác nhận</td><td>Phiên sau tăng tiếp, đóng cửa cao hơn → 1 điểm</td><td>Phiên sau giảm lại → 0 điểm</td></tr>
<tr><td><b>Tổng</b></td><td><b>3/3: đáng lên kế hoạch</b></td><td><b>0/3: bỏ qua</b></td></tr>
</table>

<div class="warn">⚠ Nhiều video trên mạng giới thiệu "mẫu nến thần thánh có xác suất thắng 90%". Thực tế, nghiên cứu và kinh nghiệm cho thấy mẫu nến đơn lẻ chỉ nhỉnh hơn ngẫu nhiên một chút. Giá trị thật của mẫu nến là giúp bạn <b>đặt điểm cắt lỗ rõ ràng</b> (ví dụ dưới đáy nến nhấn chìm tăng).</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Trên biểu đồ ngày 6 tháng gần nhất của 3 mã trong watchlist, tìm ít nhất 2 mẫu nhấn chìm (tăng hoặc giảm).</li>
<li>Với mỗi mẫu, chấm điểm theo 3 bước: Vị trí (0/1), Khối lượng (0/1), Xác nhận (0/1).</li>
<li>Ghi kết quả 5 phiên sau đó: giá đi đúng hay sai hướng tín hiệu?</li>
<li>Rút ra nhận xét: các mẫu đạt 3/3 điểm có hiệu quả hơn các mẫu 1/3 không?</li>
</ol>
Kết quả mong đợi: bảng nhỏ gồm Mã, Ngày, Loại mẫu, Điểm (0–3), Kết quả sau 5 phiên.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Nhấn chìm: thân cây 2 bao trùm hoàn toàn thân cây 1, màu ngược nhau.</li>
<li>Nhấn chìm tăng chỉ có ý nghĩa sau đà giảm; nhấn chìm giảm chỉ có ý nghĩa sau đà tăng.</li>
<li>Đánh giá theo 3 bước: vị trí, khối lượng, phiên xác nhận.</li>
<li>Mẫu nến giúp đặt điểm cắt lỗ rõ ràng hơn là dự đoán chính xác.</li>
</ul></div>
`,
  quiz: [
    { q: "Điều kiện cốt lõi của mẫu nhấn chìm tăng là gì?", options: ["Hai nến xanh liên tiếp", "Thân nến xanh bao trùm hoàn toàn thân nến đỏ trước đó", "Nến có bóng dưới dài", "Giá chạm trần"], answer: 1, explain: "Nhấn chìm tăng: nến xanh có thân bao trùm thân nến đỏ phiên trước, xuất hiện sau đà giảm." },
    { q: "Yếu tố nào làm tăng độ tin cậy của một mẫu nến đảo chiều?", options: ["Xuất hiện giữa vùng đi ngang", "Khối lượng thấp hơn bình thường", "Xuất hiện gần hỗ trợ và có khối lượng lớn", "Xuất hiện vào thứ Hai"], answer: 2, explain: "Vị trí gần hỗ trợ/kháng cự và khối lượng lớn là hai yếu tố tăng độ tin cậy." },
    { q: "Hôm qua: Mở 50,0 Đóng 51,0 (xanh). Hôm nay: Mở 51,2 Đóng 49,8 (đỏ), sau đà tăng. Đây là mẫu gì?", options: ["Nhấn chìm tăng", "Nhấn chìm giảm", "Búa", "Không phải mẫu nào"], answer: 1, explain: "Thân hôm nay (49,8–51,2) bao trùm thân hôm qua (50,0–51,0), màu đỏ, sau đà tăng → nhấn chìm giảm." }
  ]
},
{
  id: "w09-4",
  week: 9,
  day: 4,
  title: "Xu hướng và đường xu hướng",
  minutes: 120,
  summary: "Nhận diện xu hướng tăng, giảm, đi ngang qua đỉnh và đáy; vẽ và sử dụng đường xu hướng đúng cách.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Mở biểu đồ tuần của VN-Index (khoảng 2 năm). Trước khi đọc bất kỳ nhận định nào, tự trả lời: "Theo khung tuần, thị trường đang tăng, giảm hay đi ngang?". Sau đó đọc nhận định của 1 CTCK và so sánh với nhận định của bạn.</div>

<h3>1. Xu hướng là gì?</h3>
<p>Giá không đi thẳng mà đi theo hình răng cưa, gồm các <b>đỉnh</b> (điểm cao tạm thời) và <b>đáy</b> (điểm thấp tạm thời). Xu hướng được xác định dựa vào thứ tự của các đỉnh và đáy đó:</p>
<ul>
<li><b>Xu hướng tăng:</b> đỉnh sau cao hơn đỉnh trước <b>và</b> đáy sau cao hơn đáy trước.</li>
<li><b>Xu hướng giảm:</b> đỉnh sau thấp hơn đỉnh trước <b>và</b> đáy sau thấp hơn đáy trước.</li>
<li><b>Đi ngang (sideway):</b> các đỉnh xấp xỉ nhau, các đáy xấp xỉ nhau; giá dao động trong một vùng.</li>
</ul>
<p><b>Ví dụ:</b> Ghi lại các đỉnh và đáy của 3 cổ phiếu trong 4 tháng (số liệu minh họa, nghìn đồng):</p>
<table>
<tr><th>Mã</th><th>Đáy 1</th><th>Đỉnh 1</th><th>Đáy 2</th><th>Đỉnh 2</th><th>Đáy 3</th><th>Kết luận</th></tr>
<tr><td>M</td><td>20,0</td><td>23,0</td><td>21,5</td><td>25,0</td><td>23,0</td><td>Đáy 20→21,5→23 và đỉnh 23→25 cao dần: <b>tăng</b></td></tr>
<tr><td>N</td><td>40,0</td><td>45,0</td><td>37,0</td><td>42,0</td><td>34,5</td><td>Đỉnh 45→42, đáy 40→37→34,5 thấp dần: <b>giảm</b></td></tr>
<tr><td>P</td><td>15,0</td><td>17,0</td><td>15,2</td><td>16,9</td><td>14,9</td><td>Đỉnh quanh 17, đáy quanh 15: <b>đi ngang</b></td></tr>
</table>
<figure class="fig"><svg viewBox="0 0 640 245" role="img" aria-label="Ba loại xu hướng: tăng, giảm, đi ngang">
<text x="110" y="22" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">Xu hướng tăng</text>
<text x="325" y="22" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:700">Xu hướng giảm</text>
<text x="530" y="22" text-anchor="middle" style="fill:var(--ref);font-size:13px;font-weight:700">Đi ngang</text>
<line x1="212" y1="35" x2="212" y2="215" style="stroke:var(--line)"/>
<line x1="428" y1="35" x2="428" y2="215" style="stroke:var(--line)"/>
<line x1="10" y1="203.6" x2="205" y2="134" style="stroke:var(--up);stroke-width:1.5;stroke-dasharray:5 4"/>
<polyline points="20,200 60,150 90,175 130,110 160,150 200,80" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<line x1="225" y1="66.4" x2="420" y2="136" style="stroke:var(--down);stroke-width:1.5;stroke-dasharray:5 4"/>
<polyline points="235,70 275,120 305,95 345,160 375,120 415,200" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<line x1="436" y1="88" x2="630" y2="88" style="stroke:var(--c2);stroke-width:1.5;stroke-dasharray:5 4"/>
<line x1="436" y1="172" x2="630" y2="172" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:5 4"/>
<polyline points="440,140 470,90 500,170 530,95 560,165 590,92 620,150" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<text x="110" y="232" text-anchor="middle" style="fill:var(--muted);font-size:12px">Đỉnh và đáy cao dần</text>
<text x="325" y="232" text-anchor="middle" style="fill:var(--muted);font-size:12px">Đỉnh và đáy thấp dần</text>
<text x="530" y="232" text-anchor="middle" style="fill:var(--muted);font-size:12px">Giá dao động trong một vùng</text>
</svg><figcaption>Hình: Đường nét đứt là đường xu hướng. Xu hướng tăng nối các đáy, xu hướng giảm nối các đỉnh, đi ngang có biên trên và biên dưới.</figcaption></figure>

<h3>2. Xu hướng có nhiều cấp độ</h3>
<p>Cùng một lúc có thể tồn tại nhiều xu hướng ở các khung thời gian khác nhau:</p>
<table>
<tr><th>Cấp độ</th><th>Thời gian kéo dài</th><th>Xem trên khung</th></tr>
<tr><td>Xu hướng chính (dài hạn)</td><td>Nhiều tháng đến vài năm</td><td>Tuần, tháng</td></tr>
<tr><td>Xu hướng trung hạn</td><td>Vài tuần đến vài tháng</td><td>Ngày</td></tr>
<tr><td>Xu hướng ngắn hạn</td><td>Vài ngày đến vài tuần</td><td>Ngày, giờ</td></tr>
</table>
<p><b>Ví dụ:</b> VN-Index có thể đang tăng dài hạn (khung tuần) nhưng đang điều chỉnh giảm 2 tuần (khung ngày). Nguyên tắc cho người mới: <b>giao dịch thuận theo xu hướng của khung lớn hơn</b>. Mua khi khung tuần tăng và khung ngày vừa điều chỉnh xong thì an toàn hơn mua khi khung tuần đang giảm.</p>

<h3>3. Cách vẽ đường xu hướng</h3>
<ol>
<li><b>Xu hướng tăng:</b> nối ít nhất 2 đáy quan trọng bằng một đường thẳng, kéo dài sang phải. Đường nằm <b>dưới</b> giá.</li>
<li><b>Xu hướng giảm:</b> nối ít nhất 2 đỉnh quan trọng. Đường nằm <b>trên</b> giá.</li>
<li>Khi giá chạm đường lần thứ 3 và bật ra, đường xu hướng được <b>xác nhận</b>. Càng nhiều lần chạm, đường càng có ý nghĩa.</li>
<li>Không cố "ép" đường đi qua mọi điểm; cho phép bóng nến xuyên qua một chút. Thân nến nên nằm đúng phía.</li>
<li>Đường quá dốc (gần thẳng đứng) dễ bị gãy và khó duy trì.</li>
</ol>
<p><b>Ví dụ:</b> Một đường xu hướng đi lên 1,0 nghìn đồng mỗi tháng trên cổ phiếu giá 20,0 tương đương tăng khoảng 5%/tháng, có thể duy trì vài tháng. Nhưng một đường đi lên 4,0 nghìn đồng mỗi tháng (20%/tháng) thì gần như chắc chắn sẽ gãy sớm, vì không doanh nghiệp nào tăng giá trị nhanh như vậy mãi được.</p>

<h3>4. Ví dụ tính toán và gãy xu hướng</h3>
<p><b>Ví dụ:</b> Cổ phiếu D (số liệu minh họa) tạo đáy 20,0 vào đầu tháng 1 và đáy 22,0 vào đầu tháng 3. Đường xu hướng tăng đi lên khoảng 1,0 nghìn đồng mỗi tháng. Như vậy đầu tháng 5, đường xu hướng nằm ở khoảng 24,0.</p>
<ul>
<li>Nếu đầu tháng 5 giá điều chỉnh về 24,2 rồi bật lên, đó là lần chạm thứ 3, xác nhận xu hướng.</li>
<li>Nếu giá đóng cửa ở 22,5, tức thấp hơn đường xu hướng khoảng 6%, thì xu hướng tăng đã <b>gãy</b>. Đây là tín hiệu cảnh báo, chưa chắc là đảo chiều thành giảm, nhưng không nên mua mới.</li>
</ul>
<figure class="fig"><svg viewBox="0 0 640 245" role="img" aria-label="Ví dụ gãy đường xu hướng tăng">
<line x1="20" y1="212.8" x2="460" y2="90.5" style="stroke:var(--up);stroke-width:1.5;stroke-dasharray:6 4"/>
<polyline points="30,210 80,160 120,185 180,120 220,157 280,85 360,175 400,150 450,200" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<circle cx="30" cy="210" r="5" style="fill:var(--up)"/><circle cx="120" cy="185" r="5" style="fill:var(--up)"/><circle cx="220" cy="157" r="5" style="fill:var(--up)"/>
<text x="30" y="232" text-anchor="middle" style="fill:var(--muted);font-size:11px">Đáy 1</text>
<text x="120" y="207" text-anchor="middle" style="fill:var(--muted);font-size:11px">Đáy 2</text>
<text x="220" y="179" text-anchor="middle" style="fill:var(--muted);font-size:11px">Đáy 3 (xác nhận)</text>
<circle cx="320" cy="129.5" r="9" style="fill:none;stroke:var(--down);stroke-width:2"/>
<text x="336" y="112" style="fill:var(--down);font-size:12px;font-weight:700">Gãy xu hướng</text>
<text x="480" y="80" style="fill:var(--muted);font-size:12px">Đường xu hướng tăng</text>
<text x="480" y="96" style="fill:var(--muted);font-size:12px">(nối các đáy)</text>
<text x="470" y="190" style="fill:var(--muted);font-size:12px">Giá đóng cửa dưới</text>
<text x="470" y="206" style="fill:var(--muted);font-size:12px">đường → cảnh báo</text>
</svg><figcaption>Hình: Ba đáy cao dần nằm trên cùng một đường thẳng. Khi giá đóng cửa xuyên xuống dưới đường, xu hướng tăng bị phá vỡ.</figcaption></figure>
<div class="warn">⚠ Hai người có thể vẽ hai đường xu hướng hơi khác nhau trên cùng biểu đồ. Đây là lý do nên coi đường xu hướng là <b>vùng tham khảo</b> chứ không phải ranh giới chính xác đến từng đồng.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>In hoặc chụp màn hình biểu đồ ngày (6 tháng) của VN-Index và 2 mã trong watchlist.</li>
<li>Đánh dấu các đỉnh và đáy chính (khoảng 4–6 điểm mỗi biểu đồ).</li>
<li>Kết luận xu hướng hiện tại của từng biểu đồ dựa trên thứ tự đỉnh/đáy.</li>
<li>Vẽ 1 đường xu hướng phù hợp (có thể vẽ trên ảnh bằng Paint hoặc vẽ tay trên giấy).</li>
<li>Ghi lại: giá hiện tại cách đường xu hướng bao nhiêu %?</li>
</ol>
Kết quả mong đợi: 3 biểu đồ có đường xu hướng và 1 câu kết luận cho mỗi biểu đồ.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Tăng = đỉnh và đáy cao dần; giảm = đỉnh và đáy thấp dần; đi ngang = dao động trong vùng.</li>
<li>Đường xu hướng tăng nối các đáy, đường xu hướng giảm nối các đỉnh; cần ít nhất 2 điểm, 3 điểm thì được xác nhận.</li>
<li>Giao dịch thuận theo xu hướng của khung thời gian lớn hơn.</li>
<li>Gãy đường xu hướng là cảnh báo, không tự động là đảo chiều.</li>
</ul></div>
`,
  quiz: [
    { q: "Dấu hiệu nào xác định một xu hướng tăng?", options: ["Giá tăng 3 phiên liên tiếp", "Đỉnh sau cao hơn đỉnh trước và đáy sau cao hơn đáy trước", "Khối lượng tăng", "Có nến xanh dài"], answer: 1, explain: "Xu hướng tăng được định nghĩa bằng chuỗi đỉnh cao dần và đáy cao dần." },
    { q: "Đường xu hướng tăng được vẽ bằng cách nào?", options: ["Nối các đỉnh", "Nối các đáy", "Nối giá mở cửa", "Kẻ ngang qua giá hiện tại"], answer: 1, explain: "Đường xu hướng tăng nối các đáy và nằm phía dưới giá." },
    { q: "Khung tuần đang giảm, khung ngày vừa tăng 3 phiên. Theo nguyên tắc cho người mới, nên làm gì?", options: ["Mua ngay vì khung ngày tăng", "Thận trọng, ưu tiên xu hướng khung lớn hơn", "Vay margin để mua", "Bán khống"], answer: 1, explain: "Nên thuận theo xu hướng khung lớn; nhịp tăng ngắn trong xu hướng giảm thường là hồi phục kỹ thuật." }
  ]
},
{
  id: "w09-5",
  week: 9,
  day: 5,
  title: "Hỗ trợ, kháng cự và vai trò của khối lượng",
  minutes: 120,
  summary: "Hiểu vì sao hình thành hỗ trợ/kháng cự, hiện tượng đổi vai, và cách khối lượng xác nhận hoặc phủ nhận một cú phá vỡ.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Trong bản tin hôm nay, tìm câu kiểu "VN-Index đang kiểm định vùng hỗ trợ X điểm" hoặc "gặp kháng cự tại Y điểm". Mở biểu đồ và xem những vùng đó trong quá khứ đã từng chặn giá ở đâu. Đồng thời so sánh khối lượng khớp lệnh hôm nay với mức trung bình.</div>

<h3>1. Hỗ trợ và kháng cự là gì?</h3>
<ul>
<li><b>Hỗ trợ:</b> vùng giá mà lực mua đủ mạnh để chặn đà giảm. Giá thường bật lên khi chạm vùng này.</li>
<li><b>Kháng cự:</b> vùng giá mà lực bán đủ mạnh để chặn đà tăng. Giá thường quay đầu khi chạm vùng này.</li>
</ul>
<p><b>Vì sao chúng hình thành?</b> Do trí nhớ và tâm lý của nhà đầu tư:</p>
<ul>
<li>Người từng bán ở 30.000đ rồi thấy giá tăng lên 35.000đ sẽ tiếc và muốn mua lại nếu giá về 30.000đ, tạo thành <b>hỗ trợ</b>.</li>
<li>Người mua ở 40.000đ và bị "kẹp hàng" khi giá giảm sẽ muốn bán hòa vốn khi giá quay lại 40.000đ, tạo thành <b>kháng cự</b>.</li>
<li><b>Số tròn</b> (VN-Index 1.200 điểm, giá 50.000đ) hay <b>đỉnh/đáy cũ</b> là nơi nhiều người đặt lệnh, nên thường trở thành hỗ trợ/kháng cự.</li>
</ul>
<p>Hãy coi hỗ trợ/kháng cự là <b>một vùng</b> (ví dụ 29.500–30.200đ) chứ không phải một con số chính xác.</p>
<p><b>Ví dụ:</b> Cổ phiếu Q (số liệu minh họa) trong 6 tháng có 3 lần giảm và bật lên tại 29.600đ, 30.100đ và 29.800đ. Vùng hỗ trợ là 29.500–30.200đ. Nếu bạn đặt lệnh mua đúng 29.500đ thì cả 3 lần đều không khớp. Cũng cổ phiếu đó có 2 lần lên tới 34.800đ và 35.200đ rồi quay đầu, nên vùng kháng cự là khoảng 34.800–35.200đ. Giá hiện tại 31.000đ cách hỗ trợ khoảng 3–5% và cách kháng cự khoảng 12–14%.</p>

<h3>2. Đổi vai: hỗ trợ bị phá trở thành kháng cự</h3>
<p>Khi giá giảm xuyên qua vùng hỗ trợ một cách dứt khoát, những người đã mua ở vùng đó trở thành người "kẹp hàng". Khi giá hồi lên lại vùng đó, họ muốn bán hòa vốn, nên <b>hỗ trợ cũ thành kháng cự mới</b>. Điều ngược lại cũng đúng: kháng cự bị vượt qua thường trở thành hỗ trợ.</p>
<p><b>Ví dụ:</b> Cổ phiếu Q ở trên thủng vùng hỗ trợ 29.500–30.200đ, giảm xuống 26.500đ. Nhiều người mua ở 30.000đ đang lỗ khoảng 11,7%. Hai tuần sau giá hồi lên 29.900đ. Những người này nghĩ "về được giá vốn là bán ngay", nên lượng bán lớn xuất hiện và giá quay đầu. Vùng 29.500–30.200đ từ chỗ là hỗ trợ đã trở thành kháng cự.</p>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Hỗ trợ bị phá vỡ trở thành kháng cự">
<rect x="10" y="142" width="620" height="16" style="fill:var(--accent);fill-opacity:0.18"/>
<line x1="10" y1="150" x2="630" y2="150" style="stroke:var(--accent);stroke-width:1;stroke-dasharray:5 4"/>
<polyline points="20,60 60,142 100,90 140,145 180,100 220,146 260,110 300,190 340,215 380,165 410,152 440,195 480,225 520,212 560,232 620,236" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<circle cx="60" cy="142" r="6" style="fill:none;stroke:var(--up);stroke-width:2"/>
<circle cx="140" cy="145" r="6" style="fill:none;stroke:var(--up);stroke-width:2"/>
<circle cx="220" cy="146" r="6" style="fill:none;stroke:var(--up);stroke-width:2"/>
<circle cx="410" cy="152" r="7" style="fill:none;stroke:var(--down);stroke-width:2"/>
<text x="140" y="40" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:700">Giá bật lên 3 lần → vùng HỖ TRỢ</text>
<text x="300" y="232" text-anchor="middle" style="fill:var(--muted);font-size:12px">Phá vỡ xuống</text>
<text x="470" y="126" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">Hồi lên bị chặn → thành KHÁNG CỰ</text>
</svg><figcaption>Hình: Vùng tô màu từng là hỗ trợ (vòng xanh). Sau khi bị phá vỡ, chính vùng đó chặn nhịp hồi phục (vòng đỏ).</figcaption></figure>

<h3>3. Khối lượng: "nhiên liệu" của xu hướng</h3>
<p>Khối lượng giao dịch cho biết <b>có bao nhiêu người tham gia</b> vào một biến động giá. Các nguyên tắc cơ bản:</p>
<table>
<tr><th>Giá</th><th>Khối lượng</th><th>Diễn giải</th></tr>
<tr><td>Tăng</td><td>Tăng</td><td>Xu hướng tăng khỏe, được nhiều người ủng hộ</td></tr>
<tr><td>Tăng</td><td>Giảm dần</td><td>Đà tăng yếu dần, cần thận trọng</td></tr>
<tr><td>Giảm</td><td>Tăng mạnh</td><td>Áp lực bán lớn, có thể là bán tháo</td></tr>
<tr><td>Giảm</td><td>Giảm dần</td><td>Lực bán cạn dần, có thể sắp tạo đáy</td></tr>
</table>
<p><b>Ví dụ:</b> Cổ phiếu R (số liệu minh họa) tăng 3 tuần liên tiếp: tuần 1 tăng 4% với khối lượng TB 3 triệu cổ phiếu/phiên, tuần 2 tăng 3% với 2 triệu/phiên, tuần 3 tăng 2% với 1,2 triệu/phiên. Giá vẫn tăng nhưng mỗi tuần ít người mua hơn. Đây là đà tăng yếu dần. Ngược lại, nếu khối lượng tăng từ 3 lên 4 rồi 5 triệu/phiên thì đà tăng đang được nhiều người ủng hộ.</p>
<p><b>Phá vỡ có khối lượng:</b> khi giá vượt kháng cự, hãy so sánh khối lượng phiên đó với <b>khối lượng trung bình 20 phiên</b>. Một quy tắc tham khảo thường dùng là khối lượng phiên phá vỡ ít nhất 1,5 lần trung bình thì đáng tin hơn.</p>
<p><b>Ví dụ:</b> Cổ phiếu S (số liệu minh họa) có khối lượng trung bình 20 phiên 1,2 triệu cổ phiếu. Phiên vượt kháng cự 35.000đ có khối lượng 2,5 triệu, tức 2,5 ÷ 1,2 ≈ 2,1 lần trung bình. Đây là phá vỡ có khối lượng xác nhận. Nếu phiên đó chỉ có 0,8 triệu (0,67 lần) thì cú vượt dễ là <b>phá vỡ giả</b>.</p>
<figure class="fig"><svg viewBox="0 0 640 255" role="img" aria-label="Phá vỡ kháng cự kèm khối lượng lớn">
<line x1="20" y1="70" x2="560" y2="70" style="stroke:var(--c2);stroke-width:1.5;stroke-dasharray:6 4"/>
<text x="566" y="74" style="fill:var(--c2);font-size:12px;font-weight:700">Kháng cự</text>
<polyline points="30,130 80,90 130,120 180,75 230,115 280,72 330,100 380,95 430,45 480,55 530,35" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<line x1="20" y1="160" x2="620" y2="160" style="stroke:var(--line)"/>
<text x="566" y="178" style="fill:var(--muted);font-size:11px">Khối lượng</text>
<rect x="20" y="215" width="20" height="25" style="fill:var(--muted)"/>
<rect x="70" y="210" width="20" height="30" style="fill:var(--muted)"/>
<rect x="120" y="218" width="20" height="22" style="fill:var(--muted)"/>
<rect x="170" y="208" width="20" height="32" style="fill:var(--muted)"/>
<rect x="220" y="216" width="20" height="24" style="fill:var(--muted)"/>
<rect x="270" y="205" width="20" height="35" style="fill:var(--muted)"/>
<rect x="320" y="220" width="20" height="20" style="fill:var(--muted)"/>
<rect x="370" y="214" width="20" height="26" style="fill:var(--muted)"/>
<rect x="420" y="178" width="20" height="62" style="fill:var(--up)"/>
<rect x="470" y="200" width="20" height="40" style="fill:var(--muted)"/>
<rect x="520" y="210" width="20" height="30" style="fill:var(--muted)"/>
<line x1="20" y1="212" x2="560" y2="212" style="stroke:var(--accent);stroke-width:1;stroke-dasharray:4 3"/>
<text x="566" y="215" style="fill:var(--accent);font-size:11px">TB 20 phiên</text>
<text x="448" y="174" style="fill:var(--up);font-size:12px;font-weight:700">≈ 2× trung bình</text>
<line x1="20" y1="240" x2="560" y2="240" style="stroke:var(--line)"/>
</svg><figcaption>Hình: Giá chạm kháng cự 3 lần với khối lượng bình thường; lần thứ tư vượt qua với khối lượng gấp khoảng 2 lần trung bình (cột xanh).</figcaption></figure>

<h3>4. Cách xác định hỗ trợ/kháng cự trên biểu đồ</h3>
<ol>
<li>Tìm các đỉnh và đáy rõ ràng trong 6–12 tháng gần nhất.</li>
<li>Tìm vùng giá mà giá đã phản ứng (bật lên hoặc quay đầu) <b>ít nhất 2 lần</b>.</li>
<li>Kẻ một vùng ngang bao quanh các điểm phản ứng đó.</li>
<li>Ưu tiên các vùng gần giá hiện tại nhất (một hỗ trợ gần nhất bên dưới, một kháng cự gần nhất bên trên).</li>
</ol>
<p><b>Ví dụ:</b> Giá hiện tại của cổ phiếu T là 45.000đ (số liệu minh họa). Nhìn lại 12 tháng, bạn thấy các mức giá đã phản ứng: 38.000đ (đáy 2 lần), 42.000–42.500đ (đáy 3 lần), 48.000–48.500đ (đỉnh 2 lần), 55.000đ (đỉnh 1 lần). Hỗ trợ gần nhất là 42.000–42.500đ (cách khoảng −6%), kháng cự gần nhất là 48.000–48.500đ (cách khoảng +7%). Mức 55.000đ mới chạm 1 lần nên chỉ ghi chú tham khảo.</p>
<div class="warn">⚠ Đừng mua ngay khi giá vừa vượt kháng cự trong phiên. Hãy chờ <b>giá đóng cửa</b> vượt kháng cự và kiểm tra khối lượng. Nhiều cú vượt trong phiên bị bán ngược lại trước giờ ATC.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Chọn 3 mã trong watchlist. Với mỗi mã, xác định 1 vùng hỗ trợ gần nhất và 1 vùng kháng cự gần nhất (ghi dạng khoảng giá).</li>
<li>Tính: giá hiện tại cách hỗ trợ bao nhiêu %, cách kháng cự bao nhiêu %.</li>
<li>Tìm trên biểu đồ 1 lần giá vượt kháng cự trong quá khứ. Tính tỷ lệ khối lượng phiên đó so với trung bình 20 phiên (đa số app có sẵn đường MA khối lượng).</li>
<li>Ghi kết luận: cú vượt đó có bền không?</li>
</ol>
Kết quả mong đợi: bảng 3 dòng (Mã, Hỗ trợ, Kháng cự, % tới hỗ trợ, % tới kháng cự) và 1 ví dụ phá vỡ có tính khối lượng.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Hỗ trợ chặn đà giảm, kháng cự chặn đà tăng; chúng là vùng chứ không phải điểm.</li>
<li>Hỗ trợ bị phá thường thành kháng cự và ngược lại.</li>
<li>Giá tăng kèm khối lượng tăng là đà tăng khỏe; phá vỡ cần khối lượng lớn để đáng tin.</li>
<li>Chờ giá đóng cửa xác nhận, đừng phản ứng với biến động trong phiên.</li>
</ul></div>
`,
  quiz: [
    { q: "Vì sao kháng cự thường hình thành tại đỉnh cũ?", options: ["Vì CTCK quy định", "Vì người mua ở đỉnh cũ bị kẹp muốn bán hòa vốn", "Vì biên độ giá", "Vì khối lượng bằng 0"], answer: 1, explain: "Những người mua ở đỉnh cũ chờ giá quay lại để bán hòa vốn, tạo áp lực bán tại vùng đó." },
    { q: "Khối lượng TB 20 phiên là 2 triệu. Phiên vượt kháng cự có khối lượng 1,4 triệu. Nhận xét nào hợp lý?", options: ["Phá vỡ rất mạnh", "Phá vỡ thiếu xác nhận, dễ là phá vỡ giả", "Không liên quan khối lượng", "Phải mua ngay"], answer: 1, explain: "1,4 triệu chỉ bằng 0,7 lần trung bình, thấp hơn mức thường cần (≥ 1,5 lần)." },
    { q: "Giá tăng nhưng khối lượng giảm dần qua nhiều phiên cho thấy điều gì?", options: ["Xu hướng tăng rất khỏe", "Đà tăng yếu dần", "Chắc chắn sắp tăng trần", "Không có ý nghĩa"], answer: 1, explain: "Ít người tham gia đẩy giá lên hơn, nên đà tăng đang yếu dần." }
  ]
},
{
  id: "w09-6",
  week: 9,
  day: 6,
  title: "Thực hành TradingView: vẽ xu hướng, hỗ trợ và kháng cự",
  minutes: 240,
  summary: "Tạo tài khoản TradingView, thiết lập biểu đồ và phân tích kỹ thuật 5 mã trong watchlist; bắt đầu đọc sách của William O'Neil.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p><b>Mục tiêu:</b> Sau buổi này bạn có một bộ biểu đồ đã vẽ sẵn xu hướng, hỗ trợ, kháng cự cho 5 mã trong watchlist và VN-Index, lưu trên TradingView để theo dõi hàng tuần.</p>

<p><b>Bước 1: Tạo tài khoản và làm quen (20 phút)</b></p>
<ol>
<li>Vào <a href="https://www.tradingview.com" target="_blank">tradingview.com</a>, đăng ký tài khoản miễn phí (gói Basic đủ dùng cho việc học). Có thể chọn giao diện tiếng Việt.</li>
<li>Mở "Biểu đồ" (Chart). Ở ô tìm kiếm mã, gõ <b>VNINDEX</b> và chọn kết quả thuộc sàn HOSE. Với cổ phiếu, gõ mã và chọn kết quả có sàn HOSE, ví dụ "FPT – HOSE".</li>
<li>Chọn kiểu biểu đồ <b>Nến</b> và khung thời gian <b>1D</b> (ngày).</li>
<li>Bật thêm chỉ báo <b>Volume</b> (Khối lượng) nếu chưa có.</li>
</ol>
<div class="tip">Mẹo: Dữ liệu cổ phiếu Việt Nam trên TradingView có thể bị trễ hoặc khác chút ít so với app CTCK. Dùng TradingView để vẽ và luyện tập; khi đặt lệnh thật luôn kiểm tra giá trên app CTCK.</div>

<p><b>Bước 2: Phân tích VN-Index trước (30 phút)</b></p>
<ol>
<li>Chuyển sang khung <b>1W</b> (tuần), xem khoảng 2–3 năm. Đánh dấu các đỉnh/đáy chính và kết luận xu hướng dài hạn.</li>
<li>Dùng công cụ <b>Trend Line</b> (Đường xu hướng) trên thanh công cụ bên trái, nối 2–3 đáy (nếu tăng) hoặc 2–3 đỉnh (nếu giảm).</li>
<li>Dùng <b>Horizontal Line</b> (Đường ngang) hoặc <b>Rectangle</b> (Hình chữ nhật) để đánh dấu 1–2 vùng hỗ trợ và 1–2 vùng kháng cự quan trọng.</li>
<li>Chuyển về khung <b>1D</b>, xem 6 tháng gần nhất và lặp lại.</li>
</ol>

<p><b>Bước 3: Phân tích 5 mã trong watchlist (80 phút, khoảng 15 phút mỗi mã)</b></p>
<p>Với mỗi mã, làm đúng thứ tự: khung tuần → khung ngày → vẽ → ghi chép. Điền vào bảng sau trong tab Ghi chú của web:</p>
<table>
<tr><th>Mã</th><th>Xu hướng tuần</th><th>Xu hướng ngày</th><th>Hỗ trợ gần nhất</th><th>Kháng cự gần nhất</th><th>% tới hỗ trợ</th><th>% tới kháng cự</th><th>Mẫu nến gần đây</th><th>Nhận xét</th></tr>
<tr><td>Ví dụ: Mã A</td><td>Tăng</td><td>Điều chỉnh</td><td>28,5–29,0</td><td>32,0–32,5</td><td>−4,2%</td><td>+7,5%</td><td>Búa tại hỗ trợ</td><td>Chờ xác nhận</td></tr>
<tr><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ:</b> Cách tính % với giá hiện tại 30,0 (số liệu minh họa). Vùng hỗ trợ 28,5–29,0 thì lấy điểm giữa 28,75: % tới hỗ trợ = (28,75 − 30,0) ÷ 30,0 ≈ −4,2%. Vùng kháng cự 32,0–32,5 thì lấy điểm giữa 32,25: % tới kháng cự = (32,25 − 30,0) ÷ 30,0 = +7,5%. Nếu % tới kháng cự nhỏ hơn nhiều so với % tới hỗ trợ (dư địa tăng ít, rủi ro giảm nhiều) thì đó chưa phải điểm mua hấp dẫn.</p>

<p><b>Bước 4: Lưu và kiểm tra (20 phút)</b></p>
<ol>
<li>TradingView tự lưu hình vẽ theo từng mã. Tạo một <b>Watchlist</b> trên TradingView gồm VN-Index và 5 mã để mở nhanh.</li>
<li>Chụp màn hình từng biểu đồ, lưu vào một thư mục "Tuần 9".</li>
<li>Tuần sau mở lại và kiểm tra: giá có phản ứng tại các vùng bạn đã vẽ không?</li>
</ol>

<figure class="fig"><svg viewBox="0 0 640 170" role="img" aria-label="Quy trình phân tích một mã trên TradingView">
<rect x="8" y="40" width="145" height="80" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="80" y="70" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">1. Khung tuần</text>
<text x="80" y="92" text-anchor="middle" style="fill:var(--text);font-size:12px">Xu hướng lớn</text>
<rect x="168" y="40" width="145" height="80" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="240" y="70" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:700">2. Khung ngày</text>
<text x="240" y="92" text-anchor="middle" style="fill:var(--text);font-size:12px">Nhịp hiện tại</text>
<rect x="328" y="40" width="145" height="80" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="400" y="70" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">3. Vẽ</text>
<text x="400" y="92" text-anchor="middle" style="fill:var(--text);font-size:12px">Trend, HT, KC</text>
<rect x="488" y="40" width="145" height="80" rx="10" style="fill:var(--card);stroke:var(--c3);stroke-width:2"/>
<text x="560" y="70" text-anchor="middle" style="fill:var(--c3);font-size:13px;font-weight:700">4. Ghi chép</text>
<text x="560" y="92" text-anchor="middle" style="fill:var(--text);font-size:12px">Điền bảng, % khoảng cách</text>
<polygon points="155,74 165,80 155,86" style="fill:var(--muted)"/>
<polygon points="315,74 325,80 315,86" style="fill:var(--muted)"/>
<polygon points="475,74 485,80 475,86" style="fill:var(--muted)"/>
<text x="320" y="150" text-anchor="middle" style="fill:var(--muted);font-size:12px">Luôn đi từ khung lớn xuống khung nhỏ</text>
</svg><figcaption>Hình: Quy trình 4 bước áp dụng cho mỗi mã.</figcaption></figure>

<p><b>Tiêu chí tự đánh giá:</b></p>
<ul>
<li>☐ Mỗi biểu đồ có ít nhất 1 đường xu hướng và 2 vùng ngang (hỗ trợ, kháng cự).</li>
<li>☐ Kết luận xu hướng khớp với thứ tự đỉnh/đáy (không "cảm giác").</li>
<li>☐ Bảng ghi chép đủ 5 mã, có tính %.</li>
<li>☐ Ít nhất 1 mã có nhận xét về khối lượng.</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Bắt đầu cuốn <b>"Làm giàu từ chứng khoán"</b> (How to Make Money in Stocks) của William O'Neil. Hôm nay đọc khoảng 50–80 trang đầu.</p>
<p><b>Ý cần chú ý:</b></p>
<ul>
<li>O'Neil nghiên cứu đặc điểm chung của những cổ phiếu tăng giá mạnh nhất trong lịch sử thị trường Mỹ <b>trước khi</b> chúng bắt đầu tăng. Phương pháp của ông kết hợp cả yếu tố cơ bản (lợi nhuận tăng trưởng) và kỹ thuật (biểu đồ giá).</li>
<li>Ông nhấn mạnh việc học đọc biểu đồ để nhận ra các "nền giá" (base) trước khi cổ phiếu bứt phá.</li>
<li>Ông kiên quyết về việc cắt lỗ sớm, sẽ học kỹ ở buổi Chủ nhật.</li>
</ul>
<p><b>Câu hỏi tự trả lời sau khi đọc:</b></p>
<ol>
<li>Theo O'Neil, vì sao nên nghiên cứu các cổ phiếu đã tăng mạnh trong quá khứ?</li>
<li>Phương pháp của ông khác Benjamin Graham (đã đọc tháng 1) ở điểm nào?</li>
<li>Bạn thấy điều gì có thể áp dụng được ở thị trường Việt Nam, điều gì cần cân nhắc?</li>
</ol>
`,
  quiz: [
    { q: "Khi phân tích một mã, nên xem khung thời gian theo thứ tự nào?", options: ["Khung phút trước rồi khung ngày", "Khung tuần trước rồi khung ngày", "Chỉ khung ngày", "Không quan trọng"], answer: 1, explain: "Đi từ khung lớn (tuần) để biết xu hướng chính, rồi xuống khung ngày để tìm nhịp hiện tại." },
    { q: "Giá hiện tại 40,0; hỗ trợ gần nhất 37,6. Giá cách hỗ trợ bao nhiêu %?", options: ["−2,4%", "−6%", "−6,4%", "+6%"], answer: 1, explain: "(37,6 − 40,0) ÷ 40,0 = −0,06 = −6%." }
  ]
},
{
  id: "w09-7",
  week: 9,
  day: 7,
  title: "Ôn tập tuần 9 và CAN SLIM của William O'Neil",
  minutes: 240,
  summary: "Đọc tiếp O'Neil với 7 tiêu chí CAN SLIM và quy tắc cắt lỗ 7–8%; ôn toàn bộ nến, xu hướng, hỗ trợ/kháng cự, khối lượng.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp khoảng 50–80 trang "Làm giàu từ chứng khoán". Trọng tâm là hệ thống <b>CAN SLIM</b>, 7 chữ cái tóm tắt đặc điểm của cổ phiếu tăng trưởng mạnh theo O'Neil:</p>
<table>
<tr><th>Chữ</th><th>Ý nghĩa gốc</th><th>Hiểu đơn giản</th></tr>
<tr><td><b>C</b></td><td>Current quarterly earnings</td><td>Lợi nhuận trên mỗi cổ phiếu (EPS) của quý gần nhất tăng mạnh so với cùng kỳ năm trước</td></tr>
<tr><td><b>A</b></td><td>Annual earnings increases</td><td>Lợi nhuận hằng năm tăng trưởng đều đặn trong vài năm gần đây</td></tr>
<tr><td><b>N</b></td><td>New</td><td>Có điều gì đó mới: sản phẩm, dịch vụ, ban lãnh đạo, hoặc giá vừa lập đỉnh mới</td></tr>
<tr><td><b>S</b></td><td>Supply and demand</td><td>Cung – cầu cổ phiếu; chú ý khối lượng tăng mạnh khi giá đi lên</td></tr>
<tr><td><b>L</b></td><td>Leader or laggard</td><td>Chọn cổ phiếu dẫn đầu ngành, không chọn cổ phiếu "tụt hậu" chỉ vì rẻ</td></tr>
<tr><td><b>I</b></td><td>Institutional sponsorship</td><td>Có sự tham gia của tổ chức (quỹ đầu tư) mua vào</td></tr>
<tr><td><b>M</b></td><td>Market direction</td><td>Xu hướng chung của thị trường; phần lớn cổ phiếu đi theo thị trường</td></tr>
</table>
<p><b>Ví dụ:</b> Thử áp dụng cho "Công ty U" (số liệu minh họa):</p>
<ul>
<li><b>C:</b> EPS quý này 1.300đ, cùng quý năm trước 1.000đ, tăng (1.300 − 1.000) ÷ 1.000 = 30%. O'Neil thường tìm mức tăng từ khoảng 25% trở lên, nên đạt.</li>
<li><b>A:</b> EPS 3 năm gần nhất: 3.000 → 3.600 → 4.400đ, tăng 20% rồi khoảng 22%/năm, đều đặn, đạt.</li>
<li><b>N:</b> Công ty vừa ra mắt dòng sản phẩm mới và giá cổ phiếu vừa vượt đỉnh cũ của 1 năm, đạt.</li>
<li><b>S:</b> Phiên vượt đỉnh có khối lượng gấp 2 lần trung bình, đạt.</li>
<li><b>L:</b> Tăng trưởng lợi nhuận cao nhất trong 4 công ty cùng ngành, đạt.</li>
<li><b>I:</b> Một vài quỹ đầu tư công bố mua thêm trong báo cáo danh mục gần nhất, tạm đạt.</li>
<li><b>M:</b> VN-Index đang giảm, liên tục tạo đáy thấp hơn, <b>không đạt</b>. Theo O'Neil, nên chờ thị trường chung xác nhận xu hướng tăng rồi mới mua, dù cổ phiếu tốt đến đâu.</li>
</ul>
<p><b>Hai ý quan trọng khác cần ghi nhớ từ sách:</b></p>
<ul>
<li><b>Cắt lỗ 7–8%:</b> O'Neil khuyên luôn bán khi cổ phiếu giảm khoảng 7–8% so với giá mua, không ngoại lệ, không hy vọng. Đây chính là quy tắc trong lộ trình của bạn. <b>Ví dụ:</b> mua ở 50.000đ thì điểm cắt lỗ là 46.000–46.500đ (50.000 × 0,92 = 46.000; 50.000 × 0,93 = 46.500). Lỗ 8% thì chỉ cần lãi khoảng 8,7% là về vốn; để lỗ đến 40% thì cần lãi 66,7%.</li>
<li><b>Mẫu hình cốc tay cầm (cup with handle):</b> giá tạo một đáy tròn giống cái cốc, sau đó điều chỉnh nhẹ tạo "tay cầm", rồi bứt phá qua đỉnh của tay cầm với khối lượng lớn. Bạn sẽ học kỹ ở tuần 10.</li>
</ul>
<div class="warn">⚠ CAN SLIM được xây dựng từ dữ liệu thị trường Mỹ. Ở Việt Nam, chữ "I" (tổ chức) và chất lượng dữ liệu có thể khác. Hãy dùng như một <b>danh sách kiểm tra</b> giúp bạn suy nghĩ, không phải công thức chắc thắng.</div>
<p><b>Câu hỏi sau khi đọc:</b> Chọn 1 mã trong watchlist và thử đánh giá nó theo 7 tiêu chí (Đạt / Không đạt / Chưa rõ). Bạn thiếu dữ liệu ở tiêu chí nào?</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 280" role="img" aria-label="Sơ đồ tóm tắt kiến thức tuần 9">
<rect x="245" y="115" width="150" height="50" rx="25" style="fill:var(--accent)"/>
<text x="320" y="145" text-anchor="middle" style="fill:var(--bg);font-size:14px;font-weight:700">PTKT tuần 9</text>
<line x1="270" y1="120" x2="170" y2="70" style="stroke:var(--line);stroke-width:2"/>
<line x1="370" y1="120" x2="470" y2="70" style="stroke:var(--line);stroke-width:2"/>
<line x1="270" y1="160" x2="170" y2="210" style="stroke:var(--line);stroke-width:2"/>
<line x1="370" y1="160" x2="470" y2="210" style="stroke:var(--line);stroke-width:2"/>
<rect x="20" y="20" width="220" height="80" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="130" y="44" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">Nến Nhật</text>
<text x="130" y="64" text-anchor="middle" style="fill:var(--text);font-size:11px">Thân, bóng · Doji, búa, sao băng</text>
<text x="130" y="82" text-anchor="middle" style="fill:var(--text);font-size:11px">Nhấn chìm · Vị trí–KL–Xác nhận</text>
<rect x="400" y="20" width="220" height="80" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="510" y="44" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:700">Xu hướng</text>
<text x="510" y="64" text-anchor="middle" style="fill:var(--text);font-size:11px">Đỉnh/đáy cao dần, thấp dần</text>
<text x="510" y="82" text-anchor="middle" style="fill:var(--text);font-size:11px">Đường xu hướng · Khung lớn trước</text>
<rect x="20" y="180" width="220" height="80" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="130" y="204" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">Hỗ trợ / Kháng cự</text>
<text x="130" y="224" text-anchor="middle" style="fill:var(--text);font-size:11px">Là vùng, không phải điểm</text>
<text x="130" y="242" text-anchor="middle" style="fill:var(--text);font-size:11px">Đổi vai khi bị phá vỡ</text>
<rect x="400" y="180" width="220" height="80" rx="10" style="fill:var(--card);stroke:var(--c3);stroke-width:2"/>
<text x="510" y="204" text-anchor="middle" style="fill:var(--c3);font-size:13px;font-weight:700">Khối lượng</text>
<text x="510" y="224" text-anchor="middle" style="fill:var(--text);font-size:11px">Giá tăng + KL tăng = khỏe</text>
<text x="510" y="242" text-anchor="middle" style="fill:var(--text);font-size:11px">Phá vỡ ≥ 1,5× TB 20 phiên</text>
</svg><figcaption>Hình: Bốn nhóm kiến thức của tuần 9.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu</b> (nói to hoặc viết ra):</p>
<ol>
<li>Vẽ một nến tăng và một nến giảm, ghi đủ 4 mức giá lên hình.</li>
<li>Vì sao búa phải xuất hiện sau đợt giảm mới có ý nghĩa?</li>
<li>Nhấn chìm tăng là gì? Ba bước đánh giá độ tin cậy là gì?</li>
<li>Định nghĩa xu hướng tăng bằng đỉnh và đáy. Vẽ đường xu hướng tăng thế nào?</li>
<li>Vì sao hỗ trợ bị phá lại thành kháng cự? Giải thích bằng tâm lý người mua.</li>
<li>Phá vỡ kháng cự với khối lượng bằng 0,6 lần trung bình nên hiểu thế nào?</li>
</ol>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist tuần 9:</b></p>
<ul>
<li>☐ Hoàn thành 5 buổi lý thuyết và bài thực hành mỗi buổi.</li>
<li>☐ Có tài khoản TradingView, đã vẽ biểu đồ cho VN-Index và 5 mã.</li>
<li>☐ Có bảng hỗ trợ/kháng cự trong Ghi chú.</li>
<li>☐ Đọc ít nhất 100 trang sách O'Neil.</li>
<li>☐ Đánh dấu "Tuần 9-10" trong tab Lộ trình khi xong cả tuần 10.</li>
</ul>
<p><b>Câu hỏi phản tư:</b></p>
<ul>
<li>Phần nào khó hiểu nhất tuần này? Ghi lại để ôn vào phần Dự phòng.</li>
<li>Bạn có thấy mình "muốn tìm tín hiệu mua" khi nhìn biểu đồ không? Đây là thiên kiến cần nhận ra sớm.</li>
<li>Nhìn lại bảng tuần 9: các vùng bạn vẽ có hợp lý khi nhìn lại sau vài ngày không?</li>
</ul>
<p><b>Chuẩn bị tuần 10:</b> Tuần sau học các chỉ báo MA, RSI, MACD và mẫu hình giá. Hãy chắc chắn bạn đã thành thạo việc thêm chỉ báo trên TradingView (nút "Chỉ báo" / "Indicators" ở thanh trên cùng).</p>

<h3>Dự phòng (30 phút)</h3>
<p>Dùng để học bù buổi bị lỡ, hoặc xem lại bài có nhiều câu quiz trả lời sai. Nếu đã xong hết, hãy xem lại các biểu đồ đã vẽ hôm qua và cập nhật nếu giá có biến động mới.</p>
`,
  quiz: [
    { q: "Chữ 'M' trong CAN SLIM nghĩa là gì?", options: ["Margin", "Market direction – xu hướng thị trường chung", "Management – ban lãnh đạo", "Momentum"], answer: 1, explain: "M là Market direction: phần lớn cổ phiếu đi theo xu hướng thị trường chung." },
    { q: "O'Neil khuyên cắt lỗ ở mức nào so với giá mua?", options: ["2–3%", "7–8%", "20–25%", "Không cắt lỗ"], answer: 1, explain: "Quy tắc nổi tiếng của O'Neil là bán khi giảm 7–8% so với giá mua." },
    { q: "Nến nào có thân rất nhỏ, giá mở gần bằng giá đóng?", options: ["Búa", "Doji", "Nhấn chìm", "Sao mai"], answer: 1, explain: "Doji có giá mở xấp xỉ giá đóng, thể hiện sự lưỡng lự." },
    { q: "Màu của cây nến so sánh giá đóng cửa với giá nào?", options: ["Giá tham chiếu", "Giá mở cửa của chính phiên đó", "Giá trần", "Giá trung bình"], answer: 1, explain: "Nến xanh khi đóng > mở của chính phiên; màu bảng giá thì so với giá tham chiếu." },
    { q: "Xu hướng giảm được xác định bởi?", options: ["Đỉnh và đáy thấp dần", "Đỉnh và đáy cao dần", "Khối lượng giảm", "Một nến đỏ dài"], answer: 0, explain: "Xu hướng giảm: đỉnh sau thấp hơn đỉnh trước, đáy sau thấp hơn đáy trước." },
    { q: "Khi kháng cự bị vượt qua dứt khoát, vùng đó thường trở thành gì?", options: ["Vùng trần", "Hỗ trợ", "Vùng không có ý nghĩa", "Vùng sàn"], answer: 1, explain: "Hiện tượng đổi vai: kháng cự bị vượt qua thường trở thành hỗ trợ." },
    { q: "Ba bước đánh giá một mẫu nến đảo chiều là?", options: ["Màu, kích thước, ngày", "Vị trí, khối lượng, phiên xác nhận", "Giá trần, giá sàn, tham chiếu", "RSI, MACD, MA"], answer: 1, explain: "Vị trí (gần HT/KC, cuối xu hướng), khối lượng, và phiên sau xác nhận." },
    { q: "Chữ 'L' trong CAN SLIM khuyên điều gì?", options: ["Mua cổ phiếu rẻ nhất ngành", "Chọn cổ phiếu dẫn đầu, tránh cổ phiếu tụt hậu", "Dùng đòn bẩy", "Giữ dài hạn mọi cổ phiếu"], answer: 1, explain: "L = Leader or laggard: ưu tiên cổ phiếu dẫn đầu thay vì cổ phiếu yếu chỉ vì giá rẻ." },
    { q: "Vì sao nên chờ giá ĐÓNG CỬA vượt kháng cự thay vì mua khi giá vượt trong phiên?", options: ["Vì giá đóng cửa luôn cao nhất", "Vì nhiều cú vượt trong phiên bị bán ngược trước ATC", "Vì quy định cấm", "Vì phí rẻ hơn"], answer: 1, explain: "Giá có thể vượt trong phiên rồi bị bán xuống; giá đóng cửa là xác nhận đáng tin hơn." }
  ]
}
);

(window.LESSONS = window.LESSONS || []).push(
{
  id: "w10-1",
  week: 10,
  day: 1,
  title: "Đường trung bình động (MA): SMA, EMA và MA20/50/200",
  minutes: 120,
  summary: "Tự tính được SMA và EMA, hiểu vì sao MA mượt và trễ hơn giá, ý nghĩa của MA20, MA50, MA200.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm trong các bản nhận định câu như "VN-Index giữ vững trên MA200" hay "cổ phiếu X cắt xuống MA50". Ghi lại. Cuối buổi bạn sẽ hiểu chính xác các câu này nghĩa là gì và tự kiểm tra được trên biểu đồ.</div>

<h3>1. Đường trung bình động là gì?</h3>
<p>Đường trung bình động (Moving Average, MA) là đường nối <b>giá trung bình của N phiên gần nhất</b>, tính lại sau mỗi phiên. Vì lấy trung bình nên nó lọc bớt các dao động nhỏ, giúp bạn nhìn xu hướng rõ hơn.</p>
<p><b>Ví dụ:</b> Giống như điểm trung bình học kỳ. Một bài kiểm tra bị 4 điểm không làm điểm trung bình tụt mạnh nếu các bài khác đều 8–9. Tương tự, một phiên giảm sâu không làm MA thay đổi nhiều nếu các phiên khác vẫn tăng.</p>

<h3>2. SMA: trung bình cộng đơn giản</h3>
<p>SMA (Simple Moving Average) của N phiên = tổng giá đóng cửa N phiên gần nhất ÷ N.</p>
<p><b>Ví dụ:</b> Giá đóng cửa 5 phiên gần nhất của cổ phiếu A (số liệu minh họa, nghìn đồng): 20, 21, 22, 21, 23.</p>
<ul>
<li>SMA5 hôm nay = (20 + 21 + 22 + 21 + 23) ÷ 5 = 107 ÷ 5 = <b>21,4</b>.</li>
<li>Phiên mai đóng cửa 24. Bỏ giá cũ nhất (20), thêm giá mới (24): SMA5 = (21 + 22 + 21 + 23 + 24) ÷ 5 = 111 ÷ 5 = <b>22,2</b>.</li>
<li>Giá đã lên 24 nhưng SMA5 mới là 22,2: MA luôn <b>chạy chậm hơn giá</b>.</li>
</ul>
<table>
<tr><th>Phiên</th><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th></tr>
<tr><td>Giá đóng cửa</td><td>20</td><td>21</td><td>22</td><td>21</td><td>23</td><td>24</td></tr>
<tr><td>SMA5</td><td>–</td><td>–</td><td>–</td><td>–</td><td>21,4</td><td>22,2</td></tr>
</table>

<h3>3. EMA: trung bình có trọng số cho giá gần đây</h3>
<p>EMA (Exponential Moving Average) cho các phiên gần đây trọng số lớn hơn, nên phản ứng nhanh hơn SMA. Công thức:</p>
<p>Hệ số k = 2 ÷ (N + 1). EMA hôm nay = (Giá hôm nay − EMA hôm qua) × k + EMA hôm qua.</p>
<p><b>Ví dụ:</b> EMA5 có k = 2 ÷ 6 = 1/3. Giả sử EMA5 hôm qua = 21,4 (lấy bằng SMA5 để khởi đầu), giá hôm nay 24:</p>
<ul>
<li>EMA5 = (24 − 21,4) × 1/3 + 21,4 = 2,6 ÷ 3 + 21,4 ≈ 0,87 + 21,4 = <b>22,27</b>.</li>
<li>So sánh: SMA5 = 22,2, EMA5 ≈ 22,27. EMA gần giá mới (24) hơn một chút, tức phản ứng nhanh hơn.</li>
</ul>
<table>
<tr><th></th><th>SMA</th><th>EMA</th></tr>
<tr><td>Trọng số</td><td>Mọi phiên bằng nhau</td><td>Phiên gần đây nặng hơn</td></tr>
<tr><td>Tốc độ phản ứng</td><td>Chậm hơn</td><td>Nhanh hơn</td></tr>
<tr><td>Tín hiệu giả</td><td>Ít hơn</td><td>Nhiều hơn</td></tr>
<tr><td>Phù hợp</td><td>Xu hướng dài (MA50, MA200)</td><td>Theo dõi ngắn hạn, dùng trong MACD</td></tr>
</table>
<p>Người mới có thể dùng SMA cho cả 3 đường MA20/50/200. Khi đọc "MA" trên app mà không ghi rõ, thường là SMA.</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Giá dao động và đường trung bình mượt, trễ hơn">
<line x1="10" y1="210" x2="630" y2="210" style="stroke:var(--line)"/>
<polyline points="20,180 50,170 80,175 110,160 140,150 170,158 200,140 230,130 260,138 290,120 320,110 350,118 380,105 410,112 440,125 470,140 500,135 530,150 560,165 590,160 620,175" style="fill:none;stroke:var(--text);stroke-width:2"/>
<polyline points="140,167 170,162.6 200,156.6 230,147.6 260,143.2 290,137.2 320,127.6 350,123.2 380,118.2 410,113 440,114 470,120 500,123.4 530,132.4 560,143 590,150 620,157" style="fill:none;stroke:var(--c2);stroke-width:3"/>
<text x="20" y="24" style="fill:var(--text);font-size:12px">━ Giá đóng cửa</text>
<text x="140" y="24" style="fill:var(--c2);font-size:12px;font-weight:700">━ Đường trung bình (MA5)</text>
<text x="320" y="96" text-anchor="middle" style="fill:var(--muted);font-size:11px">Giá đã quay đầu</text>
<text x="440" y="96" text-anchor="middle" style="fill:var(--muted);font-size:11px">MA quay đầu muộn hơn</text>
<line x1="380" y1="100" x2="380" y2="110" style="stroke:var(--muted)"/>
<line x1="420" y1="100" x2="420" y2="108" style="stroke:var(--muted)"/>
</svg><figcaption>Hình: MA mượt hơn giá nhưng luôn quay đầu sau giá. Đây là đặc tính "trễ" (lagging) của mọi đường trung bình.</figcaption></figure>

<h3>4. Ý nghĩa của MA20, MA50, MA200</h3>
<p>Một năm có khoảng 250 phiên giao dịch, một tháng khoảng 20–22 phiên. Do đó:</p>
<figure class="fig"><svg viewBox="0 0 640 170" role="img" aria-label="Độ dài thời gian của MA20, MA50, MA200">
<text x="10" y="40" style="fill:var(--text);font-size:13px;font-weight:700">MA20</text>
<rect x="80" y="26" width="50" height="20" rx="4" style="fill:var(--accent)"/>
<text x="140" y="41" style="fill:var(--muted);font-size:12px">≈ 1 tháng · xu hướng ngắn hạn</text>
<text x="10" y="90" style="fill:var(--text);font-size:13px;font-weight:700">MA50</text>
<rect x="80" y="76" width="125" height="20" rx="4" style="fill:var(--c2)"/>
<text x="215" y="91" style="fill:var(--muted);font-size:12px">≈ 2,5 tháng (1 quý) · trung hạn</text>
<text x="10" y="140" style="fill:var(--text);font-size:13px;font-weight:700">MA200</text>
<rect x="80" y="126" width="500" height="20" rx="4" style="fill:var(--c3)"/>
<text x="330" y="141" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">≈ 10 tháng · xu hướng dài hạn</text>
</svg><figcaption>Hình: Độ dài tương đối của 3 đường MA phổ biến (tính theo số phiên giao dịch).</figcaption></figure>
<ul>
<li><b>Giá trên MA200:</b> thường được xem là xu hướng dài hạn tích cực. Giá dưới MA200: dài hạn tiêu cực.</li>
<li><b>MA200 đi lên</b> (độ dốc dương) quan trọng hơn việc giá vừa vượt lên MA200 một phiên.</li>
<li><b>Thứ tự lý tưởng của xu hướng tăng:</b> Giá &gt; MA20 &gt; MA50 &gt; MA200.</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu B (số liệu minh họa): giá 32,0; MA20 = 31,2; MA50 = 29,8; MA200 = 27,5. Thứ tự Giá &gt; MA20 &gt; MA50 &gt; MA200 đúng hoàn hảo, nên đây là xu hướng tăng ở cả 3 khung. Giá cao hơn MA200 (32,0 − 27,5) ÷ 27,5 ≈ 16,4%. Cổ phiếu C: giá 18,0; MA20 = 18,6; MA50 = 19,5; MA200 = 21,0. Thứ tự ngược lại, nên xu hướng giảm ở mọi khung.</p>
<div class="warn">⚠ MA không dự đoán tương lai. Nó chỉ tóm tắt quá khứ một cách gọn gàng. Trong thị trường đi ngang, giá cắt lên cắt xuống MA liên tục và gây nhiều tín hiệu sai.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Lấy giá đóng cửa 10 phiên gần nhất của 1 mã trong watchlist (xem lịch sử giá trên CafeF hoặc Vietstock).</li>
<li>Tự tính SMA5 cho phiên 5 đến phiên 10 (6 giá trị). Có thể dùng Excel với hàm AVERAGE.</li>
<li>Tính EMA5 cho các phiên 6–10, bắt đầu với EMA5 phiên 5 = SMA5 phiên 5, k = 1/3.</li>
<li>Thêm MA20, MA50, MA200 trên TradingView hoặc app, ghi thứ tự sắp xếp của Giá và 3 đường MA cho 5 mã.</li>
</ol>
Kết quả mong đợi: bảng tính tay SMA5/EMA5 và nhận định xu hướng 5 mã dựa trên thứ tự các đường MA.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>SMA = trung bình cộng N phiên; EMA cho trọng số lớn hơn với phiên gần đây.</li>
<li>MA mượt hơn và luôn trễ hơn giá.</li>
<li>MA20 ≈ 1 tháng, MA50 ≈ 1 quý, MA200 ≈ 10 tháng.</li>
<li>Xu hướng tăng lý tưởng: Giá &gt; MA20 &gt; MA50 &gt; MA200.</li>
</ul></div>
`,
  quiz: [
    { q: "Giá đóng cửa 5 phiên: 10, 12, 11, 13, 14. SMA5 bằng bao nhiêu?", options: ["11", "12", "12,5", "14"], answer: 1, explain: "(10 + 12 + 11 + 13 + 14) ÷ 5 = 60 ÷ 5 = 12." },
    { q: "So với SMA cùng chu kỳ, EMA có đặc điểm gì?", options: ["Chậm hơn", "Phản ứng nhanh hơn với giá gần đây", "Luôn bằng nhau", "Không dùng giá đóng cửa"], answer: 1, explain: "EMA cho trọng số lớn hơn với các phiên gần đây nên phản ứng nhanh hơn." },
    { q: "Giá 50; MA20 = 52; MA50 = 54; MA200 = 58. Nhận định nào đúng?", options: ["Xu hướng tăng mạnh", "Xu hướng giảm ở cả ngắn, trung và dài hạn", "Đi ngang", "Không kết luận được gì"], answer: 1, explain: "Giá < MA20 < MA50 < MA200 là thứ tự của xu hướng giảm ở mọi khung." }
  ]
},
{
  id: "w10-2",
  week: 10,
  day: 2,
  title: "Giao cắt MA và MA làm hỗ trợ động",
  minutes: 120,
  summary: "Hiểu golden cross, death cross, giá cắt MA, MA làm hỗ trợ/kháng cự động và hiện tượng nhiễu khi thị trường đi ngang.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Mở biểu đồ VN-Index, bật MA50 và MA200. Kiểm tra: hiện tại MA50 nằm trên hay dưới MA200? Lần gần nhất hai đường cắt nhau là khi nào? Sau đó thị trường đi thế nào trong 3 tháng tiếp theo?</div>

<h3>1. Giao cắt giữa hai đường MA</h3>
<ul>
<li><b>Golden cross (giao cắt vàng):</b> MA ngắn (thường MA50) cắt <b>lên trên</b> MA dài (MA200). Báo hiệu xu hướng trung–dài hạn có thể chuyển sang tăng.</li>
<li><b>Death cross (giao cắt tử thần):</b> MA50 cắt <b>xuống dưới</b> MA200. Báo hiệu xu hướng có thể chuyển sang giảm.</li>
<li>Ở khung ngắn hơn, nhiều người dùng MA20 cắt MA50.</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu D (số liệu minh họa). Tuần trước MA50 = 24,8; MA200 = 25,0 (MA50 dưới MA200). Tuần này MA50 = 25,3; MA200 = 25,1. MA50 đã vượt lên MA200: đây là golden cross. Lưu ý lúc này giá có thể đã tăng từ đáy 21,0 lên 27,0 (khoảng +28,6%), vì MA50 cần nhiều phiên giá cao mới kéo lên được. Đó là lý do tín hiệu giao cắt luôn đến <b>muộn</b>.</p>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Golden cross: MA50 cắt lên MA200">
<polyline points="20,120 100,150 180,170 260,160 340,120 420,90 500,70 600,55" style="fill:none;stroke:var(--accent);stroke-width:3"/>
<polyline points="20,90 100,105 180,125 260,138 340,140 420,132 500,118 600,100" style="fill:none;stroke:var(--c2);stroke-width:3"/>
<circle cx="302" cy="139" r="10" style="fill:none;stroke:var(--up);stroke-width:2.5"/>
<text x="302" y="190" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">Golden cross</text>
<text x="302" y="207" text-anchor="middle" style="fill:var(--muted);font-size:12px">MA50 cắt lên MA200</text>
<line x1="302" y1="150" x2="302" y2="176" style="stroke:var(--up);stroke-dasharray:3 3"/>
<text x="20" y="24" style="fill:var(--accent);font-size:12px;font-weight:700">━ MA50 (nhanh)</text>
<text x="140" y="24" style="fill:var(--c2);font-size:12px;font-weight:700">━ MA200 (chậm)</text>
<text x="470" y="160" style="fill:var(--muted);font-size:12px">Sau giao cắt:</text>
<text x="470" y="176" style="fill:var(--muted);font-size:12px">MA50 nằm trên MA200</text>
</svg><figcaption>Hình: MA50 từ dưới cắt lên trên MA200. Death cross là trường hợp ngược lại.</figcaption></figure>

<h3>2. Giá cắt đường MA</h3>
<p>Tín hiệu nhanh hơn giao cắt hai đường là <b>giá đóng cửa cắt qua một đường MA</b>. Giá đóng cửa vượt lên MA20 là tín hiệu ngắn hạn tích cực; thủng xuống MA50 với khối lượng lớn là cảnh báo trung hạn.</p>
<p><b>Ví dụ:</b> Cổ phiếu E đang có MA20 = 40,0. Hôm qua đóng cửa 39,6 (dưới MA20), hôm nay đóng cửa 40,8 (trên MA20) với khối lượng gấp 1,6 lần trung bình. Đây là giá cắt lên MA20 có khối lượng xác nhận. Nếu hôm nay chỉ đóng cửa 40,1 với khối lượng thấp thì tín hiệu yếu, dễ bị kéo ngược lại.</p>

<h3>3. MA làm hỗ trợ và kháng cự động</h3>
<p>Trong xu hướng tăng khỏe, giá thường điều chỉnh về gần MA20 hoặc MA50 rồi bật lên. Khác với hỗ trợ ngang (cố định một mức giá), MA đi lên theo thời gian nên được gọi là <b>hỗ trợ động</b>. Trong xu hướng giảm, MA nằm trên giá và đóng vai trò <b>kháng cự động</b>.</p>
<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Đường MA làm hỗ trợ động trong xu hướng tăng">
<line x1="20" y1="200" x2="620" y2="70" style="stroke:var(--c2);stroke-width:3"/>
<polyline points="20,185 80,150 150,170 220,120 280,105 330,131 400,85 450,70 500,94 560,50 620,40" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<circle cx="150" cy="170" r="8" style="fill:none;stroke:var(--up);stroke-width:2"/>
<circle cx="330" cy="131" r="8" style="fill:none;stroke:var(--up);stroke-width:2"/>
<circle cx="500" cy="94" r="8" style="fill:none;stroke:var(--up);stroke-width:2"/>
<text x="20" y="24" style="fill:var(--text);font-size:12px">━ Giá</text>
<text x="80" y="24" style="fill:var(--c2);font-size:12px;font-weight:700">━ MA50 đi lên</text>
<text x="330" y="226" text-anchor="middle" style="fill:var(--up);font-size:12px">Mỗi lần điều chỉnh về MA50, giá bật lên (vòng tròn)</text>
</svg><figcaption>Hình: Trong xu hướng tăng, đường MA đi lên đóng vai trò hỗ trợ động.</figcaption></figure>
<p><b>Ví dụ:</b> Cổ phiếu F (số liệu minh họa) trong 6 tháng có 3 lần điều chỉnh: lần 1 giá về 30,2 khi MA50 = 30,0; lần 2 về 33,1 khi MA50 = 32,8; lần 3 về 35,7 khi MA50 = 35,5. Cả 3 lần đều bật lên. Lần thứ 4, nếu giá đóng cửa 34,0 trong khi MA50 = 36,0 (thấp hơn khoảng 5,6%), hỗ trợ động đã bị phá, nên cảnh giác.</p>

<h3>4. Nhược điểm: nhiễu khi đi ngang (whipsaw)</h3>
<p>Khi thị trường đi ngang, giá liên tục cắt lên rồi cắt xuống MA, tạo hàng loạt tín hiệu mua/bán sai.</p>
<p><b>Ví dụ:</b> Cổ phiếu G đi ngang trong vùng 19–21 suốt 3 tháng, MA20 nằm ở khoảng 20,0. Nếu quy tắc của bạn là "mua khi giá cắt lên MA20, bán khi cắt xuống", bạn có thể mua ở 20,3 rồi bán ở 19,7 (lỗ khoảng 3%), lặp lại 4 lần. Cộng thêm phí và thuế, bạn mất khoảng 12–13% vốn trong khi cổ phiếu không đi đâu cả.</p>
<p><b>Cách giảm nhiễu:</b></p>
<ul>
<li>Chỉ dùng tín hiệu MA khi đã xác định có xu hướng (đỉnh/đáy rõ ràng, MA dốc lên hoặc dốc xuống).</li>
<li>Khi MA đi ngang (nằm phẳng) thì bỏ qua tín hiệu cắt.</li>
<li>Kết hợp khối lượng và mức vượt đủ lớn (ví dụ đóng cửa vượt MA ít nhất 1–2%).</li>
</ul>
<div class="key" style="margin-top:8px"><b>Bộ lọc gợi ý cho người mới:</b> chỉ xem xét mua cổ phiếu khi <b>giá &gt; MA50 &gt; MA200 và MA200 đang dốc lên</b>. Đây không phải tín hiệu mua, mà là điều kiện để cổ phiếu được đưa vào danh sách xem xét.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Trên biểu đồ ngày 2 năm của VN-Index, bật MA50 và MA200. Đánh dấu tất cả các lần golden cross và death cross.</li>
<li>Với mỗi lần, ghi: ngày giao cắt, giá VN-Index lúc đó, VN-Index sau 3 tháng.</li>
<li>Tính xem giao cắt xảy ra muộn bao nhiêu % so với đáy/đỉnh thực tế gần nhất.</li>
<li>Áp dụng bộ lọc "giá &gt; MA50 &gt; MA200, MA200 dốc lên" cho 5 mã watchlist. Mã nào đạt?</li>
</ol>
Kết quả mong đợi: bảng các lần giao cắt của VN-Index và danh sách mã đạt bộ lọc.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Golden cross: MA50 cắt lên MA200; death cross: cắt xuống. Cả hai đều là tín hiệu muộn.</li>
<li>Trong xu hướng tăng, MA đi lên làm hỗ trợ động; xu hướng giảm thì làm kháng cự động.</li>
<li>Khi thị trường đi ngang, tín hiệu MA gây nhiễu, dễ lỗ liên tục.</li>
<li>Dùng MA như bộ lọc xu hướng, không phải nút bấm mua bán.</li>
</ul></div>
`,
  quiz: [
    { q: "Death cross là gì?", options: ["Giá chạm sàn", "MA50 cắt xuống dưới MA200", "MA20 cắt lên MA50", "RSI dưới 30"], answer: 1, explain: "Death cross: MA ngắn (MA50) cắt xuống dưới MA dài (MA200)." },
    { q: "Vì sao tín hiệu giao cắt MA thường đến muộn?", options: ["Vì app bị trễ", "Vì MA là trung bình của nhiều phiên quá khứ", "Vì quy định HOSE", "Vì khối lượng thấp"], answer: 1, explain: "MA cần nhiều phiên giá mới thay đổi được, nên luôn đi sau giá." },
    { q: "Khi nào tín hiệu giá cắt MA dễ bị nhiễu nhất?", options: ["Xu hướng tăng mạnh", "Thị trường đi ngang, MA nằm phẳng", "Xu hướng giảm mạnh", "Sau golden cross"], answer: 1, explain: "Khi đi ngang, giá cắt qua lại MA liên tục tạo tín hiệu sai (whipsaw)." }
  ]
},
{
  id: "w10-3",
  week: 10,
  day: 3,
  title: "RSI: chỉ báo sức mạnh tương đối",
  minutes: 120,
  summary: "Tự tính RSI(14), hiểu vùng quá mua/quá bán, cách RSI hoạt động trong xu hướng mạnh và tín hiệu phân kỳ.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Hãy tìm cổ phiếu tăng mạnh nhất tuần này trên VN30. Bật RSI(14) và xem giá trị hiện tại. Nếu RSI trên 70, đọc xem các bài báo có đang "hô hào" cổ phiếu đó không. Đây là bài học về tâm lý đám đông.</div>

<h3>1. RSI là gì?</h3>
<p>RSI (Relative Strength Index, chỉ số sức mạnh tương đối) đo <b>động lượng</b>: trong N phiên gần đây (thường là 14), mức tăng trung bình mạnh hơn hay mức giảm trung bình mạnh hơn. RSI dao động từ 0 đến 100.</p>
<p>Công thức:</p>
<ul>
<li>RS = Mức tăng trung bình 14 phiên ÷ Mức giảm trung bình 14 phiên.</li>
<li>RSI = 100 − 100 ÷ (1 + RS).</li>
</ul>
<p><b>Ví dụ:</b> Trong 14 phiên, cổ phiếu H (số liệu minh họa) có 8 phiên tăng với tổng mức tăng 16,8 nghìn đồng và 6 phiên giảm với tổng mức giảm 8,4 nghìn đồng.</p>
<ul>
<li>Mức tăng trung bình = 16,8 ÷ 14 = 1,2. Mức giảm trung bình = 8,4 ÷ 14 = 0,6. (Chia cho 14, không chia cho số phiên tăng/giảm.)</li>
<li>RS = 1,2 ÷ 0,6 = 2.</li>
<li>RSI = 100 − 100 ÷ (1 + 2) = 100 − 33,3 = <b>66,7</b>.</li>
</ul>
<p>Nếu cả 14 phiên đều tăng (mức giảm TB = 0) thì RSI = 100. Nếu tăng và giảm bằng nhau (RS = 1) thì RSI = 50.</p>
<p>Lưu ý: các app tính RSI theo cách làm mượt của Wilder (giống EMA), nên kết quả hơi khác cách tính đơn giản ở trên. Bạn không cần tự tính hằng ngày, chỉ cần hiểu ý nghĩa.</p>

<h3>2. Vùng quá mua và quá bán</h3>
<ul>
<li><b>RSI trên 70:</b> vùng <b>quá mua</b>, giá đã tăng nhanh, có thể sắp nghỉ hoặc điều chỉnh.</li>
<li><b>RSI dưới 30:</b> vùng <b>quá bán</b>, giá đã giảm nhanh, có thể sắp hồi phục.</li>
<li><b>Quanh 50:</b> cân bằng.</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu K giảm 7 phiên liền từ 50,0 xuống 41,0 (−18%), RSI xuống 24. Đây là vùng quá bán. Nó <b>không có nghĩa là phải mua</b>, chỉ nói rằng đà giảm đã rất nhanh và nhịp hồi có thể xảy ra. Nếu RSI vượt lại lên trên 30 và giá đóng cửa trên đỉnh phiên trước, tín hiệu hồi phục mới rõ hơn.</p>
<div class="warn">⚠ Trong xu hướng tăng rất mạnh, RSI có thể ở trên 70 suốt nhiều tuần. Bán vì "RSI quá mua" có thể khiến bạn bỏ lỡ phần tăng lớn nhất. <b>Ví dụ:</b> cổ phiếu L tăng từ 20 lên 30 trong 2 tháng, RSI vượt 70 khi giá ở 24 và ở trên 70 gần như suốt thời gian đó. Ai bán ở 24 vì quá mua đã bỏ lỡ thêm khoảng 25%.</div>
<p><b>Mẹo theo xu hướng:</b> trong xu hướng tăng, RSI thường không xuống dưới 40–50; khi RSI giảm về vùng này rồi bật lên có thể là nhịp điều chỉnh đã kết thúc. <b>Ví dụ:</b> Cổ phiếu M đang tăng, MA50 dốc lên; điều chỉnh 5 phiên làm RSI giảm từ 68 về 44 rồi quay lên 52 cùng một nến xanh. Đây là dấu hiệu nhịp điều chỉnh có thể đã xong.</p>

<h3>3. Phân kỳ: khi giá và RSI đi ngược nhau</h3>
<ul>
<li><b>Phân kỳ âm (bearish):</b> giá tạo đỉnh cao hơn nhưng RSI tạo đỉnh thấp hơn. Động lượng tăng đang yếu dần, có thể sắp đảo chiều giảm.</li>
<li><b>Phân kỳ dương (bullish):</b> giá tạo đáy thấp hơn nhưng RSI tạo đáy cao hơn. Lực bán yếu dần, có thể sắp đảo chiều tăng.</li>
</ul>
<figure class="fig"><svg viewBox="0 0 640 255" role="img" aria-label="Phân kỳ âm giữa giá và RSI">
<text x="10" y="18" style="fill:var(--muted);font-size:11px">GIÁ</text>
<polyline points="30,100 90,60 140,85 200,40 250,70 310,30 360,60 420,90 480,80 540,100 600,95" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<line x1="90" y1="60" x2="310" y2="30" style="stroke:var(--down);stroke-width:1.5;stroke-dasharray:5 4"/>
<text x="330" y="28" style="fill:var(--down);font-size:12px">Giá: đỉnh cao dần</text>
<line x1="10" y1="125" x2="630" y2="125" style="stroke:var(--line)"/>
<text x="10" y="138" style="fill:var(--muted);font-size:11px">RSI(14)</text>
<rect x="20" y="140" width="600" height="30" style="fill:var(--down);fill-opacity:0.08"/>
<rect x="20" y="210" width="600" height="30" style="fill:var(--up);fill-opacity:0.08"/>
<line x1="20" y1="170" x2="620" y2="170" style="stroke:var(--down);stroke-width:1;stroke-dasharray:4 3"/>
<line x1="20" y1="210" x2="620" y2="210" style="stroke:var(--up);stroke-width:1;stroke-dasharray:4 3"/>
<text x="624" y="174" text-anchor="end" style="fill:var(--down);font-size:11px">70</text>
<text x="624" y="207" text-anchor="end" style="fill:var(--up);font-size:11px">30</text>
<polyline points="30,205 90,165 140,190 200,172 250,195 310,180 360,200 420,215 480,205 540,212 600,208" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>
<line x1="90" y1="165" x2="310" y2="180" style="stroke:var(--down);stroke-width:1.5;stroke-dasharray:5 4"/>
<text x="330" y="160" style="fill:var(--down);font-size:12px">RSI: đỉnh thấp dần → phân kỳ âm</text>
<text x="200" y="252" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vùng trên 70: quá mua · Vùng dưới 30: quá bán</text>
</svg><figcaption>Hình: Giá lập 3 đỉnh cao dần nhưng RSI lập 3 đỉnh thấp dần. Sau đó giá giảm.</figcaption></figure>
<p><b>Ví dụ:</b> Cổ phiếu N (số liệu minh họa) lập đỉnh 1 ở 45,0 với RSI = 78; đỉnh 2 ở 47,5 với RSI = 69; đỉnh 3 ở 48,5 với RSI = 61. Giá vẫn cao hơn nhưng mỗi lần lên đỉnh mới lại tăng ít hơn (+5,6% rồi +2,1%) và RSI giảm dần. Đây là phân kỳ âm: không nên mua đuổi ở 48,5, và nếu đang giữ thì có thể nâng điểm cắt lỗ lên gần hơn.</p>

<h3>4. Dùng RSI đúng cách</h3>
<ul>
<li>Xác định xu hướng trước (MA, đỉnh/đáy), rồi mới dùng RSI để tìm thời điểm.</li>
<li>Trong xu hướng tăng: chú ý RSI hồi về 40–50 rồi bật lên. Trong xu hướng giảm: RSI hồi lên 50–60 rồi quay xuống là áp lực bán vẫn mạnh.</li>
<li>Phân kỳ là cảnh báo, cần thêm xác nhận từ giá (ví dụ thủng hỗ trợ, gãy trendline).</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu P có RSI = 28 (quá bán), nhưng giá nằm dưới MA50 và MA200, cả hai đều dốc xuống. Xu hướng chính vẫn là giảm, nên RSI 28 chỉ báo hiệu nhịp hồi ngắn, không phải điểm mua dài hạn. Nhiều người mua "vì RSI quá bán" rồi tiếp tục lỗ thêm 15–20% khi giá giảm tiếp và RSI cứ ở quanh 25–35.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Bật RSI(14) trên TradingView cho VN-Index và 5 mã watchlist.</li>
<li>Ghi giá trị RSI hiện tại và phân loại: quá mua (&gt;70), quá bán (&lt;30), trung tính.</li>
<li>Trên biểu đồ 1 năm của VN-Index, tìm 1 phân kỳ âm hoặc phân kỳ dương. Ghi lại ngày, giá, RSI tại 2 đỉnh (hoặc 2 đáy), và diễn biến sau đó.</li>
<li>Đếm số lần RSI VN-Index xuống dưới 30 trong 1 năm. Sau mỗi lần, VN-Index hồi bao nhiêu % trong 2 tuần?</li>
</ol>
Kết quả mong đợi: bảng RSI 6 biểu đồ và 1 ví dụ phân kỳ có số liệu.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>RSI = 100 − 100 ÷ (1 + RS), dao động 0–100, đo động lượng.</li>
<li>Trên 70 quá mua, dưới 30 quá bán, nhưng không phải lệnh bán/mua tự động.</li>
<li>Trong xu hướng mạnh, RSI có thể ở vùng cực đoan rất lâu.</li>
<li>Phân kỳ âm/dương là cảnh báo sớm, cần giá xác nhận.</li>
</ul></div>
`,
  quiz: [
    { q: "Mức tăng TB 14 phiên là 0,9, mức giảm TB là 0,3. RSI bằng bao nhiêu?", options: ["50", "66,7", "75", "90"], answer: 2, explain: "RS = 0,9 ÷ 0,3 = 3. RSI = 100 − 100 ÷ 4 = 75." },
    { q: "Giá lập đáy thấp hơn nhưng RSI lập đáy cao hơn gọi là gì?", options: ["Phân kỳ âm", "Phân kỳ dương", "Quá mua", "Golden cross"], answer: 1, explain: "Phân kỳ dương: lực bán yếu dần dù giá còn tạo đáy thấp hơn." },
    { q: "Cổ phiếu đang trong xu hướng tăng mạnh, RSI = 75 suốt 3 tuần. Nhận định nào hợp lý nhất?", options: ["Phải bán ngay vì quá mua", "RSI có thể ở trên 70 lâu trong xu hướng mạnh; cần thêm dấu hiệu khác", "RSI bị lỗi", "Nên vay margin mua thêm"], answer: 1, explain: "Trong xu hướng mạnh, RSI quá mua kéo dài là bình thường; quá mua không tự động là tín hiệu bán." }
  ]
},
{
  id: "w10-4",
  week: 10,
  day: 4,
  title: "MACD và cách kết hợp các chỉ báo",
  minutes: 120,
  summary: "Hiểu 3 thành phần của MACD(12,26,9), các tín hiệu giao cắt và histogram; biết kết hợp chỉ báo mà không bị quá tải.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Đọc 1 bản nhận định kỹ thuật bất kỳ. Đếm xem họ dùng bao nhiêu chỉ báo và các chỉ báo đó có nói cùng một điều không. Cuối bài bạn sẽ biết vì sao "càng nhiều chỉ báo" không có nghĩa là "càng chắc".</div>

<h3>1. MACD gồm 3 phần</h3>
<p>MACD (Moving Average Convergence Divergence) với thông số mặc định (12, 26, 9):</p>
<ul>
<li><b>Đường MACD</b> = EMA12 − EMA26. Đo khoảng cách giữa trung bình ngắn và trung bình dài.</li>
<li><b>Đường tín hiệu (Signal)</b> = EMA9 của đường MACD. Là phiên bản mượt hơn của MACD.</li>
<li><b>Histogram</b> = MACD − Signal. Là các cột hiển thị khoảng cách giữa hai đường.</li>
</ul>
<p><b>Ví dụ:</b> Hôm nay cổ phiếu Q (số liệu minh họa) có EMA12 = 25,4 và EMA26 = 24,9.</p>
<ul>
<li>MACD = 25,4 − 24,9 = <b>0,5</b>. Dương, nghĩa là trung bình ngắn hạn cao hơn dài hạn, giá đang có đà đi lên.</li>
<li>Signal (EMA9 của MACD) = 0,3.</li>
<li>Histogram = 0,5 − 0,3 = <b>0,2</b>. Cột dương, MACD đang nằm trên Signal.</li>
<li>Ngày mai nếu MACD = 0,55 và Signal = 0,34, histogram = 0,21 tăng nhẹ: động lượng tăng còn duy trì. Nếu MACD = 0,42 và Signal = 0,32, histogram = 0,10 giảm một nửa: đà tăng đang chậm lại.</li>
</ul>

<h3>2. Các tín hiệu của MACD</h3>
<table>
<tr><th>Tín hiệu</th><th>Mô tả</th><th>Ý nghĩa</th></tr>
<tr><td>MACD cắt lên Signal</td><td>Histogram chuyển từ âm sang dương</td><td>Động lượng chuyển sang tích cực</td></tr>
<tr><td>MACD cắt xuống Signal</td><td>Histogram chuyển từ dương sang âm</td><td>Động lượng chuyển sang tiêu cực</td></tr>
<tr><td>MACD cắt lên 0</td><td>EMA12 vượt lên EMA26</td><td>Xu hướng ngắn hạn chuyển tăng</td></tr>
<tr><td>Histogram co lại</td><td>Cột ngắn dần</td><td>Động lượng yếu đi, cảnh báo sớm</td></tr>
</table>
<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="MACD, đường tín hiệu và histogram">
<line x1="15" y1="130" x2="625" y2="130" style="stroke:var(--muted);stroke-width:1"/>
<text x="625" y="124" text-anchor="end" style="fill:var(--muted);font-size:11px">0</text>
<rect x="23" y="130" width="14" height="9" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="53" y="130" width="14" height="10.8" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="83" y="130" width="14" height="10.8" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="113" y="130" width="14" height="3.6" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="143" y="122.8" width="14" height="7.2" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="173" y="110.2" width="14" height="19.8" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="203" y="101.2" width="14" height="28.8" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="233" y="94" width="14" height="36" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="263" y="88.6" width="14" height="41.4" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="293" y="85" width="14" height="45" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="323" y="86.8" width="14" height="43.2" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="353" y="92.2" width="14" height="37.8" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="383" y="101.2" width="14" height="28.8" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="413" y="113.8" width="14" height="16.2" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="443" y="126.4" width="14" height="3.6" style="fill:var(--up);fill-opacity:0.6"/>
<rect x="473" y="130" width="14" height="9" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="503" y="130" width="14" height="18" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="533" y="130" width="14" height="25.2" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="563" y="130" width="14" height="30.6" style="fill:var(--down);fill-opacity:0.6"/>
<rect x="593" y="130" width="14" height="36" style="fill:var(--down);fill-opacity:0.6"/>
<polyline points="30,184 60,193 90,198.4 120,193 150,180.4 180,162.4 210,144.4 240,126.4 270,108.4 300,90.4 330,76 360,67 390,63.4 420,67 450,76 480,90.4 510,104.8 540,119.2 570,133.6 600,148" style="fill:none;stroke:var(--accent);stroke-width:2.5"/>
<polyline points="30,175 60,182.2 90,187.6 120,189.4 150,187.6 180,182.2 210,173.2 240,162.4 270,149.8 300,135.4 330,119.2 360,104.8 390,92.2 420,83.2 450,79.6 480,81.4 510,86.8 540,94 570,103 600,112" style="fill:none;stroke:var(--c2);stroke-width:2.5"/>
<circle cx="138" cy="189" r="8" style="fill:none;stroke:var(--up);stroke-width:2"/>
<text x="138" y="222" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:700">MACD cắt lên Signal</text>
<circle cx="466" cy="80" r="8" style="fill:none;stroke:var(--down);stroke-width:2"/>
<text x="500" y="52" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">MACD cắt xuống Signal</text>
<text x="20" y="22" style="fill:var(--accent);font-size:12px;font-weight:700">━ MACD</text>
<text x="90" y="22" style="fill:var(--c2);font-size:12px;font-weight:700">━ Signal</text>
<text x="165" y="22" style="fill:var(--muted);font-size:12px">▮ Histogram (MACD − Signal)</text>
<text x="300" y="236" text-anchor="middle" style="fill:var(--muted);font-size:11px">Histogram co lại trước khi hai đường cắt xuống → cảnh báo sớm</text>
</svg><figcaption>Hình: Histogram dương (xanh) khi MACD nằm trên Signal, âm (đỏ) khi nằm dưới. Cột cao nhất xuất hiện trước khi động lượng suy yếu.</figcaption></figure>
<p><b>Ví dụ:</b> Histogram của cổ phiếu R trong 5 phiên: 0,40 → 0,35 → 0,28 → 0,18 → 0,05. Giá vẫn tăng nhẹ mỗi ngày, nhưng histogram co lại liên tục, báo trước rằng MACD sắp cắt xuống Signal. Người theo dõi histogram có thể chuẩn bị (không mua thêm, nâng cắt lỗ) trước khi tín hiệu cắt xuất hiện.</p>

<h3>3. Các nhóm chỉ báo và vấn đề "quá tải chỉ báo"</h3>
<p>Mỗi chỉ báo thuộc một nhóm, đo một khía cạnh khác nhau:</p>
<table>
<tr><th>Nhóm</th><th>Đo cái gì</th><th>Ví dụ chỉ báo</th></tr>
<tr><td>Xu hướng</td><td>Giá đang đi hướng nào</td><td>MA, đường xu hướng</td></tr>
<tr><td>Động lượng</td><td>Đà đi nhanh hay chậm</td><td>RSI, MACD, Stochastic</td></tr>
<tr><td>Khối lượng</td><td>Có bao nhiêu người tham gia</td><td>Volume, MA khối lượng</td></tr>
</table>
<p>RSI, MACD và Stochastic đều đo động lượng từ cùng dữ liệu giá. Dùng cả ba cùng lúc giống như hỏi ý kiến 3 người đọc cùng một tờ báo: họ đồng ý với nhau không có nghĩa là bạn chắc chắn hơn.</p>
<p><b>Ví dụ:</b> Bạn thấy cổ phiếu S có RSI = 72, MACD cắt lên, Stochastic = 85 và nghĩ "3 chỉ báo đều tích cực, chắc chắn rồi". Thực ra cả ba đều chỉ nói một điều: giá vừa tăng nhanh. Trong khi đó bạn chưa kiểm tra xu hướng (giá có thể vẫn dưới MA200) và khối lượng (có thể rất thấp). Bộ kiểm tra tốt hơn là: <b>1 chỉ báo xu hướng + 1 chỉ báo động lượng + khối lượng</b>.</p>

<h3>4. Một bộ kết hợp đơn giản cho người mới</h3>
<ol>
<li><b>Xu hướng:</b> Giá &gt; MA50 và MA50 &gt; MA200? (Có/Không)</li>
<li><b>Điểm vào:</b> Giá điều chỉnh về gần MA20/MA50 hoặc hỗ trợ ngang, RSI về khoảng 40–50 rồi bật lên, hoặc MACD cắt lên Signal.</li>
<li><b>Xác nhận:</b> Phiên bật lên có khối lượng cao hơn trung bình.</li>
<li><b>Cắt lỗ:</b> Dưới hỗ trợ gần nhất hoặc tối đa −7 đến −8%.</li>
</ol>
<p><b>Ví dụ:</b> Cổ phiếu T (số liệu minh họa): giá 42,0 &gt; MA50 = 40,5 &gt; MA200 = 36,0 (đạt bước 1). Giá vừa điều chỉnh về 40,8 (gần MA50), RSI từ 46 lên 53 và MACD vừa cắt lên Signal (đạt bước 2). Phiên bật lên có khối lượng 1,4 lần trung bình (tạm đạt bước 3). Cắt lỗ đặt ở 38,9, ngay dưới vùng hỗ trợ 39,0–39,5 (cách giá 42,0 khoảng −7,4%, đạt bước 4).</p>
<div class="warn">⚠ Đừng thay đổi thông số chỉ báo liên tục (RSI 9, RSI 21, MACD 5-35-5...) để "khớp" với quá khứ. Thông số mặc định được dùng phổ biến nhất, nên phản ánh hành vi chung của đám đông tốt nhất.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Bật MACD(12,26,9) trên TradingView cho VN-Index. Tìm 3 lần MACD cắt lên Signal và 3 lần cắt xuống trong 1 năm.</li>
<li>Với mỗi lần, ghi giá VN-Index lúc đó và sau 10 phiên. Có bao nhiêu lần tín hiệu đúng hướng?</li>
<li>Áp dụng bộ kết hợp 4 bước cho 5 mã watchlist. Ghi: mã nào đạt bước mấy.</li>
</ol>
Kết quả mong đợi: tỷ lệ đúng của tín hiệu MACD trên VN-Index (ví dụ 4/6) và bảng chấm 4 bước cho 5 mã.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>MACD = EMA12 − EMA26; Signal = EMA9 của MACD; Histogram = MACD − Signal.</li>
<li>Histogram co lại là cảnh báo sớm trước khi hai đường cắt nhau.</li>
<li>RSI, MACD, Stochastic cùng đo động lượng; dùng nhiều không làm tín hiệu chắc chắn hơn.</li>
<li>Kết hợp: 1 chỉ báo xu hướng + 1 chỉ báo động lượng + khối lượng.</li>
</ul></div>
`,
  quiz: [
    { q: "EMA12 = 30,8; EMA26 = 31,2. Giá trị MACD là bao nhiêu?", options: ["0,4", "−0,4", "62", "1,01"], answer: 1, explain: "MACD = EMA12 − EMA26 = 30,8 − 31,2 = −0,4." },
    { q: "Histogram của MACD được tính thế nào?", options: ["EMA12 − EMA26", "MACD − Signal", "Giá − MA20", "RSI − 50"], answer: 1, explain: "Histogram = MACD − Signal, thể hiện khoảng cách giữa hai đường." },
    { q: "Bộ chỉ báo nào ít trùng lặp nhất?", options: ["RSI + MACD + Stochastic", "MA50 + RSI + Khối lượng", "RSI 9 + RSI 14 + RSI 21", "MACD + MACD histogram"], answer: 1, explain: "MA50 (xu hướng), RSI (động lượng) và khối lượng đo ba khía cạnh khác nhau." }
  ]
},
{
  id: "w10-5",
  week: 10,
  day: 5,
  title: "Mẫu hình giá: hai đỉnh, hai đáy, vai-đầu-vai, cốc tay cầm, nền tích lũy",
  minutes: 120,
  summary: "Nhận diện các mẫu hình giá kinh điển, cách đo mục tiêu giá và xác nhận để tránh tín hiệu giả.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm cụm từ "tích lũy", "nền giá", "vượt nền" trong các bài nhận định. Mở biểu đồ cổ phiếu được nhắc tới và tự kiểm tra: vùng tích lũy kéo dài bao lâu, rộng bao nhiêu %, khối lượng có giảm dần trong nền không?</div>

<h3>1. Hai đỉnh (M) và hai đáy (W)</h3>
<ul>
<li><b>Hai đỉnh (double top):</b> giá tăng lên một đỉnh, điều chỉnh, rồi tăng lại gần đỉnh cũ nhưng không vượt được. Mẫu hình hoàn thành khi giá đóng cửa <b>thủng đáy giữa hai đỉnh</b> (đường viền cổ). Báo hiệu đảo chiều giảm.</li>
<li><b>Hai đáy (double bottom):</b> ngược lại, hoàn thành khi giá vượt lên trên đỉnh giữa hai đáy. Báo hiệu đảo chiều tăng.</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu A (số liệu minh họa) lập đỉnh 1 ở 60,0, điều chỉnh về 54,0, rồi lên lại 59,8 thì quay đầu (đỉnh 2). Đường viền cổ là 54,0. Chừng nào giá còn trên 54,0, mẫu hình chưa hoàn thành. Khi giá đóng cửa 53,2 (thủng 54,0), mẫu hình hai đỉnh được xác nhận. Chiều cao = 60,0 − 54,0 = 6,0, nên mục tiêu giảm tham khảo là 54,0 − 6,0 = 48,0.</p>
<figure class="fig"><svg viewBox="0 0 640 245" role="img" aria-label="Mẫu hình hai đỉnh, hai đáy và cốc tay cầm">
<text x="105" y="222" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Hai đỉnh (M)</text>
<text x="320" y="222" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Hai đáy (W)</text>
<text x="535" y="222" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Cốc tay cầm</text>
<line x1="212" y1="20" x2="212" y2="200" style="stroke:var(--line)"/>
<line x1="428" y1="20" x2="428" y2="200" style="stroke:var(--line)"/>
<line x1="15" y1="130" x2="205" y2="130" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:5 4"/>
<polyline points="15,190 55,70 100,130 145,72 195,200" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<circle cx="168" cy="130" r="6" style="fill:none;stroke:var(--down);stroke-width:2"/>
<text x="105" y="240" text-anchor="middle" style="fill:var(--muted);font-size:11px">Thủng viền cổ → giảm</text>
<line x1="222" y1="120" x2="420" y2="120" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:5 4"/>
<polyline points="230,60 270,190 315,120 360,188 410,50" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<circle cx="386" cy="120" r="6" style="fill:none;stroke:var(--up);stroke-width:2"/>
<text x="320" y="240" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vượt viền cổ → tăng</text>
<path d="M440,60 Q520,240 590,65" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<polyline points="590,65 605,92 618,80 632,40" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<line x1="440" y1="62" x2="635" y2="62" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:5 4"/>
<text x="515" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">Cốc</text>
<text x="606" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">Tay cầm</text>
<text x="535" y="240" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vượt đỉnh tay cầm → tăng</text>
</svg><figcaption>Hình: Ba mẫu hình phổ biến. Đường nét đứt là mức giá cần bị phá vỡ để mẫu hình hoàn thành.</figcaption></figure>
<p><b>Ví dụ:</b> Hai đáy trên cổ phiếu B: đáy 1 ở 20,0, hồi lên 23,0, đáy 2 ở 20,3 (cao hơn đáy 1 một chút), rồi vượt 23,0 với khối lượng gấp 1,8 lần trung bình. Chiều cao 23,0 − 20,0 = 3,0, nên mục tiêu tham khảo 23,0 + 3,0 = 26,0. Cắt lỗ hợp lý đặt dưới 21,5, vùng giữa mẫu hình.</p>

<h3>2. Vai-đầu-vai</h3>
<p>Gồm 3 đỉnh: vai trái, đầu (cao nhất), vai phải (thấp hơn đầu, gần bằng vai trái). Nối hai đáy giữa các đỉnh tạo thành <b>đường viền cổ (neckline)</b>. Khi giá đóng cửa thủng neckline, mẫu hình hoàn thành và báo hiệu đảo chiều giảm. Mẫu <b>vai-đầu-vai ngược</b> (ở đáy) báo hiệu đảo chiều tăng.</p>
<p><b>Cách đo mục tiêu:</b> chiều cao h = đỉnh đầu − neckline. Mục tiêu tham khảo = neckline − h.</p>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Mẫu hình vai-đầu-vai và cách đo mục tiêu">
<line x1="60" y1="150" x2="560" y2="150" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:6 4"/>
<polyline points="20,200 80,120 130,150 220,60 300,150 370,115 430,152 500,200 560,185 620,215" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<text x="80" y="108" text-anchor="middle" style="fill:var(--text);font-size:12px">Vai trái</text>
<text x="220" y="48" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:700">Đầu</text>
<text x="370" y="103" text-anchor="middle" style="fill:var(--text);font-size:12px">Vai phải</text>
<text x="235" y="172" style="fill:var(--accent);font-size:12px">Đường viền cổ (neckline)</text>
<line x1="210" y1="62" x2="210" y2="148" style="stroke:var(--c2);stroke-width:1.5;stroke-dasharray:3 3"/>
<text x="196" y="110" text-anchor="end" style="fill:var(--c2);font-size:13px;font-weight:700">h</text>
<circle cx="440" cy="158" r="7" style="fill:none;stroke:var(--down);stroke-width:2"/>
<line x1="520" y1="150" x2="520" y2="238" style="stroke:var(--c2);stroke-width:1.5;stroke-dasharray:3 3"/>
<text x="528" y="200" style="fill:var(--c2);font-size:13px;font-weight:700">h</text>
<line x1="505" y1="238" x2="560" y2="238" style="stroke:var(--down);stroke-width:2"/>
<text x="565" y="242" style="fill:var(--down);font-size:11px">Mục tiêu</text>
</svg><figcaption>Hình: Khoảng cách h từ đỉnh đầu đến neckline được "chiếu" xuống từ điểm phá vỡ để ước tính mục tiêu giảm.</figcaption></figure>
<p><b>Ví dụ:</b> Cổ phiếu C (số liệu minh họa): vai trái 52,0, đầu 58,0, vai phải 52,5, neckline ở 49,0. Chiều cao h = 58,0 − 49,0 = 9,0. Khi giá đóng cửa 48,2 (thủng 49,0), mục tiêu tham khảo = 49,0 − 9,0 = 40,0. Nếu đang giữ cổ phiếu, đây là tín hiệu thoát hàng rõ ràng. Lưu ý mục tiêu chỉ là ước lượng; giá có thể dừng sớm hơn hoặc giảm sâu hơn.</p>

<h3>3. Cốc tay cầm</h3>
<p>Mẫu hình tiếp diễn tăng nổi tiếng của William O'Neil:</p>
<ul>
<li><b>Cốc:</b> giá điều chỉnh tạo đáy tròn (hình chữ U, không phải chữ V nhọn), thường kéo dài vài tuần đến vài tháng, sâu khoảng 12–35% theo mô tả của O'Neil.</li>
<li><b>Tay cầm:</b> sau khi lên gần đỉnh cũ, giá điều chỉnh nhẹ một lần nữa, ngắn và nông hơn (thường khoảng 1–2 tuần, giảm khoảng 8–12%), khối lượng giảm.</li>
<li><b>Điểm mua (theo O'Neil):</b> khi giá vượt đỉnh tay cầm với khối lượng tăng mạnh.</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu D (số liệu minh họa) có đỉnh trái 40,0, điều chỉnh tròn trong 8 tuần xuống đáy 31,0 (sâu (40 − 31) ÷ 40 = 22,5%), rồi lên lại 39,5. Tay cầm: giảm nhẹ về 36,5 trong 7 phiên (−7,6%) với khối lượng giảm dần. Điểm mua là khi giá vượt 39,5 (đỉnh tay cầm) kèm khối lượng lớn. Cắt lỗ 7–8% dưới giá mua, tức khoảng 36,5–36,8, cũng gần đáy tay cầm.</p>

<h3>4. Nền tích lũy (base)</h3>
<p>Nền tích lũy là giai đoạn giá đi ngang trong một biên độ hẹp sau một đợt tăng hoặc giảm, khối lượng thường giảm dần. Đây là lúc cổ phiếu "chuyển tay" từ người bán sang người mua kiên nhẫn. Nền càng dài và càng chặt (biên độ hẹp), cú vượt nền thường càng đáng chú ý.</p>
<p><b>Ví dụ:</b> Cổ phiếu E đi ngang 3 tháng trong vùng 27,0–30,0 (biên độ (30 − 27) ÷ 27 ≈ 11%), khối lượng giảm từ 2 triệu xuống 0,8 triệu/phiên. Một phiên vượt 30,0 với 2,4 triệu cổ phiếu (3 lần mức khối lượng trong nền) là tín hiệu vượt nền mạnh. Ngược lại, một mã đi ngang trong vùng 20–28 (biên độ 40%) là nền quá lỏng, không đáng tin.</p>

<h3>5. Tín hiệu giả và cách xác nhận</h3>
<ul>
<li>Chờ <b>giá đóng cửa</b> vượt/thủng mức quan trọng, không dựa vào giá trong phiên.</li>
<li>Kiểm tra <b>khối lượng</b> phiên phá vỡ (≥ 1,5 lần trung bình là tham khảo tốt).</li>
<li>Đặt cắt lỗ ngay khi vào lệnh: nếu giá quay lại sâu vào trong mẫu hình thì thoát.</li>
</ul>
<p><b>Ví dụ:</b> Bạn mua cổ phiếu E ở 30,5 khi vượt nền 27–30. Hai phiên sau giá quay lại 28,6, tức sâu vào trong nền và thấp hơn giá mua 6,2%. Đây là phá vỡ thất bại. Theo kế hoạch đặt cắt lỗ ở 28,5, bạn bán và chỉ mất khoảng 6,6% thay vì chờ "hy vọng" và lỗ 15–20% nếu giá thủng đáy nền 27,0.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Xem biểu đồ ngày 1–2 năm của 5 mã watchlist và VN-Index.</li>
<li>Tìm ít nhất 2 mẫu hình (hai đỉnh, hai đáy, vai-đầu-vai, cốc tay cầm, nền tích lũy).</li>
<li>Với mỗi mẫu hình, ghi: mức phá vỡ, chiều cao, mục tiêu tính toán, và giá thực tế đạt được sau đó.</li>
<li>Mẫu hình có đạt mục tiêu không? Phiên phá vỡ có khối lượng lớn không?</li>
</ol>
Kết quả mong đợi: 2 mẫu hình có số liệu đầy đủ trong Ghi chú.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Mẫu hình chỉ hoàn thành khi giá đóng cửa phá vỡ đường viền cổ/đỉnh tay cầm/biên nền.</li>
<li>Mục tiêu tham khảo = chiều cao mẫu hình chiếu từ điểm phá vỡ.</li>
<li>Cốc tay cầm và nền tích lũy: khối lượng giảm trong nền, tăng mạnh khi vượt.</li>
<li>Luôn đặt cắt lỗ: phá vỡ thất bại xảy ra thường xuyên.</li>
</ul></div>
`,
  quiz: [
    { q: "Vai-đầu-vai: đầu 80, neckline 70. Giá thủng neckline. Mục tiêu tham khảo là bao nhiêu?", options: ["70", "60", "50", "90"], answer: 1, explain: "h = 80 − 70 = 10. Mục tiêu = 70 − 10 = 60." },
    { q: "Mẫu hình hai đáy được xác nhận khi nào?", options: ["Khi giá chạm đáy thứ hai", "Khi giá đóng cửa vượt đỉnh giữa hai đáy", "Khi RSI dưới 30", "Khi có nến doji"], answer: 1, explain: "Hai đáy hoàn thành khi giá vượt đường viền cổ là đỉnh nằm giữa hai đáy." },
    { q: "Trong nền tích lũy tốt, khối lượng thường thế nào?", options: ["Tăng dần", "Giảm dần trong nền, tăng mạnh khi vượt nền", "Luôn bằng 0", "Không liên quan"], answer: 1, explain: "Khối lượng giảm trong nền cho thấy lực bán cạn; tăng mạnh khi vượt nền xác nhận lực mua." }
  ]
},
{
  id: "w10-6",
  week: 10,
  day: 6,
  title: "Thực hành: MA, RSI, MACD trên TradingView và nhật ký tín hiệu",
  minutes: 240,
  summary: "Thiết lập bộ chỉ báo chuẩn, phân tích 5 mã và bắt đầu nhật ký tín hiệu để kiểm chứng sau 2 tuần.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p><b>Mục tiêu:</b> Có một mẫu biểu đồ (template) chuẩn trên TradingView và một nhật ký tín hiệu cho 5 mã. Sau 2 tuần, bạn quay lại kiểm tra tín hiệu nào đúng, sai, để biết mình đọc biểu đồ tốt đến đâu.</p>

<p><b>Bước 1: Thiết lập bộ chỉ báo (20 phút)</b></p>
<ol>
<li>Mở biểu đồ 1 mã, khung 1D, kiểu nến.</li>
<li>Bấm "Chỉ báo" (Indicators), tìm "Moving Average" và thêm 3 lần, đặt độ dài 20, 50, 200 với 3 màu khác nhau (ví dụ xanh dương, cam, hồng).</li>
<li>Thêm "Relative Strength Index" (RSI, mặc định 14) và "MACD" (mặc định 12, 26, 9).</li>
<li>Đảm bảo có Volume. Lưu mẫu chỉ báo (Indicator template) với tên "Hoc-PTKT" để áp dụng nhanh cho các mã khác.</li>
</ol>
<figure class="fig"><svg viewBox="0 0 640 280" role="img" aria-label="Bố cục biểu đồ với 3 khung: giá và MA, RSI, MACD">
<rect x="10" y="10" width="620" height="150" rx="6" style="fill:var(--card);stroke:var(--line)"/>
<text x="20" y="28" style="fill:var(--muted);font-size:11px">Khung 1: Nến + MA20 / MA50 / MA200 + Volume</text>
<polyline points="30,130 90,120 150,125 210,100 270,95 330,80 390,85 450,65 510,70 570,55 610,50" style="fill:none;stroke:var(--text);stroke-width:2"/>
<polyline points="30,135 90,128 150,124 210,112 270,104 330,94 390,88 450,78 510,74 570,66 610,60" style="fill:none;stroke:var(--accent);stroke-width:2"/>
<polyline points="30,140 150,135 270,120 390,104 510,90 610,80" style="fill:none;stroke:var(--c2);stroke-width:2"/>
<polyline points="30,148 330,138 610,118" style="fill:none;stroke:var(--c3);stroke-width:2"/>
<text x="520" y="28" style="fill:var(--accent);font-size:11px">MA20</text><text x="560" y="28" style="fill:var(--c2);font-size:11px">MA50</text><text x="598" y="28" style="fill:var(--c3);font-size:11px">MA200</text>
<rect x="10" y="168" width="620" height="50" rx="6" style="fill:var(--card);stroke:var(--line)"/>
<text x="20" y="184" style="fill:var(--muted);font-size:11px">Khung 2: RSI(14) với ngưỡng 30/70</text>
<line x1="20" y1="180" x2="620" y2="180" style="stroke:var(--down);stroke-dasharray:3 3"/>
<line x1="20" y1="208" x2="620" y2="208" style="stroke:var(--up);stroke-dasharray:3 3"/>
<polyline points="30,200 120,195 210,188 300,185 390,190 480,184 610,182" style="fill:none;stroke:var(--accent);stroke-width:2"/>
<rect x="10" y="226" width="620" height="48" rx="6" style="fill:var(--card);stroke:var(--line)"/>
<text x="20" y="242" style="fill:var(--muted);font-size:11px">Khung 3: MACD(12,26,9)</text>
<line x1="20" y1="256" x2="620" y2="256" style="stroke:var(--muted)"/>
<polyline points="30,264 150,260 270,252 390,246 510,248 610,252" style="fill:none;stroke:var(--accent);stroke-width:2"/>
<polyline points="30,262 150,262 270,256 390,250 510,248 610,250" style="fill:none;stroke:var(--c2);stroke-width:2"/>
</svg><figcaption>Hình: Bố cục khuyên dùng: khung giá chính với 3 đường MA và khối lượng, bên dưới là RSI và MACD.</figcaption></figure>

<p><b>Bước 2: Phân tích 5 mã (90 phút)</b></p>
<p>Với mỗi mã, điền một dòng vào <b>nhật ký tín hiệu</b> (lưu trong tab Ghi chú):</p>
<table>
<tr><th>Ngày</th><th>Mã</th><th>Giá</th><th>Vị trí so với MA20/50/200</th><th>RSI</th><th>MACD</th><th>Mẫu hình / HT–KC</th><th>Kết luận</th><th>Kiểm tra sau 2 tuần</th></tr>
<tr><td>Ví dụ</td><td>Mã A</td><td>42,0</td><td>Trên cả 3; MA50 &gt; MA200</td><td>53, vừa bật từ 46</td><td>Vừa cắt lên Signal</td><td>Điều chỉnh về MA50, HT 39–39,5</td><td>Tích cực</td><td>(điền sau)</td></tr>
<tr><td></td><td>...</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ:</b> Kết luận chỉ chọn 1 trong 3: <b>Tích cực</b> (đạt điều kiện xu hướng và có tín hiệu vào), <b>Trung tính</b> (xu hướng tốt nhưng chưa có điểm vào, hoặc ngược lại), <b>Tiêu cực</b> (giá dưới MA200, MACD âm, thủng hỗ trợ). Ở dòng ví dụ trên, Mã A đạt cả xu hướng (trên 3 MA) và tín hiệu (RSI bật, MACD cắt lên) nên là Tích cực.</p>

<p><b>Bước 3: Kiểm chứng trên quá khứ (40 phút)</b></p>
<p>Chọn 1 mã, kéo biểu đồ lùi về 6 tháng trước (che phần bên phải). Phân tích như thể đó là "hôm nay" và ghi kết luận. Sau đó kéo ra xem giá thực tế đi thế nào.</p>
<p><b>Ví dụ:</b> Bạn che biểu đồ ở ngày 1/3 (giả định). Lúc đó giá 30,0, nằm dưới MA50, MACD âm, nên bạn kết luận "Tiêu cực". Kéo ra thấy 1 tháng sau giá về 27,0 (−10%). Kết luận của bạn đúng. Làm 3–5 lần như vậy ở các thời điểm khác nhau để luyện mắt.</p>

<p><b>Tiêu chí tự đánh giá:</b></p>
<ul>
<li>☐ Đã lưu mẫu chỉ báo "Hoc-PTKT".</li>
<li>☐ Nhật ký có đủ 5 mã, mỗi mã có kết luận rõ ràng.</li>
<li>☐ Đã làm ít nhất 3 lần kiểm chứng trên quá khứ.</li>
<li>☐ Đặt nhắc nhở trên lịch: kiểm tra nhật ký sau 2 tuần.</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp khoảng 50–80 trang "Làm giàu từ chứng khoán". Tập trung vào phần O'Neil hướng dẫn đọc biểu đồ và các mẫu hình nền giá.</p>
<p><b>Ý cần chú ý:</b></p>
<ul>
<li>O'Neil đặc biệt coi trọng mẫu hình cốc tay cầm và các loại nền giá trước khi bứt phá.</li>
<li>Ông nhấn mạnh khối lượng phải tăng mạnh tại điểm bứt phá.</li>
<li>Ông khuyên không mua khi giá đã chạy quá xa điểm mua lý tưởng (mua đuổi).</li>
</ul>
<p><b>Câu hỏi tự trả lời:</b></p>
<ol>
<li>Vì sao O'Neil cho rằng đáy cốc hình chữ U tốt hơn chữ V?</li>
<li>"Mua đuổi" là gì? Bạn đã từng có ý định mua đuổi cổ phiếu nào chưa?</li>
<li>So sánh: một nền tích lũy lý tưởng theo O'Neil có điểm gì giống nền tích lũy học hôm qua?</li>
</ol>
`,
  quiz: [
    { q: "Một mã có giá dưới MA200, MACD âm, vừa thủng hỗ trợ. Kết luận trong nhật ký tín hiệu nên là gì?", options: ["Tích cực", "Trung tính", "Tiêu cực", "Mua bình quân giá"], answer: 2, explain: "Cả xu hướng, động lượng và hỗ trợ đều xấu, nên kết luận Tiêu cực." },
    { q: "Mục đích của việc che biểu đồ và phân tích như 'hôm nay' ở quá khứ là gì?", options: ["Để dự đoán chính xác tương lai", "Để luyện mắt và kiểm chứng cách đọc biểu đồ của mình", "Để tìm mã phím hàng", "Không có mục đích"], answer: 1, explain: "Luyện tập trên dữ liệu quá khứ giúp bạn biết cách đọc của mình đúng bao nhiêu mà không mất tiền." }
  ]
},
{
  id: "w10-7",
  week: 10,
  day: 7,
  title: "Ôn tập tuần 10: chỉ báo và mẫu hình",
  minutes: 240,
  summary: "Hệ thống lại MA, RSI, MACD, mẫu hình giá; tự kiểm tra bằng câu hỏi tổng hợp và chuẩn bị cho tuần quản lý vốn.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp khoảng 50–80 trang "Làm giàu từ chứng khoán". Chú ý phần O'Neil nói về <b>khi nào bán cổ phiếu</b>, bao gồm cả bán để cắt lỗ và bán để chốt lời.</p>
<p><b>Ý cần chú ý:</b> O'Neil cho rằng phần lớn nhà đầu tư giỏi mua nhưng kém bán. Ông nhấn mạnh việc có quy tắc bán trước khi mua. <b>Ví dụ:</b> nếu mua cổ phiếu ở 40.000đ, kế hoạch bán phải được viết sẵn từ trước: bán toàn bộ nếu giá về 37.000đ (−7,5%), cân nhắc chốt lời một phần khi lãi 20–25% (48.000–50.000đ).</p>
<p><b>Câu hỏi sau khi đọc:</b> Viết ra 2 quy tắc bán bạn muốn áp dụng. Tuần 11 bạn sẽ đưa chúng vào "Bộ quy tắc giao dịch cá nhân".</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Bảng tóm tắt ba nhóm công cụ kỹ thuật">
<rect x="10" y="10" width="200" height="200" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="110" y="38" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700">XU HƯỚNG</text>
<text x="110" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">"Đang đi hướng nào?"</text>
<text x="25" y="92" style="fill:var(--text);font-size:12px">• MA20 / MA50 / MA200</text>
<text x="25" y="114" style="fill:var(--text);font-size:12px">• Golden / death cross</text>
<text x="25" y="136" style="fill:var(--text);font-size:12px">• Đường xu hướng</text>
<text x="25" y="158" style="fill:var(--text);font-size:12px">• Hỗ trợ / kháng cự</text>
<text x="25" y="180" style="fill:var(--text);font-size:12px">• Mẫu hình giá</text>
<rect x="220" y="10" width="200" height="200" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
<text x="320" y="38" text-anchor="middle" style="fill:var(--c2);font-size:14px;font-weight:700">ĐỘNG LƯỢNG</text>
<text x="320" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">"Đi nhanh hay chậm lại?"</text>
<text x="235" y="92" style="fill:var(--text);font-size:12px">• RSI(14): 30 / 70</text>
<text x="235" y="114" style="fill:var(--text);font-size:12px">• Phân kỳ âm / dương</text>
<text x="235" y="136" style="fill:var(--text);font-size:12px">• MACD cắt Signal</text>
<text x="235" y="158" style="fill:var(--text);font-size:12px">• Histogram co / giãn</text>
<rect x="430" y="10" width="200" height="200" rx="10" style="fill:var(--card);stroke:var(--c3);stroke-width:2"/>
<text x="530" y="38" text-anchor="middle" style="fill:var(--c3);font-size:14px;font-weight:700">KHỐI LƯỢNG</text>
<text x="530" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">"Bao nhiêu người tham gia?"</text>
<text x="445" y="92" style="fill:var(--text);font-size:12px">• So với TB 20 phiên</text>
<text x="445" y="114" style="fill:var(--text);font-size:12px">• Phá vỡ ≥ 1,5 lần TB</text>
<text x="445" y="136" style="fill:var(--text);font-size:12px">• Giảm dần trong nền</text>
<text x="445" y="158" style="fill:var(--text);font-size:12px">• Giá tăng + KL tăng</text>
</svg><figcaption>Hình: Mỗi quyết định nên có ít nhất một công cụ từ mỗi cột.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ol>
<li>Tính SMA5 của dãy 30, 31, 29, 32, 33. (Đáp án: 31,0.)</li>
<li>Vì sao MA luôn trễ hơn giá? Vì sao golden cross thường đến sau khi giá đã tăng khá nhiều?</li>
<li>RS = 1,5 thì RSI bằng bao nhiêu? (Đáp án: 100 − 100 ÷ 2,5 = 60.)</li>
<li>Giải thích phân kỳ âm bằng một ví dụ số do bạn tự đặt.</li>
<li>Ba thành phần của MACD là gì? Histogram co lại nghĩa là gì?</li>
<li>Vẽ vai-đầu-vai, đánh dấu neckline và tính mục tiêu với đầu 100, neckline 90. (Đáp án: 80.)</li>
<li>Vì sao không nên dùng RSI, MACD và Stochastic cùng lúc như 3 bằng chứng độc lập?</li>
</ol>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist tuần 10:</b></p>
<ul>
<li>☐ Hoàn thành 5 buổi lý thuyết và các bài thực hành.</li>
<li>☐ Có mẫu chỉ báo "Hoc-PTKT" trên TradingView.</li>
<li>☐ Có nhật ký tín hiệu 5 mã và đặt lịch kiểm tra sau 2 tuần.</li>
<li>☐ Đánh dấu hoàn thành "Tuần 9-10: Phân tích kỹ thuật" trong tab Lộ trình.</li>
</ul>
<p><b>Câu hỏi phản tư:</b></p>
<ul>
<li>Sau 2 tuần PTKT, bạn tự tin hơn hay thấy thị trường khó đoán hơn? Cả hai đều bình thường.</li>
<li>Bạn có thấy mình bắt đầu muốn giao dịch nhiều hơn không? Hãy ghi nhận cảm giác này. Tuần 11 sẽ học cách kiểm soát nó bằng quản lý vốn.</li>
<li>Chỉ báo nào bạn thấy dễ hiểu và hữu ích nhất? Chỉ báo nào thấy rối?</li>
</ul>
<p><b>Chuẩn bị tuần 11:</b> Tuần sau là tuần <b>quan trọng nhất</b> của tháng 3: quản lý vốn và rủi ro. Hãy chuẩn bị máy tính (hoặc Excel) để tính toán, và nghĩ trước về số vốn thật bạn dự định dùng từ tháng 4.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Ôn lại phần chưa vững. Gợi ý: nếu còn nhầm RSI và MACD, hãy vẽ tay lại hình phân kỳ và hình MACD, tự đặt số liệu và tính lại.</p>
`,
  quiz: [
    { q: "SMA3 của dãy 12, 15, 18 là bao nhiêu?", options: ["14", "15", "16", "45"], answer: 1, explain: "(12 + 15 + 18) ÷ 3 = 45 ÷ 3 = 15." },
    { q: "RS = 1 thì RSI bằng bao nhiêu?", options: ["0", "30", "50", "100"], answer: 2, explain: "RSI = 100 − 100 ÷ (1 + 1) = 100 − 50 = 50." },
    { q: "Golden cross là gì?", options: ["Giá chạm trần", "MA50 cắt lên MA200", "RSI vượt 70", "MACD cắt xuống 0"], answer: 1, explain: "Golden cross: MA ngắn (MA50) cắt lên MA dài (MA200)." },
    { q: "Histogram MACD giảm dần từ 0,6 về 0,1 trong khi giá vẫn tăng nhẹ. Điều này báo hiệu gì?", options: ["Động lượng tăng mạnh lên", "Động lượng tăng đang yếu dần", "Chắc chắn giá giảm ngay", "Không có ý nghĩa"], answer: 1, explain: "Histogram co lại cho thấy khoảng cách MACD–Signal thu hẹp, động lượng yếu dần." },
    { q: "Hai đỉnh ở 50 và 49,8, đáy giữa ở 45. Giá thủng 45. Mục tiêu tham khảo?", options: ["45", "40", "35", "50"], answer: 1, explain: "Chiều cao = 50 − 45 = 5. Mục tiêu = 45 − 5 = 40." },
    { q: "Trong xu hướng tăng mạnh, RSI ở trên 70 nhiều tuần. Hành động nào hợp lý?", options: ["Bán hết vì quá mua", "Không bán chỉ vì RSI; theo dõi giá, MA và phân kỳ", "Vay margin mua thêm", "Đổi sang RSI 5"], answer: 1, explain: "Quá mua kéo dài là bình thường trong xu hướng mạnh; cần dấu hiệu khác để quyết định." },
    { q: "Điểm mua theo O'Neil cho mẫu cốc tay cầm là gì?", options: ["Đáy cốc", "Khi giá vượt đỉnh tay cầm với khối lượng lớn", "Giữa tay cầm", "Bất kỳ lúc nào"], answer: 1, explain: "O'Neil mua khi giá vượt đỉnh tay cầm kèm khối lượng tăng mạnh." },
    { q: "Khi MA nằm phẳng và giá cắt qua lại liên tục, nên làm gì?", options: ["Giao dịch theo mọi lần cắt", "Bỏ qua tín hiệu MA vì thị trường đi ngang", "Dùng margin", "Đổi MA mỗi ngày"], answer: 1, explain: "Thị trường đi ngang làm tín hiệu MA nhiễu (whipsaw); nên đứng ngoài hoặc dùng công cụ khác." },
    { q: "Nền tích lũy đáng tin thường có đặc điểm gì?", options: ["Biên độ rất rộng, khối lượng tăng dần", "Biên độ hẹp, khối lượng giảm dần trong nền", "Chỉ kéo dài 1 phiên", "Giá luôn ở trần"], answer: 1, explain: "Nền chặt (biên độ hẹp) với khối lượng giảm dần cho thấy lực bán đã cạn." }
  ]
}
);

(window.LESSONS = window.LESSONS || []).push(
{
  id: "w11-1",
  week: 11,
  day: 1,
  title: "Toán học của thua lỗ: vì sao giữ vốn quan trọng hơn chọn mã",
  minutes: 120,
  summary: "Hiểu vì sao lỗ càng sâu càng khó gỡ, cách tính kỳ vọng của một phương pháp và vì sao người thắng ít lần vẫn có lãi.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm 1 cổ phiếu từng "hot" nhưng đang giảm mạnh so với đỉnh (tra trên CafeF: giá cao nhất 52 tuần so với giá hiện tại). Tính xem nó đã giảm bao nhiêu % và cần tăng bao nhiêu % để quay lại đỉnh, áp dụng công thức của bài hôm nay.</div>

<h3>1. Lỗ và lãi không đối xứng</h3>
<p>Nếu bạn lỗ x%, bạn cần lãi <b>x ÷ (100 − x) × 100%</b> mới quay về vốn ban đầu. Lỗ càng sâu, mức lãi cần thiết tăng càng nhanh.</p>
<p><b>Ví dụ:</b> Vốn 100 triệu, lỗ 50% còn 50 triệu. Để từ 50 triệu quay lại 100 triệu, bạn cần lãi thêm 50 triệu, tức 50 ÷ 50 = <b>100%</b>. Lỗ 50% rất dễ xảy ra trong một năm thị trường xấu, nhưng lãi 100% thì rất hiếm.</p>
<table>
<tr><th>Lỗ</th><th>Còn lại (từ 100 triệu)</th><th>Cần lãi để hòa vốn</th></tr>
<tr><td>−10%</td><td>90 triệu</td><td>+11,1%</td></tr>
<tr><td>−20%</td><td>80 triệu</td><td>+25%</td></tr>
<tr><td>−30%</td><td>70 triệu</td><td>+42,9%</td></tr>
<tr><td>−40%</td><td>60 triệu</td><td>+66,7%</td></tr>
<tr><td>−50%</td><td>50 triệu</td><td>+100%</td></tr>
<tr><td>−60%</td><td>40 triệu</td><td>+150%</td></tr>
</table>
<figure class="fig"><svg viewBox="0 0 640 255" role="img" aria-label="Mức lãi cần thiết để hòa vốn theo mức lỗ">
<line x1="30" y1="220" x2="620" y2="220" style="stroke:var(--line)"/>
<rect x="28" y="208" width="30" height="12" style="fill:var(--down)"/><rect x="62" y="206.7" width="30" height="13.3" style="fill:var(--accent)"/>
<rect x="118" y="196" width="30" height="24" style="fill:var(--down)"/><rect x="152" y="190" width="30" height="30" style="fill:var(--accent)"/>
<rect x="208" y="184" width="30" height="36" style="fill:var(--down)"/><rect x="242" y="168.5" width="30" height="51.5" style="fill:var(--accent)"/>
<rect x="298" y="172" width="30" height="48" style="fill:var(--down)"/><rect x="332" y="140" width="30" height="80" style="fill:var(--accent)"/>
<rect x="388" y="160" width="30" height="60" style="fill:var(--down)"/><rect x="422" y="100" width="30" height="120" style="fill:var(--accent)"/>
<rect x="478" y="148" width="30" height="72" style="fill:var(--down)"/><rect x="512" y="40" width="30" height="180" style="fill:var(--accent)"/>
<text x="77" y="200" text-anchor="middle" style="fill:var(--text);font-size:11px">+11%</text>
<text x="167" y="184" text-anchor="middle" style="fill:var(--text);font-size:11px">+25%</text>
<text x="257" y="162" text-anchor="middle" style="fill:var(--text);font-size:11px">+43%</text>
<text x="347" y="134" text-anchor="middle" style="fill:var(--text);font-size:11px">+67%</text>
<text x="437" y="94" text-anchor="middle" style="fill:var(--text);font-size:11px">+100%</text>
<text x="527" y="34" text-anchor="middle" style="fill:var(--text);font-size:11px">+150%</text>
<text x="60" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lỗ 10%</text>
<text x="150" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lỗ 20%</text>
<text x="240" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lỗ 30%</text>
<text x="330" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lỗ 40%</text>
<text x="420" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lỗ 50%</text>
<text x="510" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lỗ 60%</text>
<rect x="30" y="16" width="12" height="12" style="fill:var(--down)"/><text x="48" y="26" style="fill:var(--text);font-size:12px">Mức lỗ</text>
<rect x="110" y="16" width="12" height="12" style="fill:var(--accent)"/><text x="128" y="26" style="fill:var(--text);font-size:12px">Mức lãi cần để hòa vốn</text>
</svg><figcaption>Hình: Cột lỗ (đỏ) tăng đều, nhưng cột lãi cần thiết (xanh) tăng vọt khi lỗ vượt 30%.</figcaption></figure>
<p>Kết luận: <b>cắt lỗ sớm ở 7–8%</b> chỉ cần lãi khoảng 8–9% để gỡ, nhưng để lỗ lên 40–50% thì gần như phải chờ một "phép màu".</p>

<h3>2. Một chuỗi lãi lỗ thực tế</h3>
<p>Phần trăm lãi và lỗ nhân với nhau chứ không cộng.</p>
<p><b>Ví dụ:</b> Vốn 100 triệu. Năm 1 lãi 50% thành 150 triệu. Năm 2 lỗ 50% còn 75 triệu. Trung bình cộng "(+50% − 50%) ÷ 2 = 0%" nghe như hòa vốn, nhưng thực tế bạn mất 25 triệu (−25%). Ngược lại, người kiên trì lãi 12%/năm hai năm liền: 100 × 1,12 × 1,12 = 125,4 triệu.</p>
<figure class="fig"><svg viewBox="0 0 640 160" role="img" aria-label="Chuỗi lãi 50% rồi lỗ 50% dẫn tới mất 25%">
<rect x="10" y="50" width="150" height="60" rx="10" style="fill:var(--card);stroke:var(--muted);stroke-width:2"/>
<text x="85" y="78" text-anchor="middle" style="fill:var(--text);font-size:15px;font-weight:700">100 triệu</text>
<text x="85" y="98" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vốn ban đầu</text>
<text x="200" y="68" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">+50%</text>
<line x1="165" y1="80" x2="228" y2="80" style="stroke:var(--up);stroke-width:2"/><polygon points="228,74 238,80 228,86" style="fill:var(--up)"/>
<rect x="240" y="50" width="150" height="60" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
<text x="315" y="78" text-anchor="middle" style="fill:var(--up);font-size:15px;font-weight:700">150 triệu</text>
<text x="315" y="98" text-anchor="middle" style="fill:var(--muted);font-size:11px">Sau năm 1</text>
<text x="430" y="68" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:700">−50%</text>
<line x1="395" y1="80" x2="458" y2="80" style="stroke:var(--down);stroke-width:2"/><polygon points="458,74 468,80 458,86" style="fill:var(--down)"/>
<rect x="470" y="50" width="160" height="60" rx="10" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
<text x="550" y="78" text-anchor="middle" style="fill:var(--down);font-size:15px;font-weight:700">75 triệu</text>
<text x="550" y="98" text-anchor="middle" style="fill:var(--muted);font-size:11px">Sau năm 2: mất 25%</text>
<text x="320" y="140" text-anchor="middle" style="fill:var(--muted);font-size:12px">+50% rồi −50% không phải hòa vốn</text>
</svg><figcaption>Hình: Biến động mạnh làm hao mòn vốn ngay cả khi mức lãi và lỗ "bằng nhau" về phần trăm.</figcaption></figure>

<h3>3. Kỳ vọng: thắng ít lần vẫn có thể có lãi</h3>
<p>Kỳ vọng mỗi lệnh = (Tỷ lệ thắng × Lãi trung bình) − (Tỷ lệ thua × Lỗ trung bình).</p>
<p><b>Ví dụ:</b> Nhà đầu tư A chỉ thắng 4/10 lệnh (40%), nhưng mỗi lệnh thắng lãi trung bình 15% và mỗi lệnh thua cắt lỗ trung bình 5%.</p>
<ul>
<li>Kỳ vọng = 0,4 × 15% − 0,6 × 5% = 6% − 3% = <b>+3% mỗi lệnh</b>.</li>
</ul>
<p>Nhà đầu tư B thắng 7/10 lệnh (70%) nhưng mỗi lệnh thắng chỉ chốt 4% còn lệnh thua "gồng" đến 15%.</p>
<ul>
<li>Kỳ vọng = 0,7 × 4% − 0,3 × 15% = 2,8% − 4,5% = <b>−1,7% mỗi lệnh</b>.</li>
</ul>
<p>B thắng nhiều lần hơn và cảm thấy mình "giỏi", nhưng về lâu dài lại mất tiền. Điều quyết định là <b>độ lớn</b> của lãi và lỗ, không chỉ số lần thắng.</p>

<h3>4. Sống sót là ưu tiên số một</h3>
<p>Một nhà đầu tư mới cần thời gian để tích lũy kinh nghiệm. Mục tiêu năm đầu không phải lãi thật nhiều, mà là <b>không mất quá nhiều</b> để còn tiếp tục học.</p>
<p><b>Ví dụ:</b> Hai người cùng có 30 triệu. Người C mỗi lệnh lỗ tối đa 1% vốn (300 nghìn), sau 10 lệnh thua liên tiếp vẫn còn khoảng 27,1 triệu (30 × 0,99^10). Người D mỗi lệnh dồn hết vốn và chịu lỗ 10%, sau 5 lệnh thua liên tiếp chỉ còn khoảng 17,7 triệu (30 × 0,9^5), mất 41%. Chuỗi thua 5–10 lệnh liên tiếp không hiếm, kể cả với người có kinh nghiệm.</p>
<div class="warn">⚠ Câu "lỗ chưa bán thì chưa mất" là cái bẫy tâm lý. Giá trị tài khoản của bạn đã giảm, dù bạn có bán hay không. Không bán chỉ khiến bạn mất quyền dùng số tiền còn lại cho cơ hội tốt hơn.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Tự tính lại bảng "lỗ x% cần lãi bao nhiêu %" cho các mức 8%, 15%, 25%, 35%, 70%.</li>
<li>Tìm 3 cổ phiếu trong watchlist, tính % giảm từ đỉnh 52 tuần đến giá hiện tại, và % cần tăng để về lại đỉnh.</li>
<li>Tính kỳ vọng cho 2 trường hợp: (a) thắng 35%, lãi TB 18%, lỗ TB 6%; (b) thắng 60%, lãi TB 5%, lỗ TB 9%.</li>
</ol>
Kết quả mong đợi: (1) 8% → 8,7%; 15% → 17,6%; 25% → 33,3%; 35% → 53,8%; 70% → 233,3%. (3a) = 0,35 × 18 − 0,65 × 6 = 6,3 − 3,9 = +2,4%; (3b) = 0,6 × 5 − 0,4 × 9 = 3 − 3,6 = −0,6%.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Lỗ x% cần lãi x ÷ (100 − x) để hòa vốn; lỗ 50% cần lãi 100%.</li>
<li>Lãi/lỗ phần trăm nhân với nhau, không cộng.</li>
<li>Kỳ vọng = Tỷ lệ thắng × Lãi TB − Tỷ lệ thua × Lỗ TB; thắng ít vẫn có thể lãi.</li>
<li>Năm đầu: ưu tiên sống sót và giữ vốn.</li>
</ul></div>
`,
  quiz: [
    { q: "Lỗ 25% thì cần lãi bao nhiêu % để hòa vốn?", options: ["25%", "30%", "33,3%", "50%"], answer: 2, explain: "25 ÷ (100 − 25) = 25 ÷ 75 = 33,3%." },
    { q: "Vốn 100 triệu, lãi 20% rồi lỗ 20%. Còn bao nhiêu?", options: ["100 triệu", "96 triệu", "104 triệu", "80 triệu"], answer: 1, explain: "100 × 1,2 = 120; 120 × 0,8 = 96 triệu." },
    { q: "Tỷ lệ thắng 50%, lãi TB 10%, lỗ TB 4%. Kỳ vọng mỗi lệnh là?", options: ["+3%", "+6%", "−3%", "+14%"], answer: 0, explain: "0,5 × 10 − 0,5 × 4 = 5 − 2 = +3%." }
  ]
},
{
  id: "w11-2",
  week: 11,
  day: 2,
  title: "Quy tắc 1–2% và cách tính khối lượng mua",
  minutes: 120,
  summary: "Tính số cổ phiếu cần mua dựa trên mức rủi ro chấp nhận, khoảng cách cắt lỗ, lô 100 và giới hạn tỷ trọng.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Chọn 1 mã trong watchlist có tin tức hôm nay. Giả sử muốn mua, hãy xác định ngay điểm cắt lỗ hợp lý (dưới hỗ trợ gần nhất). Bạn sẽ dùng chính con số này trong phần thực hành.</div>

<h3>1. Quy tắc 1–2%: giới hạn rủi ro mỗi lệnh</h3>
<p>Quy tắc: <b>số tiền bạn có thể mất trong một lệnh (nếu chạm cắt lỗ) không vượt quá 1–2% tổng vốn</b>. Lưu ý đây là số tiền <b>mất</b>, không phải số tiền <b>bỏ vào</b> cổ phiếu.</p>
<p><b>Ví dụ:</b> Vốn 50 triệu, chọn mức rủi ro 1%. Số tiền tối đa được mất cho một lệnh là 50 × 1% = 500 nghìn đồng. Bạn có thể bỏ 8 triệu vào cổ phiếu, chỉ cần đặt cắt lỗ sao cho nếu chạm cắt lỗ thì chỉ mất 500 nghìn (khoảng −6,25%).</p>
<p>Người mới nên dùng <b>1%</b>. Với mức này, kể cả thua 10 lệnh liên tiếp, bạn vẫn còn khoảng 90% vốn.</p>

<h3>2. Công thức tính khối lượng</h3>
<p><b>Số cổ phiếu = (Vốn × % rủi ro) ÷ (Giá mua − Giá cắt lỗ)</b></p>
<p>Sau đó <b>làm tròn xuống</b> theo lô 100 (hoặc dùng lô lẻ nếu cần), và kiểm tra tỷ trọng không vượt 20–25% vốn.</p>
<p><b>Ví dụ 1:</b> Vốn 100 triệu, rủi ro 1% = 1.000.000đ. Mua cổ phiếu A ở 25.000đ, cắt lỗ ở 23.000đ (dưới hỗ trợ).</p>
<ul>
<li>Rủi ro mỗi cổ phiếu = 25.000 − 23.000 = 2.000đ.</li>
<li>Số cổ phiếu = 1.000.000 ÷ 2.000 = <b>500 cổ phiếu</b> (đúng bội số 100).</li>
<li>Giá trị mua = 500 × 25.000 = 12.500.000đ = 12,5% vốn, dưới mức 20–25%, đạt.</li>
<li>Nếu chạm cắt lỗ: mất 500 × 2.000 = 1.000.000đ = đúng 1% vốn (chưa tính phí).</li>
</ul>
<p><b>Ví dụ 2:</b> Cùng vốn 100 triệu, mua cổ phiếu B ở 50.000đ, cắt lỗ 46.500đ (−7%).</p>
<ul>
<li>Rủi ro mỗi cổ phiếu = 3.500đ. Số cổ phiếu = 1.000.000 ÷ 3.500 ≈ 285,7.</li>
<li>Làm tròn xuống lô 100: <b>200 cổ phiếu</b> (giá trị 10 triệu, rủi ro thực tế 700 nghìn = 0,7%).</li>
<li>Hoặc mua 200 cổ phiếu lô chẵn + 85 cổ phiếu lô lẻ = 285 cổ phiếu (giá trị 14,25 triệu, rủi ro 997.500đ). Lô lẻ trên HOSE giao dịch cùng giờ, cùng phương thức với lô chẵn, nhưng thanh khoản lô lẻ thường thấp hơn nên đôi khi khớp ở giá kém hơn một chút.</li>
</ul>
<p><b>Ví dụ 3 (khi công thức cho kết quả quá lớn):</b> Mua cổ phiếu C ở 20.000đ, cắt lỗ sát ở 19.400đ (−3%).</p>
<ul>
<li>Rủi ro mỗi cổ phiếu = 600đ. Số cổ phiếu = 1.000.000 ÷ 600 ≈ 1.666.</li>
<li>Giá trị = 1.666 × 20.000 ≈ 33,3 triệu = 33% vốn, <b>vượt giới hạn 25%</b>.</li>
<li>Giảm xuống: 25 triệu ÷ 20.000 = 1.250, làm tròn xuống <b>1.200 cổ phiếu</b> (24 triệu). Rủi ro thực tế = 1.200 × 600 = 720 nghìn.</li>
</ul>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Thang giá: giá mua, cắt lỗ và rủi ro mỗi cổ phiếu">
<line x1="120" y1="30" x2="120" y2="230" style="stroke:var(--line);stroke-width:2"/>
<rect x="120" y="80" width="260" height="80" style="fill:var(--down);fill-opacity:0.15"/>
<line x1="110" y1="80" x2="380" y2="80" style="stroke:var(--accent);stroke-width:2.5"/>
<text x="100" y="84" text-anchor="end" style="fill:var(--accent);font-size:13px;font-weight:700">25.000đ</text>
<text x="390" y="84" style="fill:var(--accent);font-size:13px;font-weight:700">Giá mua</text>
<line x1="110" y1="160" x2="380" y2="160" style="stroke:var(--down);stroke-width:2.5"/>
<text x="100" y="164" text-anchor="end" style="fill:var(--down);font-size:13px;font-weight:700">23.000đ</text>
<text x="390" y="164" style="fill:var(--down);font-size:13px;font-weight:700">Cắt lỗ</text>
<line x1="250" y1="84" x2="250" y2="156" style="stroke:var(--down);stroke-width:1.5;stroke-dasharray:4 3"/>
<text x="258" y="118" style="fill:var(--text);font-size:12px">Rủi ro/CP = 2.000đ</text>
<text x="258" y="134" style="fill:var(--muted);font-size:11px">(−8%)</text>
<rect x="390" y="185" width="240" height="52" rx="8" style="fill:var(--card);stroke:var(--line)"/>
<text x="400" y="205" style="fill:var(--text);font-size:12px">1.000.000đ ÷ 2.000đ = 500 CP</text>
<text x="400" y="225" style="fill:var(--muted);font-size:12px">Giá trị 12,5 triệu (12,5% vốn)</text>
</svg><figcaption>Hình: Khoảng cách giữa giá mua và cắt lỗ quyết định số cổ phiếu được mua. Cắt lỗ càng xa thì mua càng ít.</figcaption></figure>

<h3>3. Tính cả phí và thuế</h3>
<p>Mỗi lần mua và bán đều có phí giao dịch (tùy CTCK, thường 0–0,25%) và khi bán chịu thuế 0,1% giá trị bán. Khi tính rủi ro thật, hãy cộng thêm chi phí này.</p>
<p><b>Ví dụ:</b> Ví dụ 1 ở trên với phí 0,15% mỗi chiều. Phí mua = 12.500.000 × 0,15% = 18.750đ. Khi bán ở cắt lỗ: giá trị bán = 500 × 23.000 = 11.500.000đ; phí bán = 17.250đ; thuế = 11.500đ. Tổng lỗ thật = 1.000.000 + 18.750 + 17.250 + 11.500 = <b>1.047.500đ</b> (khoảng 1,05% vốn). Chênh lệch nhỏ, nhưng nếu giao dịch nhiều thì cộng dồn rất đáng kể.</p>

<h3>4. Vì sao không chỉ "mua 20% vốn mỗi mã"?</h3>
<p>Chia đều tỷ trọng mà không xét khoảng cắt lỗ sẽ khiến rủi ro mỗi lệnh rất khác nhau.</p>
<p><b>Ví dụ:</b> Vốn 100 triệu, mua 20 triệu mỗi mã. Mã X cắt lỗ cách 4%: rủi ro 800 nghìn. Mã Y biến động mạnh, cắt lỗ phải cách 12%: rủi ro 2,4 triệu, gấp 3 lần. Một lệnh thua ở Y bằng 3 lệnh thua ở X. Với công thức 1%, cả hai lệnh đều chỉ mất tối đa 1 triệu: X mua được 25 triệu (giới hạn 25%), Y chỉ mua khoảng 8,3 triệu.</p>
<div class="warn">⚠ Đừng dời điểm cắt lỗ xa hơn để được "mua nhiều hơn". Điểm cắt lỗ phải xuất phát từ biểu đồ (dưới hỗ trợ, tối đa −8%), sau đó mới tính khối lượng, không làm ngược lại.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Tạo bảng tính Excel với các ô: Vốn, % rủi ro, Giá mua, Giá cắt lỗ. Công thức: Số CP = ROUNDDOWN(Vốn × %RR ÷ (Mua − Cắt lỗ) ÷ 100; 0) × 100. Thêm ô "Giá trị", "% vốn", và cảnh báo nếu % vốn &gt; 25%.</li>
<li>Thử với vốn dự kiến của bạn (ví dụ 20 triệu), rủi ro 1%, cho 3 mã trong watchlist với điểm cắt lỗ bạn tự xác định trên biểu đồ.</li>
<li>Ghi kết quả: số cổ phiếu, giá trị, % vốn, số tiền mất nếu chạm cắt lỗ.</li>
</ol>
Kết quả mong đợi: một file Excel "Tính khối lượng" dùng lại được, và 3 kết quả cụ thể. Ví dụ kiểm tra: vốn 20 triệu, 1% = 200 nghìn, mua 30.000 cắt 28.000 → 100 CP, giá trị 3 triệu (15%).</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Rủi ro mỗi lệnh (số tiền mất nếu chạm cắt lỗ) tối đa 1–2% vốn; người mới dùng 1%.</li>
<li>Số CP = (Vốn × %RR) ÷ (Giá mua − Cắt lỗ), làm tròn xuống lô 100.</li>
<li>Kiểm tra tỷ trọng không vượt 20–25% vốn mỗi mã.</li>
<li>Cắt lỗ từ biểu đồ trước, khối lượng tính sau.</li>
</ul></div>
`,
  quiz: [
    { q: "Vốn 40 triệu, rủi ro 1%, mua 20.000đ, cắt lỗ 18.500đ. Số cổ phiếu tối đa (lô 100)?", options: ["200", "266", "300", "400"], answer: 0, explain: "400.000 ÷ 1.500 ≈ 266,7 → làm tròn xuống lô 100 = 200 cổ phiếu." },
    { q: "Quy tắc 1% nghĩa là gì?", options: ["Mỗi lệnh chỉ mua 1% vốn", "Số tiền mất tối đa nếu chạm cắt lỗ là 1% vốn", "Mỗi ngày lãi 1%", "Phí giao dịch 1%"], answer: 1, explain: "1% là số tiền chấp nhận mất khi chạm cắt lỗ, không phải giá trị mua." },
    { q: "Công thức cho ra giá trị mua bằng 35% vốn. Nên làm gì?", options: ["Mua đủ theo công thức", "Giảm xuống còn tối đa 20–25% vốn", "Dời cắt lỗ xa hơn", "Vay margin"], answer: 1, explain: "Giới hạn tỷ trọng 20–25%/mã vẫn phải tuân thủ để tránh tập trung rủi ro." }
  ]
},
{
  id: "w11-3",
  week: 11,
  day: 3,
  title: "Cắt lỗ, chốt lời và tỷ lệ lợi nhuận/rủi ro (R:R)",
  minutes: 120,
  summary: "Các cách đặt cắt lỗ, cách chốt lời từng phần và dời cắt lỗ theo giá, tính R:R và tỷ lệ thắng tối thiểu để hòa vốn.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Mở app CTCK của bạn và tìm xem app có <b>lệnh điều kiện</b> (lệnh dừng lỗ/chốt lời tự động, stop order) không, cách đặt thế nào, phí ra sao. Mỗi CTCK có tên gọi và điều kiện khác nhau; hãy đọc hướng dẫn trên app hoặc hỏi tổng đài.</div>

<h3>1. Ba cách đặt điểm cắt lỗ</h3>
<ul>
<li><b>Theo phần trăm:</b> cố định −7% đến −8% so với giá mua (quy tắc O'Neil). Đơn giản, dễ tuân thủ.</li>
<li><b>Theo hỗ trợ:</b> đặt ngay dưới vùng hỗ trợ gần nhất. Nếu giá thủng hỗ trợ thì lý do mua không còn đúng.</li>
<li><b>Theo đường MA:</b> giá đóng cửa dưới MA20 hoặc MA50 (tùy khung giao dịch).</li>
</ul>
<p>Cách kết hợp tốt: đặt cắt lỗ dưới hỗ trợ, nhưng <b>không xa hơn −8%</b>. Nếu hỗ trợ ở quá xa (ví dụ −15%) thì điểm mua đó không tốt, hãy chờ giá về gần hỗ trợ hơn.</p>
<p><b>Ví dụ:</b> Cổ phiếu A giá 30.000đ, hỗ trợ ở 28.200–28.500đ. Cắt lỗ đặt ở 27.900đ (ngay dưới vùng hỗ trợ), cách giá mua (30.000 − 27.900) ÷ 30.000 = 7%, hợp lệ. Cổ phiếu B giá 30.000đ nhưng hỗ trợ gần nhất ở 25.500đ (−15%). Không mua ở 30.000đ; đặt cảnh báo giá và chờ giá về khoảng 27.000đ mới xem xét.</p>

<h3>2. Nguyên tắc vàng của cắt lỗ</h3>
<ol>
<li><b>Xác định trước khi mua</b>, viết ra giấy hoặc vào nhật ký.</li>
<li><b>Không bao giờ dời cắt lỗ xuống thấp hơn.</b> Chỉ được dời lên (khi giá tăng).</li>
<li><b>Thực hiện ngay</b> khi giá đóng cửa dưới điểm cắt lỗ, không chờ "hồi lên một chút".</li>
</ol>
<p><b>Ví dụ:</b> Bạn mua ở 40.000đ, cắt lỗ 37.000đ. Giá giảm về 37.200đ, bạn nghĩ "dời xuống 35.000đ cho an toàn". Giá tiếp tục giảm về 34.500đ, bạn lại dời xuống 32.000đ. Cuối cùng bán ở 30.000đ: lỗ 25% thay vì 7,5%. Lần dời đầu tiên chính là sai lầm quyết định.</p>

<h3>3. Chốt lời</h3>
<ul>
<li><b>Chốt lời từng phần:</b> bán một phần (ví dụ 1/2) khi đạt mục tiêu đầu tiên, giữ phần còn lại để hưởng nếu xu hướng tiếp tục. O'Neil gợi ý cân nhắc chốt lời khi lãi khoảng 20–25%.</li>
<li><b>Dời cắt lỗ lên theo giá (trailing stop):</b> khi giá tăng, nâng điểm cắt lỗ lên (ví dụ dưới đáy gần nhất, dưới MA20, hoặc về giá vốn).</li>
<li><b>Bán khi có tín hiệu xấu:</b> thủng MA50 với khối lượng lớn, mẫu hình đảo chiều, phân kỳ âm kèm gãy xu hướng.</li>
</ul>
<p><b>Ví dụ:</b> Mua 400 cổ phiếu ở 25.000đ, cắt lỗ 23.200đ. Giá lên 28.000đ (+12%): dời cắt lỗ lên 25.000đ (về giá vốn), từ đây lệnh này không thể lỗ (trừ phí). Giá lên 30.500đ (+22%): bán 200 cổ phiếu, chốt 200 × 5.500 = 1,1 triệu, dời cắt lỗ phần còn lại lên 28.000đ. Giá tiếp tục lên 34.000đ, đáy gần nhất là 31.200đ nên dời cắt lỗ lên 31.000đ. Sau đó giá giảm, thủng 31.000đ: bán 200 cổ phiếu còn lại, lãi thêm 200 × 6.000 = 1,2 triệu. Tổng lãi 2,3 triệu (chưa tính phí), trên vốn 10 triệu là +23%.</p>
<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Dời cắt lỗ theo giá (trailing stop)">
<polyline points="20,180 70,160 110,170 160,130 200,140 250,100 290,112 340,70 380,82 430,45 470,60 520,40 560,75 600,95" style="fill:none;stroke:var(--text);stroke-width:2.5"/>
<polyline points="20,200 160,200 160,170 250,170 250,140 340,140 340,112 430,112 430,82 600,82" style="fill:none;stroke:var(--down);stroke-width:2;stroke-dasharray:6 4"/>
<circle cx="574" cy="82" r="8" style="fill:none;stroke:var(--down);stroke-width:2"/>
<text x="574" y="112" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">Bán tại đây</text>
<text x="20" y="24" style="fill:var(--text);font-size:12px">━ Giá</text>
<text x="80" y="24" style="fill:var(--down);font-size:12px">┅ Điểm cắt lỗ (chỉ được dời LÊN)</text>
<text x="90" y="222" style="fill:var(--muted);font-size:11px">Cắt lỗ ban đầu</text>
</svg><figcaption>Hình: Mỗi khi giá tạo đáy mới cao hơn, điểm cắt lỗ được nâng lên dưới đáy đó. Khi giá thủng điểm cắt lỗ, lệnh kết thúc với phần lãi đã được bảo vệ.</figcaption></figure>

<h3>4. Tỷ lệ lợi nhuận/rủi ro (R:R)</h3>
<p>R (risk) = khoảng cách từ giá mua đến cắt lỗ. R:R = (Mục tiêu − Giá mua) ÷ (Giá mua − Cắt lỗ).</p>
<p><b>Ví dụ:</b> Mua 30.000đ, cắt lỗ 28.000đ (R = 2.000đ), mục tiêu 36.000đ (lợi nhuận tiềm năng 6.000đ). R:R = 6.000 ÷ 2.000 = <b>3:1</b>. Nghĩa là mỗi đồng chấp nhận rủi ro có tiềm năng mang lại 3 đồng.</p>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Vùng lợi nhuận và vùng rủi ro với R:R 3:1">
<rect x="140" y="30" width="300" height="100" style="fill:var(--up);fill-opacity:0.2"/>
<rect x="140" y="130" width="300" height="33.3" style="fill:var(--down);fill-opacity:0.25"/>
<line x1="140" y1="30" x2="440" y2="30" style="stroke:var(--up);stroke-width:2"/>
<line x1="140" y1="130" x2="440" y2="130" style="stroke:var(--accent);stroke-width:2.5"/>
<line x1="140" y1="163.3" x2="440" y2="163.3" style="stroke:var(--down);stroke-width:2"/>
<text x="130" y="34" text-anchor="end" style="fill:var(--up);font-size:12px;font-weight:700">36.000 mục tiêu</text>
<text x="130" y="134" text-anchor="end" style="fill:var(--accent);font-size:12px;font-weight:700">30.000 mua</text>
<text x="130" y="167" text-anchor="end" style="fill:var(--down);font-size:12px;font-weight:700">28.000 cắt lỗ</text>
<text x="290" y="85" text-anchor="middle" style="fill:var(--up);font-size:14px;font-weight:700">Lợi nhuận +6.000 (3R)</text>
<text x="290" y="152" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">Rủi ro −2.000 (1R)</text>
<text x="460" y="85" style="fill:var(--text);font-size:13px">R:R = 3:1</text>
<text x="460" y="105" style="fill:var(--muted);font-size:12px">Chỉ cần thắng 25%</text>
<text x="460" y="121" style="fill:var(--muted);font-size:12px">số lệnh để hòa vốn</text>
</svg><figcaption>Hình: Vùng xanh (lợi nhuận tiềm năng) cao gấp 3 lần vùng đỏ (rủi ro).</figcaption></figure>
<p><b>Tỷ lệ thắng tối thiểu để hòa vốn</b> = 1 ÷ (1 + R:R) (chưa tính phí):</p>
<table>
<tr><th>R:R</th><th>Tỷ lệ thắng cần để hòa vốn</th></tr>
<tr><td>1:1</td><td>50%</td></tr>
<tr><td>2:1</td><td>33,3%</td></tr>
<tr><td>3:1</td><td>25%</td></tr>
</table>
<p><b>Ví dụ:</b> Với R:R 2:1, trong 9 lệnh bạn thắng 3 và thua 6. Mỗi lệnh rủi ro 1 triệu: thắng 3 × 2 triệu = 6 triệu, thua 6 × 1 triệu = 6 triệu, hòa vốn dù chỉ thắng 1/3. Nếu thắng 4/9 thì lãi 8 − 5 = 3 triệu. Gợi ý cho người mới: chỉ vào lệnh khi R:R tối thiểu 2:1.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Với 3 mã trong watchlist, xác định: giá mua dự kiến, cắt lỗ (dưới hỗ trợ, tối đa −8%), mục tiêu (gần kháng cự kế tiếp).</li>
<li>Tính R:R cho từng mã. Mã nào đạt ≥ 2:1?</li>
<li>Viết kế hoạch chốt lời cho 1 mã: bán bao nhiêu ở mục tiêu 1, dời cắt lỗ lên đâu khi giá tăng 10%.</li>
<li>Tìm hiểu cách đặt lệnh điều kiện trên app CTCK của bạn (nếu có).</li>
</ol>
Kết quả mong đợi: bảng 3 mã với Mua/Cắt lỗ/Mục tiêu/R:R và 1 kế hoạch chốt lời cụ thể.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Cắt lỗ dưới hỗ trợ, tối đa −8%; xác định trước khi mua.</li>
<li>Không bao giờ dời cắt lỗ xuống; chỉ dời lên theo giá.</li>
<li>R:R = (Mục tiêu − Mua) ÷ (Mua − Cắt lỗ); ưu tiên ≥ 2:1.</li>
<li>R:R 3:1 chỉ cần thắng 25% số lệnh để hòa vốn.</li>
</ul></div>
`,
  quiz: [
    { q: "Mua 50.000, cắt lỗ 47.000, mục tiêu 59.000. R:R là bao nhiêu?", options: ["2:1", "3:1", "1:3", "4:1"], answer: 1, explain: "(59.000 − 50.000) ÷ (50.000 − 47.000) = 9.000 ÷ 3.000 = 3:1." },
    { q: "Giá về sát điểm cắt lỗ. Hành động nào ĐÚNG nguyên tắc?", options: ["Dời cắt lỗ xuống thêm 5%", "Mua thêm để bình quân", "Thực hiện cắt lỗ khi giá đóng cửa dưới điểm đã định", "Tắt app không xem"], answer: 2, explain: "Không dời cắt lỗ xuống; thực hiện đúng kế hoạch khi giá thủng điểm cắt lỗ." },
    { q: "Với R:R 2:1, cần tỷ lệ thắng tối thiểu bao nhiêu để hòa vốn (chưa tính phí)?", options: ["25%", "33,3%", "50%", "66,7%"], answer: 1, explain: "1 ÷ (1 + 2) = 33,3%." }
  ]
},
{
  id: "w11-4",
  week: 11,
  day: 4,
  title: "Đa dạng hóa: không bỏ tất cả trứng vào một giỏ",
  minutes: 120,
  summary: "Giới hạn tỷ trọng mỗi mã, mỗi ngành; hiểu tương quan giữa các cổ phiếu và số mã hợp lý với vốn nhỏ.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Xem hôm nay ngành nào tăng mạnh nhất và ngành nào giảm mạnh nhất (CafeF/Vietstock có mục theo ngành). Để ý: các cổ phiếu cùng ngành thường tăng giảm cùng nhau. Đây chính là "tương quan" sẽ học hôm nay.</div>

<h3>1. Rủi ro tập trung</h3>
<p>Dồn vốn vào một mã khiến toàn bộ tài khoản phụ thuộc vào một doanh nghiệp. Mọi sự cố bất ngờ (gian lận, mất hợp đồng lớn, lãnh đạo bị điều tra) đều có thể gây thiệt hại nặng.</p>
<p><b>Ví dụ:</b> Vốn 30 triệu. Nếu dồn hết vào 1 mã và mã đó giảm 40% vì tin xấu, tài khoản còn 18 triệu (−40%). Nếu chia đều 5 mã (6 triệu mỗi mã) và chỉ 1 mã giảm 40%, bạn mất 2,4 triệu, tài khoản còn 27,6 triệu (−8%). Cùng một sự cố, thiệt hại chỉ bằng 1/5.</p>

<h3>2. Giới hạn tỷ trọng</h3>
<ul>
<li><b>Mỗi mã:</b> tối đa 20–25% vốn (theo lộ trình của bạn).</li>
<li><b>Mỗi ngành:</b> nên đặt giới hạn, ví dụ không quá 40% vốn vào cùng một ngành.</li>
<li><b>Tiền mặt:</b> giữ 10–20% để có cơ hội khi thị trường giảm.</li>
</ul>
<p><b>Ví dụ:</b> Danh mục 30 triệu (số liệu minh họa) phân bổ theo lộ trình tháng 4–6:</p>
<table>
<tr><th>Khoản mục</th><th>Giá trị</th><th>Tỷ trọng</th></tr>
<tr><td>ETF VN30</td><td>15,0 triệu</td><td>50%</td></tr>
<tr><td>Cổ phiếu A (ngân hàng)</td><td>5,0 triệu</td><td>16,7%</td></tr>
<tr><td>Cổ phiếu B (bán lẻ)</td><td>4,5 triệu</td><td>15%</td></tr>
<tr><td>Cổ phiếu C (công nghệ)</td><td>3,0 triệu</td><td>10%</td></tr>
<tr><td>Tiền mặt</td><td>2,5 triệu</td><td>8,3%</td></tr>
</table>
<p>Không mã riêng lẻ nào vượt 20%, 3 cổ phiếu thuộc 3 ngành khác nhau, và ETF đã chứa sẵn khoảng 30 mã lớn. Tiền mặt 8,3% hơi thấp hơn mức gợi ý 10–20%, có thể giảm bớt cổ phiếu B để tăng tiền mặt.</p>
<figure class="fig"><svg viewBox="0 0 640 210" role="img" aria-label="So sánh danh mục tập trung và đa dạng">
<text x="10" y="40" style="fill:var(--text);font-size:13px;font-weight:700">Tập trung</text>
<rect x="110" y="24" width="500" height="28" rx="4" style="fill:var(--down)"/>
<text x="360" y="43" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">1 mã: 100%</text>
<text x="10" y="100" style="fill:var(--text);font-size:13px;font-weight:700">Đa dạng</text>
<rect x="110" y="84" width="250" height="28" style="fill:var(--accent)"/>
<rect x="360" y="84" width="83.5" height="28" style="fill:var(--c2)"/>
<rect x="443.5" y="84" width="75" height="28" style="fill:var(--c3)"/>
<rect x="518.5" y="84" width="50" height="28" style="fill:var(--up)"/>
<rect x="568.5" y="84" width="41.5" height="28" style="fill:var(--ref)"/>
<text x="235" y="103" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">ETF 50%</text>
<text x="401" y="103" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:700">A 16,7%</text>
<text x="481" y="103" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:700">B 15%</text>
<text x="543" y="103" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:700">C 10%</text>
<text x="589" y="103" text-anchor="middle" style="fill:var(--bg);font-size:10px;font-weight:700">Tiền</text>
<text x="110" y="150" style="fill:var(--muted);font-size:12px">Nếu một cổ phiếu giảm 40%:</text>
<text x="110" y="172" style="fill:var(--down);font-size:13px;font-weight:700">Tập trung: tài khoản −40%</text>
<text x="360" y="172" style="fill:var(--up);font-size:13px;font-weight:700">Đa dạng (mã A): tài khoản ≈ −6,7%</text>
</svg><figcaption>Hình: Cùng một cú giảm 40% ở một mã, danh mục đa dạng chỉ mất khoảng 6,7% (16,7% × 40%).</figcaption></figure>

<h3>3. Tương quan: đa dạng hóa thật hay giả?</h3>
<p>Tương quan cho biết hai cổ phiếu có xu hướng tăng giảm cùng nhau hay không. Mua 5 mã nhưng cùng một ngành vẫn là danh mục tập trung.</p>
<p><b>Ví dụ:</b> Bạn mua 5 cổ phiếu ngân hàng, mỗi mã 20%. Khi có tin chính sách siết tín dụng, cả 5 mã cùng giảm 10–15%, danh mục giảm khoảng 12%. Nếu thay bằng 2 ngân hàng, 1 bán lẻ, 1 công nghệ, 1 tiện ích (điện, nước), tin đó chủ yếu ảnh hưởng 2 mã ngân hàng, các mã khác ít bị tác động. Danh mục có thể chỉ giảm khoảng 5–6%.</p>
<p>Lưu ý: khi thị trường hoảng loạn, gần như mọi cổ phiếu đều giảm cùng lúc (tương quan tăng vọt). Đa dạng hóa giảm rủi ro <b>riêng của từng doanh nghiệp</b>, không loại bỏ được rủi ro <b>của cả thị trường</b>. Để giảm rủi ro thị trường, cách chính là giữ tỷ lệ tiền mặt và không dùng margin.</p>

<h3>4. Bao nhiêu mã là hợp lý?</h3>
<ul>
<li>Vốn nhỏ (dưới 50 triệu): ETF làm nền + 2–3 cổ phiếu tự phân tích là đủ.</li>
<li>Quá nhiều mã (10–20 mã với vốn nhỏ) khiến bạn không theo dõi kịp tin tức, báo cáo của từng doanh nghiệp, và mỗi mã quá nhỏ để có ý nghĩa.</li>
</ul>
<p><b>Ví dụ:</b> Với 20 triệu chia cho 15 mã, mỗi mã khoảng 1,3 triệu. Một mã tăng 30% chỉ mang về khoảng 400 nghìn (2% tài khoản), trong khi bạn phải đọc 15 bộ báo cáo tài chính mỗi quý. Còn với ETF 10 triệu + 3 mã khoảng 2,7 triệu, bạn chỉ cần theo dõi kỹ 3 doanh nghiệp.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Với số vốn dự kiến của bạn, lập bảng phân bổ: ETF, 2–3 cổ phiếu (ghi ngành), tiền mặt. Tính tỷ trọng từng dòng.</li>
<li>Kiểm tra: mã nào &gt; 25%? Ngành nào &gt; 40%? Tiền mặt có trong 10–20% không?</li>
<li>Trên TradingView, mở biểu đồ 2 mã cùng ngành ngân hàng và 1 mã khác ngành, so sánh bằng chức năng "So sánh" (Compare). Mã nào đi cùng nhau?</li>
</ol>
Kết quả mong đợi: bảng phân bổ đạt các giới hạn và 1 nhận xét về tương quan.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Mỗi mã tối đa 20–25% vốn; mỗi ngành nên dưới khoảng 40%.</li>
<li>Nhiều mã cùng ngành không phải đa dạng hóa thật.</li>
<li>Đa dạng hóa giảm rủi ro riêng doanh nghiệp, không loại bỏ rủi ro thị trường.</li>
<li>Vốn nhỏ: ETF + 2–3 mã + tiền mặt là đủ.</li>
</ul></div>
`,
  quiz: [
    { q: "Danh mục 50 triệu, một mã chiếm 10 triệu giảm 30%. Danh mục giảm bao nhiêu %?", options: ["30%", "10%", "6%", "3%"], answer: 2, explain: "Mất 10 × 30% = 3 triệu; 3 ÷ 50 = 6%." },
    { q: "Mua 5 mã ngân hàng, mỗi mã 20%. Nhận xét nào đúng?", options: ["Đã đa dạng hóa tốt", "Vẫn tập trung vào một ngành, tương quan cao", "Không có rủi ro", "Nên mua thêm ngân hàng"], answer: 1, explain: "Các mã cùng ngành thường tăng giảm cùng nhau, nên rủi ro vẫn tập trung." },
    { q: "Đa dạng hóa KHÔNG loại bỏ được rủi ro nào?", options: ["Rủi ro gian lận của 1 doanh nghiệp", "Rủi ro chung của cả thị trường", "Rủi ro mất hợp đồng của 1 công ty", "Rủi ro lãnh đạo 1 công ty"], answer: 1, explain: "Khi cả thị trường giảm, hầu hết cổ phiếu cùng giảm; đa dạng hóa chỉ giảm rủi ro riêng lẻ." }
  ]
},
{
  id: "w11-5",
  week: 11,
  day: 5,
  title: "Margin chi tiết: tỷ lệ ký quỹ, call margin và bán giải chấp",
  minutes: 120,
  summary: "Tự tính tỷ lệ ký quỹ, ngưỡng bị gọi ký quỹ và bị bán giải chấp, chi phí lãi vay; hiểu vì sao lộ trình cấm margin năm đầu.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm số liệu "dư nợ cho vay margin" của các công ty chứng khoán trong tin tức gần đây. Đọc xem báo chí bình luận gì về rủi ro khi dư nợ margin cao. Vào trang web CTCK của bạn, tìm "biểu lãi suất cho vay ký quỹ" và "danh sách chứng khoán ký quỹ".</div>

<h3>1. Margin là gì? Các khái niệm cơ bản</h3>
<ul>
<li><b>Margin (giao dịch ký quỹ):</b> vay tiền CTCK để mua thêm cổ phiếu, dùng chính cổ phiếu đó làm tài sản đảm bảo.</li>
<li><b>Tỷ lệ ký quỹ ban đầu:</b> phần vốn tự có tối thiểu khi mua. Ví dụ 50% nghĩa là bạn góp 50, vay 50 (đòn bẩy 1:1).</li>
<li><b>Tỷ lệ ký quỹ thực tế</b> = (Giá trị tài sản − Nợ vay) ÷ Giá trị tài sản.</li>
<li><b>Tỷ lệ duy trì (ngưỡng call):</b> khi tỷ lệ thực tế giảm xuống dưới mức này, CTCK yêu cầu nộp thêm tiền hoặc bán bớt.</li>
<li><b>Ngưỡng bán giải chấp (force sell):</b> khi tỷ lệ thấp hơn mức này, CTCK tự động bán cổ phiếu của bạn để thu hồi nợ.</li>
</ul>
<p>Các ngưỡng cụ thể khác nhau tùy CTCK và từng mã. Trong bài này dùng <b>số minh họa</b>: ký quỹ ban đầu 50%, ngưỡng call 40%, ngưỡng bán giải chấp 30%.</p>
<p><b>Ví dụ:</b> Bạn có 100 triệu, vay thêm 100 triệu, mua 200 triệu cổ phiếu. Tỷ lệ ký quỹ thực tế = (200 − 100) ÷ 200 = <b>50%</b>. Nếu giá trị cổ phiếu giảm còn 180 triệu: tỷ lệ = (180 − 100) ÷ 180 = 44,4%, vẫn an toàn nhưng tài sản ròng của bạn chỉ còn 80 triệu.</p>

<h3>2. Tính điểm bị gọi ký quỹ và bán giải chấp</h3>
<p>Gọi A là giá trị tài sản, D là nợ vay. Bị call khi (A − D) ÷ A &lt; 40%, tức A &lt; D ÷ 0,6.</p>
<p><b>Ví dụ:</b> Tiếp tục với nợ D = 100 triệu:</p>
<ul>
<li>Ngưỡng call 40%: A = 100 ÷ (1 − 0,4) = 100 ÷ 0,6 ≈ <b>166,7 triệu</b>. Từ 200 triệu giảm xuống 166,7 triệu là giá cổ phiếu giảm chỉ <b>16,7%</b>.</li>
<li>Ngưỡng bán giải chấp 30%: A = 100 ÷ 0,7 ≈ <b>142,9 triệu</b>, tương ứng giá giảm <b>28,6%</b>.</li>
</ul>
<p>Nghĩa là chỉ cần cổ phiếu giảm khoảng 17%, bạn đã bị yêu cầu nộp thêm tiền; giảm khoảng 29% thì bị bán bắt buộc, dù bạn tin rằng giá sẽ hồi.</p>
<table>
<tr><th>Giá CP giảm</th><th>Tài sản</th><th>Nợ</th><th>Tài sản ròng của bạn</th><th>Tỷ lệ ký quỹ</th><th>Trạng thái</th></tr>
<tr><td>0%</td><td>200</td><td>100</td><td>100 (0%)</td><td>50%</td><td>Bình thường</td></tr>
<tr><td>−10%</td><td>180</td><td>100</td><td>80 (−20%)</td><td>44,4%</td><td>Bình thường</td></tr>
<tr><td>−20%</td><td>160</td><td>100</td><td>60 (−40%)</td><td>37,5%</td><td>Bị call</td></tr>
<tr><td>−30%</td><td>140</td><td>100</td><td>40 (−60%)</td><td>28,6%</td><td>Bị bán giải chấp</td></tr>
<tr><td>−50%</td><td>100</td><td>100</td><td>0 (−100%)</td><td>0%</td><td>Mất trắng</td></tr>
</table>
<p>(Đơn vị: triệu đồng, số liệu minh họa, chưa tính lãi vay và phí.)</p>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Tài sản ròng theo mức giảm giá, có và không có margin">
<line x1="60" y1="220" x2="580" y2="220" style="stroke:var(--line)"/>
<line x1="60" y1="40" x2="60" y2="220" style="stroke:var(--line)"/>
<text x="54" y="44" text-anchor="end" style="fill:var(--muted);font-size:11px">100%</text>
<text x="54" y="134" text-anchor="end" style="fill:var(--muted);font-size:11px">50%</text>
<text x="54" y="224" text-anchor="end" style="fill:var(--muted);font-size:11px">0%</text>
<text x="60" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">0%</text>
<text x="160" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">−10%</text>
<text x="260" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">−20%</text>
<text x="360" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">−30%</text>
<text x="460" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">−40%</text>
<text x="560" y="238" text-anchor="middle" style="fill:var(--muted);font-size:11px">−50%</text>
<text x="320" y="254" text-anchor="middle" style="fill:var(--muted);font-size:11px">Mức giảm giá cổ phiếu</text>
<rect x="227" y="40" width="119" height="180" style="fill:var(--ref);fill-opacity:0.12"/>
<rect x="346" y="40" width="234" height="180" style="fill:var(--down);fill-opacity:0.12"/>
<line x1="227" y1="40" x2="227" y2="220" style="stroke:var(--ref);stroke-dasharray:4 3"/>
<line x1="346" y1="40" x2="346" y2="220" style="stroke:var(--down);stroke-dasharray:4 3"/>
<text x="232" y="56" style="fill:var(--ref);font-size:11px;font-weight:700">Bị call (−16,7%)</text>
<text x="351" y="56" style="fill:var(--down);font-size:11px;font-weight:700">Bán giải chấp (−28,6%)</text>
<line x1="60" y1="40" x2="560" y2="130" style="stroke:var(--up);stroke-width:3"/>
<line x1="60" y1="40" x2="560" y2="220" style="stroke:var(--down);stroke-width:3"/>
<text x="440" y="100" style="fill:var(--up);font-size:12px;font-weight:700">Không margin</text>
<text x="420" y="196" style="fill:var(--down);font-size:12px;font-weight:700">Margin 1:1</text>
</svg><figcaption>Hình: Với margin 1:1, tài sản ròng giảm gấp đôi tốc độ giá cổ phiếu. Ở mức giá giảm 30%, người không vay còn 70% vốn, người vay chỉ còn 40% và đã bị bán bắt buộc.</figcaption></figure>

<h3>3. Chi phí lãi vay</h3>
<p>Lãi suất margin tại Việt Nam thường vào khoảng 10–14%/năm (tùy CTCK, tùy thời kỳ). Lãi tính theo ngày trên số dư nợ.</p>
<p><b>Ví dụ:</b> Vay 100 triệu, lãi 12%/năm. Lãi mỗi tháng ≈ 100 × 12% ÷ 12 = <b>1 triệu đồng</b>. Giữ 3 tháng mất 3 triệu, tức 3% vốn tự có 100 triệu. Nếu cổ phiếu đi ngang 3 tháng, người không vay hòa vốn, người vay đã lỗ 3%. Để hòa vốn, danh mục 200 triệu phải tăng 1,5% chỉ để trả lãi.</p>

<h3>4. Vòng xoáy bán giải chấp</h3>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Vòng xoáy giá giảm, call margin, bán giải chấp">
<rect x="230" y="10" width="180" height="46" rx="10" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
<text x="320" y="38" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Giá cổ phiếu giảm</text>
<rect x="440" y="92" width="190" height="46" rx="10" style="fill:var(--card);stroke:var(--ref);stroke-width:2"/>
<text x="535" y="120" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Tỷ lệ ký quỹ giảm</text>
<rect x="230" y="174" width="180" height="46" rx="10" style="fill:var(--card);stroke:var(--ref);stroke-width:2"/>
<text x="320" y="202" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Bị call, không kịp nộp</text>
<rect x="10" y="92" width="190" height="46" rx="10" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
<text x="105" y="114" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Bán giải chấp</text>
<text x="105" y="130" text-anchor="middle" style="fill:var(--muted);font-size:11px">hàng loạt tài khoản</text>
<path d="M410,40 Q500,45 520,88" style="fill:none;stroke:var(--muted);stroke-width:2"/><polygon points="514,84 522,94 526,82" style="fill:var(--muted)"/>
<path d="M520,142 Q500,190 414,196" style="fill:none;stroke:var(--muted);stroke-width:2"/><polygon points="418,190 408,197 418,203" style="fill:var(--muted)"/>
<path d="M226,196 Q130,190 112,142" style="fill:none;stroke:var(--muted);stroke-width:2"/><polygon points="106,146 111,136 118,145" style="fill:var(--muted)"/>
<path d="M112,88 Q130,45 226,36" style="fill:none;stroke:var(--muted);stroke-width:2"/><polygon points="222,30 232,36 222,42" style="fill:var(--muted)"/>
<text x="320" y="122" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">Vòng lặp tự khuếch đại</text>
</svg><figcaption>Hình: Lệnh bán giải chấp hàng loạt đẩy giá giảm thêm, khiến thêm nhiều tài khoản khác bị call.</figcaption></figure>
<p><b>Ví dụ:</b> Trong những đợt thị trường giảm mạnh, nhiều cổ phiếu giảm sàn nhiều phiên liên tiếp và trắng bên mua. Người dùng margin bị call nhưng <b>không bán được</b> vì không có ai mua. Khi lệnh bán giải chấp cuối cùng khớp, giá đã thấp hơn rất nhiều so với ngưỡng call. Với biên độ HOSE ±7%, 4 phiên giảm sàn liên tiếp tương đương giá còn 0,93^4 ≈ 74,8%, tức giảm khoảng 25%, vượt ngưỡng call 16,7% và gần ngưỡng giải chấp 28,6% trong 4 ngày.</p>
<div class="warn">⚠ Đây là lý do lộ trình của bạn quy định <b>không dùng margin trong năm đầu</b>. Khi chưa có kinh nghiệm cắt lỗ và quản lý cảm xúc, margin biến một sai lầm bình thường thành thảm họa không thể gỡ.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Tìm trên website CTCK của bạn: lãi suất margin, tỷ lệ ký quỹ ban đầu, tỷ lệ duy trì (call), tỷ lệ xử lý (force sell). Ghi lại. Nếu không tìm thấy, ghi "cần hỏi tổng đài".</li>
<li>Với các con số đó, tính: vốn 50 triệu, vay tối đa theo tỷ lệ ban đầu. Cổ phiếu giảm bao nhiêu % thì bị call? Giảm bao nhiêu % thì bị bán giải chấp?</li>
<li>Tính chi phí lãi nếu giữ khoản vay đó 6 tháng.</li>
</ol>
Kết quả mong đợi (với số minh họa 50%/40%/30%, lãi 12%): vay 50 triệu, tổng 100 triệu; call khi tài sản &lt; 83,3 triệu (giảm 16,7%); giải chấp khi &lt; 71,4 triệu (giảm 28,6%); lãi 6 tháng = 3 triệu (6% vốn tự có).</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Tỷ lệ ký quỹ thực tế = (Tài sản − Nợ) ÷ Tài sản.</li>
<li>Với margin 1:1, giá giảm khoảng 17% đã có thể bị call, khoảng 29% bị bán giải chấp (số minh họa).</li>
<li>Lãi margin khoảng 1%/tháng trên số tiền vay, tốn tiền ngay cả khi giá đi ngang.</li>
<li>Không dùng margin trong năm đầu.</li>
</ul></div>
`,
  quiz: [
    { q: "Tài sản 150 triệu, nợ vay 90 triệu. Tỷ lệ ký quỹ thực tế là bao nhiêu?", options: ["60%", "40%", "37,5%", "66,7%"], answer: 1, explain: "(150 − 90) ÷ 150 = 60 ÷ 150 = 40%." },
    { q: "Vốn 100 triệu, vay 100 triệu. Giá cổ phiếu giảm 20%. Tài sản ròng của bạn giảm bao nhiêu %?", options: ["20%", "30%", "40%", "60%"], answer: 2, explain: "Tài sản 160, nợ 100, còn 60 triệu: giảm 40%." },
    { q: "Vay 60 triệu với lãi 12%/năm. Chi phí lãi khoảng bao nhiêu mỗi tháng?", options: ["60 nghìn", "600 nghìn", "6 triệu", "7,2 triệu"], answer: 1, explain: "60 × 12% ÷ 12 = 0,6 triệu = 600 nghìn đồng/tháng." }
  ]
},
{
  id: "w11-6",
  week: 11,
  day: 6,
  title: "Viết Bộ quy tắc giao dịch cá nhân",
  minutes: 240,
  summary: "Soạn hoàn chỉnh bộ quy tắc giao dịch của riêng bạn: vốn, điều kiện mua, khối lượng, cắt lỗ, chốt lời, điều cấm và quy trình.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p><b>Mục tiêu:</b> Có một văn bản "Bộ quy tắc giao dịch" 1–2 trang, viết bằng lời của bạn, dùng cho giai đoạn giả lập (tuần 12) và đầu tư thật (tháng 4–6). Khi cảm xúc lên cao, bạn sẽ không tin vào phán đoán của mình lúc đó, mà tin vào văn bản này.</p>
<p><b>Ví dụ:</b> Một phi công dù bay hàng nghìn giờ vẫn đọc checklist trước mỗi lần cất cánh. Không phải vì họ không nhớ, mà vì dưới áp lực ai cũng có thể quên một bước. Bộ quy tắc giao dịch là checklist của nhà đầu tư.</p>

<p><b>Bước 1: Điền mẫu (90 phút)</b></p>
<p>Sao chép mẫu sau vào tab Ghi chú và điền. Phần trong ngoặc là ví dụ, hãy sửa cho phù hợp với bạn.</p>
<table>
<tr><th>Mục</th><th>Quy tắc của tôi</th></tr>
<tr><td>1. Vốn</td><td>Vốn đầu tư: (20 triệu). Quỹ dự phòng riêng: (60 triệu, không đụng tới). Không dùng margin trong 12 tháng đầu.</td></tr>
<tr><td>2. Phân bổ</td><td>ETF VN30: (50–60%). Cổ phiếu tự phân tích: (30–40%, tối đa 3 mã). Tiền mặt: (10–20%).</td></tr>
<tr><td>3. Giới hạn</td><td>Mỗi mã ≤ (20%) vốn. Mỗi ngành ≤ (40%). Rủi ro mỗi lệnh ≤ (1%) vốn.</td></tr>
<tr><td>4. Điều kiện mua (cơ bản)</td><td>Đã viết phân tích 1 trang: kiếm tiền thế nào, tăng trưởng, đắt hay rẻ. Lợi nhuận tăng trưởng (≥ 15%/năm). Nợ/vốn chủ hợp lý so với ngành.</td></tr>
<tr><td>5. Điều kiện mua (kỹ thuật)</td><td>Giá &gt; MA50 &gt; MA200. Điểm vào gần hỗ trợ/MA hoặc vượt nền có khối lượng ≥ 1,5 lần TB. R:R ≥ 2:1.</td></tr>
<tr><td>6. Khối lượng</td><td>Tính bằng công thức (Vốn × 1%) ÷ (Mua − Cắt lỗ), làm tròn xuống lô 100, kiểm tra ≤ 20% vốn.</td></tr>
<tr><td>7. Cắt lỗ</td><td>Đặt trước khi mua: dưới hỗ trợ, tối đa −8%. Không bao giờ dời xuống. Bán khi giá đóng cửa dưới điểm cắt lỗ.</td></tr>
<tr><td>8. Chốt lời</td><td>Lãi +10%: dời cắt lỗ về giá vốn. Lãi +20–25%: bán 1/2. Phần còn lại: dời cắt lỗ dưới đáy gần nhất/MA20.</td></tr>
<tr><td>9. Điều cấm</td><td>Không mua theo "phím hàng". Không bình quân giá xuống. Không mua mã chưa phân tích. Không mua đuổi khi giá đã cách điểm mua &gt; 5%. Không giao dịch khi đang buồn bực, say rượu, thiếu ngủ.</td></tr>
<tr><td>10. Chuỗi thua</td><td>Thua 3 lệnh liên tiếp: dừng mua mới 1 tuần, xem lại nhật ký. Tài khoản giảm 10% từ đỉnh: giảm một nửa quy mô lệnh.</td></tr>
<tr><td>11. Quy trình</td><td>Phân tích và đặt kế hoạch buổi tối. Đặt lệnh sáng hôm sau. Không đổi kế hoạch trong giờ giao dịch. Tổng kết mỗi Chủ nhật.</td></tr>
<tr><td>12. Mua định kỳ</td><td>Ngày (5) hằng tháng mua ETF (2 triệu), bất kể thị trường lên hay xuống.</td></tr>
</table>

<p><b>Bước 2: Vẽ quy trình trước khi đặt lệnh (20 phút)</b></p>
<figure class="fig"><svg viewBox="0 0 640 300" role="img" aria-label="Sơ đồ kiểm tra trước khi đặt lệnh mua">
<rect x="20" y="10" width="290" height="40" rx="8" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="165" y="35" text-anchor="middle" style="fill:var(--text);font-size:12px">① Đã có bài phân tích cơ bản?</text>
<rect x="20" y="75" width="290" height="40" rx="8" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="165" y="100" text-anchor="middle" style="fill:var(--text);font-size:12px">② Giá &gt; MA50 &gt; MA200?</text>
<rect x="20" y="140" width="290" height="40" rx="8" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="165" y="165" text-anchor="middle" style="fill:var(--text);font-size:12px">③ Có cắt lỗ ≤ 8% và R:R ≥ 2:1?</text>
<rect x="20" y="205" width="290" height="40" rx="8" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="165" y="230" text-anchor="middle" style="fill:var(--text);font-size:12px">④ Đã tính khối lượng (≤ 1% rủi ro)?</text>
<rect x="20" y="262" width="290" height="34" rx="8" style="fill:var(--up)"/>
<text x="165" y="284" text-anchor="middle" style="fill:var(--bg);font-size:13px;font-weight:700">Đặt lệnh + ghi nhật ký</text>
<line x1="165" y1="50" x2="165" y2="73" style="stroke:var(--up);stroke-width:2"/>
<line x1="165" y1="115" x2="165" y2="138" style="stroke:var(--up);stroke-width:2"/>
<line x1="165" y1="180" x2="165" y2="203" style="stroke:var(--up);stroke-width:2"/>
<line x1="165" y1="245" x2="165" y2="260" style="stroke:var(--up);stroke-width:2"/>
<text x="172" y="66" style="fill:var(--up);font-size:11px">Có</text>
<text x="172" y="131" style="fill:var(--up);font-size:11px">Có</text>
<text x="172" y="196" style="fill:var(--up);font-size:11px">Có</text>
<line x1="310" y1="30" x2="430" y2="30" style="stroke:var(--down);stroke-width:1.5"/>
<line x1="310" y1="95" x2="430" y2="95" style="stroke:var(--down);stroke-width:1.5"/>
<line x1="310" y1="160" x2="430" y2="160" style="stroke:var(--down);stroke-width:1.5"/>
<line x1="310" y1="225" x2="430" y2="225" style="stroke:var(--down);stroke-width:1.5"/>
<line x1="430" y1="30" x2="430" y2="225" style="stroke:var(--down);stroke-width:1.5"/>
<text x="370" y="24" text-anchor="middle" style="fill:var(--down);font-size:11px">Không</text>
<rect x="450" y="105" width="175" height="60" rx="8" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
<text x="537" y="130" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:700">KHÔNG MUA</text>
<text x="537" y="150" text-anchor="middle" style="fill:var(--muted);font-size:11px">Ghi lý do, chờ cơ hội khác</text>
<line x1="430" y1="135" x2="448" y2="135" style="stroke:var(--down);stroke-width:1.5"/>
</svg><figcaption>Hình: Chỉ khi trả lời "Có" cho cả 4 câu mới được đặt lệnh. Một câu "Không" là đủ để không mua.</figcaption></figure>

<p><b>Bước 3: Thử bộ quy tắc với 3 tình huống (30 phút)</b></p>
<p><b>Ví dụ:</b> Áp dụng sơ đồ trên cho 3 tình huống giả định và ghi kết quả:</p>
<ol>
<li>Bạn bè gửi tin "mã XYZ sắp có tin lớn, mua ngay". Bạn chưa phân tích XYZ. → Câu ① "Không" → <b>không mua</b>.</li>
<li>Mã A đạt PTCB, giá &gt; MA50 &gt; MA200, nhưng hỗ trợ gần nhất cách 12%. → Câu ③ "Không" (cắt lỗ &gt; 8%) → chờ giá về gần hỗ trợ.</li>
<li>Mã B đạt cả 4 câu: mua 30.000, cắt lỗ 28.000, mục tiêu 35.000 (R:R 2,5:1), vốn 20 triệu → 100 CP (rủi ro 200 nghìn = 1%). → <b>Đặt lệnh</b> và ghi nhật ký.</li>
</ol>

<p><b>Bước 4: Cam kết (10 phút)</b></p>
<p>In bộ quy tắc ra, ký tên và ngày, dán ở nơi bạn hay ngồi giao dịch. Nghe có vẻ trẻ con, nhưng việc cam kết bằng văn bản giúp tăng khả năng tuân thủ rõ rệt.</p>

<p><b>Tiêu chí tự đánh giá:</b></p>
<ul>
<li>☐ Đủ 12 mục, mỗi mục có con số cụ thể (không ghi chung chung kiểu "cắt lỗ hợp lý").</li>
<li>☐ Có sơ đồ kiểm tra trước khi đặt lệnh.</li>
<li>☐ Đã thử với ít nhất 3 tình huống.</li>
<li>☐ Có ít nhất 1 quy tắc về cảm xúc/chuỗi thua.</li>
</ul>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp "Làm giàu từ chứng khoán", tập trung vào các phần về sai lầm phổ biến của nhà đầu tư và cách bán cổ phiếu.</p>
<p><b>Ý cần chú ý:</b> O'Neil liệt kê nhiều sai lầm phổ biến, như không cắt lỗ, bình quân giá xuống, mua cổ phiếu giá thấp vì nghĩ là "rẻ", mua theo tin đồn. Đối chiếu với "5 điều cần tránh" trong lộ trình của bạn.</p>
<p><b>Câu hỏi tự trả lời:</b></p>
<ol>
<li>Trong danh sách sai lầm của O'Neil, bạn từng mắc (hoặc có xu hướng mắc) sai lầm nào?</li>
<li>Bổ sung 1–2 quy tắc vào bộ quy tắc của bạn từ những gì vừa đọc.</li>
</ol>
`,
  quiz: [
    { q: "Bạn nhận tin 'phím hàng' về một mã chưa phân tích. Theo sơ đồ kiểm tra, nên làm gì?", options: ["Mua một ít thử", "Không mua vì chưa có bài phân tích", "Mua bằng margin", "Mua rồi phân tích sau"], answer: 1, explain: "Câu hỏi ① 'Đã có bài phân tích?' trả lời Không, nên không mua." },
    { q: "Vì sao quy tắc cần có con số cụ thể?", options: ["Để trông chuyên nghiệp", "Để không thể tự biện minh khi cảm xúc lên cao", "Vì CTCK yêu cầu", "Không cần thiết"], answer: 1, explain: "Quy tắc mơ hồ ('cắt lỗ hợp lý') dễ bị bẻ cong; con số cụ thể buộc bạn tuân thủ." }
  ]
},
{
  id: "w11-7",
  week: 11,
  day: 7,
  title: "Ôn tập tuần 11: quản lý vốn và rủi ro",
  minutes: 240,
  summary: "Hệ thống toán học thua lỗ, khối lượng vị thế, cắt lỗ, R:R, đa dạng hóa, margin; kiểm tra bằng bài tập tổng hợp.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp khoảng 50–80 trang "Làm giàu từ chứng khoán", hoặc đọc lại các phần về cắt lỗ nếu đã đọc hết. Tìm lập luận của O'Neil về việc vì sao cắt lỗ nhỏ giống như "mua bảo hiểm".</p>
<p><b>Ví dụ:</b> Bảo hiểm xe máy tốn vài trăm nghìn mỗi năm và đa số năm bạn "mất" khoản đó mà không dùng đến. Nhưng năm nào bị tai nạn thì nó cứu bạn khỏi khoản chi hàng chục triệu. Cắt lỗ 7% cũng vậy: nhiều lần bạn cắt lỗ rồi giá hồi lại (cảm thấy "phí"), nhưng chỉ cần một lần nó cứu bạn khỏi cú giảm 50% là đã xứng đáng.</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Bốn lớp bảo vệ vốn">
<rect x="20" y="20" width="600" height="46" rx="8" style="fill:var(--accent);fill-opacity:0.85"/>
<text x="320" y="49" text-anchor="middle" style="fill:var(--bg);font-size:14px;font-weight:700">Lớp 1: Không margin · Giữ quỹ dự phòng riêng</text>
<rect x="60" y="76" width="520" height="46" rx="8" style="fill:var(--c2);fill-opacity:0.85"/>
<text x="320" y="105" text-anchor="middle" style="fill:var(--bg);font-size:14px;font-weight:700">Lớp 2: Đa dạng hóa · ≤ 20–25%/mã · ETF làm nền</text>
<rect x="100" y="132" width="440" height="46" rx="8" style="fill:var(--c3);fill-opacity:0.85"/>
<text x="320" y="161" text-anchor="middle" style="fill:var(--bg);font-size:14px;font-weight:700">Lớp 3: Rủi ro mỗi lệnh ≤ 1% vốn</text>
<rect x="140" y="188" width="360" height="46" rx="8" style="fill:var(--down);fill-opacity:0.85"/>
<text x="320" y="217" text-anchor="middle" style="fill:var(--bg);font-size:14px;font-weight:700">Lớp 4: Cắt lỗ ≤ 8%, đặt trước</text>
</svg><figcaption>Hình: Bốn lớp bảo vệ vốn. Lớp ngoài cùng bảo vệ khỏi thảm họa, lớp trong cùng bảo vệ từng lệnh.</figcaption></figure>
<p><b>Bài tập tổng hợp (tự giải, đáp án ở cuối):</b></p>
<p><b>Ví dụ:</b> Vốn 60 triệu, rủi ro 1%. Mua cổ phiếu X ở 36.000đ. Hỗ trợ ở 33.600–34.000đ, kháng cự kế tiếp 43.000đ.</p>
<ol>
<li>Đặt cắt lỗ ở đâu? Cách giá mua bao nhiêu %?</li>
<li>Tính số cổ phiếu (lô 100). Giá trị là bao nhiêu % vốn?</li>
<li>R:R là bao nhiêu? Có đạt ≥ 2:1 không?</li>
<li>Nếu chạm cắt lỗ, mất bao nhiêu (chưa tính phí)? Cần lãi bao nhiêu % trên tổng vốn để gỡ?</li>
</ol>
<p><b>Đáp án gợi ý:</b> (1) Cắt lỗ 33.500đ, ngay dưới hỗ trợ, cách (36.000 − 33.500) ÷ 36.000 ≈ 6,9%. (2) Rủi ro 600.000 ÷ 2.500 = 240 → 200 CP; giá trị 7,2 triệu = 12% vốn. (3) (43.000 − 36.000) ÷ 2.500 = 2,8:1, đạt. (4) Mất 200 × 2.500 = 500.000đ ≈ 0,83% vốn; cần lãi khoảng 0,84% để gỡ, rất dễ.</p>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ol>
<li>Vì sao lỗ 50% cần lãi 100%?</li>
<li>Kỳ vọng là gì? Vì sao thắng 70% số lệnh vẫn có thể lỗ?</li>
<li>Khác nhau giữa "rủi ro 1% vốn" và "mua 1% vốn"?</li>
<li>Ba nguyên tắc vàng của cắt lỗ là gì?</li>
<li>Với margin 1:1, giá giảm 25% thì tài sản ròng giảm bao nhiêu %? (Đáp án: 50%.)</li>
</ol>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist tuần 11:</b></p>
<ul>
<li>☐ Hoàn thành 5 buổi lý thuyết và bài thực hành.</li>
<li>☐ Có file Excel tính khối lượng.</li>
<li>☐ Có Bộ quy tắc giao dịch đủ 12 mục, đã ký cam kết.</li>
<li>☐ Đã tra cứu thông tin margin của CTCK (để biết, không phải để dùng).</li>
<li>☐ Đánh dấu "Tuần 11: Quản lý vốn" trong tab Lộ trình.</li>
</ul>
<p><b>Câu hỏi phản tư:</b></p>
<ul>
<li>Quy tắc nào trong bộ quy tắc bạn nghĩ mình khó tuân thủ nhất? Vì sao?</li>
<li>Trước đây bạn nghĩ đầu tư thành công là "chọn đúng mã". Bây giờ bạn nghĩ gì?</li>
</ul>
<p><b>Chuẩn bị tuần 12:</b> Tuần sau bắt đầu giao dịch giả lập với số vốn bằng đúng số vốn thật dự kiến. Hãy chuẩn bị file nhật ký (Excel hoặc tab Ghi chú) và chọn 3–5 mã sẽ theo dõi.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Làm lại các bài tính toán bạn đã sai trong tuần. Nếu đã vững, hãy thử tự đặt thêm 2 bài tập tính khối lượng với số liệu từ watchlist thật.</p>
`,
  quiz: [
    { q: "Lỗ 40% thì cần lãi bao nhiêu % để hòa vốn?", options: ["40%", "50%", "66,7%", "80%"], answer: 2, explain: "40 ÷ 60 = 66,7%." },
    { q: "Vốn 80 triệu, rủi ro 1%, mua 40.000, cắt lỗ 37.000. Số cổ phiếu (lô 100)?", options: ["200", "266", "300", "400"], answer: 0, explain: "800.000 ÷ 3.000 ≈ 266,7 → làm tròn xuống 200 cổ phiếu." },
    { q: "Thắng 40%, lãi TB 12%, lỗ TB 6%. Kỳ vọng mỗi lệnh?", options: ["+1,2%", "+4,8%", "−1,2%", "+6%"], answer: 0, explain: "0,4 × 12 − 0,6 × 6 = 4,8 − 3,6 = +1,2%." },
    { q: "Mua 20.000, cắt lỗ 18.800, mục tiêu 23.600. R:R?", options: ["2:1", "3:1", "1:3", "4:1"], answer: 1, explain: "3.600 ÷ 1.200 = 3:1." },
    { q: "Hành động nào vi phạm nguyên tắc cắt lỗ?", options: ["Dời cắt lỗ lên khi giá tăng", "Dời cắt lỗ xuống khi giá tiến gần", "Đặt cắt lỗ trước khi mua", "Bán khi giá đóng cửa dưới cắt lỗ"], answer: 1, explain: "Không bao giờ dời cắt lỗ xuống." },
    { q: "Tài sản 120 triệu, nợ 80 triệu. Tỷ lệ ký quỹ thực tế?", options: ["33,3%", "40%", "66,7%", "50%"], answer: 0, explain: "(120 − 80) ÷ 120 = 33,3%." },
    { q: "Danh mục 5 mã cùng ngành thép. Nhận xét?", options: ["Đa dạng tốt", "Tập trung ngành, tương quan cao", "Không rủi ro", "Nên vay thêm"], answer: 1, explain: "Cùng ngành thường biến động cùng nhau nên rủi ro vẫn tập trung." },
    { q: "Lãi margin 12%/năm trên khoản vay 50 triệu, giữ 4 tháng. Chi phí khoảng?", options: ["500 nghìn", "2 triệu", "6 triệu", "4 triệu"], answer: 1, explain: "50 × 12% ÷ 12 × 4 = 2 triệu đồng." },
    { q: "Thua 3 lệnh liên tiếp, theo bộ quy tắc mẫu nên làm gì?", options: ["Tăng gấp đôi khối lượng để gỡ", "Dừng mua mới 1 tuần và xem lại nhật ký", "Dùng margin", "Mua mã được phím"], answer: 1, explain: "Dừng lại để tránh giao dịch trả thù và tìm nguyên nhân thua." }
  ]
}
);

(window.LESSONS = window.LESSONS || []).push(
{
  id: "w12-1",
  week: 12,
  day: 1,
  title: "Giao dịch giả lập đúng cách",
  minutes: 120,
  summary: "Thiết lập giao dịch giả lập sát thực tế: vốn bằng vốn thật dự kiến, quy tắc khớp lệnh, phí, thuế, T+2 và lô 100.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Từ hôm nay, mỗi lần đọc tin hãy tự hỏi: "Tin này có thay đổi kế hoạch của mình với mã nào trong danh mục giả lập không?". Nếu không, đừng để nó làm bạn muốn giao dịch.</div>

<h3>1. Vì sao cần giả lập?</h3>
<p>Giao dịch giả lập (paper trading) là thực hiện toàn bộ quy trình như thật (phân tích, đặt lệnh, theo dõi, cắt lỗ, chốt lời, ghi chép) nhưng không dùng tiền thật. Mục đích không phải để kiếm "lãi ảo", mà để kiểm tra xem bạn <b>có tuân thủ được bộ quy tắc</b> hay không.</p>
<p><b>Ví dụ:</b> Giống như học lái xe trong sân tập trước khi ra đường. Sân tập không có xe khác, không có áp lực thật, nhưng giúp bạn quen thao tác. Nếu ở sân tập bạn còn quên xi-nhan thì ra đường chắc chắn sẽ quên. Tương tự, nếu giả lập mà bạn còn "dời cắt lỗ" thì với tiền thật bạn sẽ còn dời nhiều hơn.</p>

<h3>2. Các quy tắc để giả lập sát thực tế</h3>
<table>
<tr><th>Yếu tố</th><th>Quy tắc giả lập</th></tr>
<tr><td>Vốn</td><td>Bằng đúng số vốn thật dự kiến (ví dụ 20 triệu), không phải 1 tỷ "cho vui".</td></tr>
<tr><td>Lô</td><td>Mua theo lô 100 cổ phiếu (hoặc lô lẻ nếu thật sự định dùng).</td></tr>
<tr><td>Lệnh LO mua</td><td>Chỉ coi là khớp nếu giá thấp nhất phiên ≤ giá đặt. Nếu chỉ chạm đúng giá đặt, tính là có thể chưa khớp hết (thận trọng: coi như không khớp).</td></tr>
<tr><td>Lệnh LO bán</td><td>Chỉ khớp nếu giá cao nhất phiên ≥ giá đặt.</td></tr>
<tr><td>Lệnh ATO / ATC</td><td>Khớp ở giá mở cửa / giá đóng cửa.</td></tr>
<tr><td>Phí</td><td>Tính 0,15% mỗi chiều mua và bán (hoặc đúng mức phí CTCK của bạn).</td></tr>
<tr><td>Thuế</td><td>0,1% giá trị bán.</td></tr>
<tr><td>T+2</td><td>Mua phiên T thì sớm nhất bán được từ phiên chiều T+2.</td></tr>
<tr><td>Thời điểm</td><td>Ghi lệnh <b>trước</b> phiên giao dịch (buổi tối), không ghi sau khi đã biết kết quả.</td></tr>
</table>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Điều kiện khớp của lệnh LO mua trong giả lập">
<text x="160" y="22" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">KHỚP: giá thấp nhất ≤ giá đặt</text>
<text x="480" y="22" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:700">KHÔNG KHỚP: giá thấp nhất &gt; giá đặt</text>
<line x1="320" y1="30" x2="320" y2="215" style="stroke:var(--line)"/>
<line x1="160" y1="50" x2="160" y2="190" style="stroke:var(--up);stroke-width:2"/>
<rect x="140" y="70" width="40" height="70" style="fill:var(--up)"/>
<line x1="40" y1="165" x2="290" y2="165" style="stroke:var(--accent);stroke-width:2;stroke-dasharray:6 4"/>
<text x="40" y="158" style="fill:var(--accent);font-size:12px">Giá đặt mua 28,0</text>
<text x="168" y="204" style="fill:var(--muted);font-size:11px">Thấp nhất 27,6</text>
<line x1="480" y1="50" x2="480" y2="140" style="stroke:var(--up);stroke-width:2"/>
<rect x="460" y="70" width="40" height="55" style="fill:var(--up)"/>
<line x1="360" y1="165" x2="610" y2="165" style="stroke:var(--accent);stroke-width:2;stroke-dasharray:6 4"/>
<text x="360" y="158" style="fill:var(--accent);font-size:12px">Giá đặt mua 28,0</text>
<text x="488" y="152" style="fill:var(--muted);font-size:11px">Thấp nhất 28,4</text>
</svg><figcaption>Hình: Lệnh mua giới hạn ở 28,0 chỉ được coi là khớp khi trong phiên giá xuống tới 28,0 hoặc thấp hơn.</figcaption></figure>
<p><b>Ví dụ:</b> Tối thứ Hai bạn ghi lệnh "mua 300 CP mã A, LO 28,0". Thứ Ba mã A có Mở 28,6 – Cao 29,2 – Thấp 28,4 – Đóng 29,0. Giá thấp nhất 28,4 &gt; 28,0 nên lệnh <b>không khớp</b>. Bạn không được "sửa" thành mua ở 28,4 vì đã biết giá tăng. Đây là kỷ luật quan trọng nhất của giả lập.</p>

<h3>3. Tính lãi lỗ có phí và thuế</h3>
<p><b>Ví dụ:</b> Mua 400 CP ở 25.000đ, sau đó bán ở 27.000đ, phí 0,15% mỗi chiều.</p>
<ul>
<li>Tiền mua = 400 × 25.000 = 10.000.000đ. Phí mua = 15.000đ. Tổng chi = 10.015.000đ.</li>
<li>Tiền bán = 400 × 27.000 = 10.800.000đ. Phí bán = 16.200đ. Thuế = 10.800đ. Thực nhận = 10.773.000đ.</li>
<li>Lãi ròng = 10.773.000 − 10.015.000 = <b>758.000đ</b> (+7,57%), thay vì 800.000đ (+8%) nếu bỏ qua chi phí.</li>
</ul>
<p>Chi phí mỗi vòng mua–bán khoảng 0,4% giá trị. Nếu một tháng bạn mua bán toàn bộ danh mục 5 lần, chi phí khoảng 2% vốn/tháng, tức khoảng 24%/năm. Đây là lý do giao dịch quá nhiều gần như chắc chắn thua.</p>

<h3>4. Quy tắc T+2 trong giả lập</h3>
<figure class="fig"><svg viewBox="0 0 640 170" role="img" aria-label="Dòng thời gian T+2">
<line x1="40" y1="80" x2="600" y2="80" style="stroke:var(--line);stroke-width:3"/>
<circle cx="100" cy="80" r="10" style="fill:var(--accent)"/>
<circle cx="320" cy="80" r="10" style="fill:var(--muted)"/>
<circle cx="540" cy="80" r="10" style="fill:var(--up)"/>
<text x="100" y="54" text-anchor="middle" style="fill:var(--accent);font-size:14px;font-weight:700">Phiên T (thứ Hai)</text>
<text x="100" y="110" text-anchor="middle" style="fill:var(--text);font-size:12px">Lệnh mua khớp</text>
<text x="100" y="128" text-anchor="middle" style="fill:var(--muted);font-size:11px">Chưa được bán</text>
<text x="320" y="54" text-anchor="middle" style="fill:var(--muted);font-size:14px;font-weight:700">T+1 (thứ Ba)</text>
<text x="320" y="110" text-anchor="middle" style="fill:var(--text);font-size:12px">Cổ phiếu đang về</text>
<text x="320" y="128" text-anchor="middle" style="fill:var(--muted);font-size:11px">Chưa được bán</text>
<text x="540" y="54" text-anchor="middle" style="fill:var(--up);font-size:14px;font-weight:700">T+2 (thứ Tư)</text>
<text x="540" y="110" text-anchor="middle" style="fill:var(--text);font-size:12px">Cổ phiếu về tài khoản</text>
<text x="540" y="128" text-anchor="middle" style="fill:var(--up);font-size:11px">Bán được từ phiên chiều</text>
<text x="320" y="158" text-anchor="middle" style="fill:var(--muted);font-size:11px">Tính theo ngày giao dịch, không tính thứ Bảy, Chủ nhật và ngày nghỉ lễ</text>
</svg><figcaption>Hình: Mua thứ Hai thì sớm nhất bán được chiều thứ Tư. Mua thứ Năm thì sớm nhất bán được chiều thứ Hai tuần sau.</figcaption></figure>
<p><b>Ví dụ:</b> Bạn mua mã B phiên thứ Năm ở 30,0. Thứ Sáu giá giảm xuống 28,0, chạm cắt lỗ. Trong giả lập, bạn <b>chưa được bán</b> vào thứ Sáu. Sớm nhất là phiên chiều thứ Hai tuần sau, khi giá có thể đã là 27,5. Ghi đúng như vậy để quen với rủi ro thật của T+2. Hiện thị trường Việt Nam <b>chưa có giao dịch T+0 và chưa cho bán khống</b> (dự kiến triển khai từ 2027 cùng cơ chế đối tác bù trừ trung tâm), nên trong giả lập cũng không được mua rồi bán trong ngày hay bán cổ phiếu chưa có. (Quy định có thể thay đổi, kiểm tra lại với CTCK/HOSE.)</p>
<div class="warn">⚠ Sai lầm phổ biến của giả lập là "ăn gian" với chính mình: sửa giá khớp, bỏ qua lệnh thua, mua lượng rất lớn vì "không phải tiền thật". Giả lập ăn gian còn tệ hơn không giả lập, vì nó tạo ra sự tự tin sai lầm.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Tạo bảng giả lập với các cột: Ngày ghi lệnh, Mã, Mua/Bán, Loại lệnh, Giá đặt, KL, Khớp (Có/Không), Giá khớp, Phí, Thuế, Ghi chú.</li>
<li>Ghi số vốn giả lập ban đầu (bằng vốn thật dự kiến).</li>
<li>Chọn 1–2 mã đạt sơ đồ kiểm tra 4 câu (tuần 11). Ghi lệnh cho phiên ngày mai, kèm cắt lỗ và mục tiêu.</li>
<li>Ngày mai sau 15:00, kiểm tra giá Cao/Thấp để xác định lệnh có khớp không.</li>
</ol>
Kết quả mong đợi: bảng giả lập có ít nhất 1 lệnh được ghi trước phiên, tuân thủ bộ quy tắc.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Giả lập để kiểm tra kỷ luật, không phải để "lãi ảo".</li>
<li>Vốn giả lập = vốn thật dự kiến; ghi lệnh trước phiên, không sửa sau.</li>
<li>LO mua chỉ khớp khi giá thấp nhất ≤ giá đặt; tính phí 0,15% mỗi chiều và thuế 0,1% khi bán.</li>
<li>Tuân thủ T+2: mua phiên T, bán sớm nhất chiều T+2.</li>
</ul></div>
`,
  quiz: [
    { q: "Đặt LO mua 45,0. Phiên đó: Cao 46,5, Thấp 45,3. Lệnh có khớp không?", options: ["Có, ở 45,0", "Có, ở 45,3", "Không khớp", "Khớp ở giá đóng cửa"], answer: 2, explain: "Giá thấp nhất 45,3 > 45,0, nên lệnh mua giới hạn 45,0 không khớp." },
    { q: "Mua 200 CP ở 50.000, bán ở 55.000, phí 0,15%/chiều, thuế 0,1%. Lãi ròng là bao nhiêu?", options: ["1.000.000đ", "957.500đ", "968.500đ", "945.000đ"], answer: 1, explain: "Phí mua 15.000đ; tiền bán 11.000.000đ, phí bán 16.500đ, thuế 11.000đ. Lãi = 1.000.000 − 15.000 − 16.500 − 11.000 = 957.500đ." },
    { q: "Mua phiên thứ Sáu, sớm nhất bán được khi nào (không có ngày lễ)?", options: ["Chiều thứ Sáu", "Thứ Hai", "Chiều thứ Ba tuần sau", "Thứ Tư tuần sau"], answer: 2, explain: "T = thứ Sáu, T+1 = thứ Hai, T+2 = thứ Ba; bán được từ phiên chiều thứ Ba." }
  ]
},
{
  id: "w12-2",
  week: 12,
  day: 2,
  title: "Nhật ký giao dịch: công cụ học nhanh nhất",
  minutes: 120,
  summary: "Biết cần ghi những gì trong nhật ký giao dịch, cách ghi cảm xúc và cách đọc lại nhật ký để tìm ra lỗi lặp lại.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Khi đọc tin hôm nay, ghi lại 1 câu: "Tin nào khiến tôi muốn mua/bán ngay?" và "Cảm giác đó mạnh bao nhiêu từ 1 đến 5?". Đây là bài tập nhận diện cảm xúc, nền tảng của nhật ký giao dịch.</div>

<h3>1. Vì sao phải ghi nhật ký?</h3>
<p>Trí nhớ của con người rất "tử tế" với bản thân: ta nhớ những lần đúng, quên những lần sai, và tự kể lại lý do theo hướng có lợi. Nhật ký là bằng chứng không thể chỉnh sửa về cách bạn thật sự ra quyết định.</p>
<p><b>Ví dụ:</b> Sau 2 tháng, bạn nhớ mình "khá giỏi" vì có 2 lệnh lãi 15%. Đọc lại nhật ký, bạn thấy có 6 lệnh lỗ, trong đó 4 lệnh đều mua vào lúc 9h15 sau khi đọc một tin tốt, và cả 4 đều mua khi giá đã tăng hơn 4% trong phiên. Đó là một lỗi lặp lại mà trí nhớ không bao giờ tự chỉ ra cho bạn.</p>

<h3>2. Các cột cần ghi</h3>
<table>
<tr><th>Nhóm</th><th>Cột</th><th>Ghi chú</th></tr>
<tr><td rowspan="4">Trước lệnh</td><td>Ngày, Mã, Mua/Bán</td><td></td></tr>
<tr><td>Lý do (PTCB + PTKT)</td><td>1–3 câu, cụ thể</td></tr>
<tr><td>Giá vào, Cắt lỗ, Mục tiêu, R:R</td><td>Ghi trước khi đặt lệnh</td></tr>
<tr><td>Khối lượng, % vốn, Rủi ro (đồng)</td><td>Theo công thức 1%</td></tr>
<tr><td>Cảm xúc</td><td>Mức tự tin (1–5), cảm xúc chính</td><td>Hào hứng, sợ lỡ, bình tĩnh, chán...</td></tr>
<tr><td rowspan="3">Sau lệnh</td><td>Giá ra, Ngày ra, Lãi/lỗ (đồng, %, theo R)</td><td>Có tính phí, thuế</td></tr>
<tr><td>Có tuân thủ quy tắc không?</td><td>Có / Không, vi phạm quy tắc số mấy</td></tr>
<tr><td>Bài học</td><td>1 câu</td></tr>
</table>
<p><b>Kết quả theo R:</b> lãi/lỗ chia cho rủi ro ban đầu. Giúp so sánh các lệnh có quy mô khác nhau.</p>
<p><b>Ví dụ:</b> Lệnh 1 rủi ro 200 nghìn, lãi 500 nghìn: kết quả +2,5R. Lệnh 2 rủi ro 150 nghìn, lỗ 150 nghìn: −1R. Lệnh 3 rủi ro 200 nghìn nhưng lỗ 360 nghìn: −1,8R. Lệnh 3 lỗ nhiều hơn rủi ro dự kiến, chứng tỏ bạn đã không cắt lỗ đúng điểm. Đây là vi phạm quy tắc cần ghi rõ.</p>

<h3>3. Ví dụ một trang nhật ký</h3>
<figure class="fig"><svg viewBox="0 0 640 290" role="img" aria-label="Mẫu một mục nhật ký giao dịch">
<rect x="10" y="10" width="620" height="270" rx="12" style="fill:var(--card);stroke:var(--line);stroke-width:2"/>
<text x="30" y="40" style="fill:var(--text);font-size:15px;font-weight:700">Lệnh #07 · Mã A · MUA</text>
<text x="610" y="40" text-anchor="end" style="fill:var(--muted);font-size:12px">Ghi trước phiên 12/05 (minh họa)</text>
<line x1="30" y1="52" x2="610" y2="52" style="stroke:var(--line)"/>
<text x="30" y="76" style="fill:var(--muted);font-size:12px">Lý do:</text>
<text x="110" y="76" style="fill:var(--text);font-size:12px">LN quý +28% · Giá về MA50, RSI bật từ 45 · KL 1,6× TB</text>
<text x="30" y="100" style="fill:var(--muted);font-size:12px">Kế hoạch:</text>
<text x="110" y="100" style="fill:var(--accent);font-size:12px;font-weight:700">Mua 30,0</text>
<text x="200" y="100" style="fill:var(--down);font-size:12px;font-weight:700">Cắt lỗ 28,0</text>
<text x="300" y="100" style="fill:var(--up);font-size:12px;font-weight:700">Mục tiêu 35,0</text>
<text x="410" y="100" style="fill:var(--text);font-size:12px">R:R 2,5 · 100 CP · rủi ro 200k (1%)</text>
<text x="30" y="124" style="fill:var(--muted);font-size:12px">Cảm xúc:</text>
<text x="110" y="124" style="fill:var(--text);font-size:12px">Tự tin 3/5 · Hơi sợ lỡ vì hôm qua đã tăng 2%</text>
<line x1="30" y1="140" x2="610" y2="140" style="stroke:var(--line);stroke-dasharray:4 3"/>
<text x="30" y="164" style="fill:var(--muted);font-size:12px">Kết quả:</text>
<text x="110" y="164" style="fill:var(--text);font-size:12px">Bán 33,2 ngày 26/05 (thủng MA20) · Lãi ròng ≈ 307k · +1,5R</text>
<text x="30" y="188" style="fill:var(--muted);font-size:12px">Tuân thủ:</text>
<text x="110" y="188" style="fill:var(--up);font-size:12px;font-weight:700">Có</text>
<text x="140" y="188" style="fill:var(--text);font-size:12px">(cắt lỗ dời về 30,0 khi lãi 10%)</text>
<text x="30" y="212" style="fill:var(--muted);font-size:12px">Bài học:</text>
<text x="110" y="212" style="fill:var(--text);font-size:12px">Cảm giác "sợ lỡ" không làm hỏng lệnh vì đã có kế hoạch viết sẵn.</text>
<rect x="30" y="232" width="110" height="30" rx="15" style="fill:var(--up);fill-opacity:0.2"/>
<text x="85" y="252" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:700">+1,5R</text>
<rect x="150" y="232" width="130" height="30" rx="15" style="fill:var(--accent);fill-opacity:0.2"/>
<text x="215" y="252" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">Tuân thủ 100%</text>
</svg><figcaption>Hình: Một mục nhật ký đầy đủ: lý do, kế hoạch, cảm xúc trước lệnh; kết quả, tuân thủ, bài học sau lệnh.</figcaption></figure>
<p><b>Ví dụ:</b> Kiểm tra lại con số trong hình: mua 100 CP ở 30.000đ (3.000.000đ, phí 4.500đ), bán ở 33.200đ (3.320.000đ, phí 4.980đ, thuế 3.320đ). Lãi ròng = 320.000 − 4.500 − 4.980 − 3.320 = 307.200đ. Rủi ro ban đầu 200.000đ, nên kết quả ≈ 307.200 ÷ 200.000 ≈ +1,5R.</p>

<h3>4. Đọc lại nhật ký hằng tuần</h3>
<p>Mỗi Chủ nhật, lọc nhật ký và trả lời:</p>
<ul>
<li>Các lệnh <b>vi phạm quy tắc</b> có kết quả trung bình thế nào so với lệnh tuân thủ?</li>
<li>Các lệnh có cảm xúc "sợ lỡ" hoặc "hào hứng" ≥ 4/5 có kết quả ra sao?</li>
<li>Lỗi nào lặp lại từ 2 lần trở lên?</li>
</ul>
<p><b>Ví dụ:</b> Sau 10 lệnh giả lập: 7 lệnh tuân thủ, trung bình +0,6R; 3 lệnh vi phạm (2 lần mua đuổi, 1 lần dời cắt lỗ), trung bình −1,4R. Kết luận rõ ràng: lỗi không nằm ở phương pháp mà ở việc không tuân thủ. Hành động: thêm vào bộ quy tắc "giá đã tăng &gt; 3% trong phiên thì không đặt lệnh mua mới".</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Hoàn thiện bảng nhật ký với đầy đủ các cột ở mục 2 (bổ sung vào bảng giả lập hôm qua).</li>
<li>Điền đầy đủ cho lệnh giả lập đã ghi hôm qua (kể cả nếu không khớp, ghi "không khớp" và cảm xúc của bạn khi thấy giá tăng mà không mua được).</li>
<li>Ghi thêm 1 lệnh giả lập mới cho phiên mai nếu có mã đạt điều kiện. Nếu không có, ghi "Không có cơ hội đạt chuẩn": đó cũng là một quyết định đúng.</li>
</ol>
Kết quả mong đợi: nhật ký có ít nhất 1–2 mục đầy đủ các cột.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Nhật ký là bằng chứng khách quan, chống lại trí nhớ "tử tế" với bản thân.</li>
<li>Ghi kế hoạch và cảm xúc TRƯỚC lệnh; ghi kết quả, tuân thủ, bài học SAU lệnh.</li>
<li>Đo kết quả theo R để so sánh các lệnh khác quy mô.</li>
<li>Đọc lại hằng tuần để tìm lỗi lặp lại.</li>
</ul></div>
`,
  quiz: [
    { q: "Rủi ro ban đầu 300 nghìn, lệnh lãi 750 nghìn. Kết quả theo R?", options: ["+1,5R", "+2,5R", "+3R", "+0,4R"], answer: 1, explain: "750 ÷ 300 = 2,5R." },
    { q: "Vì sao phải ghi kế hoạch và cảm xúc TRƯỚC khi đặt lệnh?", options: ["Để CTCK kiểm tra", "Để sau này không tự sửa lý do theo kết quả", "Không cần thiết", "Để đặt lệnh nhanh hơn"], answer: 1, explain: "Ghi trước giúp có bằng chứng thật về lý do và cảm xúc, không bị 'hồi tưởng có lợi'." },
    { q: "Lệnh có rủi ro dự kiến 1R nhưng thực tế lỗ 2R chứng tỏ điều gì?", options: ["Thị trường xấu", "Đã không cắt lỗ đúng điểm", "Phương pháp tốt", "Phí quá cao"], answer: 1, explain: "Lỗ vượt rủi ro dự kiến nghĩa là cắt lỗ không được thực hiện đúng kế hoạch." }
  ]
},
{
  id: "w12-3",
  week: 12,
  day: 3,
  title: "Tâm lý đầu tư 1: sợ hãi, lòng tham, FOMO và hiệu ứng ngược",
  minutes: 120,
  summary: "Nhận diện các cảm xúc chi phối quyết định, chu kỳ cảm xúc thị trường và lỗi 'bán lãi sớm, gồng lỗ lâu'.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Đọc phần bình luận dưới các bài báo chứng khoán hoặc trong các nhóm mạng xã hội. Đánh giá tâm lý chung hôm nay theo thang: Sợ hãi – Lo lắng – Bình thường – Hào hứng – Hưng phấn. Ghi lại để so sánh với diễn biến thị trường vài tuần sau.</div>

<h3>1. Sợ hãi và lòng tham</h3>
<p>Hai cảm xúc mạnh nhất trên thị trường:</p>
<ul>
<li><b>Lòng tham:</b> muốn lãi nhiều hơn, nhanh hơn. Dẫn tới mua đuổi, dùng margin, dồn hết vốn, không chốt lời theo kế hoạch.</li>
<li><b>Sợ hãi:</b> sợ mất tiền. Dẫn tới bán tháo ở đáy, không dám mua khi có cơ hội tốt, hoặc ngược lại, không dám cắt lỗ vì sợ "biến lỗ tạm thời thành lỗ thật".</li>
</ul>
<p><b>Ví dụ:</b> Mã A tăng từ 20.000 lên 26.000đ trong 2 tuần. Lòng tham nói: "Mua ngay, nó còn lên 35.000đ". Bạn mua ở 26.000đ. Một tuần sau giá về 22.000đ (−15%). Lúc này sợ hãi nói: "Bán hết đi, nó sẽ về 15.000đ". Bạn bán ở 22.000đ. Hai tuần sau giá về lại 25.000đ. Cả hai quyết định đều do cảm xúc, và cả hai đều sai thời điểm.</p>

<h3>2. FOMO: sợ bỏ lỡ</h3>
<p>FOMO (Fear Of Missing Out) là cảm giác lo lắng khi thấy người khác kiếm tiền mà mình không có phần. Nó khiến bạn mua cổ phiếu đã tăng mạnh, không phân tích, chỉ vì sợ "lỡ tàu".</p>
<p><b>Ví dụ:</b> Bạn bè khoe lãi 40% với mã B trong 1 tháng. Bạn mua ngay hôm sau ở đỉnh, không biết công ty làm gì. Thực tế khi bạn bè khoe thì họ (và nhiều người khác) đã có lãi lớn, và một phần trong số đó đang tìm người mua để chốt lời. Người mua cuối cùng vì FOMO thường là người đỡ hàng ở vùng giá cao nhất.</p>
<p><b>Cách xử lý FOMO:</b></p>
<ul>
<li>Nhắc mình: thị trường luôn có cơ hội mới; lỡ một mã không làm bạn nghèo đi, mua sai đỉnh thì có.</li>
<li>Áp dụng quy tắc "không mua đuổi khi giá đã cách điểm mua lý tưởng &gt; 5%".</li>
<li>Chờ 24 giờ trước khi mua bất kỳ mã nào bạn chưa có trong watchlist.</li>
</ul>

<h3>3. Chu kỳ cảm xúc thị trường</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Chu kỳ cảm xúc của nhà đầu tư theo diễn biến giá">
<path d="M20,210 C60,190 90,160 130,130 C170,95 190,50 220,42 C250,35 265,65 285,85 C305,105 320,108 340,115 C370,130 385,175 410,195 C430,212 445,222 465,218 C490,213 510,205 535,190 C560,175 590,160 620,140" style="fill:none;stroke:var(--text);stroke-width:3"/>
<circle cx="80" cy="182" r="4" style="fill:var(--accent)"/><text x="80" y="204" text-anchor="middle" style="fill:var(--text);font-size:11px">Hy vọng</text>
<circle cx="130" cy="130" r="4" style="fill:var(--accent)"/><text x="120" y="152" text-anchor="end" style="fill:var(--text);font-size:11px">Lạc quan</text>
<circle cx="185" cy="66" r="4" style="fill:var(--up)"/><text x="178" y="62" text-anchor="end" style="fill:var(--text);font-size:11px">Hào hứng</text>
<circle cx="220" cy="42" r="5" style="fill:var(--down)"/><text x="220" y="28" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">Hưng phấn (rủi ro cao nhất)</text>
<circle cx="285" cy="85" r="4" style="fill:var(--ref)"/><text x="295" y="80" style="fill:var(--text);font-size:11px">Lo lắng</text>
<circle cx="340" cy="115" r="4" style="fill:var(--ref)"/><text x="350" y="110" style="fill:var(--text);font-size:11px">Phủ nhận</text>
<circle cx="400" cy="186" r="4" style="fill:var(--down)"/><text x="392" y="180" text-anchor="end" style="fill:var(--text);font-size:11px">Hoảng loạn</text>
<circle cx="465" cy="218" r="5" style="fill:var(--up)"/><text x="465" y="244" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:700">Đầu hàng (cơ hội lớn nhất)</text>
<circle cx="535" cy="190" r="4" style="fill:var(--muted)"/><text x="540" y="212" style="fill:var(--text);font-size:11px">Chán nản</text>
<circle cx="610" cy="146" r="4" style="fill:var(--accent)"/><text x="610" y="134" text-anchor="end" style="fill:var(--text);font-size:11px">Hy vọng</text>
</svg><figcaption>Hình: Cảm xúc đám đông đạt đỉnh hưng phấn ở vùng giá cao nhất và tuyệt vọng nhất ở vùng giá thấp nhất. Làm theo cảm xúc đám đông đồng nghĩa với mua cao, bán thấp.</figcaption></figure>
<p><b>Ví dụ:</b> Ở giai đoạn "hưng phấn", tài khoản mở mới tăng vọt, người không quan tâm chứng khoán cũng bàn về nó, các nhóm chat tràn ngập ảnh chụp lãi. Ở giai đoạn "đầu hàng", báo chí đưa tin xấu liên tục, nhiều người tuyên bố "bỏ chứng khoán vĩnh viễn", thanh khoản cạn kiệt. Đây là lúc những người có tiền mặt và kỷ luật (nhớ lại quy tắc giữ 10–20% tiền mặt) có cơ hội tốt nhất. Lưu ý: chỉ nhận ra các giai đoạn này rõ ràng khi nhìn lại; lúc đang ở trong thì rất khó, nên bộ quy tắc và DCA quan trọng hơn việc đoán giai đoạn.</p>

<h3>4. Hiệu ứng ngược (disposition effect): bán lãi sớm, gồng lỗ lâu</h3>
<p>Nhà đầu tư có xu hướng <b>bán nhanh mã đang lãi</b> (để "chắc ăn") và <b>giữ mãi mã đang lỗ</b> (để "chờ về bờ"). Kết quả: lãi nhỏ, lỗ lớn. Đây chính là điều thứ 5 trong danh sách "5 điều cần tránh" của lộ trình.</p>
<p><b>Ví dụ:</b> Danh mục có mã C lãi 6% và mã D lỗ 18%. Bạn cần tiền và phải bán một mã. Phần lớn người chọn bán C ("chốt lãi cho vui") và giữ D ("bán là chịu lỗ thật"). Nhưng câu hỏi đúng phải là: "Nếu hôm nay đang cầm tiền mặt, mình có mua D ở giá hiện tại không?". Nếu không, giữ D chỉ vì giá vốn là quyết định dựa trên quá khứ, không dựa trên triển vọng.</p>
<p>Về kỳ vọng: 10 lệnh với lãi trung bình 5% (vì chốt sớm) và lỗ trung bình 15% (vì gồng lỗ), thắng 6/10: kỳ vọng = 0,6 × 5 − 0,4 × 15 = 3 − 6 = −3% mỗi lệnh. Thắng nhiều mà vẫn thua.</p>
<div class="warn">⚠ Thị trường không biết giá vốn của bạn. Giá 30.000đ hôm nay có cùng triển vọng dù bạn mua ở 20.000đ hay 40.000đ.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Xem lại nhật ký giả lập và các ghi chú 2 tháng qua. Tìm 1 lần bạn cảm thấy FOMO (dù không mua). Mã đó sau đó đi thế nào?</li>
<li>Viết ra 3 câu "tự nhắc" khi cảm thấy FOMO hoặc sợ hãi, dán cạnh bộ quy tắc. Ví dụ: "Lỡ một chuyến tàu không sao, đi nhầm tàu mới đáng sợ".</li>
<li>Bài tập tình huống: bạn giữ mã E lỗ 12%, đã thủng cắt lỗ 8% từ tuần trước. Viết ra lý do bạn muốn giữ, sau đó viết lý do theo bộ quy tắc. Quyết định cuối cùng?</li>
</ol>
Kết quả mong đợi: 3 câu tự nhắc và lời giải tình huống (theo quy tắc: bán ngay, ghi bài học về việc đã không thực hiện cắt lỗ đúng hạn).</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Lòng tham dẫn tới mua đuổi, sợ hãi dẫn tới bán tháo; cả hai làm bạn mua cao bán thấp.</li>
<li>FOMO: chờ 24 giờ, không mua đuổi quá 5% so với điểm mua lý tưởng.</li>
<li>Hưng phấn đám đông là lúc rủi ro cao nhất; đầu hàng là lúc cơ hội lớn nhất.</li>
<li>Hiệu ứng ngược: bán lãi sớm, gồng lỗ lâu khiến thắng nhiều vẫn thua.</li>
</ul></div>
`,
  quiz: [
    { q: "FOMO là gì?", options: ["Một loại lệnh", "Nỗi sợ bỏ lỡ cơ hội khi thấy người khác kiếm tiền", "Tên một chỉ báo", "Phí giao dịch"], answer: 1, explain: "FOMO (Fear Of Missing Out) là cảm giác sợ lỡ, dẫn tới mua đuổi không phân tích." },
    { q: "Hiệu ứng ngược (disposition effect) là gì?", options: ["Mua thấp bán cao", "Bán nhanh mã lãi, giữ lâu mã lỗ", "Mua định kỳ", "Đa dạng hóa"], answer: 1, explain: "Xu hướng chốt lãi sớm và gồng lỗ lâu, khiến lãi nhỏ, lỗ lớn." },
    { q: "Câu hỏi đúng khi quyết định có giữ một mã đang lỗ hay không là gì?", options: ["Mình mua ở giá bao nhiêu?", "Nếu đang cầm tiền mặt, mình có mua mã này ở giá hiện tại không?", "Bạn bè có giữ không?", "Đã lỗ bao lâu rồi?"], answer: 1, explain: "Quyết định phải dựa trên triển vọng từ giá hiện tại, không dựa trên giá vốn quá khứ." }
  ]
},
{
  id: "w12-4",
  week: 12,
  day: 4,
  title: "Tâm lý đầu tư 2: thiên kiến và sai lầm phổ biến của người mới",
  minutes: 120,
  summary: "Nhận diện thiên kiến xác nhận, neo giá, quá tự tin; hiểu cơ chế phím hàng, tác hại của bình quân giá xuống và all-in.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Chọn 1 mã bạn đang thích. Hôm nay hãy cố tình tìm và đọc <b>2 bài viết có quan điểm tiêu cực</b> về mã đó hoặc ngành của nó. Ghi lại các lập luận phản biện. Đây là bài tập chống thiên kiến xác nhận.</div>

<h3>1. Thiên kiến xác nhận</h3>
<p>Thiên kiến xác nhận là xu hướng chỉ tìm và tin những thông tin ủng hộ điều mình đã nghĩ, bỏ qua thông tin trái chiều.</p>
<p><b>Ví dụ:</b> Bạn đã mua mã A. Bạn đọc kỹ 5 bài khen A, lướt qua 2 bài cảnh báo nợ vay của A đang tăng nhanh. Khi giá giảm 10%, bạn nghĩ "thị trường chưa hiểu giá trị của A". Thực tế, thông tin về nợ vay mà bạn bỏ qua có thể chính là lý do giá giảm.</p>
<p><b>Cách chống:</b> trong bài phân tích 1 trang, luôn có mục "3 lý do tôi có thể sai". Nếu không viết được lý do nào, bạn chưa hiểu đủ về doanh nghiệp.</p>

<h3>2. Neo giá</h3>
<p>Neo giá là việc bám vào một con số trong quá khứ (giá đỉnh cũ, giá vốn) để đánh giá đắt hay rẻ.</p>
<p><b>Ví dụ:</b> Mã B từng có giá 80.000đ, nay còn 30.000đ. Nhiều người nghĩ "giảm 62,5% rồi, quá rẻ". Nhưng nếu lợi nhuận của B giảm từ 8.000đ/CP xuống 1.000đ/CP, thì P/E tăng từ 10 lên 30, tức bây giờ <b>đắt hơn</b> trước, không phải rẻ hơn. Giá rẻ hay đắt phải so với giá trị doanh nghiệp (lợi nhuận, tài sản), không so với giá cũ.</p>

<h3>3. Quá tự tin</h3>
<p>Sau vài lệnh thắng liên tiếp, nhiều người tin rằng mình đã "hiểu thị trường", tăng quy mô lệnh, bỏ qua quy tắc.</p>
<p><b>Ví dụ:</b> Nhà đầu tư C thắng 4 lệnh liên tiếp trong giai đoạn thị trường tăng mạnh, tài khoản từ 20 triệu lên 26 triệu. Tin rằng mình giỏi, C dồn 100% vốn vào 1 mã và vay margin thêm 20 triệu. Thị trường điều chỉnh 15%, mã đó giảm 25%: tài sản 46 × 0,75 = 34,5 triệu, trừ nợ 20 triệu còn 14,5 triệu. Mất hết lãi và thêm 5,5 triệu vốn gốc chỉ trong một lệnh. Thắng 4 lệnh đầu chủ yếu nhờ thị trường tăng, không phải nhờ kỹ năng.</p>

<h3>4. Phím hàng: cơ chế "kéo – xả"</h3>
<p>"Phím hàng" là lời mách mua một mã cổ phiếu, thường lan truyền qua Zalo, Telegram, Facebook. Một kịch bản điển hình (bơm và xả):</p>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Các giai đoạn của kịch bản kéo và xả cổ phiếu">
<polyline points="20,190 70,192 120,188 170,191 220,185 260,165 300,140 340,110 370,80 390,55 410,45 430,60 450,95 480,140 520,175 560,195 620,205" style="fill:none;stroke:var(--text);stroke-width:3"/>
<rect x="20" y="20" width="200" height="200" style="fill:var(--accent);fill-opacity:0.07"/>
<rect x="220" y="20" width="150" height="200" style="fill:var(--up);fill-opacity:0.07"/>
<rect x="370" y="20" width="70" height="200" style="fill:var(--ref);fill-opacity:0.12"/>
<rect x="440" y="20" width="180" height="200" style="fill:var(--down);fill-opacity:0.07"/>
<text x="120" y="40" text-anchor="middle" style="fill:var(--accent);font-size:12px;font-weight:700">① Gom hàng âm thầm</text>
<text x="120" y="56" text-anchor="middle" style="fill:var(--muted);font-size:11px">giá thấp, KL nhỏ</text>
<text x="295" y="40" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:700">② Kéo giá</text>
<text x="295" y="56" text-anchor="middle" style="fill:var(--muted);font-size:11px">tăng nhiều phiên</text>
<text x="405" y="210" text-anchor="middle" style="fill:var(--ref);font-size:12px;font-weight:700">③ Phím hàng</text>
<text x="530" y="40" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:700">④ Xả hàng</text>
<text x="530" y="56" text-anchor="middle" style="fill:var(--muted);font-size:11px">người mua sau đỡ giá</text>
<line x1="20" y1="240" x2="620" y2="240" style="stroke:var(--line)"/>
<text x="320" y="256" text-anchor="middle" style="fill:var(--muted);font-size:11px">Thời gian →</text>
</svg><figcaption>Hình: Lời "phím" thường xuất hiện ở giai đoạn ③, khi người phím cần người mua để bán ra lượng hàng đã gom.</figcaption></figure>
<p><b>Ví dụ:</b> Một nhóm gom 2 triệu cổ phiếu mã nhỏ X ở giá 8.000đ. Họ kéo giá lên 14.000đ trong 3 tuần (thanh khoản thấp nên dễ kéo). Sau đó tin "X sắp có hợp đồng lớn, mục tiêu 25.000đ" được lan truyền. Người mua mới vào ở 13.000–14.000đ. Nhóm bán dần 2 triệu cổ phiếu cho họ, lãi khoảng 10–11 tỷ. Không còn lực kéo, giá rơi về 9.000đ trong 1 tháng, người mua theo phím lỗ khoảng 30–35%.</p>
<div class="warn">⚠ Thao túng giá chứng khoán là hành vi vi phạm pháp luật. Dù vậy, người mua theo phím vẫn tự chịu thiệt hại. Quy tắc: không bao giờ mua mã bạn chưa tự phân tích, đặc biệt là mã thanh khoản thấp đang được "hô hào".</div>

<h3>5. Bình quân giá xuống và all-in</h3>
<p><b>Bình quân giá xuống</b> là mua thêm khi giá giảm để kéo giá vốn trung bình xuống. Nghe hợp lý, nhưng nếu doanh nghiệp đang xấu đi thì đó là ném thêm tiền vào khoản lỗ.</p>
<p><b>Ví dụ:</b></p>
<table>
<tr><th>Hành động</th><th>Giá</th><th>Tổng CP</th><th>Tổng vốn bỏ ra</th><th>Giá vốn TB</th></tr>
<tr><td>Mua lần 1</td><td>40.000</td><td>500</td><td>20 triệu</td><td>40.000</td></tr>
<tr><td>Giảm, mua thêm</td><td>32.000</td><td>1.000</td><td>36 triệu</td><td>36.000</td></tr>
<tr><td>Giảm tiếp còn</td><td>24.000</td><td>1.000</td><td>Giá trị: 24 triệu</td><td>Lỗ 12 triệu (−33%)</td></tr>
</table>
<p>So sánh: nếu cắt lỗ ở 37.000đ (−7,5%), bạn chỉ lỗ 500 × 3.000 = 1,5 triệu. Nếu chỉ giữ 500 CP mà không mua thêm, lỗ 8 triệu. Bình quân giá xuống đã biến khoản lỗ thành 12 triệu.</p>
<p><b>All-in</b> là dồn toàn bộ vốn (thậm chí vay thêm) vào một mã vì "chắc chắn". <b>Ví dụ:</b> 30 triệu all-in vào 1 mã giảm sàn 3 phiên liên tiếp trên HOSE: 0,93 × 0,93 × 0,93 ≈ 0,804, tài khoản còn khoảng 24,1 triệu (−19,6%) chỉ sau 3 ngày, và có thể không bán được vì trắng bên mua.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Với mã bạn thích nhất trong watchlist, viết mục "3 lý do tôi có thể sai" (dùng các lập luận phản biện tìm được khi đọc tin).</li>
<li>Tự tính: mua 300 CP ở 50.000đ, giá giảm về 42.000đ mua thêm 300 CP, sau đó giảm về 35.000đ. Giá vốn TB? Lỗ bao nhiêu? So với cắt lỗ ở 46.000đ?</li>
<li>Kiểm tra bộ quy tắc của bạn đã có đủ các điều cấm: phím hàng, bình quân giá xuống, all-in chưa. Bổ sung nếu thiếu.</li>
</ol>
Kết quả mong đợi (bài 2): giá vốn TB 46.000đ; giá trị 600 × 35.000 = 21 triệu so với vốn 27,6 triệu, lỗ 6,6 triệu (−23,9%); nếu cắt lỗ ở 46.000đ chỉ lỗ 300 × 4.000 = 1,2 triệu.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Thiên kiến xác nhận: luôn viết "3 lý do tôi có thể sai".</li>
<li>Neo giá: rẻ hay đắt so với giá trị doanh nghiệp, không so với giá cũ.</li>
<li>Thắng liên tiếp trong thị trường tăng chưa chứng minh kỹ năng; đừng tăng rủi ro.</li>
<li>Không phím hàng, không bình quân giá xuống khi chưa hiểu doanh nghiệp, không all-in.</li>
</ul></div>
`,
  quiz: [
    { q: "Mã từng giá 60.000, nay 20.000. EPS giảm từ 6.000 xuống 500. P/E hiện tại so với trước?", options: ["Rẻ hơn (P/E giảm)", "Đắt hơn (P/E từ 10 lên 40)", "Không đổi", "Không tính được"], answer: 1, explain: "Trước: 60.000 ÷ 6.000 = 10. Nay: 20.000 ÷ 500 = 40. Giá giảm nhưng đắt hơn so với lợi nhuận." },
    { q: "Lời 'phím hàng' thường xuất hiện ở giai đoạn nào của kịch bản kéo – xả?", options: ["Gom hàng âm thầm", "Sau khi giá đã được kéo lên, trước khi xả", "Sau khi xả xong", "Không có quy luật"], answer: 1, explain: "Người phím cần người mua để xả hàng, nên tin phím xuất hiện khi giá đã được kéo lên." },
    { q: "Mua 100 CP ở 30.000, mua thêm 100 CP ở 24.000. Giá vốn trung bình?", options: ["24.000", "27.000", "30.000", "54.000"], answer: 1, explain: "(3.000.000 + 2.400.000) ÷ 200 = 27.000đ." }
  ]
},
{
  id: "w12-5",
  week: 12,
  day: 5,
  title: "Đánh giá kết quả: tỷ lệ thắng, kỳ vọng, sụt giảm và so sánh VN-Index",
  minutes: 120,
  summary: "Tính các chỉ số đánh giá hiệu quả giao dịch, mức sụt giảm tối đa và so sánh với việc chỉ nắm giữ VN-Index.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Ghi lại VN-Index đóng cửa hôm nay và giá trị tại ngày bạn bắt đầu giả lập. Tính VN-Index đã tăng/giảm bao nhiêu %. Đây là "điểm chuẩn" (benchmark) để so sánh với kết quả của bạn.</div>

<h3>1. Tỷ lệ thắng, lãi trung bình, lỗ trung bình</h3>
<ul>
<li><b>Tỷ lệ thắng</b> = Số lệnh lãi ÷ Tổng số lệnh.</li>
<li><b>Lãi trung bình</b> = Tổng % lãi các lệnh thắng ÷ Số lệnh thắng.</li>
<li><b>Lỗ trung bình</b> = Tổng % lỗ các lệnh thua ÷ Số lệnh thua.</li>
</ul>
<p><b>Ví dụ:</b> 10 lệnh giả lập (số liệu minh họa, cùng quy mô):</p>
<table>
<tr><th>Lệnh thắng</th><th>+12%</th><th>+8%</th><th>+15%</th><th>+5%</th><th></th><th></th></tr>
<tr><th>Lệnh thua</th><td>−5%</td><td>−7%</td><td>−4%</td><td>−6%</td><td>−8%</td><td>−6%</td></tr>
</table>
<ul>
<li>Tỷ lệ thắng = 4 ÷ 10 = <b>40%</b>.</li>
<li>Lãi TB = (12 + 8 + 15 + 5) ÷ 4 = 40 ÷ 4 = <b>10%</b>.</li>
<li>Lỗ TB = (5 + 7 + 4 + 6 + 8 + 6) ÷ 6 = 36 ÷ 6 = <b>6%</b>.</li>
</ul>

<h3>2. Kỳ vọng và hệ số lợi nhuận</h3>
<p><b>Kỳ vọng</b> = Tỷ lệ thắng × Lãi TB − Tỷ lệ thua × Lỗ TB. <b>Hệ số lợi nhuận (profit factor)</b> = Tổng lãi ÷ Tổng lỗ (lớn hơn 1 là có lãi).</p>
<p><b>Ví dụ:</b> Với 10 lệnh trên:</p>
<ul>
<li>Kỳ vọng = 0,4 × 10% − 0,6 × 6% = 4% − 3,6% = <b>+0,4% mỗi lệnh</b>. Dương nhưng mỏng; sau khi trừ phí và thuế khoảng 0,4% mỗi vòng, gần như hòa vốn.</li>
<li>Hệ số lợi nhuận = 40 ÷ 36 ≈ <b>1,11</b>. Có lãi nhưng không nhiều.</li>
<li>Cải thiện: nếu cắt lỗ chặt hơn để lỗ TB còn 5%, kỳ vọng = 4% − 3% = +1%; hoặc giữ lệnh thắng lâu hơn để lãi TB 13%, kỳ vọng = 5,2% − 3,6% = +1,6%.</li>
</ul>

<h3>3. Mức sụt giảm tối đa (Max drawdown)</h3>
<p>Mức sụt giảm tối đa là mức giảm lớn nhất của tài khoản từ một đỉnh xuống đáy sau đó. Nó cho biết bạn đã phải chịu đựng mức "đau" lớn nhất là bao nhiêu.</p>
<p><b>Ví dụ:</b> Tài khoản 20 triệu, tăng lên đỉnh 22 triệu, giảm xuống 19,8 triệu, rồi hồi lên 21 triệu. Sụt giảm tối đa = (22 − 19,8) ÷ 22 = <b>10%</b>. Dù hiện tại tài khoản vẫn lãi 5% so với vốn, bạn đã có lúc mất 10% từ đỉnh. Hãy tự hỏi: lúc đó bạn có tuân thủ quy tắc hay hoảng loạn?</p>

<h3>4. So sánh với VN-Index</h3>
<p>Nếu sau một giai đoạn, kết quả của bạn thấp hơn VN-Index (hoặc ETF VN30) cùng kỳ, tức là việc tự chọn cổ phiếu chưa mang lại giá trị so với mua quỹ chỉ số và nằm yên. Lộ trình của bạn đã ghi rõ: <b>nếu thua, hãy tăng tỷ trọng ETF</b>.</p>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Đường tài khoản so với VN-Index và vùng sụt giảm">
<line x1="50" y1="210" x2="620" y2="210" style="stroke:var(--line)"/>
<line x1="50" y1="30" x2="50" y2="210" style="stroke:var(--line)"/>
<line x1="50" y1="140" x2="620" y2="140" style="stroke:var(--muted);stroke-dasharray:3 3"/>
<text x="44" y="144" text-anchor="end" style="fill:var(--muted);font-size:11px">100</text>
<rect x="250" y="40" width="130" height="170" style="fill:var(--down);fill-opacity:0.1"/>
<text x="315" y="200" text-anchor="middle" style="fill:var(--down);font-size:11px">Sụt giảm tối đa</text>
<polyline points="50,140 100,130 150,118 200,105 250,96 290,120 330,128 380,124 430,112 480,100 530,98 580,90 620,92" style="fill:none;stroke:var(--accent);stroke-width:3"/>
<polyline points="50,140 100,135 150,125 200,115 250,108 290,110 330,104 380,98 430,92 480,85 530,80 580,74 620,72" style="fill:none;stroke:var(--c2);stroke-width:3;stroke-dasharray:7 4"/>
<line x1="250" y1="96" x2="330" y2="96" style="stroke:var(--down);stroke-dasharray:3 3"/>
<line x1="330" y1="96" x2="330" y2="128" style="stroke:var(--down);stroke-width:2"/>
<text x="60" y="24" style="fill:var(--accent);font-size:12px;font-weight:700">━ Tài khoản của bạn</text>
<text x="220" y="24" style="fill:var(--c2);font-size:12px;font-weight:700">┅ VN-Index (quy về 100)</text>
<text x="625" y="96" text-anchor="end" style="fill:var(--accent);font-size:11px">+12%</text>
<text x="625" y="66" text-anchor="end" style="fill:var(--c2);font-size:11px">+17%</text>
<text x="335" y="232" text-anchor="middle" style="fill:var(--muted);font-size:11px">Thời gian (số liệu minh họa)</text>
</svg><figcaption>Hình: Quy cả tài khoản và VN-Index về mốc 100 tại ngày bắt đầu. Ở ví dụ này tài khoản lãi 12% nhưng vẫn thua VN-Index (+17%).</figcaption></figure>
<p><b>Ví dụ:</b> Bạn bắt đầu giả lập khi VN-Index = 1.200 điểm (số liệu minh họa), tài khoản 20 triệu. Sau 3 tháng: tài khoản 22,4 triệu (+12%), VN-Index 1.404 điểm (+17%). Bạn có lãi nhưng <b>thua thị trường 5 điểm phần trăm</b>. Nếu chỉ mua ETF VN30, bạn có thể được khoảng +17% (trừ phí quản lý quỹ và sai lệch so với chỉ số) mà không mất nhiều thời gian. Kết luận: tăng tỷ trọng ETF, giảm số lệnh tự chọn.</p>
<p>Lưu ý: VN-Index và VN30 khác nhau; nếu bạn dùng ETF VN30 làm nền thì so với VN30 sẽ chính xác hơn.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
<li>Tạo bảng đánh giá trong Excel: cột kết quả % mỗi lệnh. Dùng công thức tính tỷ lệ thắng (COUNTIF &gt; 0), lãi TB (AVERAGEIF &gt; 0), lỗ TB (AVERAGEIF &lt; 0), kỳ vọng, hệ số lợi nhuận.</li>
<li>Thêm cột "Giá trị tài khoản" sau mỗi lệnh, tính mức sụt giảm tối đa.</li>
<li>Thêm ô VN-Index ngày bắt đầu và hiện tại, tính % thay đổi và so sánh.</li>
<li>Thử với dữ liệu 10 lệnh ở mục 1 để kiểm tra công thức cho đúng kết quả (40%, 10%, 6%, +0,4%, 1,11).</li>
</ol>
Kết quả mong đợi: file "Đánh giá kết quả" sẵn sàng dùng cho buổi thứ Bảy và cho tháng 4–6.</div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
<li>Tỷ lệ thắng một mình không nói lên gì; cần xem cùng lãi TB và lỗ TB.</li>
<li>Kỳ vọng dương và hệ số lợi nhuận &gt; 1 (sau phí) mới là có lãi bền vững.</li>
<li>Sụt giảm tối đa đo mức "đau" lớn nhất từ đỉnh.</li>
<li>Thua VN-Index/VN30 cùng kỳ thì tăng tỷ trọng ETF.</li>
</ul></div>
`,
  quiz: [
    { q: "6 lệnh thắng tổng +30%, 4 lệnh thua tổng −24%. Hệ số lợi nhuận?", options: ["0,8", "1,25", "1,5", "6"], answer: 1, explain: "30 ÷ 24 = 1,25." },
    { q: "Tài khoản đạt đỉnh 50 triệu rồi giảm còn 42 triệu. Sụt giảm tối đa?", options: ["8%", "16%", "19%", "84%"], answer: 1, explain: "(50 − 42) ÷ 50 = 16%." },
    { q: "Sau 3 tháng, bạn lãi 8%, VN-Index tăng 12%. Theo lộ trình nên làm gì?", options: ["Tăng số lệnh tự chọn", "Tăng tỷ trọng ETF", "Dùng margin để bắt kịp", "Không cần thay đổi"], answer: 1, explain: "Thua chỉ số cùng kỳ thì tăng ETF, vì tự chọn mã chưa tạo thêm giá trị." }
  ]
},
{
  id: "w12-6",
  week: 12,
  day: 6,
  title: "Tổng hợp nhật ký giả lập và tự chấm điểm",
  minutes: 240,
  summary: "Tổng hợp toàn bộ lệnh giả lập, tính các chỉ số và chấm điểm theo thang 100 về tuân thủ, kết quả, ghi chép và cảm xúc.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<p><b>Mục tiêu:</b> Có một bản đánh giá trung thực về giai đoạn giả lập. Điểm số này là một trong các tiêu chí để quyết định có chuyển sang tiền thật vào tháng 4 hay kéo dài giả lập thêm 2–4 tuần.</p>

<p><b>Bước 1: Hoàn thiện dữ liệu (40 phút)</b></p>
<ol>
<li>Rà lại toàn bộ nhật ký, đảm bảo mỗi lệnh có đủ: giá vào/ra, phí, thuế, kết quả (đồng, %, R), tuân thủ (Có/Không), cảm xúc.</li>
<li>Với lệnh còn đang mở, tính lãi/lỗ tạm theo giá đóng cửa hôm qua.</li>
<li>Ghi số lệnh dự định nhưng không đặt vì không đạt điều kiện. Đây là bằng chứng kỷ luật tốt.</li>
</ol>

<p><b>Bước 2: Tính chỉ số (30 phút)</b></p>
<p>Dùng file "Đánh giá kết quả" đã làm hôm qua: tỷ lệ thắng, lãi TB, lỗ TB, kỳ vọng, hệ số lợi nhuận, sụt giảm tối đa, so sánh VN-Index cùng kỳ.</p>
<p><b>Ví dụ:</b> Kết quả giả định sau 3 tuần: 8 lệnh, thắng 3 (lãi TB 9%), thua 5 (lỗ TB 5,5%), kỳ vọng = 0,375 × 9 − 0,625 × 5,5 = 3,375 − 3,4375 ≈ −0,06% (gần hòa vốn), tài khoản −0,5%, VN-Index +2%.</p>

<p><b>Bước 3: Chấm điểm (40 phút)</b></p>
<table>
<tr><th>Hạng mục</th><th>Điểm tối đa</th><th>Cách chấm</th></tr>
<tr><td>Tuân thủ quy tắc</td><td>40</td><td>40 × (số lệnh tuân thủ ÷ tổng số lệnh). Trừ 10 điểm cho mỗi lần dời cắt lỗ xuống.</td></tr>
<tr><td>Kết quả</td><td>20</td><td>Kỳ vọng &gt; 0 sau phí: 10đ. Không thua VN-Index quá 3 điểm %: 5đ. Sụt giảm tối đa &lt; 10%: 5đ.</td></tr>
<tr><td>Ghi chép</td><td>20</td><td>20 × (số lệnh ghi đủ các cột trước khi đặt ÷ tổng số lệnh).</td></tr>
<tr><td>Kiểm soát cảm xúc</td><td>20</td><td>Không có lệnh FOMO/mua đuổi: 10đ. Không có lệnh "trả thù" sau khi thua: 10đ.</td></tr>
</table>
<p><b>Ví dụ:</b> Với 8 lệnh ở trên: tuân thủ 7/8, không dời cắt lỗ → 40 × 7/8 = 35 điểm. Kết quả: kỳ vọng ≈ 0 chưa dương (0đ), thua VN-Index 2,5 điểm % (5đ), sụt giảm 4% (5đ) → 10 điểm. Ghi chép 8/8 → 20 điểm. Cảm xúc: 1 lệnh mua đuổi (0đ), không trả thù (10đ) → 10 điểm. <b>Tổng: 75/100.</b></p>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Bảng điểm tự đánh giá giai đoạn giả lập">
<text x="20" y="40" style="fill:var(--text);font-size:13px">Tuân thủ quy tắc</text>
<rect x="190" y="26" width="400" height="20" rx="4" style="fill:var(--line)"/>
<rect x="190" y="26" width="350" height="20" rx="4" style="fill:var(--accent)"/>
<text x="600" y="41" style="fill:var(--text);font-size:12px">35/40</text>
<text x="20" y="85" style="fill:var(--text);font-size:13px">Kết quả</text>
<rect x="190" y="71" width="200" height="20" rx="4" style="fill:var(--line)"/>
<rect x="190" y="71" width="100" height="20" rx="4" style="fill:var(--c2)"/>
<text x="400" y="86" style="fill:var(--text);font-size:12px">10/20</text>
<text x="20" y="130" style="fill:var(--text);font-size:13px">Ghi chép</text>
<rect x="190" y="116" width="200" height="20" rx="4" style="fill:var(--line)"/>
<rect x="190" y="116" width="200" height="20" rx="4" style="fill:var(--up)"/>
<text x="400" y="131" style="fill:var(--text);font-size:12px">20/20</text>
<text x="20" y="175" style="fill:var(--text);font-size:13px">Kiểm soát cảm xúc</text>
<rect x="190" y="161" width="200" height="20" rx="4" style="fill:var(--line)"/>
<rect x="190" y="161" width="100" height="20" rx="4" style="fill:var(--c3)"/>
<text x="400" y="176" style="fill:var(--text);font-size:12px">10/20</text>
<text x="20" y="215" style="fill:var(--text);font-size:14px;font-weight:700">Tổng: 75/100</text>
<text x="190" y="215" style="fill:var(--up);font-size:12px">≥ 70: sẵn sàng bắt đầu với vốn nhỏ · &lt; 70: giả lập thêm 2–4 tuần</text>
</svg><figcaption>Hình: Bảng điểm ví dụ (thanh màu = điểm đạt, nền xám = điểm tối đa). Tuân thủ quy tắc chiếm trọng số lớn nhất.</figcaption></figure>
<p>Lưu ý: hạng mục "Kết quả" chỉ chiếm 20 điểm vì trong vài tuần, kết quả phụ thuộc nhiều vào may rủi và diễn biến thị trường. Kỷ luật mới là thứ bạn kiểm soát được.</p>

<p><b>Bước 4: Viết kết luận (40 phút)</b></p>
<p>Viết 1 trang trả lời:</p>
<ol>
<li>Tổng điểm bao nhiêu? Hạng mục nào thấp nhất?</li>
<li>Lỗi lặp lại nhiều nhất là gì? (Ví dụ: mua sớm trước khi có xác nhận; cắt lỗ chậm 1 phiên.)</li>
<li>Bạn sẽ thay đổi 1–2 quy tắc nào? (Chỉ thay đổi khi có bằng chứng từ nhật ký, không thay vì cảm giác.)</li>
<li>Quyết định: bắt đầu đầu tư thật tháng 4, hay giả lập thêm?</li>
</ol>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp hoặc đọc lại "Làm giàu từ chứng khoán", tập trung vào phần nói về tâm lý và kỷ luật. Nếu đã đọc xong, hãy đọc lại các ghi chú về "Nhà đầu tư thông minh" của Benjamin Graham (tháng 1), đặc biệt là ý về "Ngài Thị trường" (Mr. Market): thị trường như một người bạn thất thường, mỗi ngày đưa ra một mức giá; bạn không bắt buộc phải làm theo tâm trạng của ông ta.</p>
<p><b>Câu hỏi tự trả lời:</b></p>
<ol>
<li>Trong giai đoạn giả lập, có lúc nào bạn để "Ngài Thị trường" điều khiển cảm xúc của mình không?</li>
<li>Graham và O'Neil có phương pháp rất khác nhau. Họ giống nhau ở điểm nào? (Gợi ý: kỷ luật, kiểm soát rủi ro, không chạy theo đám đông.)</li>
</ol>
`,
  quiz: [
    { q: "Vì sao hạng mục 'Tuân thủ quy tắc' có trọng số lớn nhất?", options: ["Vì dễ chấm", "Vì kỷ luật là thứ bạn kiểm soát được, còn kết quả ngắn hạn phụ thuộc may rủi", "Vì CTCK yêu cầu", "Không có lý do"], answer: 1, explain: "Trong vài tuần, kết quả bị chi phối bởi may rủi; tuân thủ quy tắc phản ánh đúng năng lực kiểm soát." },
    { q: "10 lệnh, 8 lệnh tuân thủ, có 1 lần dời cắt lỗ xuống. Điểm tuân thủ (tối đa 40)?", options: ["40", "32", "22", "30"], answer: 2, explain: "40 × 8/10 = 32, trừ 10 điểm cho lần dời cắt lỗ = 22." }
  ]
},
{
  id: "w12-7",
  week: 12,
  day: 7,
  title: "Tổng kết 3 tháng và quyết định vốn đầu tư thật",
  minutes: 240,
  summary: "Ôn tập toàn bộ tháng 1–3, kiểm tra danh sách sẵn sàng và quyết định số vốn thật cho tháng 4–6.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Không đọc sách mới. Hãy đọc lại ghi chú của cả 3 cuốn: "Nhà đầu tư thông minh", "Cổ phiếu thường, lợi nhuận phi thường", "Làm giàu từ chứng khoán". Với mỗi cuốn, viết 3 ý quan trọng nhất mà bạn sẽ áp dụng.</p>
<p><b>Ví dụ:</b> Graham: (1) phân biệt đầu tư và đầu cơ; (2) "Ngài Thị trường" thất thường, không phải người chỉ đường; (3) biên an toàn: mua thấp hơn giá trị ước tính. Fisher: (1) tìm hiểu kỹ doanh nghiệp qua nhiều nguồn; (2) ưu tiên doanh nghiệp có tiềm năng tăng trưởng lâu dài; (3) chất lượng ban lãnh đạo rất quan trọng. O'Neil: (1) CAN SLIM; (2) cắt lỗ 7–8% không ngoại lệ; (3) mua khi vượt nền với khối lượng lớn.</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Tóm tắt lộ trình 3 tháng đã hoàn thành và bước tiếp theo">
<line x1="40" y1="70" x2="600" y2="70" style="stroke:var(--line);stroke-width:4"/>
<circle cx="100" cy="70" r="14" style="fill:var(--accent)"/>
<circle cx="260" cy="70" r="14" style="fill:var(--c2)"/>
<circle cx="420" cy="70" r="14" style="fill:var(--c3)"/>
<circle cx="560" cy="70" r="14" style="fill:var(--up)"/>
<text x="100" y="75" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">1</text>
<text x="260" y="75" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">2</text>
<text x="420" y="75" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">3</text>
<text x="560" y="75" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:700">4</text>
<text x="100" y="36" text-anchor="middle" style="fill:var(--accent);font-size:13px;font-weight:700">Tháng 1</text>
<text x="260" y="36" text-anchor="middle" style="fill:var(--c2);font-size:13px;font-weight:700">Tháng 2</text>
<text x="420" y="36" text-anchor="middle" style="fill:var(--c3);font-size:13px;font-weight:700">Tháng 3</text>
<text x="560" y="36" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:700">Tháng 4–6</text>
<text x="100" y="108" text-anchor="middle" style="fill:var(--text);font-size:12px">Thị trường</text>
<text x="100" y="126" text-anchor="middle" style="fill:var(--muted);font-size:11px">Sàn, lệnh, T+2</text>
<text x="100" y="144" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vĩ mô, tin tức</text>
<text x="260" y="108" text-anchor="middle" style="fill:var(--text);font-size:12px">Phân tích cơ bản</text>
<text x="260" y="126" text-anchor="middle" style="fill:var(--muted);font-size:11px">BCTC, P/E, ROE</text>
<text x="260" y="144" text-anchor="middle" style="fill:var(--muted);font-size:11px">Ngành, phân tích 1 trang</text>
<text x="420" y="108" text-anchor="middle" style="fill:var(--text);font-size:12px">Kỹ thuật &amp; rủi ro</text>
<text x="420" y="126" text-anchor="middle" style="fill:var(--muted);font-size:11px">Nến, MA, RSI, MACD</text>
<text x="420" y="144" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vốn, cắt lỗ, tâm lý</text>
<text x="560" y="108" text-anchor="middle" style="fill:var(--text);font-size:12px">Đầu tư thật</text>
<text x="560" y="126" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vốn nhỏ, ETF + DCA</text>
<text x="560" y="144" text-anchor="middle" style="fill:var(--muted);font-size:11px">Nhật ký, so VN-Index</text>
<rect x="150" y="175" width="340" height="44" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
<text x="320" y="202" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:700">Chọn MÃ (PTCB) → Chọn LÚC (PTKT) → Giữ VỐN (rủi ro)</text>
</svg><figcaption>Hình: Ba tháng đầu xây ba trụ cột; tháng 4–6 kết hợp cả ba với tiền thật, quy mô nhỏ.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu</b> (mỗi câu 2–3 phút):</p>
<ol>
<li>Giờ giao dịch HOSE gồm những phiên nào? Biên độ HOSE, HNX, UPCoM? (Lưu ý: toàn bộ cổ phiếu niêm yết HNX chuyển sang HOSE, giao dịch trên HOSE từ 28/12/2026; lệnh thị trường trên HOSE hiện là MTL; lô lẻ HOSE giao dịch cùng giờ và phương thức với lô chẵn.)</li>
<li>Công thức P/E, ROE. Một công ty P/E 8 có chắc rẻ không?</li>
<li>Nến búa, nhấn chìm tăng, hỗ trợ/kháng cự, MA200, RSI 30/70, MACD là gì?</li>
<li>Công thức tính khối lượng mua theo quy tắc 1%.</li>
<li>Vì sao không dùng margin năm đầu? Tính ví dụ với giá giảm 30%.</li>
<li>FOMO, hiệu ứng ngược, bình quân giá xuống: mỗi cái cho 1 ví dụ.</li>
</ol>

<h3>Tổng kết tuần (1 giờ): Quyết định vốn thật</h3>
<p><b>Danh sách kiểm tra sẵn sàng</b> (cần đạt tất cả trước khi dùng tiền thật):</p>
<ul>
<li>☐ Đã có quỹ dự phòng 3–6 tháng chi tiêu, để riêng, không đầu tư.</li>
<li>☐ Không có khoản nợ lãi suất cao (thẻ tín dụng, vay tiêu dùng). Trả các khoản này trước khi đầu tư.</li>
<li>☐ Số vốn dự kiến là số tiền nếu mất 30% vẫn không ảnh hưởng cuộc sống.</li>
<li>☐ Điểm tự đánh giá giả lập ≥ 70/100.</li>
<li>☐ Có Bộ quy tắc giao dịch đã ký, và đã tuân thủ ≥ 80% số lệnh giả lập.</li>
<li>☐ Hiểu rõ T+2, phí, thuế, các loại lệnh và đã thử đặt lệnh trên app (có thể hủy trước khi khớp).</li>
<li>☐ Đã chọn ETF làm nền và ngày mua định kỳ hằng tháng.</li>
</ul>
<p><b>Ví dụ:</b> Cách tính số vốn khởi đầu cho một người có chi tiêu 12 triệu/tháng và tiền tiết kiệm 90 triệu:</p>
<ol>
<li>Quỹ dự phòng 6 tháng: 12 × 6 = 72 triệu. Giữ riêng ở tài khoản tiết kiệm.</li>
<li>Còn lại: 90 − 72 = 18 triệu. Đây là mức tối đa có thể đầu tư lúc này.</li>
<li>Kiểm tra "mất 30% có ổn không": 18 × 30% = 5,4 triệu. Nếu mất 5,4 triệu khiến bạn mất ngủ, hãy bắt đầu với 10 triệu.</li>
<li>Phân bổ (ví dụ với 15 triệu): ETF VN30 8 triệu (≈ 53%), 2 cổ phiếu tự phân tích 2,5 triệu mỗi mã (≈ 33%), tiền mặt 2 triệu (≈ 13%).</li>
<li>DCA: mỗi tháng trích thêm 2 triệu từ thu nhập để mua ETF vào một ngày cố định.</li>
</ol>
<p>Nếu chưa đạt danh sách kiểm tra: <b>kéo dài giả lập thêm 2–4 tuần</b> là quyết định đúng, không phải thất bại. Tiền thật sẽ vẫn còn đó khi bạn sẵn sàng.</p>
<p><b>Câu hỏi phản tư 3 tháng:</b></p>
<ul>
<li>Điều quan trọng nhất bạn học được trong 3 tháng là gì?</li>
<li>Bạn đã thay đổi cách nghĩ về đầu tư như thế nào so với ngày đầu tiên?</li>
<li>Mục tiêu cụ thể cho tháng 4–6 (không phải mục tiêu lợi nhuận, mà là mục tiêu hành vi, ví dụ "tuân thủ 100% cắt lỗ", "ghi nhật ký mọi lệnh")?</li>
</ul>
<p>Đánh dấu hoàn thành "Tuần 12: Giao dịch giả lập" trong tab Lộ trình.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Ôn lại phần bạn trả lời sai nhiều nhất trong quiz hôm nay. Sau đó nghỉ ngơi: bạn đã hoàn thành 3 tháng học tập nghiêm túc.</p>
`,
  quiz: [
    { q: "Chi tiêu 10 triệu/tháng, tiết kiệm 80 triệu, muốn quỹ dự phòng 6 tháng. Số tiền tối đa có thể đầu tư?", options: ["80 triệu", "60 triệu", "20 triệu", "50 triệu"], answer: 2, explain: "Quỹ dự phòng 60 triệu; còn lại 80 − 60 = 20 triệu." },
    { q: "Điểm tự đánh giá giả lập 62/100. Quyết định hợp lý?", options: ["Bắt đầu với toàn bộ vốn", "Giả lập thêm 2–4 tuần", "Dùng margin để bù", "Bỏ không học nữa"], answer: 1, explain: "Dưới 70 điểm nên tiếp tục giả lập để cải thiện kỷ luật trước khi dùng tiền thật." },
    { q: "Giờ khớp lệnh định kỳ mở cửa (ATO) trên HOSE là?", options: ["9:00–9:15", "8:30–9:00", "14:30–14:45", "Không có"], answer: 0, explain: "ATO trên HOSE từ 9:00 đến 9:15 (quy định có thể thay đổi)." },
    { q: "Công ty có lợi nhuận sau thuế 200 tỷ, vốn chủ sở hữu 1.000 tỷ. ROE?", options: ["2%", "5%", "20%", "50%"], answer: 2, explain: "ROE = 200 ÷ 1.000 = 20%." },
    { q: "Vốn 30 triệu, rủi ro 1%, mua 25.000, cắt lỗ 23.500. Số cổ phiếu (lô 100)?", options: ["100", "200", "300", "400"], answer: 1, explain: "300.000 ÷ 1.500 = 200 cổ phiếu." },
    { q: "Lỗ 20% cần lãi bao nhiêu % để hòa vốn?", options: ["20%", "25%", "30%", "40%"], answer: 1, explain: "20 ÷ 80 = 25%." },
    { q: "Margin 1:1, giá cổ phiếu giảm 30%. Tài sản ròng giảm bao nhiêu?", options: ["30%", "45%", "60%", "100%"], answer: 2, explain: "200 → 140, trừ nợ 100 còn 40: giảm 60%." },
    { q: "RSI = 25 nhưng giá dưới MA50 và MA200, cả hai dốc xuống. Nhận định?", options: ["Chắc chắn là đáy, mua mạnh", "Xu hướng chính vẫn giảm, quá bán chỉ báo nhịp hồi ngắn có thể xảy ra", "RSI bị lỗi", "Nên vay margin"], answer: 1, explain: "Quá bán trong xu hướng giảm không phải tín hiệu mua dài hạn." },
    { q: "Mua 200 CP ở 40.000, mua thêm 200 CP ở 30.000. Giá vốn TB?", options: ["30.000", "35.000", "40.000", "70.000"], answer: 1, explain: "(8 triệu + 6 triệu) ÷ 400 = 35.000đ." },
    { q: "Sau 6 tháng, danh mục lãi 6%, VN30 tăng 10%. Theo lộ trình nên làm gì?", options: ["Tăng tỷ trọng ETF", "Mua nhiều mã hơn", "Giao dịch thường xuyên hơn", "Dùng margin"], answer: 0, explain: "Thua chỉ số cùng kỳ thì tăng tỷ trọng ETF." }
  ]
}
);
