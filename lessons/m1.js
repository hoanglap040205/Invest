// Bài học tuần 1–4 (Tháng 1: Nền tảng, công cụ, vĩ mô)
// Số liệu trong ví dụ là minh họa. Quy định giao dịch có thể thay đổi, hãy kiểm tra lại với CTCK/HOSE/HNX.
(window.LESSONS = window.LESSONS || []).push(

/* ======================= TUẦN 1: HIỂU THỊ TRƯỜNG ======================= */
{
  id: "w01-1", week: 1, day: 1, minutes: 120,
  title: "Cổ phiếu là gì và vì sao giá thay đổi",
  summary: "Hiểu cổ phiếu là quyền sở hữu một phần doanh nghiệp, và giá trên sàn do cung – cầu quyết định.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Mở CafeF hoặc Vietstock, đọc tin tổng hợp thị trường hôm nay. Chỉ cần trả lời: VN-Index hôm nay tăng hay giảm? Bài báo nói nguyên nhân là gì? Ghi 2–3 dòng vào nhật ký.</div>

<h3>1. Cổ phiếu = một mảnh của doanh nghiệp</h3>
<p>Một công ty cổ phần chia vốn điều lệ thành nhiều phần bằng nhau gọi là <b>cổ phần</b>. Bằng chứng bạn sở hữu cổ phần gọi là <b>cổ phiếu</b> (ngày nay chỉ là ghi nhận điện tử trong tài khoản, không còn tờ giấy). Ở Việt Nam, <b>mệnh giá</b> mỗi cổ phiếu là <b>10.000 đồng</b> — đây chỉ là con số trên sổ sách, còn giá mua bán thật trên sàn có thể cao hoặc thấp hơn rất nhiều.</p>
<p><b>Ví dụ:</b> Bạn và 3 người bạn góp vốn mở quán cà phê, mỗi người 100 triệu, tổng 400 triệu. Nếu chia thành 40.000 cổ phần mệnh giá 10.000đ, mỗi người giữ 10.000 cổ phần = 25% quán. Cuối năm quán lãi 80 triệu và quyết định chia hết → mỗi người nhận 20 triệu. Công ty niêm yết hoạt động y hệt, chỉ là có hàng triệu “người góp vốn”.</p>
<p><b>Ví dụ:</b> Công ty A (số liệu minh họa) có 100.000.000 cổ phiếu. Bạn mua 1.000 cổ phiếu → tỷ lệ sở hữu = 1.000 ÷ 100.000.000 = <b>0,001%</b>. Nếu công ty chia cổ tức tổng cộng 150 tỷ đồng, phần của bạn = 150 tỷ × 0,001% = 1,5 triệu đồng (trước thuế).</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Công ty chia vốn thành cổ phiếu, nhà đầu tư sở hữu một phần">
  <defs><marker id="w011a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker></defs>
  <rect x="20" y="40" width="180" height="150" rx="12" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="110" y="70" text-anchor="middle" style="fill:var(--text);font-size:15px;font-weight:600">Công ty A</text>
  <text x="110" y="92" text-anchor="middle" style="fill:var(--muted);font-size:12px">Vốn chia thành</text>
  <text x="110" y="110" text-anchor="middle" style="fill:var(--muted);font-size:12px">100 triệu cổ phiếu</text>
  <rect x="45" y="130" width="22" height="22" rx="3" style="fill:var(--accent);fill-opacity:0.6"/>
  <rect x="72" y="130" width="22" height="22" rx="3" style="fill:var(--accent);fill-opacity:0.6"/>
  <rect x="99" y="130" width="22" height="22" rx="3" style="fill:var(--accent);fill-opacity:0.6"/>
  <rect x="126" y="130" width="22" height="22" rx="3" style="fill:var(--accent);fill-opacity:0.6"/>
  <rect x="153" y="130" width="22" height="22" rx="3" style="fill:var(--up)"/>
  <text x="164" y="175" text-anchor="middle" style="fill:var(--up);font-size:11px">của bạn</text>
  <path d="M205 115 H300" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w011a)"/>
  <text x="252" y="105" text-anchor="middle" style="fill:var(--muted);font-size:12px">giao dịch</text>
  <text x="252" y="135" text-anchor="middle" style="fill:var(--muted);font-size:12px">trên sàn</text>
  <circle cx="390" cy="115" r="70" style="fill:var(--line)"/>
  <path d="M390 115 L390 45 A70 70 0 0 1 456 92 Z" style="fill:var(--up)"/>
  <text x="390" y="210" text-anchor="middle" style="fill:var(--text);font-size:13px">Cơ cấu sở hữu</text>
  <rect x="480" y="80" width="14" height="14" style="fill:var(--up)"/>
  <text x="500" y="92" style="fill:var(--text);font-size:12px">Phần của bạn</text>
  <text x="500" y="108" style="fill:var(--muted);font-size:11px">(phóng to để dễ nhìn)</text>
  <rect x="480" y="125" width="14" height="14" style="fill:var(--line)"/>
  <text x="500" y="137" style="fill:var(--text);font-size:12px">Cổ đông khác</text>
</svg><figcaption>Hình: Mua cổ phiếu là mua một phần quyền sở hữu doanh nghiệp, không phải mua một “mã” để đánh cược.</figcaption></figure>

<h3>2. Nhà đầu tư kiếm tiền từ đâu?</h3>
<p>Có hai nguồn: <b>chênh lệch giá</b> (bán cao hơn giá mua) và <b>cổ tức</b> (phần lợi nhuận công ty chia cho cổ đông, bằng tiền hoặc bằng cổ phiếu).</p>
<p><b>Ví dụ:</b> Bạn mua 200 cổ phiếu B giá 25.000đ = 5.000.000đ. Trong năm công ty trả cổ tức tiền 1.000đ/cp → nhận 200 × 1.000 = 200.000đ, trừ thuế 5% còn 190.000đ. Cuối năm bạn bán ở 28.000đ → chênh lệch 200 × 3.000 = 600.000đ. Tổng lợi nhuận trước phí ≈ 790.000đ, tương đương 790.000 ÷ 5.000.000 = <b>15,8%</b>.</p>
<p>Về dài hạn, giá cổ phiếu đi theo <b>lợi nhuận</b> của doanh nghiệp. Ngắn hạn, giá có thể dao động mạnh vì tâm lý và dòng tiền.</p>
<p><b>Ví dụ:</b> Công ty C (minh họa) có lợi nhuận mỗi cổ phiếu 2.000đ, thị trường sẵn lòng trả gấp 12 lần → giá khoảng 24.000đ. Năm năm sau lợi nhuận tăng lên 4.000đ/cp, vẫn gấp 12 lần → giá khoảng 48.000đ. Giá tăng gấp đôi vì lợi nhuận tăng gấp đôi, dù giữa chừng có lúc giá rơi về 18.000đ vì thị trường hoảng loạn.</p>

<h3>3. Vì sao giá thay đổi mỗi phút?</h3>
<p>Giá trên sàn là kết quả <b>khớp lệnh</b> giữa người muốn mua và người muốn bán. Khi nhiều người muốn mua hơn người muốn bán (cầu &gt; cung), người mua phải trả giá cao hơn để được khớp → giá tăng; ngược lại giá giảm.</p>
<p><b>Ví dụ:</b> Ở chợ chỉ còn 10 con cá, nhưng có 30 người muốn mua. Người bán sẽ nâng giá, người mua chấp nhận trả thêm để có cá. Chiều tối còn 30 con cá mà chỉ 5 người mua → người bán phải hạ giá để bán hết. Cổ phiếu cũng vậy, chỉ là diễn ra trong vài giây trên hệ thống điện tử.</p>
<table>
  <tr><th>Yếu tố</th><th>Ví dụ tác động</th></tr>
  <tr><td>Kết quả kinh doanh</td><td>Lợi nhuận quý tăng 40% so với cùng kỳ → nhiều người muốn mua</td></tr>
  <tr><td>Vĩ mô</td><td>Lãi suất tiết kiệm giảm từ 7% xuống 5% → tiền chuyển dần sang cổ phiếu</td></tr>
  <tr><td>Tin tức, sự kiện</td><td>Trúng thầu dự án lớn (tích cực), bị xử phạt thuế (tiêu cực)</td></tr>
  <tr><td>Tâm lý đám đông</td><td>Thị trường giảm 5 phiên liên tiếp → nhiều người bán tháo vì sợ</td></tr>
  <tr><td>Dòng tiền lớn</td><td>Quỹ ETF mua thêm hàng triệu cổ phiếu khi cơ cấu danh mục</td></tr>
</table>

<h3>4. Công ty “niêm yết” là gì?</h3>
<p>Niêm yết là việc cổ phiếu được đưa vào giao dịch trên sở giao dịch (HOSE hoặc HNX) sau khi đáp ứng điều kiện về vốn, lợi nhuận, minh bạch. Công ty niêm yết phải <b>công bố thông tin định kỳ</b>: báo cáo tài chính, nghị quyết đại hội, giao dịch của lãnh đạo… Nhờ đó nhà đầu tư nhỏ có dữ liệu để phân tích.</p>
<p><b>Ví dụ:</b> Một quán cà phê gia đình không ai biết lãi bao nhiêu. Còn một công ty niêm yết thì mỗi quý bạn có thể tải báo cáo tài chính miễn phí trên website công ty hoặc CafeF, biết chính xác doanh thu, lợi nhuận, nợ vay của họ.</p>

<div class="warn">⚠ Giá rẻ không có nghĩa là cổ phiếu “rẻ”. Cổ phiếu 5.000đ có thể đắt hơn cổ phiếu 100.000đ nếu công ty 5.000đ đang thua lỗ. Thứ cần so sánh là giá với <b>lợi nhuận và tài sản</b> của công ty (sẽ học ở tháng 2).</div>
<p><b>Ví dụ:</b> Cổ phiếu D giá 5.000đ nhưng mỗi cổ phiếu lỗ 500đ/năm; cổ phiếu E giá 100.000đ nhưng mỗi cổ phiếu lãi 10.000đ/năm. Bỏ 100 triệu vào E, phần lợi nhuận bạn “sở hữu” là 10 triệu/năm; bỏ vào D thì bạn đang sở hữu khoản lỗ.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Chọn 1 công ty bạn dùng sản phẩm hằng ngày (sữa, điện thoại, ngân hàng…). Tra mã cổ phiếu trên CafeF hoặc Vietstock.</li>
  <li>Ghi lại: giá hiện tại, số cổ phiếu lưu hành, vốn hóa. Tự tính lại vốn hóa = giá × số cổ phiếu và so với số trên trang.</li>
  <li>Viết 3 câu: Công ty bán gì? Ai là khách hàng? Vì sao bạn nghĩ nó có lãi?</li>
</ol>
<p>Kết quả mong đợi: một ghi chú ngắn kèm phép tính vốn hóa khớp (sai lệch nhỏ do làm tròn) với số trên trang tra cứu.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Cổ phiếu là quyền sở hữu một phần doanh nghiệp; mệnh giá 10.000đ chỉ mang tính sổ sách.</li>
  <li>Lợi nhuận đến từ chênh lệch giá và cổ tức.</li>
  <li>Ngắn hạn giá theo cung – cầu và tâm lý; dài hạn giá theo lợi nhuận.</li>
  <li>Vốn hóa = giá × số cổ phiếu lưu hành.</li>
</ul></div>
`,
  quiz: [
    { q: "Mệnh giá cổ phiếu niêm yết tại Việt Nam là bao nhiêu?", options: ["1.000đ", "10.000đ", "100.000đ", "Bằng giá trên sàn"], answer: 1, explain: "Mệnh giá là 10.000đ; giá giao dịch thực tế do cung – cầu quyết định." },
    { q: "Về dài hạn, yếu tố nào quyết định giá cổ phiếu nhiều nhất?", options: ["Tin đồn trên mạng", "Lợi nhuận của doanh nghiệp", "Màu sắc trên bảng giá", "Số lượng nhà đầu tư cá nhân"], answer: 1, explain: "Ngắn hạn giá theo tâm lý, dài hạn giá theo lợi nhuận." },
    { q: "Công ty có 50 triệu cổ phiếu, giá 30.000đ. Vốn hóa là:", options: ["150 tỷ đồng", "1.500 tỷ đồng", "500 tỷ đồng", "15.000 tỷ đồng"], answer: 1, explain: "50.000.000 × 30.000 = 1.500.000.000.000đ = 1.500 tỷ đồng." }
  ]
},

{
  id: "w01-2", week: 1, day: 2, minutes: 120,
  title: "Ba sàn giao dịch và các chỉ số thị trường",
  summary: "Phân biệt HOSE, HNX, UPCoM; hiểu VN-Index, VN30, HNX-Index đo cái gì và vì sao chỉ số có thể “đánh lừa”.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Khi đọc tin thị trường hôm nay, tìm xem bài báo nhắc đến những mã nào “dẫn dắt” hoặc “kéo” VN-Index. Ghi lại tên các mã đó và chúng tăng hay giảm.</div>

<h3>1. Ba nơi giao dịch cổ phiếu</h3>
<table>
  <tr><th>Sàn</th><th>Đặc điểm</th><th>Biên độ</th></tr>
  <tr><td><b>HOSE</b> (Sở GDCK TP.HCM)</td><td>Doanh nghiệp lớn nhất, thanh khoản cao nhất. Gần như toàn bộ mã VN30 ở đây.</td><td>±7%</td></tr>
  <tr><td><b>HNX</b> (Sở GDCK Hà Nội)</td><td>Doanh nghiệp quy mô vừa và nhỏ hơn.</td><td>±10%</td></tr>
  <tr><td><b>UPCoM</b></td><td>Thị trường cho công ty đại chúng chưa niêm yết. Điều kiện nhẹ hơn, thông tin ít hơn, biến động mạnh hơn.</td><td>±15%</td></tr>
</table>
<p><b>Ví dụ:</b> Một cổ phiếu giá tham chiếu 10.000đ. Trong 1 phiên, nếu nằm trên HOSE thì giá chỉ được chạy trong khoảng 9.300–10.700đ; trên HNX là 9.000–11.000đ; trên UPCoM là 8.500–11.500đ. Nếu bạn có 10 triệu đồng, ngày xấu nhất bạn có thể mất trên giấy 700.000đ (HOSE) nhưng tới 1.500.000đ (UPCoM).</p>
<div class="warn">⚠ <b>Thay đổi sắp tới:</b> theo Thông tư 139/2025, toàn bộ cổ phiếu niêm yết trên HNX chuyển sang HOSE: ngày giao dịch cuối cùng trên HNX là 23/12/2026, ngày giao dịch đầu tiên trên HOSE là 28/12/2026. Sau thời điểm đó, các thông số riêng của HNX (biên độ ±10%, phiên PLO, bước giá 100đ) không còn áp dụng cho cổ phiếu niêm yết — chúng theo quy định của HOSE. UPCoM hiện chưa có thay đổi. Hãy kiểm tra thông báo mới nhất của HOSE/HNX.</div>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="So sánh biên độ dao động ba sàn">
  <line x1="60" y1="120" x2="600" y2="120" style="stroke:var(--ref);stroke-width:2;stroke-dasharray:6 4"/>
  <text x="575" y="112" style="fill:var(--ref);font-size:12px">TC</text>
  <rect x="110" y="92" width="80" height="56" rx="6" style="fill:var(--accent);fill-opacity:0.25"/>
  <text x="150" y="86" text-anchor="middle" style="fill:var(--ceil);font-size:12px">+7%</text>
  <text x="150" y="163" text-anchor="middle" style="fill:var(--floor);font-size:12px">−7%</text>
  <text x="150" y="215" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600">HOSE</text>
  <rect x="280" y="80" width="80" height="80" rx="6" style="fill:var(--accent);fill-opacity:0.35"/>
  <text x="320" y="74" text-anchor="middle" style="fill:var(--ceil);font-size:12px">+10%</text>
  <text x="320" y="175" text-anchor="middle" style="fill:var(--floor);font-size:12px">−10%</text>
  <text x="320" y="215" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600">HNX</text>
  <rect x="450" y="60" width="80" height="120" rx="6" style="fill:var(--accent);fill-opacity:0.5"/>
  <text x="490" y="54" text-anchor="middle" style="fill:var(--ceil);font-size:12px">+15%</text>
  <text x="490" y="195" text-anchor="middle" style="fill:var(--floor);font-size:12px">−15%</text>
  <text x="490" y="215" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600">UPCoM</text>
</svg><figcaption>Hình: Biên độ dao động tối đa trong một phiên so với giá tham chiếu (TC). Biên càng rộng, giá có thể biến động càng mạnh trong 1 ngày.</figcaption></figure>

<h3>2. Chỉ số thị trường là gì?</h3>
<p>Chỉ số là một con số đại diện cho “nhiệt độ” chung của một nhóm cổ phiếu. Các chỉ số chính ở Việt Nam tính theo <b>vốn hóa</b>: công ty càng lớn, ảnh hưởng đến chỉ số càng nhiều.</p>
<ul>
  <li><b>VN-Index</b>: gồm các cổ phiếu trên HOSE, mốc gốc 100 điểm (năm 2000).</li>
  <li><b>VN30</b>: 30 cổ phiếu vốn hóa lớn, thanh khoản cao trên HOSE, xét lại định kỳ mỗi nửa năm. Là chỉ số nền cho các quỹ ETF VN30.</li>
  <li><b>HNX-Index</b>, <b>UPCoM-Index</b>: đại diện cho hai sàn còn lại.</li>
</ul>
<p><b>Ví dụ:</b> VN-Index đang ở 1.250 điểm, cuối ngày đóng cửa 1.275 điểm → tăng 25 điểm, tức 25 ÷ 1.250 = <b>+2%</b>. Điều này nghĩa là tổng giá trị (đã điều chỉnh) của các cổ phiếu trên HOSE tăng khoảng 2% trong ngày — không có nghĩa mọi mã đều tăng 2%.</p>

<figure class="fig"><svg viewBox="0 0 640 220" role="img" aria-label="VN30 là tập con của HOSE">
  <ellipse cx="260" cy="110" rx="230" ry="95" style="fill:var(--accent);fill-opacity:0.12;stroke:var(--accent);stroke-width:1.5"/>
  <text x="80" y="62" style="fill:var(--text);font-size:14px;font-weight:600">HOSE → VN-Index</text>
  <text x="80" y="82" style="fill:var(--muted);font-size:12px">(cổ phiếu trên sàn HOSE)</text>
  <ellipse cx="320" cy="128" rx="95" ry="55" style="fill:var(--up);fill-opacity:0.25;stroke:var(--up);stroke-width:1.5"/>
  <text x="320" y="124" text-anchor="middle" style="fill:var(--text);font-size:14px;font-weight:600">VN30</text>
  <text x="320" y="144" text-anchor="middle" style="fill:var(--muted);font-size:12px">30 mã lớn</text>
  <ellipse cx="565" cy="110" rx="62" ry="55" style="fill:var(--ref);fill-opacity:0.18;stroke:var(--ref);stroke-width:1.5"/>
  <text x="565" y="106" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">HNX</text>
  <text x="565" y="126" text-anchor="middle" style="fill:var(--muted);font-size:11px">HNX-Index</text>
</svg><figcaption>Hình: VN30 là một “rổ con” nằm trong HOSE. Vài cổ phiếu vốn hóa lớn có thể kéo cả VN-Index.</figcaption></figure>

<h3>3. Chỉ số tính theo vốn hóa “đánh lừa” thế nào?</h3>
<p><b>Ví dụ:</b> Giả sử một thị trường chỉ có 3 công ty (số liệu minh họa):</p>
<table>
  <tr><th>Công ty</th><th>Vốn hóa</th><th>Hôm nay</th><th>Đóng góp</th></tr>
  <tr><td>Ngân hàng lớn X</td><td>800 nghìn tỷ</td><td>+3%</td><td>+24 nghìn tỷ</td></tr>
  <tr><td>Công ty Y</td><td>100 nghìn tỷ</td><td>−4%</td><td>−4 nghìn tỷ</td></tr>
  <tr><td>Công ty Z</td><td>100 nghìn tỷ</td><td>−5%</td><td>−5 nghìn tỷ</td></tr>
</table>
<p>Tổng vốn hóa từ 1.000 lên 1.015 nghìn tỷ → chỉ số <b>tăng 1,5%</b>, trong khi 2 trên 3 công ty giảm mạnh. Vì vậy hãy luôn nhìn thêm <b>độ rộng thị trường</b>: số mã tăng / giảm / đứng giá (hiện ngay dưới chỉ số trên bảng giá).</p>

<h3>4. Vì sao người mới nên bắt đầu với HOSE và VN30?</h3>
<p>Thanh khoản tốt (mua bán dễ, chênh lệch giá mua – bán nhỏ), công ty lớn, minh bạch hơn, nhiều báo cáo phân tích miễn phí.</p>
<p><b>Ví dụ:</b> Bạn muốn bán 1.000 cổ phiếu. Ở một mã VN30, mỗi phút có hàng chục nghìn cổ phiếu khớp, bạn bán ngay ở giá gần giá thị trường. Ở một mã UPCoM cả ngày chỉ khớp 2.000 cổ phiếu, bạn có thể phải hạ giá 5–10% mới bán được.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Mở bảng giá, ghi lại: VN-Index, VN30, HNX-Index tăng/giảm bao nhiêu điểm và %.</li>
  <li>Ghi số mã tăng / giảm / đứng giá trên HOSE. Chỉ số và độ rộng có cùng chiều không?</li>
  <li>Tìm danh sách 30 mã VN30 hiện tại (trang HOSE hoặc CafeF), lưu lại để dùng ở tuần 2.</li>
</ol>
<p>Kết quả mong đợi: một bảng nhỏ 3 chỉ số + độ rộng, và danh sách VN30 đã lưu.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>HOSE ±7%, HNX ±10%, UPCoM ±15% (quy định có thể thay đổi, kiểm tra lại với HOSE/HNX).</li>
  <li>Chỉ số tính theo vốn hóa: vài mã lớn có thể kéo cả chỉ số.</li>
  <li>Luôn xem độ rộng thị trường bên cạnh chỉ số.</li>
  <li>Người mới ưu tiên HOSE, nhóm VN30 và ETF.</li>
</ul></div>
`,
  quiz: [
    { q: "Biên độ dao động trên sàn HNX là:", options: ["±7%", "±10%", "±15%", "±20%"], answer: 1, explain: "HOSE ±7%, HNX ±10%, UPCoM ±15%." },
    { q: "VN30 gồm những cổ phiếu nào?", options: ["30 mã tăng mạnh nhất tuần", "30 mã vốn hóa và thanh khoản lớn trên HOSE", "30 mã trên HNX", "30 mã có giá cao nhất"], answer: 1, explain: "VN30 chọn theo vốn hóa, thanh khoản và các tiêu chí khác; xét lại định kỳ." },
    { q: "VN-Index tăng nhưng đa số mã giảm. Lý do hợp lý nhất?", options: ["Bảng giá bị lỗi", "Vài cổ phiếu vốn hóa lớn tăng mạnh kéo chỉ số", "Ngày nghỉ lễ", "Chỉ số tính theo số lượng mã"], answer: 1, explain: "Chỉ số tính theo vốn hóa nên các mã lớn ảnh hưởng rất mạnh." }
  ]
},

{
  id: "w01-3", week: 1, day: 3, minutes: 120,
  title: "Giờ giao dịch và các loại lệnh",
  summary: "Nắm các phiên ATO, khớp liên tục, ATC và cách dùng lệnh LO, ATO, ATC, MTL.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm trong tin hôm nay cụm từ “phiên ATC” hoặc “cuối phiên”. Thị trường có biến động mạnh trong 15 phút cuối không? Ghi lại.</div>

<h3>1. Một ngày giao dịch trên HOSE</h3>
<figure class="fig"><svg viewBox="0 0 640 170" role="img" aria-label="Lịch phiên giao dịch HOSE">
  <rect x="20" y="50" width="40" height="40" style="fill:var(--ref);fill-opacity:0.7"/>
  <rect x="60" y="50" width="180" height="40" style="fill:var(--up);fill-opacity:0.55"/>
  <rect x="240" y="50" width="120" height="40" style="fill:var(--line)"/>
  <rect x="360" y="50" width="200" height="40" style="fill:var(--up);fill-opacity:0.55"/>
  <rect x="560" y="50" width="40" height="40" style="fill:var(--ceil);fill-opacity:0.7"/>
  <text x="40" y="75" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">ATO</text>
  <text x="150" y="75" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Khớp lệnh liên tục</text>
  <text x="300" y="75" text-anchor="middle" style="fill:var(--muted);font-size:12px">Nghỉ trưa</text>
  <text x="460" y="75" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Khớp lệnh liên tục</text>
  <text x="580" y="75" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">ATC</text>
  <text x="20" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">9:00</text>
  <text x="62" y="128" text-anchor="middle" style="fill:var(--muted);font-size:11px">9:15</text>
  <text x="240" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">11:30</text>
  <text x="360" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">13:00</text>
  <text x="560" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">14:30</text>
  <text x="602" y="128" text-anchor="middle" style="fill:var(--muted);font-size:11px">14:45</text>
  <text x="320" y="158" text-anchor="middle" style="fill:var(--muted);font-size:11px">Thỏa thuận: 9:00–11:30 và 13:00–15:00 (lô lớn, cá nhân ít dùng)</text>
</svg><figcaption>Hình: Lịch phiên trên HOSE. HNX không có ATO (liên tục 9:00–11:30, 13:00–14:30, ATC 14:30–14:45, PLO 14:45–15:00 gồm 10 phút khớp định kỳ + 5 phút khớp liên tục); UPCoM khớp liên tục 9:00–11:30 và 13:00–15:00, không có ATO/ATC. Có thể thay đổi, kiểm tra lại với CTCK/HOSE/HNX.</figcaption></figure>
<div class="warn">⚠ <b>Thay đổi sắp tới:</b> theo Thông tư 139/2025, toàn bộ cổ phiếu niêm yết trên HNX chuyển sang HOSE: ngày giao dịch cuối cùng trên HNX là 23/12/2026, ngày giao dịch đầu tiên trên HOSE là 28/12/2026. Sau thời điểm đó, các thông số riêng của HNX (biên độ ±10%, phiên PLO, bước giá 100đ) không còn áp dụng cho cổ phiếu niêm yết — chúng theo quy định của HOSE. UPCoM hiện chưa có thay đổi. Hãy kiểm tra thông báo mới nhất của HOSE/HNX.</div>
<p><b>Ví dụ:</b> Bạn đi làm, chỉ rảnh lúc 12:00 trưa. Lúc đó thị trường đang nghỉ trưa, bạn vẫn đặt được lệnh LO (lệnh chờ sẵn), lệnh sẽ được đưa vào khớp khi phiên chiều mở lúc 13:00.</p>

<h3>2. Khớp lệnh định kỳ và khớp lệnh liên tục</h3>
<p><b>Khớp lệnh định kỳ</b> (ATO đầu ngày, ATC cuối ngày): hệ thống gom tất cả lệnh trong khoảng thời gian, rồi chọn <b>một mức giá duy nhất</b> khớp được khối lượng lớn nhất. Trong phiên này bạn chỉ thấy giá dự kiến.</p>
<p><b>Ví dụ:</b> Phiên ATC có lệnh mua: 1.000 cp giá 20,1; 2.000 cp giá 20,0. Lệnh bán: 1.500 cp giá 19,9; 1.500 cp giá 20,0. Ở giá 20,0: bên mua sẵn lòng 3.000 cp (ai trả ≥ 20,0), bên bán sẵn lòng 3.000 cp (ai bán ≤ 20,0) → khớp 3.000 cp. Ở giá 20,1: mua 1.000, bán 3.000 → chỉ khớp 1.000. Hệ thống chọn <b>20,0</b> vì khớp được nhiều nhất; tất cả đều khớp cùng một giá 20,0.</p>
<p><b>Khớp lệnh liên tục</b>: lệnh vào là được so khớp ngay với lệnh đối ứng tốt nhất. Ưu tiên <b>giá tốt hơn trước</b>, cùng giá thì <b>lệnh vào trước khớp trước</b>.</p>
<p><b>Ví dụ:</b> Lúc 10:00 An đặt mua 25,40; lúc 10:05 Bình cũng đặt mua 25,40; lúc 10:06 Chi đặt mua 25,45. Khi có người bán xuống 25,40 trở xuống, Chi khớp trước (giá tốt hơn), rồi đến An (đặt sớm hơn), cuối cùng mới đến Bình.</p>

<h3>3. Các loại lệnh cơ bản</h3>
<table>
  <tr><th>Lệnh</th><th>Ý nghĩa</th><th>Khi nào dùng</th></tr>
  <tr><td><b>LO</b> (lệnh giới hạn)</td><td>Mua/bán tại giá bạn chọn hoặc tốt hơn. Chờ đến khi khớp hoặc hết ngày.</td><td>Dùng nhiều nhất; người mới nên dùng LO.</td></tr>
  <tr><td><b>ATO</b></td><td>Khớp ở giá mở cửa, ưu tiên trước lệnh LO.</td><td>Muốn chắc chắn giao dịch ngay đầu phiên.</td></tr>
  <tr><td><b>ATC</b></td><td>Khớp ở giá đóng cửa, ưu tiên trước lệnh LO.</td><td>Muốn giao dịch ở giá cuối ngày.</td></tr>
  <tr><td><b>MTL</b> (lệnh thị trường giới hạn; trước đây HOSE dùng lệnh MP)</td><td>Mua ở giá bán thấp nhất / bán ở giá mua cao nhất đang có, quét lần lượt các mức giá; phần chưa khớp chuyển thành lệnh LO tại giá khớp cuối cùng.</td><td>Cần khớp ngay; rủi ro giá xấu nếu thanh khoản mỏng.</td></tr>
</table>
<p><b>Ví dụ lệnh LO:</b> Cổ phiếu X đang có người bán thấp nhất 25,50 (25.500đ), người mua cao nhất 25,40. Bạn đặt mua LO 25,40 → xếp hàng chờ. Đặt mua LO 25,50 → khớp ngay nếu đủ khối lượng. Đặt mua LO 25,30 → chỉ khớp nếu giá rơi xuống 25,30.</p>
<p><b>Ví dụ lệnh MTL nguy hiểm:</b> Mã ít thanh khoản có bên bán: 100 cp giá 15,0; 200 cp giá 15,5; 1.000 cp giá 16,5. Bạn mua MTL 1.000 cp → khớp 100 cp ở 15,0, 200 cp ở 15,5 và 700 cp ở 16,5. Giá trung bình = (1.500.000 + 3.100.000 + 11.550.000) ÷ 1.000 = <b>16.150đ</b>, đắt hơn 7,7% so với giá 15,0 bạn nhìn thấy lúc đầu.</p>
<p><b>Ví dụ phần dư của MTL:</b> Nếu bên bán chỉ có tổng 600 cp (100 ở 15,0; 200 ở 15,5; 300 ở 16,5) mà bạn mua MTL 1.000 cp → khớp 600 cp, 400 cp còn lại tự chuyển thành lệnh mua LO 16,5 nằm chờ trên sổ lệnh.</p>
<p>Từ khi hệ thống giao dịch KRX vận hành (05/5/2025), lệnh thị trường trên HOSE là <b>MTL</b>. Trên HNX có thêm <b>MOK</b> (khớp toàn bộ ngay, không đủ thì hủy cả lệnh) và <b>MAK</b> (khớp được bao nhiêu thì khớp, phần còn lại hủy), cùng lệnh <b>PLO</b> trong phiên sau giờ. Bạn chỉ cần biết chúng tồn tại.</p>
<p><b>Ví dụ MOK và MAK:</b> Bên bán chỉ có 600 cp. Lệnh mua MOK 1.000 cp → bị hủy toàn bộ, không khớp cổ phiếu nào. Lệnh mua MAK 1.000 cp → khớp 600 cp, 400 cp còn lại bị hủy.</p>

<div class="warn">⚠ ATO/ATC/MTL “chấp nhận mọi giá”. Người mới: <b>ưu tiên lệnh LO</b> để kiểm soát giá.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Vẽ lại sơ đồ giờ giao dịch HOSE vào sổ, không nhìn hình.</li>
  <li>Chọn loại lệnh cho 3 tình huống: (a) muốn mua nhưng không trả quá 30.000đ; (b) cần bán gấp một mã VN30 thanh khoản cao; (c) muốn bán đúng giá đóng cửa.</li>
  <li>Phiên ATC: lệnh mua 500 cp giá 10,2 và 1.000 cp giá 10,1; lệnh bán 800 cp giá 10,0 và 1.000 cp giá 10,2. Tìm giá khớp và khối lượng khớp.</li>
</ol>
<p>Đáp án: (a) LO 30,00; (b) MTL hoặc LO tại giá mua tốt nhất; (c) ATC. Câu 3: ở 10,1 mua 1.500 / bán 800 → khớp 800; ở 10,2 mua 500 / bán 1.800 → khớp 500; ở 10,0 mua 1.500 / bán 800 → khớp 800. Hai mức 10,0 và 10,1 cùng khớp 800 cp, hệ thống chọn theo nguyên tắc phụ (gần giá tham chiếu/giá khớp gần nhất) — điều quan trọng là bạn thấy giá định kỳ được chọn để khớp nhiều nhất.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>HOSE: ATO 9:00–9:15, liên tục đến 11:30, nghỉ trưa, liên tục 13:00–14:30, ATC 14:30–14:45.</li>
  <li>Khớp liên tục: ưu tiên giá, rồi thời gian.</li>
  <li>LO kiểm soát giá; ATO/ATC/MTL ưu tiên khớp nhưng chấp nhận mọi giá.</li>
  <li>Có thể đặt lệnh LO sẵn ngoài giờ để vào khớp khi phiên mở.</li>
</ul></div>
`,
  quiz: [
    { q: "Lệnh nào giúp bạn kiểm soát được giá mua tối đa?", options: ["MTL", "ATO", "LO", "ATC"], answer: 2, explain: "LO chỉ khớp tại giá bạn đặt hoặc tốt hơn." },
    { q: "Trong khớp lệnh liên tục, thứ tự ưu tiên là:", options: ["Khối lượng lớn trước", "Giá tốt hơn trước, cùng giá thì đặt trước khớp trước", "Ngẫu nhiên", "Nhà đầu tư tổ chức trước"], answer: 1, explain: "Nguyên tắc ưu tiên giá rồi đến thời gian." },
    { q: "Phiên ATC trên HOSE diễn ra trong khoảng:", options: ["9:00–9:15", "11:30–13:00", "14:30–14:45", "14:45–15:00"], answer: 2, explain: "ATC là phiên khớp định kỳ đóng cửa 14:30–14:45." }
  ]
},

{
  id: "w01-4", week: 1, day: 4, minutes: 120,
  title: "Giá tham chiếu, trần, sàn, bước giá và lô",
  summary: "Tự tính giá trần/sàn, biết bước giá và lô giao dịch để đặt lệnh không bị lỗi.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin có cụm “tăng trần” hoặc “giảm sàn” hôm nay. Mã nào? Vì sao? Ghi lại giá tham chiếu và giá trần/sàn của mã đó.</div>

<h3>1. Ba mức giá quan trọng mỗi ngày</h3>
<ul>
  <li><b>Giá tham chiếu (TC)</b>: trên HOSE, HNX thường là giá đóng cửa phiên trước; trên UPCoM là giá bình quân gia quyền phiên trước.</li>
  <li><b>Giá trần</b> = TC × (1 + biên độ): giá cao nhất được phép trong ngày.</li>
  <li><b>Giá sàn</b> = TC × (1 − biên độ): giá thấp nhất được phép trong ngày.</li>
</ul>
<p><b>Ví dụ:</b> Cổ phiếu HOSE đóng cửa hôm qua 20.000đ → hôm nay TC = 20.000đ. Trần = 20.000 × 1,07 = <b>21.400đ</b>; sàn = 20.000 × 0,93 = <b>18.600đ</b>. Bạn không thể đặt mua 21.500đ hay bán 18.500đ trong hôm nay — hệ thống sẽ từ chối.</p>
<p><b>Ví dụ UPCoM:</b> Hôm qua mã U khớp 1.000 cp giá 10.000đ và 3.000 cp giá 10.400đ. Giá bình quân gia quyền = (1.000 × 10.000 + 3.000 × 10.400) ÷ 4.000 = <b>10.300đ</b> → đó là TC hôm nay, dù giá đóng cửa có thể khác.</p>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Giá dao động giữa trần và sàn quanh giá tham chiếu">
  <line x1="130" y1="40" x2="520" y2="40" style="stroke:var(--ceil);stroke-width:3"/>
  <line x1="130" y1="120" x2="520" y2="120" style="stroke:var(--ref);stroke-width:3;stroke-dasharray:8 5"/>
  <line x1="130" y1="200" x2="520" y2="200" style="stroke:var(--floor);stroke-width:3"/>
  <text x="120" y="45" text-anchor="end" style="fill:var(--ceil);font-size:13px;font-weight:600">Trần 21,40</text>
  <text x="120" y="125" text-anchor="end" style="fill:var(--ref);font-size:13px;font-weight:600">TC 20,00</text>
  <text x="120" y="205" text-anchor="end" style="fill:var(--floor);font-size:13px;font-weight:600">Sàn 18,60</text>
  <polyline points="135,120 175,105 215,112 255,90 295,95 335,70 375,82 415,60 455,75 495,66 515,72" style="fill:none;stroke:var(--up);stroke-width:2.5"/>
  <text x="530" y="45" style="fill:var(--muted);font-size:12px">+7%</text>
  <text x="530" y="205" style="fill:var(--muted);font-size:12px">−7%</text>
  <text x="325" y="230" text-anchor="middle" style="fill:var(--muted);font-size:12px">Giá trong phiên chỉ được dao động giữa trần và sàn</text>
</svg><figcaption>Hình: Ví dụ mã HOSE có TC 20.000đ. Trên bảng giá: tím = trần, vàng = tham chiếu, xanh lơ = sàn.</figcaption></figure>

<h3>2. Bước giá (đơn vị yết giá)</h3>
<p>Giá đặt lệnh phải là bội số của <b>bước giá</b>. Trên HOSE (cổ phiếu):</p>
<table>
  <tr><th>Mức giá</th><th>Bước giá</th><th>Giá hợp lệ / không hợp lệ</th></tr>
  <tr><td>Dưới 10.000đ</td><td>10đ</td><td>9.870đ ✓ — 9.875đ ✗</td></tr>
  <tr><td>10.000đ – 49.950đ</td><td>50đ</td><td>25.450đ ✓ — 25.420đ ✗</td></tr>
  <tr><td>Từ 50.000đ</td><td>100đ</td><td>78.300đ ✓ — 78.350đ ✗</td></tr>
</table>
<p>HNX và UPCoM: bước giá <b>100đ</b>. ETF trên HOSE: <b>10đ</b>. (Từ 28/12/2026 cổ phiếu niêm yết HNX chuyển sang HOSE và dùng bước giá của HOSE.)</p>
<p>Khi tính trần/sàn ra số lẻ, hệ thống làm tròn vào trong biên độ: trần làm tròn <b>xuống</b>, sàn làm tròn <b>lên</b> theo bước giá.</p>
<p><b>Ví dụ:</b> Mã HOSE có TC 33.150đ. Trần lý thuyết = 33.150 × 1,07 = 35.470,5đ → làm tròn xuống bội số 50 = <b>35.450đ</b>. Sàn lý thuyết = 33.150 × 0,93 = 30.829,5đ → làm tròn lên bội số 50 = <b>30.850đ</b>.</p>
<p><b>Ví dụ HNX:</b> TC 12.300đ. Trần = 13.530đ → làm tròn xuống bội số 100 = <b>13.500đ</b>. Sàn = 11.070đ → làm tròn lên = <b>11.100đ</b>.</p>

<h3>3. Lô giao dịch</h3>
<p><b>Lô chẵn</b> là bội số của <b>100 cổ phiếu</b>. <b>Lô lẻ</b> là 1–99 cổ phiếu, phải đặt thành lệnh riêng (một lệnh không gộp được lô chẵn và lô lẻ). Trên HOSE, từ khi có hệ thống KRX, lô lẻ giao dịch cùng giờ, cùng phương thức với lô chẵn (có cả ATO, khớp liên tục, ATC); tuy vậy thanh khoản lô lẻ thường thấp hơn nên giá có thể kém hơn một chút. Mỗi lệnh trên HOSE tối đa 500.000 cổ phiếu.</p>
<p><b>Ví dụ:</b> Bạn có 10 triệu đồng, muốn mua cổ phiếu giá 37.500đ. Số cổ phiếu tối đa = 10.000.000 ÷ 37.500 ≈ 266 cp → đặt lô chẵn được <b>200 cp</b> (7.500.000đ), 66 cp còn lại nếu muốn thì đặt thêm một lệnh lô lẻ riêng.</p>
<p><b>Ví dụ:</b> Cổ phiếu giá 120.000đ thì 1 lô 100 cp đã cần 12 triệu đồng. Vốn nhỏ thì ETF (giá vài chục nghìn đồng/chứng chỉ quỹ) giúp bạn đa dạng hóa dễ hơn nhiều.</p>

<h3>4. Ngày đầu niêm yết</h3>
<p>Ngày giao dịch đầu tiên của cổ phiếu mới niêm yết có biên độ rộng hơn: HOSE ±20%, HNX ±30%, UPCoM ±40%.</p>
<p><b>Ví dụ:</b> Mã mới lên HOSE với giá tham chiếu ngày đầu 30.000đ → giá được dao động 24.000–36.000đ chỉ trong 1 phiên. Người mua đuổi ở 36.000đ có thể lỗ 20% ngay hôm sau nếu giá quay về 30.000đ. Người mới nên đứng ngoài quan sát.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Tính trần/sàn (làm tròn đúng bước giá): (a) HOSE, TC 45.600đ; (b) HOSE, TC 8.750đ; (c) UPCoM, TC 8.000đ.</li>
  <li>Lấy 3 mã thật trên bảng giá hôm nay, tự tính trần/sàn từ TC rồi đối chiếu với bảng.</li>
  <li>Với 15 triệu đồng, mua được tối đa bao nhiêu lô chẵn cổ phiếu giá 52.300đ (chưa tính phí)?</li>
</ol>
<p>Đáp án: (a) trần 48.792 → 48.750đ, sàn 42.408 → 42.450đ. (b) trần 9.362,5 → 9.360đ, sàn 8.137,5 → 8.140đ. (c) trần 9.200đ, sàn 6.800đ. Câu 3: 15.000.000 ÷ 52.300 ≈ 286 → 2 lô (200 cp).</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Trần = TC × (1 + biên độ), sàn = TC × (1 − biên độ); trần làm tròn xuống, sàn làm tròn lên.</li>
  <li>Bước giá HOSE: 10đ / 50đ / 100đ theo mức giá; HNX, UPCoM 100đ.</li>
  <li>Lô chẵn = bội số 100 cổ phiếu.</li>
  <li>Ngày đầu niêm yết biên độ rất rộng — rủi ro cao.</li>
</ul></div>
`,
  quiz: [
    { q: "Cổ phiếu HOSE có giá tham chiếu 50.000đ. Giá trần là:", options: ["53.500đ", "55.000đ", "57.500đ", "50.700đ"], answer: 0, explain: "50.000 × 1,07 = 53.500đ, đúng bước giá 100đ." },
    { q: "Trên bảng giá, màu tím thể hiện:", options: ["Giá sàn", "Giá tham chiếu", "Giá trần", "Giá giảm"], answer: 2, explain: "Tím = trần, xanh lơ = sàn, vàng = tham chiếu, xanh lá = tăng, đỏ = giảm." },
    { q: "Giá nào KHÔNG hợp lệ cho cổ phiếu HOSE?", options: ["25.450đ", "9.870đ", "78.350đ", "61.200đ"], answer: 2, explain: "Từ 50.000đ trở lên bước giá 100đ, nên 78.350đ không hợp lệ." }
  ]
},

{
  id: "w01-5", week: 1, day: 5, minutes: 120,
  title: "Chu kỳ thanh toán T+2, phí và thuế",
  summary: "Biết khi nào cổ phiếu và tiền về tài khoản, và tính chi phí thật của một giao dịch.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Hôm nay là thứ 6. Đọc tin tổng kết tuần: VN-Index cả tuần tăng/giảm bao nhiêu %? Ghi lại để so sánh tuần sau.</div>

<h3>1. T+2 là gì?</h3>
<p>Ngày bạn khớp lệnh mua là ngày <b>T</b>. Cổ phiếu về tài khoản vào ngày làm việc thứ hai sau đó (<b>T+2</b>) và có thể bán từ phiên chiều T+2. Thứ 7, chủ nhật, ngày lễ không tính.</p>
<p><b>Ví dụ:</b> Bạn mua thứ 2 → cổ phiếu về thứ 4. Mua thứ 5 → T+1 là thứ 6, T+2 là <b>thứ 2 tuần sau</b>. Mua thứ 5 mà thứ 2 tuần sau là ngày lễ → cổ phiếu về <b>thứ 3</b>.</p>

<figure class="fig"><svg viewBox="0 0 640 190" role="img" aria-label="Dòng thời gian T+2">
  <line x1="40" y1="90" x2="600" y2="90" style="stroke:var(--line);stroke-width:3"/>
  <path d="M90 60 C 170 18, 330 18, 410 60" style="fill:none;stroke:var(--accent);stroke-width:2;stroke-dasharray:5 4"/>
  <text x="250" y="30" text-anchor="middle" style="fill:var(--accent);font-size:12px">2 ngày làm việc</text>
  <circle cx="90" cy="90" r="18" style="fill:var(--accent)"/>
  <text x="90" y="95" text-anchor="middle" style="fill:var(--bg);font-size:13px;font-weight:600">T</text>
  <text x="90" y="132" text-anchor="middle" style="fill:var(--text);font-size:13px">Thứ 2</text>
  <text x="90" y="150" text-anchor="middle" style="fill:var(--muted);font-size:12px">Khớp lệnh mua</text>
  <circle cx="250" cy="90" r="18" style="fill:var(--line)"/>
  <text x="250" y="95" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">T+1</text>
  <text x="250" y="132" text-anchor="middle" style="fill:var(--text);font-size:13px">Thứ 3</text>
  <text x="250" y="150" text-anchor="middle" style="fill:var(--muted);font-size:12px">Chờ thanh toán</text>
  <circle cx="410" cy="90" r="18" style="fill:var(--up)"/>
  <text x="410" y="95" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:600">T+2</text>
  <text x="410" y="132" text-anchor="middle" style="fill:var(--text);font-size:13px">Thứ 4</text>
  <text x="410" y="150" text-anchor="middle" style="fill:var(--muted);font-size:12px">Cổ phiếu về, bán được</text>
  <text x="540" y="132" text-anchor="middle" style="fill:var(--muted);font-size:12px">Mua thứ 5</text>
  <text x="540" y="150" text-anchor="middle" style="fill:var(--muted);font-size:12px">→ về thứ 2 tuần sau</text>
</svg><figcaption>Hình: Bạn không thể bán cổ phiếu ngay trong ngày mua. Nếu giá giảm mạnh ở T và T+1, bạn phải chịu.</figcaption></figure>

<p><b>Ví dụ rủi ro T+2:</b> Bạn mua 1.000 cp giá 30.000đ sáng thứ 2. Chiều thứ 2 có tin xấu, giá giảm sàn về 27.900đ, thứ 3 giảm tiếp về 25.950đ. Bạn chỉ bán được từ chiều thứ 4 — lúc đó đã lỗ trên giấy (30.000 − 25.950) × 1.000 = 4.050.000đ (−13,5%). Đây là lý do không nên “lướt sóng” khi chưa có kinh nghiệm.</p>
<p>Hiện thị trường Việt Nam <b>chưa có giao dịch trong ngày (T+0)</b> và <b>chưa cho bán khống</b>; hai sản phẩm này dự kiến triển khai từ năm 2027 cùng mô hình thanh toán bù trừ trung tâm (CCP). Hãy kiểm tra lại khi đọc bài này.</p>
<p><b>Ví dụ:</b> Sáng thứ 3 bạn mua 500 cp, chiều cùng ngày giá tăng 5%. Bạn vẫn <b>không bán được</b> số cổ phiếu này cho tới chiều thứ 5 (T+2).</p>
<p>Khi bán, tiền cũng về sau T+2. Nhiều CTCK cho <b>ứng trước tiền bán</b> để dùng ngay, có tính phí như một khoản vay ngắn.</p>
<p><b>Ví dụ:</b> Bán được 20 triệu, ứng trước ngay với lãi 12%/năm trong 2 ngày → phí ≈ 20.000.000 × 12% × 2/365 ≈ 13.150đ.</p>

<h3>2. Các khoản chi phí</h3>
<table>
  <tr><th>Khoản</th><th>Mức tham khảo</th><th>Khi nào</th></tr>
  <tr><td>Phí giao dịch CTCK</td><td>Thường 0–0,25% giá trị lệnh, tùy CTCK</td><td>Cả mua và bán</td></tr>
  <tr><td>Thuế TNCN khi bán</td><td>0,1% giá trị bán (kể cả khi lỗ)</td><td>Khi bán</td></tr>
  <tr><td>Thuế cổ tức bằng tiền</td><td>5% số tiền cổ tức (thường khấu trừ sẵn)</td><td>Khi nhận cổ tức</td></tr>
  <tr><td>Phí lưu ký</td><td>Rất nhỏ, theo số cổ phiếu sở hữu mỗi tháng</td><td>Hằng tháng</td></tr>
</table>
<p><b>Ví dụ thuế khi lỗ:</b> Mua 15 triệu, bán lỗ được 13 triệu → vẫn nộp thuế 13.000.000 × 0,1% = 13.000đ.</p>
<p><b>Ví dụ thuế cổ tức:</b> Nắm 1.000 cp, cổ tức 1.500đ/cp → 1.500.000đ, trừ thuế 5% = 75.000đ → nhận về 1.425.000đ.</p>
<p class="muted">Luật Thuế thu nhập cá nhân số 109/2025/QH15 (hiệu lực từ 01/7/2026) vẫn giữ mức 0,1% trên giá trị bán chứng khoán và 5% với cổ tức bằng tiền.</p>

<h3>3. Tính trọn một giao dịch</h3>
<p><b>Ví dụ:</b> Phí CTCK 0,15%. Mua 500 cp giá 30.000đ, sau đó bán ở 33.000đ.</p>
<table>
  <tr><td>Tiền mua</td><td>500 × 30.000 = 15.000.000đ</td></tr>
  <tr><td>Phí mua 0,15%</td><td>15.000.000 × 0,0015 = 22.500đ</td></tr>
  <tr><td>Tiền bán</td><td>500 × 33.000 = 16.500.000đ</td></tr>
  <tr><td>Phí bán 0,15%</td><td>24.750đ</td></tr>
  <tr><td>Thuế bán 0,1%</td><td>16.500đ</td></tr>
  <tr><td><b>Lãi ròng</b></td><td>16.500.000 − 15.000.000 − 22.500 − 24.750 − 16.500 = <b>1.436.250đ</b> (≈ +9,6% trên 15.022.500đ bỏ ra)</td></tr>
</table>
<figure class="fig"><svg viewBox="0 0 640 200" role="img" aria-label="Chi phí tích lũy theo số lần giao dịch">
  <line x1="60" y1="170" x2="600" y2="170" style="stroke:var(--line);stroke-width:1"/>
  <line x1="60" y1="20" x2="60" y2="170" style="stroke:var(--line);stroke-width:1"/>
  <rect x="100" y="166" width="70" height="4" style="fill:var(--c2)"/>
  <rect x="220" y="154" width="70" height="16" style="fill:var(--c2)"/>
  <rect x="340" y="130" width="70" height="40" style="fill:var(--c2)"/>
  <rect x="460" y="50" width="70" height="120" style="fill:var(--down)"/>
  <text x="135" y="160" text-anchor="middle" style="fill:var(--text);font-size:12px">0,4%</text>
  <text x="255" y="148" text-anchor="middle" style="fill:var(--text);font-size:12px">4%</text>
  <text x="375" y="124" text-anchor="middle" style="fill:var(--text);font-size:12px">10%</text>
  <text x="495" y="44" text-anchor="middle" style="fill:var(--text);font-size:12px">30%</text>
  <text x="135" y="188" text-anchor="middle" style="fill:var(--muted);font-size:12px">1 vòng</text>
  <text x="255" y="188" text-anchor="middle" style="fill:var(--muted);font-size:12px">10 vòng</text>
  <text x="375" y="188" text-anchor="middle" style="fill:var(--muted);font-size:12px">25 vòng</text>
  <text x="495" y="188" text-anchor="middle" style="fill:var(--muted);font-size:12px">75 vòng</text>
  <text x="70" y="30" style="fill:var(--muted);font-size:11px">Chi phí cộng dồn (% vốn, xấp xỉ)</text>
</svg><figcaption>Hình: Mỗi vòng mua – bán tốn ≈ 0,4% (phí 0,15% × 2 + thuế 0,1%). Giao dịch càng nhiều, chi phí cộng dồn càng lớn (ước tính đơn giản, chưa tính lãi kép).</figcaption></figure>

<h3>4. Giá hòa vốn</h3>
<p>Giá hòa vốn ≈ giá mua × (1 + phí mua) ÷ (1 − phí bán − thuế bán).</p>
<p><b>Ví dụ:</b> Mua 30.000đ, phí 0,15%, thuế 0,1%: 30.000 × 1,0015 ÷ (1 − 0,0015 − 0,001) = 30.045 ÷ 0,9975 ≈ <b>30.120đ</b>. Giá phải lên trên 30.120đ bạn mới thật sự có lãi; bán ở 30.100đ thực chất vẫn lỗ nhẹ.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Bạn mua thứ 6 tuần này. Ngày nào cổ phiếu về? Nếu thứ 2 tuần sau là ngày lễ thì sao?</li>
  <li>Tính lãi/lỗ ròng: mua 1.000 cp giá 18.000đ, bán 17.200đ, phí 0,2% mỗi chiều.</li>
  <li>Tìm biểu phí trên website 2 CTCK bạn đang cân nhắc: ghi phí giao dịch và lãi ứng trước tiền bán.</li>
</ol>
<p>Đáp án: (1) thứ 3 tuần sau; nếu thứ 2 nghỉ lễ thì thứ 4. (2) Chênh lệch −800.000; phí mua 36.000; phí bán 34.400; thuế 17.200 → <b>−887.600đ</b>.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Mua ngày T, cổ phiếu về và bán được từ chiều T+2 (chỉ tính ngày làm việc).</li>
  <li>Thuế bán 0,1% giá trị bán, kể cả khi lỗ; thuế cổ tức tiền 5%.</li>
  <li>Một vòng mua – bán tốn khoảng 0,3–0,6% tùy phí CTCK.</li>
  <li>Luôn tính giá hòa vốn trước khi nghĩ mình “đã lãi”.</li>
</ul></div>
`,
  quiz: [
    { q: "Mua cổ phiếu vào thứ 4 (không có ngày lễ). Ngày nào cổ phiếu về tài khoản?", options: ["Thứ 4", "Thứ 5", "Thứ 6", "Thứ 2 tuần sau"], answer: 2, explain: "T = thứ 4, T+1 = thứ 5, T+2 = thứ 6." },
    { q: "Thuế khi bán cổ phiếu được tính như thế nào?", options: ["20% tiền lãi", "0,1% giá trị bán, kể cả khi lỗ", "Chỉ khi có lãi", "5% giá trị bán"], answer: 1, explain: "Thuế TNCN khi chuyển nhượng chứng khoán là 0,1% trên giá trị bán." },
    { q: "Nhận cổ tức tiền 2.000.000đ, bạn thực nhận bao nhiêu?", options: ["2.000.000đ", "1.980.000đ", "1.900.000đ", "1.800.000đ"], answer: 2, explain: "Thuế 5%: 2.000.000 × 95% = 1.900.000đ." }
  ]
},

{
  id: "w01-6", week: 1, day: 6, minutes: 240,
  title: "Thực hành: So sánh công ty chứng khoán và mở tài khoản",
  summary: "Chọn CTCK theo tiêu chí rõ ràng, mở tài khoản online bằng CCCD và đọc ý tưởng đầu tư vs đầu cơ.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<h4>Bước 1 – Lập bảng so sánh 3–4 CTCK (60 phút)</h4>
<p>Vào website từng công ty, tìm mục “Biểu phí”, tải app về xem thử. Điền bảng mẫu:</p>
<table>
  <tr><th>Tiêu chí</th><th>CTCK 1</th><th>CTCK 2</th><th>CTCK 3</th></tr>
  <tr><td>Phí giao dịch cổ phiếu (%)</td><td></td><td></td><td></td></tr>
  <tr><td>Phí giao dịch ETF (%)</td><td></td><td></td><td></td></tr>
  <tr><td>Lãi ứng trước tiền bán (%/năm)</td><td></td><td></td><td></td></tr>
  <tr><td>App dễ dùng? Đặt lệnh nhanh? Có biểu đồ? (chấm 1–5)</td><td></td><td></td><td></td></tr>
  <tr><td>Có đặt lệnh định kỳ / mua ETF tự động?</td><td></td><td></td><td></td></tr>
  <tr><td>Báo cáo phân tích miễn phí?</td><td></td><td></td><td></td></tr>
  <tr><td>Nạp/rút tiền: ngân hàng liên kết, thời gian</td><td></td><td></td><td></td></tr>
  <tr><td>Hỗ trợ khách hàng (hotline, chat)</td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ:</b> Bạn dự định mua 10 lần/năm, mỗi lần 5 triệu. Phí 0,15% → 10 × 5.000.000 × 0,15% = 75.000đ/năm; phí 0,25% → 125.000đ/năm. Chênh nhau chỉ 50.000đ/năm — vì vậy với vốn nhỏ, <b>app ổn định, dễ dùng</b> quan trọng hơn chênh lệch phí nhỏ.</p>
<div class="warn">⚠ Đừng chọn CTCK chỉ vì “tặng margin”, “nhóm khuyến nghị VIP” hay môi giới hứa lợi nhuận. Không ai hứa được lợi nhuận trên thị trường chứng khoán.</div>

<h4>Bước 2 – Mở tài khoản eKYC (30 phút)</h4>
<figure class="fig"><svg viewBox="0 0 640 140" role="img" aria-label="Quy trình mở tài khoản eKYC 5 bước">
  <rect x="10" y="30" width="105" height="60" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="62" y="56" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">1. Tải app</text>
  <text x="62" y="74" text-anchor="middle" style="fill:var(--muted);font-size:11px">Đăng ký SĐT</text>
  <rect x="135" y="30" width="105" height="60" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="187" y="56" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">2. Chụp CCCD</text>
  <text x="187" y="74" text-anchor="middle" style="fill:var(--muted);font-size:11px">2 mặt / NFC</text>
  <rect x="260" y="30" width="105" height="60" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="312" y="56" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">3. Xác thực</text>
  <text x="312" y="74" text-anchor="middle" style="fill:var(--muted);font-size:11px">khuôn mặt</text>
  <rect x="385" y="30" width="105" height="60" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="437" y="56" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">4. Ký hợp đồng</text>
  <text x="437" y="74" text-anchor="middle" style="fill:var(--muted);font-size:11px">điện tử, OTP</text>
  <rect x="510" y="30" width="120" height="60" rx="10" style="fill:var(--up);fill-opacity:0.25;stroke:var(--up);stroke-width:2"/>
  <text x="570" y="56" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">5. Có số TK</text>
  <text x="570" y="74" text-anchor="middle" style="fill:var(--muted);font-size:11px">Nạp tiền</text>
  <line x1="115" y1="60" x2="135" y2="60" style="stroke:var(--muted);stroke-width:2"/>
  <line x1="240" y1="60" x2="260" y2="60" style="stroke:var(--muted);stroke-width:2"/>
  <line x1="365" y1="60" x2="385" y2="60" style="stroke:var(--muted);stroke-width:2"/>
  <line x1="490" y1="60" x2="510" y2="60" style="stroke:var(--muted);stroke-width:2"/>
  <text x="320" y="122" text-anchor="middle" style="fill:var(--muted);font-size:12px">Quy trình chung, mỗi CTCK có thể khác đôi chút</text>
</svg><figcaption>Hình: Mở tài khoản online thường mất 10–20 phút.</figcaption></figure>
<ul>
  <li><b>Không đăng ký</b> giao dịch ký quỹ (margin) nếu app có mục này.</li>
  <li>Bật Smart OTP, đặt mật khẩu đặt lệnh khác mật khẩu đăng nhập.</li>
  <li>Không đưa tài khoản/mật khẩu cho bất kỳ ai “giao dịch hộ”.</li>
</ul>
<p><b>Ví dụ:</b> Một “môi giới” nhắn tin: “Anh/chị cho em mượn tài khoản, em đánh giúp, cam kết lãi 5%/tháng”. Đây là dấu hiệu lừa đảo hoặc rủi ro rất lớn — 5%/tháng tương đương gần 80%/năm, không ai cam kết được.</p>

<h4>Bước 3 – Làm quen tài khoản (60 phút)</h4>
<ol>
  <li>Tìm các mục: Bảng giá, Đặt lệnh, Sổ lệnh, Tài sản/Danh mục, Nạp/rút tiền, Sao kê.</li>
  <li><b>Chưa nạp tiền</b>; chỉ mở thử màn hình đặt lệnh, xem các trường: mã, giá, khối lượng, loại lệnh.</li>
  <li>Ghi 3 điều chưa hiểu trên app để tìm hiểu ở tuần 2.</li>
</ol>
<p><b>Tiêu chí tự đánh giá:</b> ✓ Bảng so sánh điền đủ ít nhất 3 CTCK; ✓ Có lý do chọn rõ ràng (2–3 câu); ✓ Đã có số tài khoản hoặc biết rõ bước đang vướng; ✓ Đã bật bảo mật 2 lớp.</p>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Bắt đầu “Nhà đầu tư thông minh” (Benjamin Graham): đọc lời giới thiệu và khoảng 50–80 trang đầu. Ý tưởng cần chú ý:</p>
<ul>
  <li><b>Đầu tư</b> là hoạt động, sau khi phân tích kỹ lưỡng, hứa hẹn an toàn vốn gốc và lợi nhuận thỏa đáng. Không đáp ứng điều đó là <b>đầu cơ</b>.</li>
  <li>Đầu cơ nguy hiểm nhất khi bạn <b>tưởng mình đang đầu tư</b>, dùng tiền vay, hoặc bỏ vào nhiều hơn mức có thể mất.</li>
  <li>Graham chia nhà đầu tư thành <b>phòng thủ</b> (ít thời gian, ưu tiên an toàn, đa dạng hóa) và <b>chủ động/táo bạo</b> (dành nhiều công sức phân tích).</li>
</ul>
<p><b>Ví dụ:</b> Bạn mua mã X vì nhóm Zalo nói “sắp có tin”, không biết công ty làm gì → đó là đầu cơ. Bạn mua ETF VN30 định kỳ mỗi tháng, chấp nhận nắm giữ nhiều năm → gần với đầu tư phòng thủ.</p>
<p><b>Câu hỏi tự trả lời sau khi đọc:</b> (1) Bạn là nhà đầu tư phòng thủ hay chủ động? (2) Vì sao lộ trình đề xuất 50–60% ETF? (3) Lần gần nhất bạn nghe một “mã hot”, đó là đầu tư hay đầu cơ?</p>
`,
  quiz: [
    { q: "Theo Graham, điều gì phân biệt đầu tư và đầu cơ?", options: ["Thời gian nắm giữ", "Phân tích kỹ, an toàn vốn gốc và lợi nhuận thỏa đáng", "Số tiền bỏ ra", "Mua cổ phiếu lớn hay nhỏ"], answer: 1, explain: "Đây là định nghĩa nổi tiếng của Graham về đầu tư." },
    { q: "Khi mở tài khoản năm đầu, bạn nên:", options: ["Đăng ký margin để có sức mua lớn", "Không đăng ký margin, bật Smart OTP", "Đưa tài khoản cho môi giới quản lý", "Chọn nơi tặng nhiều margin nhất"], answer: 1, explain: "An toàn tài khoản và không dùng đòn bẩy là ưu tiên năm đầu." }
  ]
},

{
  id: "w01-7", week: 1, day: 7, minutes: 240,
  title: "Ôn tập tuần 1",
  summary: "Ôn kiến thức nền tảng, làm quiz, đọc sách và chuẩn bị cho tuần 2.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp khoảng 50–80 trang “Nhà đầu tư thông minh”. Graham bàn về lạm phát và việc phân bổ giữa cổ phiếu và trái phiếu: <b>không có tài sản nào luôn thắng</b>, nên nhà đầu tư cần kết hợp và giữ kỷ luật.</p>
<p><b>Ví dụ:</b> Graham gợi ý nhà đầu tư phòng thủ chia vốn giữa cổ phiếu và trái phiếu (mức cơ bản khoảng 50/50, dao động trong khoảng 25–75%). Với 20 triệu, bạn có thể hiểu tương tự: một phần vào cổ phiếu/ETF, một phần giữ an toàn (tiền gửi). Lộ trình của bạn giữ 10–20% tiền mặt là tinh thần đó.</p>
<p><b>Câu hỏi:</b> Vì sao một người giữ 100% cổ phiếu dễ hoảng loạn khi thị trường giảm 30%?</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Sơ đồ tư duy kiến thức tuần 1">
  <line x1="270" y1="105" x2="150" y2="50" style="stroke:var(--muted);stroke-width:1.5"/>
  <line x1="370" y1="105" x2="490" y2="50" style="stroke:var(--muted);stroke-width:1.5"/>
  <line x1="265" y1="135" x2="180" y2="135" style="stroke:var(--muted);stroke-width:1.5"/>
  <line x1="375" y1="135" x2="460" y2="135" style="stroke:var(--muted);stroke-width:1.5"/>
  <line x1="280" y1="170" x2="170" y2="215" style="stroke:var(--muted);stroke-width:1.5"/>
  <line x1="360" y1="170" x2="470" y2="215" style="stroke:var(--muted);stroke-width:1.5"/>
  <circle cx="320" cy="130" r="55" style="fill:var(--accent)"/>
  <text x="320" y="126" text-anchor="middle" style="fill:var(--bg);font-size:14px;font-weight:600">Tuần 1</text>
  <text x="320" y="144" text-anchor="middle" style="fill:var(--bg);font-size:12px">Nền tảng</text>
  <rect x="70" y="30" width="160" height="34" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="150" y="52" text-anchor="middle" style="fill:var(--text);font-size:12px">Cổ phiếu = sở hữu</text>
  <rect x="410" y="30" width="160" height="34" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="490" y="52" text-anchor="middle" style="fill:var(--text);font-size:12px">HOSE / HNX / UPCoM</text>
  <rect x="20" y="118" width="160" height="34" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="100" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">VN-Index, VN30</text>
  <rect x="460" y="118" width="160" height="34" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="540" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">ATO / liên tục / ATC</text>
  <rect x="90" y="204" width="160" height="34" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="170" y="226" text-anchor="middle" style="fill:var(--text);font-size:12px">Trần/sàn, bước giá</text>
  <rect x="390" y="204" width="160" height="34" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="470" y="226" text-anchor="middle" style="fill:var(--text);font-size:12px">T+2, phí, thuế</text>
</svg><figcaption>Hình: Sơ đồ tư duy tuần 1. Thử giải thích từng nhánh cho một người chưa biết gì về chứng khoán.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ul>
  <li>Vì sao giá cổ phiếu thay đổi? Kể 3 nguyên nhân, mỗi nguyên nhân 1 ví dụ.</li>
  <li>Tính trần/sàn cho mã HOSE có TC 27.800đ. (Đáp án: trần 29.746 → 29.700đ; sàn 25.854 → 25.900đ.)</li>
  <li>Khi nào dùng LO, khi nào dùng ATC?</li>
  <li>Mua thứ 6 thì khi nào bán được?</li>
  <li>Mua 500 cp giá 20.000đ, bán 21.000đ, phí 0,2%: lãi ròng bao nhiêu? (Đáp án: 500.000 − 20.000 − 21.000 − 10.500 = 448.500đ.)</li>
</ul>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist:</b></p>
<ul>
  <li>☐ Đã đọc tin 5 ngày và ghi nhật ký thị trường</li>
  <li>☐ Đã mở tài khoản (hoặc biết rõ bước đang vướng)</li>
  <li>☐ Tự tính được trần/sàn, phí, thuế</li>
  <li>☐ Đã đọc phần đầu “Nhà đầu tư thông minh”</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Ngày nào VN-Index biến động mạnh nhất tuần? Bạn đoán lý do là gì, và báo chí giải thích ra sao? Điều gì trong tuần làm bạn ngạc nhiên nhất?</p>
<p><b>Chuẩn bị tuần 2:</b> Cài sẵn app giao dịch, tạo tài khoản trên 1–2 trang tra cứu (CafeF, Vietstock, FireAnt, Simplize), mở danh sách VN30 đã lưu.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Học bù phần còn thiếu hoặc làm lại bài tập tính trần/sàn, phí, thuế. Đánh dấu “Tuần 1” trong tab Lộ trình nếu đã xong.</p>
`,
  quiz: [
    { q: "Cổ phiếu UPCoM có TC 10.000đ. Giá trần là:", options: ["10.700đ", "11.000đ", "11.500đ", "12.000đ"], answer: 2, explain: "UPCoM biên độ ±15% → 11.500đ." },
    { q: "Phiên nào trên HOSE dùng cơ chế khớp lệnh định kỳ?", options: ["Chỉ phiên sáng", "ATO và ATC", "Chỉ phiên chiều", "Giao dịch thỏa thuận"], answer: 1, explain: "ATO (mở cửa) và ATC (đóng cửa) là khớp định kỳ." },
    { q: "Bước giá cho cổ phiếu HOSE giá 25.000đ là:", options: ["10đ", "50đ", "100đ", "1.000đ"], answer: 1, explain: "Khoảng 10.000–49.950đ có bước giá 50đ." },
    { q: "Bạn đặt mua 300 cp. Đây là:", options: ["Lô lẻ", "3 lô chẵn", "Không được phép", "Lô thỏa thuận"], answer: 1, explain: "Lô chẵn là bội số của 100." },
    { q: "Thuế cổ tức bằng tiền là:", options: ["0,1%", "5%", "10%", "Không có thuế"], answer: 1, explain: "Cổ tức tiền mặt bị khấu trừ thuế TNCN 5%." },
    { q: "Lệnh MTL có rủi ro gì?", options: ["Không bao giờ khớp", "Có thể khớp ở giá xấu khi thanh khoản thấp", "Chỉ dùng được trên UPCoM", "Bị tính thuế gấp đôi"], answer: 1, explain: "MTL quét các giá đối ứng tốt nhất đang có, có thể rất xa giá bạn nghĩ." },
    { q: "Giá tham chiếu trên HOSE thường là:", options: ["Giá mở cửa hôm nay", "Giá đóng cửa phiên trước", "Giá cao nhất tuần", "Mệnh giá"], answer: 1, explain: "Trên HOSE và HNX, TC thường là giá đóng cửa phiên liền trước." },
    { q: "Người mới nên tập trung vào nhóm nào?", options: ["Mã mới niêm yết biên độ rộng", "Mã UPCoM ít thanh khoản", "Nhóm VN30 và ETF", "Mã được “phím” trên Zalo"], answer: 2, explain: "VN30 và ETF thanh khoản tốt, minh bạch, dễ học." }
  ]
}
);

/* ======================= TUẦN 2: LÀM QUEN CÔNG CỤ ======================= */
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w02-1", week: 2, day: 1, minutes: 120,
  title: "Đọc bảng giá điện tử",
  summary: "Hiểu từng cột trên bảng giá, ý nghĩa màu sắc và đơn vị hiển thị.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Đọc tin thị trường rồi mở bảng giá cùng lúc. Tìm trên bảng giá đúng những mã mà bài báo nhắc đến và xem chúng có màu gì.</div>

<h3>1. Bảng giá gồm những phần nào?</h3>
<p>Mỗi dòng là một mã cổ phiếu. Các cột thường chia thành 5 nhóm: <b>thông tin mã</b> (Mã, TC, Trần, Sàn), <b>Dư mua</b> (3 mức giá mua tốt nhất đang chờ), <b>Khớp lệnh</b> (giá vừa khớp, khối lượng, thay đổi), <b>Dư bán</b> (3 mức giá bán tốt nhất), và <b>thống kê</b> (Tổng KL, Cao, Thấp, NN mua, NN bán).</p>

<figure class="fig"><svg viewBox="0 0 640 210" role="img" aria-label="Mô phỏng một bảng giá điện tử">
  <rect x="5" y="10" width="630" height="190" rx="6" style="fill:var(--card);stroke:var(--line)"/>
  <rect x="5" y="10" width="630" height="34" style="fill:var(--line);fill-opacity:0.6"/>
  <text x="35" y="32" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Mã</text>
  <text x="85" y="32" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">TC</text>
  <text x="135" y="32" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Trần</text>
  <text x="185" y="32" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Sàn</text>
  <text x="250" y="24" text-anchor="middle" style="fill:var(--muted);font-size:10px">Dư mua</text>
  <text x="230" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Giá 1</text>
  <text x="275" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">KL 1</text>
  <text x="365" y="24" text-anchor="middle" style="fill:var(--muted);font-size:10px">Khớp lệnh</text>
  <text x="330" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Giá</text>
  <text x="370" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">KL</text>
  <text x="410" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">+/−</text>
  <text x="480" y="24" text-anchor="middle" style="fill:var(--muted);font-size:10px">Dư bán</text>
  <text x="460" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Giá 1</text>
  <text x="505" y="38" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">KL 1</text>
  <text x="580" y="32" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">Tổng KL</text>
  <line x1="5" y1="80" x2="635" y2="80" style="stroke:var(--line)"/>
  <line x1="5" y1="116" x2="635" y2="116" style="stroke:var(--line)"/>
  <line x1="5" y1="152" x2="635" y2="152" style="stroke:var(--line)"/>
  <text x="35" y="66" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:600">AAX</text>
  <text x="85" y="66" text-anchor="middle" style="fill:var(--ref);font-size:12px">20,00</text>
  <text x="135" y="66" text-anchor="middle" style="fill:var(--ceil);font-size:12px">21,40</text>
  <text x="185" y="66" text-anchor="middle" style="fill:var(--floor);font-size:12px">18,60</text>
  <text x="230" y="66" text-anchor="middle" style="fill:var(--up);font-size:12px">20,40</text>
  <text x="275" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px">5.200</text>
  <text x="330" y="66" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:600">20,45</text>
  <text x="370" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px">300</text>
  <text x="410" y="66" text-anchor="middle" style="fill:var(--up);font-size:12px">+0,45</text>
  <text x="460" y="66" text-anchor="middle" style="fill:var(--up);font-size:12px">20,45</text>
  <text x="505" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px">1.800</text>
  <text x="580" y="66" text-anchor="middle" style="fill:var(--text);font-size:12px">152.300</text>
  <text x="35" y="102" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:600">BBX</text>
  <text x="85" y="102" text-anchor="middle" style="fill:var(--ref);font-size:12px">45,00</text>
  <text x="135" y="102" text-anchor="middle" style="fill:var(--ceil);font-size:12px">48,15</text>
  <text x="185" y="102" text-anchor="middle" style="fill:var(--floor);font-size:12px">41,85</text>
  <text x="230" y="102" text-anchor="middle" style="fill:var(--down);font-size:12px">44,10</text>
  <text x="275" y="102" text-anchor="middle" style="fill:var(--text);font-size:12px">900</text>
  <text x="330" y="102" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:600">44,15</text>
  <text x="370" y="102" text-anchor="middle" style="fill:var(--text);font-size:12px">1.000</text>
  <text x="410" y="102" text-anchor="middle" style="fill:var(--down);font-size:12px">−0,85</text>
  <text x="460" y="102" text-anchor="middle" style="fill:var(--down);font-size:12px">44,15</text>
  <text x="505" y="102" text-anchor="middle" style="fill:var(--text);font-size:12px">4.500</text>
  <text x="580" y="102" text-anchor="middle" style="fill:var(--text);font-size:12px">86.100</text>
  <text x="35" y="138" text-anchor="middle" style="fill:var(--ceil);font-size:12px;font-weight:600">CCX</text>
  <text x="85" y="138" text-anchor="middle" style="fill:var(--ref);font-size:12px">12,00</text>
  <text x="135" y="138" text-anchor="middle" style="fill:var(--ceil);font-size:12px">13,20</text>
  <text x="185" y="138" text-anchor="middle" style="fill:var(--floor);font-size:12px">10,80</text>
  <text x="230" y="138" text-anchor="middle" style="fill:var(--ceil);font-size:12px">13,20</text>
  <text x="275" y="138" text-anchor="middle" style="fill:var(--text);font-size:12px">48.000</text>
  <text x="330" y="138" text-anchor="middle" style="fill:var(--ceil);font-size:12px;font-weight:600">13,20</text>
  <text x="370" y="138" text-anchor="middle" style="fill:var(--text);font-size:12px">2.000</text>
  <text x="410" y="138" text-anchor="middle" style="fill:var(--ceil);font-size:12px">+1,20</text>
  <text x="460" y="138" text-anchor="middle" style="fill:var(--muted);font-size:12px">—</text>
  <text x="505" y="138" text-anchor="middle" style="fill:var(--muted);font-size:12px">—</text>
  <text x="580" y="138" text-anchor="middle" style="fill:var(--text);font-size:12px">310.500</text>
  <text x="320" y="178" text-anchor="middle" style="fill:var(--muted);font-size:11px">Mã giả định. Giá đơn vị nghìn đồng (20,45 = 20.450đ). CCX tăng trần trên HNX (±10%), bên bán đã hết.</text>
</svg><figcaption>Hình: Một bảng giá thu gọn (thực tế có 3 mức dư mua/dư bán và thêm các cột Cao, Thấp, NN mua/bán).</figcaption></figure>

<h3>2. Màu sắc trên bảng giá</h3>
<table>
  <tr><th>Màu</th><th>Ý nghĩa</th></tr>
  <tr><td>Tím</td><td>Bằng giá trần</td></tr>
  <tr><td>Xanh lá</td><td>Cao hơn tham chiếu (tăng)</td></tr>
  <tr><td>Vàng</td><td>Bằng tham chiếu (đứng giá)</td></tr>
  <tr><td>Đỏ</td><td>Thấp hơn tham chiếu (giảm)</td></tr>
  <tr><td>Xanh lơ</td><td>Bằng giá sàn</td></tr>
</table>
<p><b>Ví dụ:</b> Mã AAX (HOSE) có TC 20,00. Giá khớp 20,45 → xanh lá (tăng 0,45 nghìn đồng = +2,25%). Nếu giá khớp đúng 21,40 → chuyển tím (trần). Nếu khớp 20,00 → vàng. Nếu 19,50 → đỏ. Nếu 18,60 → xanh lơ (sàn).</p>

<h3>3. Đơn vị hiển thị</h3>
<p><b>Giá</b> thường hiển thị theo <b>nghìn đồng</b>. <b>Khối lượng</b> tùy bảng giá: có nơi hiển thị đúng số cổ phiếu, có nơi rút gọn theo đơn vị 10 cổ phiếu — hãy xem chú thích của bảng giá bạn dùng.</p>
<p><b>Ví dụ:</b> Giá 44,15 nghĩa là 44.150đ/cp. Nếu bảng giá ghi chú “KL đơn vị 10 cp” thì ô KL 1.000 nghĩa là 10.000 cổ phiếu. Đọc nhầm đơn vị, bạn có thể đánh giá sai thanh khoản 10 lần.</p>

<h3>4. Các cột thống kê</h3>
<ul>
  <li><b>Tổng KL</b>: tổng số cổ phiếu đã khớp trong ngày — thước đo thanh khoản.</li>
  <li><b>Cao / Thấp</b>: giá khớp cao nhất và thấp nhất trong ngày.</li>
  <li><b>NN mua / NN bán</b>: khối lượng nhà đầu tư nước ngoài mua và bán.</li>
</ul>
<p><b>Ví dụ:</b> Mã BBX: Cao 45,30, Thấp 43,90, đang khớp 44,15. Nghĩa là trong ngày giá từng lên trên tham chiếu rồi bị bán xuống — biên độ dao động trong phiên = (45,30 − 43,90) ÷ 45,00 ≈ 3,1%.</p>
<p><b>Ví dụ khối ngoại:</b> NN mua 120.000 cp, NN bán 300.000 cp → khối ngoại <b>bán ròng</b> 180.000 cp. Với giá khoảng 44.000đ, giá trị bán ròng ≈ 180.000 × 44.000 = 7,92 tỷ đồng.</p>

<div class="warn">⚠ Mã tăng trần với dư mua trần rất lớn trông hấp dẫn, nhưng mua đuổi ở giá trần là rủi ro cao: bạn trả giá đắt nhất ngày và phải chờ T+2 mới bán được.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Mở bảng giá HOSE, chọn 5 mã trong danh sách VN30 đã lưu. Với mỗi mã ghi: TC, giá khớp, màu, % thay đổi, Tổng KL.</li>
  <li>Tự tính % thay đổi = (giá khớp − TC) ÷ TC × 100 và so với bảng.</li>
  <li>Tìm 1 mã đang có màu tím hoặc xanh lơ trên bất kỳ sàn nào. Dư bán (hoặc dư mua) của nó trông thế nào?</li>
</ol>
<p>Kết quả mong đợi: bảng 5 dòng, % tự tính khớp với bảng giá.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Bảng giá: Mã/TC/Trần/Sàn – Dư mua – Khớp lệnh – Dư bán – Thống kê.</li>
  <li>Tím trần, xanh lá tăng, vàng tham chiếu, đỏ giảm, xanh lơ sàn.</li>
  <li>Giá theo nghìn đồng; kiểm tra đơn vị khối lượng của bảng giá bạn dùng.</li>
  <li>NN mua − NN bán = mua/bán ròng của khối ngoại.</li>
</ul></div>
`,
  quiz: [
    { q: "Giá khớp hiển thị 32,50 nghĩa là:", options: ["32,5đ", "3.250đ", "32.500đ", "325.000đ"], answer: 2, explain: "Giá trên bảng giá thường tính theo nghìn đồng." },
    { q: "Mã có giá khớp bằng giá tham chiếu hiển thị màu:", options: ["Xanh lá", "Vàng", "Đỏ", "Tím"], answer: 1, explain: "Vàng = đứng giá (bằng tham chiếu)." },
    { q: "NN mua 50.000 cp, NN bán 20.000 cp. Khối ngoại:", options: ["Bán ròng 30.000 cp", "Mua ròng 30.000 cp", "Mua ròng 70.000 cp", "Không xác định"], answer: 1, explain: "Mua ròng = 50.000 − 20.000 = 30.000 cp." }
  ]
},

{
  id: "w02-2", week: 2, day: 2, minutes: 120,
  title: "Dư mua, dư bán và cơ chế khớp lệnh",
  summary: "Đọc “sổ lệnh” 3 bước giá để hiểu cung – cầu và dự đoán lệnh của bạn sẽ khớp ở đâu.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về một mã “tăng trần” hoặc “giảm sàn” hôm nay. Sau đó mở bảng giá xem dư mua/dư bán của mã đó lúc cuối phiên.</div>

<h3>1. Dư mua và dư bán là gì?</h3>
<p><b>Dư mua</b> là các lệnh mua đang <b>chờ</b> chưa khớp, hiển thị 3 mức giá cao nhất. <b>Dư bán</b> là các lệnh bán đang chờ, hiển thị 3 mức giá thấp nhất. Khoảng cách giữa giá mua cao nhất và giá bán thấp nhất gọi là <b>chênh lệch giá (spread)</b>.</p>
<p><b>Ví dụ:</b> Dư mua tốt nhất 20,40 (5.200 cp), dư bán tốt nhất 20,45 (1.800 cp). Spread = 0,05 nghìn đồng = 50đ, đúng 1 bước giá → mã có thanh khoản tốt. Một mã khác: mua 8,10, bán 8,60 → spread 500đ (≈ 6%) → thanh khoản kém, mua xong muốn bán ngay đã lỗ khoảng 6%.</p>

<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Sổ lệnh với ba mức dư mua và dư bán">
  <line x1="320" y1="20" x2="320" y2="230" style="stroke:var(--muted);stroke-width:1;stroke-dasharray:4 4"/>
  <text x="160" y="22" text-anchor="middle" style="fill:var(--up);font-size:13px;font-weight:600">DƯ MUA (người muốn mua)</text>
  <text x="480" y="22" text-anchor="middle" style="fill:var(--down);font-size:13px;font-weight:600">DƯ BÁN (người muốn bán)</text>
  <rect x="200" y="45" width="110" height="40" style="fill:var(--up);fill-opacity:0.7"/>
  <rect x="150" y="100" width="160" height="40" style="fill:var(--up);fill-opacity:0.5"/>
  <rect x="80" y="155" width="230" height="40" style="fill:var(--up);fill-opacity:0.35"/>
  <text x="190" y="70" text-anchor="end" style="fill:var(--text);font-size:12px">20,40 · 5.200</text>
  <text x="140" y="125" text-anchor="end" style="fill:var(--text);font-size:12px">20,35 · 8.000</text>
  <text x="70" y="180" text-anchor="end" style="fill:var(--text);font-size:12px">20,30 · 12.000</text>
  <rect x="330" y="45" width="40" height="40" style="fill:var(--down);fill-opacity:0.7"/>
  <rect x="330" y="100" width="90" height="40" style="fill:var(--down);fill-opacity:0.5"/>
  <rect x="330" y="155" width="140" height="40" style="fill:var(--down);fill-opacity:0.35"/>
  <text x="380" y="70" style="fill:var(--text);font-size:12px">20,45 · 1.800</text>
  <text x="430" y="125" style="fill:var(--text);font-size:12px">20,50 · 4.000</text>
  <text x="480" y="180" style="fill:var(--text);font-size:12px">20,55 · 7.000</text>
  <text x="320" y="250" text-anchor="middle" style="fill:var(--muted);font-size:12px">Giá tốt nhất nằm sát đường giữa. Thanh càng dài = khối lượng chờ càng lớn.</text>
</svg><figcaption>Hình: Sổ lệnh 3 bước giá. Spread = 20,45 − 20,40 = 0,05.</figcaption></figure>

<h3>2. Lệnh của bạn khớp ở đâu?</h3>
<p>Khi bạn đặt <b>mua</b> ở giá ≥ giá bán tốt nhất, lệnh khớp ngay với dư bán, lần lượt từ giá thấp lên. Khi bạn đặt mua thấp hơn, lệnh nằm vào hàng dư mua chờ.</p>
<p><b>Ví dụ (dùng sổ lệnh trong hình):</b> Bạn đặt mua LO 3.000 cp giá 20,50. Hệ thống khớp 1.800 cp ở 20,45 (hết mức này), rồi 1.200 cp ở 20,50. Giá trung bình = (1.800 × 20.450 + 1.200 × 20.500) ÷ 3.000 = (36.810.000 + 24.600.000) ÷ 3.000 = <b>20.470đ</b>. Lưu ý: bạn đặt giá 20,50 nhưng được khớp một phần ở giá tốt hơn 20,45.</p>
<p><b>Ví dụ:</b> Bạn đặt bán LO 2.000 cp giá 20,40 → khớp ngay 2.000 cp với dư mua 20,40 (đang có 5.200 cp). Dư mua 20,40 còn lại 3.200 cp.</p>

<h3>3. Đọc cung – cầu từ sổ lệnh</h3>
<p>Tổng dư mua 3 mức lớn hơn nhiều so với dư bán gợi ý lực mua đang mạnh, và ngược lại. Nhưng đây chỉ là <b>tín hiệu yếu</b>: lệnh có thể bị hủy bất cứ lúc nào, và nhiều người cố tình đặt lệnh lớn để “làm giá”.</p>
<p><b>Ví dụ:</b> Tổng dư mua = 5.200 + 8.000 + 12.000 = 25.200 cp; tổng dư bán = 1.800 + 4.000 + 7.000 = 12.800 cp. Tỷ lệ ≈ 2:1 nghiêng về bên mua. Nhưng nếu 5 phút sau lệnh mua 12.000 cp ở 20,30 biến mất, bức tranh thay đổi hoàn toàn.</p>

<h3>4. Trạng thái trần và sàn</h3>
<p><b>Trắng bên bán</b> (dư bán trống, dư mua ở giá trần): ai cũng muốn mua mà không ai bán. <b>Trắng bên mua</b> (dư mua trống, dư bán ở giá sàn): muốn bán cũng không bán được.</p>
<p><b>Ví dụ:</b> Một mã giảm sàn với 2 triệu cp chờ bán ở giá sàn, phía mua trống. Bạn đặt bán 1.000 cp ở giá sàn → lệnh xếp hàng sau 2 triệu cp kia, rất có thể không khớp trong ngày. Đây là tình huống người dùng margin sợ nhất (đã học khi tìm hiểu vì sao tránh margin).</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Chọn 2 mã: 1 mã VN30 và 1 mã nhỏ trên UPCoM. Chụp dư mua/dư bán, tính spread theo đồng và theo %.</li>
  <li>Với sổ lệnh trong hình, tính giá trung bình nếu bạn mua 6.000 cp bằng lệnh LO giá 20,55.</li>
  <li>Tổng dư mua và tổng dư bán của mã VN30 bạn chọn: bên nào lớn hơn?</li>
</ol>
<p>Đáp án câu 2: 1.800 × 20.450 + 4.000 × 20.500 + 200 × 20.550 = 36.810.000 + 82.000.000 + 4.110.000 = 122.920.000 → trung bình ≈ <b>20.487đ</b>.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Dư mua = lệnh mua chờ (3 giá cao nhất); dư bán = lệnh bán chờ (3 giá thấp nhất).</li>
  <li>Spread nhỏ = thanh khoản tốt; spread lớn = mua bán bị thiệt.</li>
  <li>Lệnh mua lớn có thể “ăn” nhiều bước giá → giá trung bình cao hơn giá bạn thấy.</li>
  <li>Sổ lệnh chỉ là tín hiệu yếu, lệnh có thể bị hủy bất cứ lúc nào.</li>
</ul></div>
`,
  quiz: [
    { q: "Giá mua tốt nhất 15,10, giá bán tốt nhất 15,15. Spread là:", options: ["5đ", "50đ", "500đ", "15.150đ"], answer: 1, explain: "15,15 − 15,10 = 0,05 nghìn đồng = 50đ." },
    { q: "“Trắng bên mua” ở giá sàn nghĩa là:", options: ["Rất nhiều người muốn mua", "Không có ai đặt mua, người bán khó bán được", "Cổ phiếu bị hủy niêm yết", "Giá sẽ tăng ngay"], answer: 1, explain: "Phía dư mua trống, dư bán dồn ở giá sàn." },
    { q: "Vì sao không nên tin hoàn toàn vào khối lượng dư mua lớn?", options: ["Vì bảng giá luôn sai", "Vì lệnh chờ có thể bị hủy bất cứ lúc nào", "Vì dư mua không được khớp", "Vì chỉ khối ngoại mới đặt được"], answer: 1, explain: "Lệnh chờ có thể bị sửa/hủy, đôi khi được đặt để tạo ảo giác cung – cầu." }
  ]
},

{
  id: "w02-3", week: 2, day: 3, minutes: 120,
  title: "Dùng app giao dịch: đặt, sửa, hủy lệnh và xem tài sản",
  summary: "Làm quen vòng đời một lệnh, sổ lệnh, sức mua và các con số trong mục tài sản.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Đọc tin rồi mở app giao dịch thay vì website. Tìm xem app có mục tin tức riêng của từng mã không; xem tin của 1 mã trong watchlist.</div>

<h3>1. Vòng đời của một lệnh</h3>
<figure class="fig"><svg viewBox="0 0 640 210" role="img" aria-label="Vòng đời lệnh: đặt, chờ khớp, khớp một phần, khớp hết hoặc hủy">
  <defs><marker id="w023a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker></defs>
  <rect x="10" y="80" width="110" height="50" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="65" y="110" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Đặt lệnh</text>
  <rect x="160" y="80" width="110" height="50" rx="10" style="fill:var(--card);stroke:var(--ref);stroke-width:2"/>
  <text x="215" y="102" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Chờ khớp</text>
  <text x="215" y="120" text-anchor="middle" style="fill:var(--muted);font-size:11px">(có thể sửa/hủy)</text>
  <rect x="320" y="20" width="130" height="50" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
  <text x="385" y="50" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Khớp một phần</text>
  <rect x="500" y="80" width="120" height="50" rx="10" style="fill:var(--up);fill-opacity:0.2;stroke:var(--up);stroke-width:2"/>
  <text x="560" y="110" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Khớp hết</text>
  <rect x="320" y="145" width="130" height="50" rx="10" style="fill:var(--down);fill-opacity:0.15;stroke:var(--down);stroke-width:2"/>
  <text x="385" y="168" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Hủy / hết hạn</text>
  <text x="385" y="185" text-anchor="middle" style="fill:var(--muted);font-size:11px">cuối ngày</text>
  <path d="M120 105 H157" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w023a)"/>
  <path d="M270 95 L317 55" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w023a)"/>
  <path d="M270 105 H497" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w023a)"/>
  <path d="M270 118 L317 160" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w023a)"/>
  <path d="M450 50 L520 80" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w023a)"/>
  <path d="M385 70 V142" style="stroke:var(--muted);stroke-width:2;fill:none;stroke-dasharray:4 3" marker-end="url(#w023a)"/>
</svg><figcaption>Hình: Lệnh LO không khớp hết trong ngày sẽ tự hủy phần còn lại khi hết phiên; hôm sau muốn mua tiếp phải đặt lại.</figcaption></figure>
<p><b>Ví dụ:</b> Bạn đặt mua 500 cp giá 25,00. Đến 11:00 khớp 200 cp, sổ lệnh hiện “Khớp một phần 200/500”. Đến hết phiên ATC giá không về 25,00 nữa → 300 cp còn lại tự hủy. Tài khoản của bạn chỉ có 200 cp (về vào T+2).</p>

<h3>2. Các trường khi đặt lệnh</h3>
<table>
  <tr><th>Trường</th><th>Ý nghĩa</th><th>Lỗi hay gặp</th></tr>
  <tr><td>Mã CK</td><td>3 ký tự, ví dụ mã giả định AAX</td><td>Gõ nhầm mã gần giống</td></tr>
  <tr><td>Mua/Bán</td><td>Chiều lệnh</td><td>Bấm nhầm Bán thành Mua</td></tr>
  <tr><td>Loại lệnh</td><td>LO / ATO / ATC / MTL</td><td>Để mặc định MTL mà không để ý</td></tr>
  <tr><td>Giá</td><td>Theo nghìn đồng, đúng bước giá</td><td>Gõ 2,5 thay vì 25,00</td></tr>
  <tr><td>Khối lượng</td><td>Bội số 100 với lô chẵn</td><td>Gõ thừa số 0 (10.000 thay vì 1.000)</td></tr>
</table>
<p><b>Ví dụ lỗi “béo tay”:</b> Muốn mua 1.000 cp giá 25.000đ (25 triệu) nhưng gõ 10.000 cp → lệnh trị giá 250 triệu. Nếu không đủ tiền, hệ thống từ chối; nếu đủ (hoặc có margin), bạn vừa mua gấp 10 lần dự định. Luôn đọc màn hình xác nhận trước khi bấm OTP.</p>

<h3>3. Sửa và hủy lệnh</h3>
<p>Lệnh đang chờ khớp có thể <b>sửa</b> (giá, khối lượng — tùy quy định từng sàn/app) hoặc <b>hủy</b>. Phần đã khớp thì không hủy được. Trong phiên ATO/ATC, việc sửa/hủy có thể bị hạn chế.</p>
<p><b>Ví dụ:</b> Bạn đặt mua 1.000 cp giá 30,00, đã khớp 400 cp. Thấy giá chạy lên 31,00, bạn hủy lệnh → chỉ hủy được 600 cp còn lại; 400 cp đã khớp vẫn là của bạn.</p>

<h3>4. Mục Tài sản: những con số cần hiểu</h3>
<ul>
  <li><b>Tiền mặt</b>: tiền có trong tài khoản.</li>
  <li><b>Sức mua</b>: số tiền có thể dùng mua ngay (tiền mặt, có thể cộng tiền bán chờ về/ứng trước hoặc margin — cẩn thận!).</li>
  <li><b>Giá vốn</b>: giá mua bình quân của mã bạn đang giữ.</li>
  <li><b>Lãi/lỗ tạm tính</b>: (giá thị trường − giá vốn) × số lượng.</li>
  <li><b>Cổ phiếu chờ về</b>: đã mua nhưng chưa đến T+2.</li>
</ul>
<p><b>Ví dụ giá vốn:</b> Mua 200 cp giá 20.000đ, tuần sau mua thêm 300 cp giá 22.000đ. Giá vốn = (200 × 20.000 + 300 × 22.000) ÷ 500 = (4.000.000 + 6.600.000) ÷ 500 = <b>21.200đ</b>. Giá thị trường 23.000đ → lãi tạm tính = (23.000 − 21.200) × 500 = 900.000đ (chưa trừ phí, thuế khi bán).</p>
<div class="warn">⚠ Nếu “sức mua” lớn hơn tiền mặt bạn nạp, rất có thể app đang cộng cả hạn mức margin. Kiểm tra kỹ để không vô tình vay.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Trên app, mở màn hình đặt lệnh (chưa cần nạp tiền). Chụp lại và ghi chú từng trường.</li>
  <li>Tìm Sổ lệnh, Lịch sử lệnh, Tài sản, Sao kê. Ghi lại đường đi (menu nào → mục nào).</li>
  <li>Tính giá vốn: mua 100 cp giá 50.000đ, sau đó 300 cp giá 46.000đ. Giá thị trường 48.000đ thì lãi/lỗ tạm tính bao nhiêu?</li>
</ol>
<p>Đáp án câu 3: giá vốn = (5.000.000 + 13.800.000) ÷ 400 = 47.000đ; lãi tạm tính = 1.000 × 400 = 400.000đ.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Lệnh LO chưa khớp hết sẽ tự hủy phần còn lại cuối ngày.</li>
  <li>Phần đã khớp không hủy được; đọc kỹ màn hình xác nhận trước khi nhập OTP.</li>
  <li>Giá vốn = tổng tiền mua ÷ tổng số cổ phiếu.</li>
  <li>Sức mua có thể đã bao gồm margin — kiểm tra kỹ.</li>
</ul></div>
`,
  quiz: [
    { q: "Lệnh LO mua 1.000 cp, đã khớp 300 cp. Bạn bấm hủy, điều gì xảy ra?", options: ["Hủy toàn bộ 1.000 cp", "Chỉ hủy 700 cp chưa khớp", "Không hủy được gì", "Hệ thống bán lại 300 cp"], answer: 1, explain: "Phần đã khớp là giao dịch hoàn tất; chỉ hủy được phần còn chờ." },
    { q: "Mua 100 cp giá 30.000đ và 100 cp giá 34.000đ. Giá vốn là:", options: ["30.000đ", "32.000đ", "34.000đ", "64.000đ"], answer: 1, explain: "(3.000.000 + 3.400.000) ÷ 200 = 32.000đ." },
    { q: "Sức mua lớn hơn số tiền bạn nạp. Khả năng cao là:", options: ["App bị lỗi", "Đang được cộng hạn mức margin", "Cổ phiếu đã tăng giá", "Được tặng tiền"], answer: 1, explain: "Nhiều app cộng sức mua margin; cần kiểm tra để tránh vô tình vay." }
  ]
},

{
  id: "w02-4", week: 2, day: 4, minutes: 120,
  title: "Các trang tra cứu: CafeF, Vietstock, FireAnt, Simplize",
  summary: "Biết mỗi trang mạnh ở đâu và cách tra nhanh thông tin một doanh nghiệp.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Hôm nay đọc tin trên một trang bạn chưa dùng (ví dụ Vietstock nếu hay đọc CafeF). So sánh cách hai trang đưa cùng một tin.</div>

<h3>1. Mỗi trang dùng để làm gì?</h3>
<table>
  <tr><th>Trang</th><th>Mạnh ở</th><th>Dùng khi</th></tr>
  <tr><td><b>CafeF</b></td><td>Tin tức thị trường, tin doanh nghiệp, lịch sự kiện, dữ liệu lịch sử giá, tải báo cáo tài chính</td><td>Đọc tin hằng ngày, xem lịch chia cổ tức, tải BCTC</td></tr>
  <tr><td><b>Vietstock</b></td><td>Dữ liệu tài chính chi tiết nhiều năm, tin công bố thông tin, thống kê</td><td>So sánh số liệu tài chính qua nhiều kỳ</td></tr>
  <tr><td><b>FireAnt</b></td><td>Biểu đồ, cộng đồng thảo luận, theo dõi danh mục</td><td>Xem biểu đồ, tạo watchlist (đọc thảo luận có chọn lọc)</td></tr>
  <tr><td><b>Simplize</b></td><td>Trình bày dữ liệu trực quan, chỉ số định giá, bộ lọc cổ phiếu</td><td>Xem nhanh “sức khỏe” doanh nghiệp, lọc cổ phiếu theo tiêu chí</td></tr>
</table>
<p class="muted">Tính năng các trang thay đổi theo thời gian, một số mục cần đăng nhập hoặc trả phí.</p>
<p><b>Ví dụ:</b> Bạn nghe tin “Công ty X chốt quyền cổ tức”. Bạn vào CafeF xem tin và lịch sự kiện (ngày chốt, tỷ lệ), sang Vietstock xem cổ tức các năm trước để biết công ty có trả đều không, rồi mở FireAnt xem biểu đồ giá quanh các lần chốt quyền trước.</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Quy trình tra cứu một doanh nghiệp qua các trang">
  <defs><marker id="w024a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker></defs>
  <circle cx="80" cy="115" r="55" style="fill:var(--accent);fill-opacity:0.18;stroke:var(--accent);stroke-width:2"/>
  <text x="80" y="110" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Câu hỏi</text>
  <text x="80" y="128" text-anchor="middle" style="fill:var(--muted);font-size:11px">về công ty X</text>
  <rect x="200" y="20" width="190" height="44" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="295" y="40" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Có tin gì? Sự kiện gì?</text>
  <text x="295" y="56" text-anchor="middle" style="fill:var(--muted);font-size:11px">→ CafeF</text>
  <rect x="200" y="74" width="190" height="44" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="295" y="94" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Lãi bao nhiêu, mấy năm?</text>
  <text x="295" y="110" text-anchor="middle" style="fill:var(--muted);font-size:11px">→ Vietstock</text>
  <rect x="200" y="128" width="190" height="44" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="295" y="148" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Giá đang đi thế nào?</text>
  <text x="295" y="164" text-anchor="middle" style="fill:var(--muted);font-size:11px">→ FireAnt / app</text>
  <rect x="200" y="182" width="190" height="44" rx="8" style="fill:var(--card);stroke:var(--line)"/>
  <text x="295" y="202" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Đắt hay rẻ, khỏe không?</text>
  <text x="295" y="218" text-anchor="middle" style="fill:var(--muted);font-size:11px">→ Simplize</text>
  <path d="M135 105 L197 45" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w024a)"/>
  <path d="M135 110 L197 96" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w024a)"/>
  <path d="M135 120 L197 148" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w024a)"/>
  <path d="M130 135 L197 200" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w024a)"/>
  <rect x="440" y="90" width="185" height="50" rx="10" style="fill:var(--up);fill-opacity:0.18;stroke:var(--up);stroke-width:2"/>
  <text x="532" y="112" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Tự kiểm chứng ở</text>
  <text x="532" y="128" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">nguồn gốc (BCTC)</text>
  <path d="M390 115 H437" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w024a)"/>
</svg><figcaption>Hình: Mỗi câu hỏi có một nơi tra phù hợp. Số liệu quan trọng nên đối chiếu lại với báo cáo tài chính gốc của doanh nghiệp.</figcaption></figure>

<h3>2. Trang thông tin một mã có gì?</h3>
<ul>
  <li><b>Hồ sơ</b>: ngành nghề, lịch sử, ban lãnh đạo, cổ đông lớn.</li>
  <li><b>Tài chính</b>: doanh thu, lợi nhuận, tài sản, nợ theo quý/năm.</li>
  <li><b>Chỉ số</b>: EPS, P/E, P/B, ROE (sẽ học tháng 2).</li>
  <li><b>Sự kiện</b>: cổ tức, đại hội cổ đông, phát hành thêm.</li>
  <li><b>Tài liệu</b>: BCTC, báo cáo thường niên, nghị quyết.</li>
</ul>
<p><b>Ví dụ:</b> Muốn biết ai là chủ lớn của một ngân hàng, vào mục “Cổ đông lớn”. Nếu thấy một cổ đông nhà nước nắm trên 50%, bạn hiểu rằng quyết định lớn của ngân hàng phụ thuộc nhiều vào cổ đông đó.</p>

<h3>3. Các trang có thể cho số khác nhau</h3>
<p>Các trang tính chỉ số theo cách hơi khác nhau (dùng lợi nhuận 4 quý gần nhất hay năm tài chính, lợi nhuận hợp nhất hay của cổ đông công ty mẹ…).</p>
<p><b>Ví dụ:</b> Trang A ghi P/E = 12,5 (dùng lợi nhuận năm ngoái), trang B ghi P/E = 10,8 (dùng 4 quý gần nhất, lợi nhuận đang tăng). Cả hai đều “đúng” theo cách tính của mình. Khi so sánh các công ty, hãy lấy số <b>từ cùng một nguồn</b>.</p>

<h3>4. Đọc thảo luận cộng đồng có chọn lọc</h3>
<p>Diễn đàn, nhóm chat có thể hữu ích để biết người khác đang quan tâm gì, nhưng đầy ý kiến thiên vị.</p>
<p><b>Ví dụ:</b> Một bài đăng “Mã X sắp x2, hàng sạch, cá mập đang gom” không có số liệu, không nêu nguồn. Đây là nhận định cảm tính, có thể do người đang nắm cổ phiếu muốn bán lại cho bạn. Thông tin đáng tin phải dẫn được về BCTC, công bố thông tin chính thức hoặc dữ liệu kiểm chứng được.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Chọn 1 mã trong danh sách VN30. Trên 2 trang khác nhau, tra: ngành, cổ đông lớn nhất, lợi nhuận năm gần nhất, P/E.</li>
  <li>Ghi lại số P/E ở 2 trang. Có khác nhau không? Chênh bao nhiêu %?</li>
  <li>Tạo tài khoản và một watchlist trống trên 1 trang bạn thích nhất.</li>
</ol>
<p>Kết quả mong đợi: bảng 2 cột (trang 1 / trang 2) cho 4 thông tin, kèm nhận xét chênh lệch.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>CafeF: tin tức, sự kiện; Vietstock: dữ liệu tài chính; FireAnt: biểu đồ, cộng đồng; Simplize: trực quan, bộ lọc.</li>
  <li>So sánh chỉ số giữa các công ty nên dùng cùng một nguồn.</li>
  <li>Số quan trọng thì đối chiếu với BCTC gốc.</li>
  <li>Thảo luận cộng đồng chỉ để tham khảo, không phải căn cứ mua bán.</li>
</ul></div>
`,
  quiz: [
    { q: "Hai trang ghi P/E khác nhau cho cùng một mã. Lý do hợp lý nhất?", options: ["Một trang chắc chắn sai", "Dùng kỳ lợi nhuận hoặc cách tính khác nhau", "Giá cổ phiếu khác nhau giữa các trang", "Do khác múi giờ"], answer: 1, explain: "Mỗi trang có thể dùng lợi nhuận năm, 4 quý gần nhất, hợp nhất hay công ty mẹ…" },
    { q: "Thông tin nào đáng tin nhất?", options: ["Bài đăng “sắp x2” trên nhóm chat", "Báo cáo tài chính được công bố chính thức", "Lời môi giới quen", "Bình luận nhiều lượt thích"], answer: 1, explain: "BCTC và công bố thông tin chính thức là nguồn gốc kiểm chứng được." },
    { q: "Muốn xem lịch chia cổ tức sắp tới, bạn nên xem mục nào?", options: ["Biểu đồ kỹ thuật", "Sự kiện / lịch sự kiện của mã", "Cổ đông lớn", "Diễn đàn"], answer: 1, explain: "Các trang tra cứu có mục lịch sự kiện liệt kê ngày chốt quyền, tỷ lệ cổ tức." }
  ]
},

{
  id: "w02-5", week: 2, day: 5, minutes: 120,
  title: "Các ngành trong VN30 và cách lập watchlist đa ngành",
  summary: "Hiểu vì sao cần đa dạng ngành và các nhóm ngành chính trên thị trường Việt Nam.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Đọc tin tổng kết tuần, để ý câu “nhóm ngành nào dẫn dắt”. Ghi lại ngành tăng mạnh nhất và giảm mạnh nhất tuần này.</div>

<h3>1. Vì sao cổ phiếu cùng ngành hay đi cùng nhau?</h3>
<p>Các công ty cùng ngành chịu chung yếu tố: chính sách, giá nguyên liệu, nhu cầu thị trường. Vì vậy cổ phiếu cùng ngành thường tăng/giảm cùng lúc.</p>
<p><b>Ví dụ:</b> Giá thép thế giới giảm mạnh 20% → hầu hết cổ phiếu ngành thép giảm cùng lúc, dù công ty tốt hay xấu. Nếu watchlist của bạn có 10 mã nhưng 6 mã là thép, bạn thực chất chỉ đang theo dõi 1 câu chuyện.</p>

<h3>2. Các nhóm ngành chính</h3>
<table>
  <tr><th>Ngành</th><th>Đặc điểm</th><th>Yếu tố cần theo dõi</th></tr>
  <tr><td>Ngân hàng</td><td>Chiếm tỷ trọng lớn trong VN30 và VN-Index</td><td>Lãi suất, tăng trưởng tín dụng, nợ xấu</td></tr>
  <tr><td>Bất động sản</td><td>Biến động mạnh, phụ thuộc pháp lý và tín dụng</td><td>Pháp lý dự án, lãi suất vay mua nhà</td></tr>
  <tr><td>Thép, vật liệu</td><td>Có tính chu kỳ</td><td>Giá thép, đầu tư công, xây dựng</td></tr>
  <tr><td>Bán lẻ, tiêu dùng</td><td>Gắn với sức mua người dân</td><td>Thu nhập, chi tiêu, lạm phát</td></tr>
  <tr><td>Công nghệ</td><td>Tăng trưởng, xuất khẩu dịch vụ phần mềm</td><td>Hợp đồng nước ngoài, nhân lực</td></tr>
  <tr><td>Chứng khoán</td><td>“Ăn theo” thanh khoản thị trường</td><td>Giá trị giao dịch toàn thị trường, margin</td></tr>
  <tr><td>Năng lượng, tiện ích</td><td>Dầu khí, điện, nước</td><td>Giá dầu, chính sách giá điện</td></tr>
</table>

<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Minh họa watchlist tập trung so với đa ngành">
  <text x="160" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Watchlist tập trung</text>
  <text x="480" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Watchlist đa ngành</text>
  <circle cx="160" cy="130" r="85" style="fill:var(--down);fill-opacity:0.25;stroke:var(--down);stroke-width:1.5"/>
  <path d="M160 130 L160 45 A85 85 0 1 1 110 199 Z" style="fill:var(--down);fill-opacity:0.6"/>
  <text x="185" y="160" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Thép 60%</text>
  <text x="115" y="95" text-anchor="middle" style="fill:var(--text);font-size:11px">Khác 40%</text>
  <circle cx="480" cy="130" r="85" style="fill:var(--line)"/>
  <path d="M480 130 L480 45 A85 85 0 0 1 560 101 Z" style="fill:var(--accent)"/>
  <path d="M480 130 L560 101 A85 85 0 0 1 530 199 Z" style="fill:var(--up)"/>
  <path d="M480 130 L530 199 A85 85 0 0 1 430 199 Z" style="fill:var(--c2)"/>
  <path d="M480 130 L430 199 A85 85 0 0 1 400 101 Z" style="fill:var(--ref)"/>
  <path d="M480 130 L400 101 A85 85 0 0 1 480 45 Z" style="fill:var(--c3)"/>
  <text x="515" y="85" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">NH</text>
  <text x="535" y="150" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">CN</text>
  <text x="480" y="190" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">BL</text>
  <text x="425" y="150" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">BĐS</text>
  <text x="445" y="85" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">Thép</text>
  <text x="320" y="240" text-anchor="middle" style="fill:var(--muted);font-size:11px">Minh họa: NH ngân hàng, CN công nghệ, BL bán lẻ, BĐS bất động sản</text>
</svg><figcaption>Hình: Khi giá thép giảm, watchlist tập trung chịu ảnh hưởng nặng; watchlist đa ngành chỉ bị ảnh hưởng một phần nhỏ.</figcaption></figure>

<h3>3. Lợi ích của đa dạng hóa — tính bằng số</h3>
<p><b>Ví dụ:</b> Bạn có 20 triệu. Một năm ngành thép giảm 30%, các ngành khác trung bình tăng 8% (số liệu minh họa).</p>
<ul>
  <li>Tập trung 100% vào thép: 20 triệu × (1 − 30%) = <b>14 triệu</b> (−30%).</li>
  <li>Chia đều 5 ngành, mỗi ngành 4 triệu: thép còn 2,8 triệu; 4 ngành khác thành 4 × 4,32 = 17,28 triệu. Tổng <b>20,08 triệu</b> (+0,4%).</li>
</ul>
<p>Đa dạng hóa không giúp bạn lãi nhiều nhất, nhưng giúp bạn <b>không thua đậm</b> vì một sai lầm.</p>

<h3>4. Cách lập watchlist 10 mã</h3>
<ol>
  <li>Chọn 5–7 ngành khác nhau.</li>
  <li>Mỗi ngành chọn 1–2 mã đầu ngành (thường nằm trong VN30).</li>
  <li>Ghi lý do chọn bằng 1 câu cho mỗi mã.</li>
</ol>
<p><b>Ví dụ cấu trúc (không phải khuyến nghị):</b> 2 ngân hàng, 1 bất động sản, 1 thép, 1 bán lẻ, 1 công nghệ, 1 tiêu dùng thiết yếu, 1 năng lượng, 1 chứng khoán, 1 ETF VN30 làm “thước đo” so sánh.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Lấy danh sách VN30 đã lưu. Tra ngành của từng mã (mục Hồ sơ trên trang tra cứu), xếp thành bảng theo ngành.</li>
  <li>Đếm: ngành nào có nhiều mã nhất trong VN30?</li>
  <li>Đánh dấu sơ bộ 10–12 mã thuộc ít nhất 6 ngành để chuẩn bị bài tập thứ 7.</li>
</ol>
<p>Kết quả mong đợi: bảng VN30 phân theo ngành, và danh sách nháp 10–12 mã.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Cổ phiếu cùng ngành thường biến động cùng chiều.</li>
  <li>Ngân hàng chiếm tỷ trọng lớn trong VN30 và VN-Index.</li>
  <li>Đa dạng hóa giúp tránh thua đậm vì một ngành.</li>
  <li>Mỗi mã trong watchlist cần 1 câu lý do.</li>
</ul></div>
`,
  quiz: [
    { q: "Vì sao watchlist 10 mã toàn ngân hàng không thật sự đa dạng?", options: ["Ngân hàng không được niêm yết", "Chúng chịu chung yếu tố nên thường biến động cùng chiều", "Ngân hàng không trả cổ tức", "Vì quá ít mã"], answer: 1, explain: "Cùng ngành → cùng rủi ro (lãi suất, nợ xấu, chính sách)." },
    { q: "Ngành nào thường “ăn theo” thanh khoản thị trường nhiều nhất?", options: ["Điện", "Chứng khoán", "Bán lẻ", "Nước sạch"], answer: 1, explain: "Doanh thu môi giới, cho vay margin của CTCK phụ thuộc giá trị giao dịch." },
    { q: "20 triệu chia đều 4 ngành; 1 ngành giảm 40%, 3 ngành đi ngang. Danh mục còn:", options: ["12 triệu", "16 triệu", "18 triệu", "20 triệu"], answer: 2, explain: "Mỗi ngành 5 triệu; ngành giảm còn 3 triệu → tổng 18 triệu (−10%)." }
  ]
},

{
  id: "w02-6", week: 2, day: 6, minutes: 240,
  title: "Thực hành: Lập watchlist 10 mã VN30 đa ngành",
  summary: "Xây watchlist có lý do rõ ràng, có bảng theo dõi giá, và đọc ý tưởng “Ngài Thị Trường”.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<h4>Bước 1 – Chốt 10 mã (45 phút)</h4>
<p>Từ danh sách nháp hôm qua, chọn 10 mã thuộc ít nhất 6 ngành. Mỗi ngành tối đa 2 mã.</p>
<h4>Bước 2 – Điền bảng theo dõi (60 phút)</h4>
<table>
  <tr><th>#</th><th>Mã</th><th>Ngành</th><th>Công ty làm gì (1 câu)</th><th>Giá hôm nay</th><th>Vốn hóa</th><th>Cao/Thấp 52 tuần</th><th>Lý do theo dõi</th></tr>
  <tr><td>1</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td>2</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td>…</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
  <tr><td>10</td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ một dòng (mã giả định):</b> AAX · Ngân hàng · Cho vay doanh nghiệp và cá nhân, thu phí dịch vụ · 24,50 · 120 nghìn tỷ · 28,00 / 19,20 · Ngân hàng lớn, muốn học cách ngành ngân hàng chịu tác động lãi suất.</p>
<h4>Bước 3 – Vị trí giá trong 52 tuần (30 phút)</h4>
<p>Tính vị trí giá hiện tại trong vùng giá 52 tuần: (Giá − Thấp) ÷ (Cao − Thấp) × 100%.</p>
<p><b>Ví dụ:</b> AAX: (24,50 − 19,20) ÷ (28,00 − 19,20) = 5,30 ÷ 8,80 ≈ <b>60%</b> → giá đang ở khoảng giữa – trên của vùng 1 năm. 0% = đáy năm, 100% = đỉnh năm. Con số này chỉ để mô tả, không nói lên đắt hay rẻ.</p>
<figure class="fig"><svg viewBox="0 0 640 150" role="img" aria-label="Vị trí giá hiện tại trong vùng cao thấp 52 tuần">
  <rect x="60" y="60" width="520" height="22" rx="11" style="fill:var(--line)"/>
  <rect x="60" y="60" width="312" height="22" rx="11" style="fill:var(--accent);fill-opacity:0.5"/>
  <circle cx="372" cy="71" r="11" style="fill:var(--accent)"/>
  <text x="60" y="110" text-anchor="middle" style="fill:var(--floor);font-size:12px">Thấp 19,20</text>
  <text x="580" y="110" text-anchor="middle" style="fill:var(--ceil);font-size:12px">Cao 28,00</text>
  <text x="372" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Hiện tại 24,50 (≈60%)</text>
  <text x="320" y="138" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vùng giá 52 tuần (mã giả định)</text>
</svg><figcaption>Hình: Thanh vị trí giá 52 tuần giúp so sánh nhanh 10 mã trong watchlist.</figcaption></figure>
<h4>Bước 4 – Nhập watchlist vào app/trang tra cứu (15 phút)</h4>
<p>Tạo danh sách “Watchlist học tập” trên app giao dịch và 1 trang tra cứu để mở nhanh mỗi ngày.</p>
<p><b>Tiêu chí tự đánh giá:</b> ✓ 10 mã, ≥ 6 ngành, mỗi ngành ≤ 2 mã; ✓ Mỗi mã có câu mô tả và lý do; ✓ Tính được vị trí giá 52 tuần cho cả 10 mã; ✓ Watchlist đã có trên app.</p>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc tiếp khoảng 50–80 trang “Nhà đầu tư thông minh”, chú ý ẩn dụ nổi tiếng <b>“Ngài Thị Trường” (Mr. Market)</b>: hãy tưởng tượng bạn có một người cộng sự mỗi ngày đều đến báo giá mua lại phần của bạn hoặc bán thêm cho bạn. Có hôm ông ấy hưng phấn, báo giá rất cao; có hôm ông ấy chán nản, báo giá rất thấp. Bạn <b>không bắt buộc</b> phải giao dịch với ông ấy — bạn chỉ tận dụng khi giá ông ấy đưa ra có lợi cho bạn.</p>
<p><b>Ví dụ:</b> Bạn đánh giá một doanh nghiệp đáng giá khoảng 30.000đ/cp. Tháng 3 thị trường hưng phấn, “Ngài Thị Trường” trả 40.000đ; tháng 9 hoảng loạn, ông chào bán chỉ 20.000đ. Nhà đầu tư thông minh không vì giá 40.000đ mà nghĩ doanh nghiệp tốt hơn, cũng không vì 20.000đ mà sợ hãi bán theo.</p>
<p><b>Câu hỏi tự trả lời:</b> (1) Tuần này VN-Index biến động, “Ngài Thị Trường” đang vui hay buồn? (2) Bạn có từng mua vì giá đang tăng mạnh không? (3) Làm sao để không bị tâm trạng của ông ấy chi phối?</p>
`,
  quiz: [
    { q: "Giá 30,00; thấp 52 tuần 20,00; cao 52 tuần 40,00. Vị trí giá là:", options: ["25%", "50%", "75%", "100%"], answer: 1, explain: "(30 − 20) ÷ (40 − 20) = 50%." },
    { q: "Theo ẩn dụ “Ngài Thị Trường”, nhà đầu tư nên:", options: ["Luôn làm theo giá ông ấy đưa ra", "Chỉ giao dịch khi giá có lợi, không bị tâm trạng ông ấy chi phối", "Bán ngay khi ông ấy chán nản", "Mua ngay khi ông ấy hưng phấn"], answer: 1, explain: "Thị trường phục vụ bạn, không chỉ dẫn bạn." }
  ]
},

{
  id: "w02-7", week: 2, day: 7, minutes: 240,
  title: "Ôn tập tuần 2",
  summary: "Ôn cách đọc bảng giá, sổ lệnh, app, trang tra cứu và watchlist; chuẩn bị tuần vĩ mô.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc lại phần “Ngài Thị Trường” và đọc tiếp khoảng 50 trang. Ghi lại 3 câu bạn thấy đáng nhớ nhất, viết lại bằng lời của mình.</p>
<p><b>Ví dụ ghi chép:</b> “Giá giảm không có nghĩa doanh nghiệp xấu đi. Mình cần hỏi: lợi nhuận và tài sản của công ty có đổi không, hay chỉ có tâm trạng thị trường đổi?”</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Tóm tắt tuần 2 thành 5 khối">
  <rect x="10" y="20" width="115" height="150" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <rect x="135" y="20" width="115" height="150" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
  <rect x="260" y="20" width="115" height="150" rx="10" style="fill:var(--card);stroke:var(--ref);stroke-width:2"/>
  <rect x="385" y="20" width="115" height="150" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
  <rect x="510" y="20" width="120" height="150" rx="10" style="fill:var(--card);stroke:var(--c3);stroke-width:2"/>
  <text x="67" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Bảng giá</text>
  <text x="67" y="72" text-anchor="middle" style="fill:var(--muted);font-size:11px">Màu sắc</text>
  <text x="67" y="90" text-anchor="middle" style="fill:var(--muted);font-size:11px">Đơn vị giá, KL</text>
  <text x="67" y="108" text-anchor="middle" style="fill:var(--muted);font-size:11px">NN mua/bán</text>
  <text x="192" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Sổ lệnh</text>
  <text x="192" y="72" text-anchor="middle" style="fill:var(--muted);font-size:11px">Dư mua/bán</text>
  <text x="192" y="90" text-anchor="middle" style="fill:var(--muted);font-size:11px">Spread</text>
  <text x="192" y="108" text-anchor="middle" style="fill:var(--muted);font-size:11px">Giá khớp TB</text>
  <text x="317" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">App</text>
  <text x="317" y="72" text-anchor="middle" style="fill:var(--muted);font-size:11px">Đặt/sửa/hủy</text>
  <text x="317" y="90" text-anchor="middle" style="fill:var(--muted);font-size:11px">Giá vốn</text>
  <text x="317" y="108" text-anchor="middle" style="fill:var(--muted);font-size:11px">Sức mua</text>
  <text x="442" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Tra cứu</text>
  <text x="442" y="72" text-anchor="middle" style="fill:var(--muted);font-size:11px">4 trang, 4 việc</text>
  <text x="442" y="90" text-anchor="middle" style="fill:var(--muted);font-size:11px">Cùng nguồn</text>
  <text x="442" y="108" text-anchor="middle" style="fill:var(--muted);font-size:11px">Kiểm chứng</text>
  <text x="570" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Watchlist</text>
  <text x="570" y="72" text-anchor="middle" style="fill:var(--muted);font-size:11px">10 mã, 6+ ngành</text>
  <text x="570" y="90" text-anchor="middle" style="fill:var(--muted);font-size:11px">Lý do từng mã</text>
  <text x="570" y="108" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vị trí 52 tuần</text>
  <text x="320" y="205" text-anchor="middle" style="fill:var(--muted);font-size:12px">Tuần 2 = biết dùng công cụ trước khi dùng tiền thật</text>
</svg><figcaption>Hình: 5 khối kiến thức tuần 2.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ul>
  <li>Mô tả 5 màu trên bảng giá và một ví dụ cho mỗi màu.</li>
  <li>Dư bán: 1.000 cp giá 30,00; 2.000 cp giá 30,05. Mua LO 2.500 cp giá 30,05 thì giá trung bình bao nhiêu? (Đáp án: (30.000.000 + 45.075.000) ÷ 2.500 = 30.030đ.)</li>
  <li>Vì sao sức mua có thể lớn hơn tiền mặt?</li>
  <li>Trang nào dùng để xem lịch chia cổ tức? Trang nào xem dữ liệu tài chính nhiều năm?</li>
</ul>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist:</b></p>
<ul>
  <li>☐ Đọc được mọi cột trên bảng giá</li>
  <li>☐ Biết đặt, sửa, hủy lệnh trên app (chưa cần lệnh thật)</li>
  <li>☐ Có tài khoản ít nhất 1 trang tra cứu</li>
  <li>☐ Watchlist 10 mã, ≥ 6 ngành, có lý do</li>
  <li>☐ Đọc xong phần “Ngài Thị Trường”</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Trong 10 mã, mã nào bạn hiểu rõ nhất và mã nào bạn hiểu ít nhất? Mã nào biến động mạnh nhất tuần và bạn nghĩ vì sao?</p>
<p><b>Chuẩn bị tuần 3:</b> Tuần sau học vĩ mô (lãi suất, tỷ giá, lạm phát, GDP). Hãy tìm trang tin của Ngân hàng Nhà nước và Cục Thống kê (trước đây là Tổng cục Thống kê) để biết nơi số liệu chính thức được công bố.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Hoàn thiện watchlist nếu còn thiếu, hoặc luyện thêm phép tính giá khớp trung bình và giá vốn.</p>
`,
  quiz: [
    { q: "Mã có giá khớp bằng giá sàn hiển thị màu:", options: ["Đỏ", "Xanh lơ", "Tím", "Vàng"], answer: 1, explain: "Xanh lơ (cyan) = giá sàn." },
    { q: "Dư mua tốt nhất 10,00; dư bán tốt nhất 10,50. Spread theo % (so với 10,00) là:", options: ["0,5%", "5%", "50%", "0,05%"], answer: 1, explain: "0,50 ÷ 10,00 = 5% — thanh khoản kém." },
    { q: "Mua 200 cp giá 15.000đ và 300 cp giá 20.000đ. Giá vốn:", options: ["17.500đ", "18.000đ", "17.000đ", "35.000đ"], answer: 1, explain: "(3.000.000 + 6.000.000) ÷ 500 = 18.000đ." },
    { q: "Lệnh LO chưa khớp hết đến cuối ngày thì:", options: ["Tự chuyển sang ngày mai", "Phần chưa khớp tự hủy", "Tự khớp ở giá ATC", "Bị phạt phí"], answer: 1, explain: "Lệnh trong ngày hết hiệu lực khi hết phiên." },
    { q: "Khối ngoại mua 200.000 cp, bán 500.000 cp. Đây là:", options: ["Mua ròng 300.000 cp", "Bán ròng 300.000 cp", "Mua ròng 700.000 cp", "Cân bằng"], answer: 1, explain: "200.000 − 500.000 = −300.000 → bán ròng." },
    { q: "Muốn so sánh P/E của 3 công ty, bạn nên:", options: ["Lấy mỗi công ty ở một trang khác nhau", "Lấy cả 3 từ cùng một nguồn", "Hỏi nhóm chat", "Chỉ cần nhìn giá"], answer: 1, explain: "Cùng nguồn → cùng cách tính → so sánh công bằng." },
    { q: "Watchlist tốt cho người mới nên:", options: ["10 mã cùng ngành nóng nhất", "10 mã thuộc nhiều ngành, mỗi mã có lý do", "Chỉ mã UPCoM giá rẻ", "Các mã tăng trần hôm nay"], answer: 1, explain: "Đa ngành giúp học được nhiều câu chuyện và giảm rủi ro tập trung." },
    { q: "Ý chính của ẩn dụ “Ngài Thị Trường” là:", options: ["Thị trường luôn đúng", "Giá thị trường dao động theo tâm trạng; bạn không bắt buộc phải theo", "Nên giao dịch mỗi ngày", "Nên mua khi mọi người hưng phấn"], answer: 1, explain: "Hãy tận dụng thị trường thay vì để nó chỉ dẫn bạn." }
  ]
}
);

/* ======================= TUẦN 3: VĨ MÔ 1 ======================= */
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w03-1", week: 3, day: 1, minutes: 120,
  title: "Cách đọc tin và ghi nhật ký thị trường",
  summary: "Phân biệt sự kiện với nhận định, và xây thói quen ghi nhật ký thị trường 15 phút mỗi ngày.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Hôm nay áp dụng ngay mẫu nhật ký trong bài. Đọc 3 tin: 1 tin tổng hợp thị trường, 1 tin vĩ mô, 1 tin doanh nghiệp trong watchlist.</div>

<h3>1. Sự kiện (fact) và nhận định (opinion)</h3>
<p><b>Sự kiện</b> là điều đã xảy ra, kiểm chứng được. <b>Nhận định</b> là cách ai đó diễn giải hoặc dự đoán. Bài báo thường trộn cả hai.</p>
<p><b>Ví dụ:</b> Câu “VN-Index giảm 18 điểm, khối ngoại bán ròng 650 tỷ đồng” là sự kiện. Câu “Thị trường giảm do lo ngại lãi suất tăng, dự báo sẽ còn điều chỉnh” là nhận định — có thể đúng, có thể sai. Trong nhật ký, ghi sự kiện ở một cột và nhận định ở cột khác.</p>

<h3>2. Bốn câu hỏi khi đọc một tin</h3>
<ol>
  <li><b>Chuyện gì xảy ra?</b> (sự kiện, con số)</li>
  <li><b>Ai bị ảnh hưởng?</b> (toàn thị trường, một ngành, một công ty)</li>
  <li><b>Ảnh hưởng tốt hay xấu, ngắn hạn hay dài hạn?</b></li>
  <li><b>Thị trường đã phản ứng chưa?</b> (giá đã tăng/giảm trước khi tin ra?)</li>
</ol>
<p><b>Ví dụ:</b> Tin “Giá thép xây dựng trong nước giảm 3 lần trong tháng”. (1) Giá thép giảm. (2) Công ty thép bị ảnh hưởng xấu (biên lợi nhuận giảm); công ty xây dựng có thể có lợi (chi phí vật liệu giảm). (3) Ngắn hạn xấu cho thép; dài hạn tùy nhu cầu. (4) Xem lại biểu đồ: cổ phiếu thép đã giảm từ 2 tuần trước → có thể thị trường đã “biết trước”.</p>

<figure class="fig"><svg viewBox="0 0 640 220" role="img" aria-label="Lọc tin thành nhật ký: tin tức qua bốn câu hỏi thành ghi chép">
  <defs><marker id="w031a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker></defs>
  <rect x="10" y="30" width="150" height="160" rx="10" style="fill:var(--card);stroke:var(--line)"/>
  <text x="85" y="55" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Rất nhiều tin</text>
  <rect x="30" y="70" width="110" height="10" rx="3" style="fill:var(--line)"/>
  <rect x="30" y="90" width="90" height="10" rx="3" style="fill:var(--line)"/>
  <rect x="30" y="110" width="110" height="10" rx="3" style="fill:var(--line)"/>
  <rect x="30" y="130" width="70" height="10" rx="3" style="fill:var(--line)"/>
  <rect x="30" y="150" width="100" height="10" rx="3" style="fill:var(--line)"/>
  <path d="M200 40 L380 80 L380 140 L200 180 Z" style="fill:var(--accent);fill-opacity:0.15;stroke:var(--accent);stroke-width:1.5"/>
  <text x="290" y="95" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">4 câu hỏi</text>
  <text x="290" y="115" text-anchor="middle" style="fill:var(--muted);font-size:11px">Gì? Ai? Tốt/xấu?</text>
  <text x="290" y="131" text-anchor="middle" style="fill:var(--muted);font-size:11px">Giá phản ứng chưa?</text>
  <path d="M160 110 H197" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w031a)"/>
  <path d="M380 110 H417" style="stroke:var(--muted);stroke-width:2;fill:none" marker-end="url(#w031a)"/>
  <rect x="420" y="50" width="210" height="120" rx="10" style="fill:var(--up);fill-opacity:0.12;stroke:var(--up);stroke-width:2"/>
  <text x="525" y="75" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Nhật ký 3–5 dòng</text>
  <text x="435" y="100" style="fill:var(--muted);font-size:11px">• Sự kiện + con số</text>
  <text x="435" y="120" style="fill:var(--muted);font-size:11px">• Ngành/mã bị ảnh hưởng</text>
  <text x="435" y="140" style="fill:var(--muted);font-size:11px">• Nhận định của mình</text>
</svg><figcaption>Hình: Không cần đọc hết mọi tin. Lọc qua 4 câu hỏi rồi ghi lại vài dòng có giá trị.</figcaption></figure>

<h3>3. Mẫu nhật ký thị trường hằng ngày</h3>
<table>
  <tr><th>Mục</th><th>Ví dụ ghi</th></tr>
  <tr><td>Ngày</td><td>Thứ 2, ngày …</td></tr>
  <tr><td>VN-Index</td><td>1.268 (−0,9%), thanh khoản HOSE 18.500 tỷ (số liệu minh họa)</td></tr>
  <tr><td>Độ rộng</td><td>120 tăng / 290 giảm</td></tr>
  <tr><td>Khối ngoại</td><td>Bán ròng 420 tỷ</td></tr>
  <tr><td>Ngành nổi bật</td><td>Ngân hàng giảm mạnh, công nghệ tăng</td></tr>
  <tr><td>Tin chính (sự kiện)</td><td>Một số ngân hàng tăng lãi suất huy động 0,2–0,3%</td></tr>
  <tr><td>Nhận định báo chí</td><td>Lo ngại mặt bằng lãi suất tăng</td></tr>
  <tr><td>Nhận định của tôi</td><td>Hợp lý vì ngân hàng giảm mạnh nhất; cần theo dõi tiếp lãi suất tuần sau</td></tr>
  <tr><td>Watchlist</td><td>Mã nào biến động &gt; 3%? Vì sao?</td></tr>
</table>
<p><b>Ví dụ cách dùng:</b> Sau 4 tuần ghi nhật ký, bạn đọc lại và nhận ra: những hôm khối ngoại bán ròng trên 500 tỷ, VN-Index giảm 6/8 lần. Đây là quan sát của riêng bạn — có giá trị hơn nhiều so với đọc một nhận định chung chung.</p>

<h3>4. Bẫy khi đọc tin</h3>
<ul>
  <li><b>Giải thích sau sự việc:</b> báo chí luôn tìm được lý do sau khi giá đã chạy.</li>
  <li><b>Tiêu đề giật gân:</b> “Thị trường rực lửa” có thể chỉ là giảm 1%.</li>
  <li><b>Tin cũ:</b> tin đã ra từ tuần trước được đăng lại.</li>
</ul>
<p><b>Ví dụ:</b> Sáng nay báo viết “Thị trường tăng nhờ kỳ vọng hạ lãi suất”, chiều hôm trước cùng báo viết “Thị trường giảm vì lo lãi suất chưa hạ”. Cùng một yếu tố được dùng để giải thích hai chiều ngược nhau — đó là lý do bạn cần ghi lại để tự kiểm chứng.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Tạo file/sổ nhật ký theo mẫu trên (có thể dùng tab Ghi chú trong web học tập).</li>
  <li>Ghi đầy đủ cho ngày hôm nay.</li>
  <li>Chọn 1 tin, gạch chân câu nào là sự kiện, câu nào là nhận định.</li>
</ol>
<p>Kết quả mong đợi: 1 trang nhật ký hoàn chỉnh, tách rõ sự kiện và nhận định.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Tách sự kiện (kiểm chứng được) khỏi nhận định (có thể sai).</li>
  <li>4 câu hỏi: Gì? Ai? Tốt/xấu, ngắn/dài hạn? Giá phản ứng chưa?</li>
  <li>Nhật ký đều đặn giúp bạn tự rút ra quy luật, không phụ thuộc người khác.</li>
  <li>Cẩn thận với tiêu đề giật gân và giải thích sau sự việc.</li>
</ul></div>
`,
  quiz: [
    { q: "Câu nào là SỰ KIỆN?", options: ["Thị trường sẽ còn giảm", "Khối ngoại bán ròng 650 tỷ đồng hôm nay", "Nhà đầu tư đang lo sợ", "Cổ phiếu ngân hàng đang rẻ"], answer: 1, explain: "Con số khối ngoại bán ròng kiểm chứng được; các câu còn lại là nhận định." },
    { q: "Giá thép giảm mạnh. Nhóm nào có thể hưởng lợi?", options: ["Công ty sản xuất thép", "Công ty xây dựng dùng nhiều thép", "Ngân hàng", "Không ai"], answer: 1, explain: "Chi phí vật liệu của công ty xây dựng giảm." },
    { q: "Vì sao nên ghi nhật ký thị trường?", options: ["Để khoe với bạn bè", "Để tự kiểm chứng các nhận định và rút ra quan sát của riêng mình", "Vì CTCK bắt buộc", "Để dự đoán chính xác giá ngày mai"], answer: 1, explain: "Nhật ký giúp bạn học từ dữ liệu thật thay vì tin vào lời giải thích sau sự việc." }
  ]
},

{
  id: "w03-2", week: 3, day: 2, minutes: 120,
  title: "Lãi suất và Ngân hàng Nhà nước",
  summary: "Hiểu vì sao lãi suất là “trọng lực” của giá cổ phiếu và NHNN điều hành lãi suất thế nào.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin về lãi suất huy động (tiết kiệm) hoặc lãi suất cho vay tuần này. Các ngân hàng đang tăng, giảm hay giữ nguyên? Ghi lại mức lãi suất tiết kiệm 12 tháng của 2 ngân hàng.</div>

<h3>1. Lãi suất là “giá của tiền”</h3>
<p>Lãi suất là chi phí để vay tiền, và cũng là phần thưởng cho việc gửi tiền. Khi lãi suất thay đổi, mọi tài sản khác đều bị ảnh hưởng.</p>
<p><b>Ví dụ:</b> Bạn có 100 triệu. Lãi suất tiết kiệm 12 tháng là 8%/năm → gửi ngân hàng chắc chắn được 8 triệu. Lúc đó bạn sẽ đòi hỏi cổ phiếu phải hứa hẹn nhiều hơn 8% mới đáng chấp nhận rủi ro. Nếu lãi suất chỉ còn 4,5%, cổ phiếu kỳ vọng 10% trông hấp dẫn hơn hẳn → nhiều người chuyển tiền sang cổ phiếu.</p>

<h3>2. Ba kênh lãi suất tác động đến cổ phiếu</h3>
<table>
  <tr><th>Kênh</th><th>Khi lãi suất tăng</th><th>Ví dụ</th></tr>
  <tr><td>Chi phí vốn của doanh nghiệp</td><td>Lãi vay tăng → lợi nhuận giảm</td><td>Công ty nợ 1.000 tỷ, lãi vay tăng từ 8% lên 10% → chi phí lãi tăng thêm 20 tỷ/năm</td></tr>
  <tr><td>So sánh với kênh khác</td><td>Gửi tiết kiệm hấp dẫn hơn → tiền rút khỏi cổ phiếu</td><td>Tiết kiệm 8% so với cổ phiếu “lãi” 7%/năm theo lợi nhuận</td></tr>
  <tr><td>Margin, vay đầu tư</td><td>Vay đắt hơn → ít người vay mua cổ phiếu</td><td>Lãi margin tăng từ 12% lên 14%</td></tr>
</table>
<p><b>Ví dụ tính chi phí lãi vay:</b> Công ty B (minh họa) có lợi nhuận trước lãi vay và thuế 300 tỷ, nợ vay 1.000 tỷ. Lãi suất 8% → lãi vay 80 tỷ → lợi nhuận trước thuế 220 tỷ. Lãi suất lên 11% → lãi vay 110 tỷ → lợi nhuận trước thuế 190 tỷ, <b>giảm 13,6%</b> dù hoạt động kinh doanh không đổi.</p>

<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Bập bênh lãi suất và giá cổ phiếu">
  <polygon points="320,190 295,225 345,225" style="fill:var(--muted)"/>
  <line x1="110" y1="135" x2="530" y2="185" style="stroke:var(--text);stroke-width:5;stroke-linecap:round"/>
  <rect x="80" y="74" width="110" height="56" rx="8" style="fill:var(--c2);fill-opacity:0.25;stroke:var(--c2);stroke-width:2"/>
  <text x="135" y="97" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Lãi suất</text>
  <text x="135" y="118" text-anchor="middle" style="fill:var(--c2);font-size:16px;font-weight:700">↑</text>
  <rect x="460" y="124" width="110" height="56" rx="8" style="fill:var(--down);fill-opacity:0.2;stroke:var(--down);stroke-width:2"/>
  <text x="515" y="147" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Định giá CP</text>
  <text x="515" y="168" text-anchor="middle" style="fill:var(--down);font-size:16px;font-weight:700">↓</text>
  <text x="320" y="40" text-anchor="middle" style="fill:var(--muted);font-size:12px">Như chiếc bập bênh: một đầu lên thì đầu kia xuống</text>
</svg><figcaption>Hình: Lãi suất và định giá cổ phiếu thường đi ngược chiều. Đây là xu hướng chung, không phải quy luật tuyệt đối từng ngày.</figcaption></figure>

<h3>3. So sánh “lợi suất” cổ phiếu và lãi suất</h3>
<p>Lấy lợi nhuận mỗi cổ phiếu (EPS) chia cho giá, ta được <b>lợi suất lợi nhuận</b> (E/P) — tức là nếu bạn sở hữu cổ phiếu, mỗi năm công ty “kiếm” cho bạn bao nhiêu % trên số tiền bỏ ra.</p>
<p><b>Ví dụ:</b> Cổ phiếu giá 30.000đ, EPS 3.000đ → E/P = 3.000 ÷ 30.000 = <b>10%</b>. Lãi suất tiết kiệm 5% → cổ phiếu “kiếm” gấp đôi tiết kiệm (nhưng rủi ro hơn). Nếu tiết kiệm lên 9%, khoảng chênh chỉ còn 1% — nhiều nhà đầu tư sẽ thấy không đáng rủi ro và bán bớt, khiến giá giảm cho đến khi E/P đủ hấp dẫn trở lại.</p>
<p>Tiếp ví dụ: muốn E/P lên 12% khi EPS vẫn 3.000đ, giá phải giảm về 3.000 ÷ 12% = <b>25.000đ</b> (−16,7%). Đây là cơ chế lãi suất “kéo” giá xuống.</p>

<h3>4. Ngân hàng Nhà nước (NHNN) điều hành lãi suất thế nào?</h3>
<p>NHNN là ngân hàng trung ương, có nhiệm vụ ổn định giá trị tiền đồng và kiểm soát lạm phát. Công cụ chính:</p>
<ul>
  <li><b>Lãi suất điều hành</b>: lãi suất tái cấp vốn, tái chiết khấu — mức NHNN cho các ngân hàng thương mại vay.</li>
  <li><b>Nghiệp vụ thị trường mở (OMO)</b>: mua/bán giấy tờ có giá với ngân hàng để bơm hoặc hút tiền.</li>
  <li><b>Tín phiếu NHNN</b>: phát hành để hút bớt tiền đồng khỏi hệ thống.</li>
  <li><b>Hạn mức tăng trưởng tín dụng</b>: giới hạn mỗi ngân hàng được cho vay tăng bao nhiêu.</li>
</ul>
<p><b>Ví dụ đọc tin:</b> Tin “NHNN bơm ròng 20.000 tỷ đồng qua kênh OMO trong tuần” → tiền trong hệ thống ngân hàng dồi dào hơn → áp lực lãi suất giảm (thường tích cực cho cổ phiếu). Ngược lại, “NHNN phát hành tín phiếu hút 30.000 tỷ” → hút tiền về, lãi suất liên ngân hàng có thể tăng (thường tiêu cực ngắn hạn).</p>
<div class="warn">⚠ Đừng giao dịch chỉ dựa vào một tin lãi suất. Hãy nhìn xu hướng nhiều tuần và tác động đến ngành cụ thể (ngân hàng, bất động sản, chứng khoán nhạy nhất).</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Ghi lãi suất tiết kiệm 12 tháng của 3 ngân hàng (trên website ngân hàng).</li>
  <li>Chọn 3 mã trong watchlist, tra EPS và giá, tính E/P. So sánh với lãi suất tiết kiệm.</li>
  <li>Tìm 1 tin gần đây về NHNN (OMO, tín phiếu, lãi suất điều hành). Viết 2 câu: chuyện gì xảy ra, tác động có thể là gì.</li>
</ol>
<p>Kết quả mong đợi: bảng 3 mã với E/P, cột so sánh “cao hơn/thấp hơn tiết kiệm bao nhiêu %”.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Lãi suất tăng → chi phí vay tăng, kênh tiết kiệm hấp dẫn hơn → áp lực lên giá cổ phiếu.</li>
  <li>E/P = EPS ÷ giá: so sánh được với lãi suất tiết kiệm.</li>
  <li>NHNN dùng lãi suất điều hành, OMO, tín phiếu, hạn mức tín dụng.</li>
  <li>Ngân hàng, bất động sản, chứng khoán nhạy cảm nhất với lãi suất.</li>
</ul></div>
`,
  quiz: [
    { q: "Cổ phiếu giá 40.000đ, EPS 4.000đ. E/P bằng:", options: ["4%", "10%", "40%", "1%"], answer: 1, explain: "4.000 ÷ 40.000 = 10%." },
    { q: "Lãi suất tăng mạnh, điều gì thường xảy ra với cổ phiếu?", options: ["Luôn tăng", "Thường chịu áp lực giảm", "Không ảnh hưởng", "Chỉ cổ phiếu ngân hàng tăng"], answer: 1, explain: "Chi phí vốn tăng và tiết kiệm hấp dẫn hơn → áp lực lên định giá." },
    { q: "Tin “NHNN bơm ròng qua OMO” có nghĩa là:", options: ["Hút tiền khỏi hệ thống", "Cung thêm tiền cho hệ thống ngân hàng", "Tăng thuế", "Phát hành cổ phiếu"], answer: 1, explain: "Bơm ròng OMO = cung thanh khoản cho ngân hàng, giảm áp lực lãi suất." }
  ]
},

{
  id: "w03-3", week: 3, day: 3, minutes: 120,
  title: "Tỷ giá USD/VND và tác động đến doanh nghiệp",
  summary: "Hiểu khi tiền đồng mất giá thì ai có lợi, ai chịu thiệt, và vì sao khối ngoại quan tâm tỷ giá.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tỷ giá trung tâm NHNN công bố hôm nay và tỷ giá bán USD tại một ngân hàng thương mại. Ghi lại cả hai để theo dõi cả tuần.</div>

<h3>1. Tỷ giá là gì?</h3>
<p>Tỷ giá USD/VND cho biết cần bao nhiêu đồng để đổi 1 đô la Mỹ. Tỷ giá <b>tăng</b> nghĩa là cần nhiều đồng hơn → tiền đồng <b>mất giá</b>.</p>
<p><b>Ví dụ:</b> Đầu năm 1 USD = 24.500đ, cuối năm 1 USD = 25.480đ. Mức tăng = (25.480 − 24.500) ÷ 24.500 = <b>4%</b> → VND mất giá khoảng 4% so với USD (số liệu minh họa).</p>
<p>NHNN công bố <b>tỷ giá trung tâm</b> mỗi ngày; ngân hàng thương mại được giao dịch trong một biên độ quanh mức này (biên độ do NHNN quy định và có thể thay đổi).</p>

<h3>2. Ai được, ai mất khi VND mất giá?</h3>
<table>
  <tr><th>Nhóm</th><th>Tác động</th><th>Vì sao</th></tr>
  <tr><td>Doanh nghiệp xuất khẩu (thủy sản, dệt may, gỗ, phần mềm…)</td><td>Thường có lợi</td><td>Doanh thu bằng USD đổi ra nhiều đồng hơn</td></tr>
  <tr><td>Doanh nghiệp nhập khẩu nguyên liệu</td><td>Thường bất lợi</td><td>Chi phí đầu vào bằng USD đắt lên</td></tr>
  <tr><td>Doanh nghiệp vay nợ bằng USD</td><td>Bất lợi</td><td>Khoản nợ quy ra đồng tăng → lỗ tỷ giá</td></tr>
  <tr><td>Nhà đầu tư nước ngoài</td><td>Bất lợi</td><td>Lợi nhuận quy đổi về USD bị giảm</td></tr>
</table>
<p><b>Ví dụ xuất khẩu:</b> Công ty thủy sản C bán 10 triệu USD hàng. Tỷ giá 24.500 → doanh thu 245 tỷ đồng. Tỷ giá 25.480 → 254,8 tỷ đồng, tăng 9,8 tỷ dù bán đúng lượng hàng như cũ.</p>
<p><b>Ví dụ nợ USD:</b> Công ty D nợ 20 triệu USD. Tỷ giá tăng từ 24.500 lên 25.480 → nợ quy đổi tăng từ 490 tỷ lên 509,6 tỷ → <b>lỗ tỷ giá 19,6 tỷ đồng</b>, ghi nhận vào chi phí tài chính, làm giảm lợi nhuận.</p>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Chuỗi tác động khi tỷ giá USD/VND tăng">
  <defs><marker id="w033a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker></defs>
  <rect x="230" y="10" width="180" height="44" rx="10" style="fill:var(--ref);fill-opacity:0.25;stroke:var(--ref);stroke-width:2"/>
  <text x="320" y="37" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">USD/VND tăng (VND yếu)</text>
  <rect x="10" y="100" width="190" height="50" rx="10" style="fill:var(--up);fill-opacity:0.15;stroke:var(--up);stroke-width:2"/>
  <text x="105" y="122" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Xuất khẩu</text>
  <text x="105" y="140" text-anchor="middle" style="fill:var(--up);font-size:12px">doanh thu quy đổi ↑</text>
  <rect x="225" y="100" width="190" height="50" rx="10" style="fill:var(--down);fill-opacity:0.15;stroke:var(--down);stroke-width:2"/>
  <text x="320" y="122" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Nhập khẩu, nợ USD</text>
  <text x="320" y="140" text-anchor="middle" style="fill:var(--down);font-size:12px">chi phí ↑, lỗ tỷ giá</text>
  <rect x="440" y="100" width="190" height="50" rx="10" style="fill:var(--down);fill-opacity:0.15;stroke:var(--down);stroke-width:2"/>
  <text x="535" y="122" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Khối ngoại</text>
  <text x="535" y="140" text-anchor="middle" style="fill:var(--down);font-size:12px">lợi nhuận USD ↓, dễ bán</text>
  <rect x="180" y="185" width="280" height="44" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="320" y="205" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">NHNN có thể hút tiền / tăng lãi suất</text>
  <text x="320" y="221" text-anchor="middle" style="fill:var(--muted);font-size:11px">để giữ ổn định tỷ giá → áp lực lên cổ phiếu</text>
  <path d="M260 54 L130 97" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w033a)"/>
  <path d="M320 54 V97" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w033a)"/>
  <path d="M380 54 L510 97" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w033a)"/>
  <path d="M410 40 C 620 40, 620 200, 463 205" style="stroke:var(--muted);stroke-width:1.5;fill:none;stroke-dasharray:4 3" marker-end="url(#w033a)"/>
</svg><figcaption>Hình: Một biến động tỷ giá tác động khác nhau lên từng nhóm doanh nghiệp, và có thể kéo theo thay đổi chính sách tiền tệ.</figcaption></figure>

<h3>3. Vì sao khối ngoại quan tâm tỷ giá?</h3>
<p>Nhà đầu tư nước ngoài tính lãi lỗ bằng USD. VND mất giá làm giảm lợi nhuận của họ.</p>
<p><b>Ví dụ:</b> Quỹ ngoại đổi 1 triệu USD ở tỷ giá 24.500 → 24,5 tỷ đồng, mua cổ phiếu. Một năm sau danh mục tăng 8% → 26,46 tỷ đồng. Nhưng tỷ giá lên 25.480 → đổi lại được 26,46 tỷ ÷ 25.480 ≈ <b>1,0385 triệu USD</b>. Lãi theo USD chỉ còn 3,85% thay vì 8%. Khi kỳ vọng VND mất giá mạnh, khối ngoại thường bán ròng.</p>

<h3>4. Mối liên hệ tỷ giá – lãi suất</h3>
<p>Khi tỷ giá tăng nóng, NHNN có thể bán ngoại tệ từ dự trữ, hút tiền đồng (tín phiếu) hoặc để lãi suất liên ngân hàng tăng. Những biện pháp này làm thanh khoản trong hệ thống co lại.</p>
<p><b>Ví dụ:</b> Một tuần tỷ giá tăng nhanh, NHNN phát hành tín phiếu hút tiền về → lãi suất qua đêm liên ngân hàng tăng từ 3% lên 6% → thị trường chứng khoán lo ngại, ngân hàng và chứng khoán giảm mạnh. Đây là chuỗi “tỷ giá → lãi suất → cổ phiếu”.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Trong watchlist, phân loại mỗi mã: có lợi / bất lợi / ít ảnh hưởng khi VND mất giá. Ghi lý do 1 câu (xem phần “Hồ sơ” và cơ cấu doanh thu nếu có).</li>
  <li>Tính: công ty nợ 5 triệu USD, tỷ giá tăng từ 25.000 lên 25.750 → lỗ tỷ giá bao nhiêu?</li>
  <li>Tìm biểu đồ tỷ giá USD/VND 1 năm (trang ngân hàng hoặc trang tài chính). Tỷ giá đang đi lên, đi xuống hay đi ngang?</li>
</ol>
<p>Đáp án câu 2: 5.000.000 × 750 = <b>3,75 tỷ đồng</b>.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Tỷ giá USD/VND tăng = VND mất giá.</li>
  <li>Xuất khẩu thường có lợi; nhập khẩu, nợ USD và khối ngoại thường bất lợi.</li>
  <li>Tỷ giá căng thẳng có thể khiến NHNN thắt chặt, gây áp lực lên cổ phiếu.</li>
  <li>Phân loại watchlist theo độ nhạy với tỷ giá.</li>
</ul></div>
`,
  quiz: [
    { q: "Tỷ giá USD/VND tăng từ 25.000 lên 26.000 nghĩa là:", options: ["VND lên giá", "VND mất giá khoảng 4%", "USD mất giá", "Không thay đổi gì"], answer: 1, explain: "Cần thêm 1.000đ cho 1 USD: (26.000 − 25.000) ÷ 25.000 = 4%." },
    { q: "Doanh nghiệp nào thường có lợi khi VND mất giá?", options: ["Nhập khẩu xăng dầu", "Xuất khẩu thủy sản", "Vay nợ nhiều bằng USD", "Hãng bay mua máy bay bằng USD"], answer: 1, explain: "Doanh thu USD quy đổi ra nhiều đồng hơn." },
    { q: "Quỹ ngoại lãi 10% bằng VND, VND mất giá 4%. Lãi theo USD khoảng:", options: ["14%", "10%", "5,8%", "−4%"], answer: 2, explain: "1,10 ÷ 1,04 ≈ 1,058 → khoảng 5,8%." }
  ]
},

{
  id: "w03-4", week: 3, day: 4, minutes: 120,
  title: "Lạm phát, CPI và lãi suất thực",
  summary: "Hiểu CPI đo gì, lãi suất thực là gì và vì sao lạm phát cao gây áp lực lên thị trường.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm số CPI tháng gần nhất (cơ quan thống kê công bố đầu mỗi tháng). Ghi: CPI tăng bao nhiêu % so với cùng kỳ năm trước? Nhóm hàng nào tăng mạnh nhất?</div>

<h3>1. Lạm phát và CPI</h3>
<p><b>Lạm phát</b> là sự tăng lên của mặt bằng giá cả theo thời gian. <b>CPI</b> (chỉ số giá tiêu dùng) đo giá của một “giỏ hàng” đại diện mà hộ gia đình hay mua: thực phẩm, nhà ở, điện nước, xăng dầu, giáo dục, y tế…</p>
<p><b>Ví dụ:</b> Năm ngoái giỏ hàng của gia đình bạn tốn 10 triệu/tháng; năm nay cùng giỏ đó tốn 10,4 triệu → lạm phát của gia đình bạn là <b>4%</b>. CPI làm điều tương tự cho cả nước, với trọng số cho từng nhóm hàng.</p>
<p>Báo chí thường nêu 2 con số: CPI <b>so với cùng kỳ</b> (tháng này năm nay so với tháng này năm trước) và CPI <b>bình quân</b> từ đầu năm.</p>
<p><b>Ví dụ:</b> Tin “CPI tháng 8 tăng 0,3% so với tháng trước, tăng 3,6% so với cùng kỳ” → giá tháng 8 cao hơn tháng 7 là 0,3%, và cao hơn tháng 8 năm ngoái 3,6% (số liệu minh họa).</p>

<h3>2. Lãi suất thực</h3>
<p><b>Lãi suất thực ≈ lãi suất danh nghĩa − lạm phát.</b> Đây mới là mức “giàu lên thật” của bạn.</p>
<p><b>Ví dụ:</b> Gửi 100 triệu, lãi 5%/năm → cuối năm 105 triệu. Nhưng lạm phát 4% → 105 triệu chỉ mua được lượng hàng bằng 105 ÷ 1,04 ≈ 101 triệu năm ngoái. Lãi suất thực ≈ <b>1%</b>. Nếu lạm phát 6%, lãi suất thực ≈ −1% → gửi tiết kiệm thực chất đang mất sức mua.</p>
<p>Đây là lý do người ta tìm đến tài sản như cổ phiếu: doanh nghiệp tốt có thể tăng giá bán theo lạm phát, giúp lợi nhuận tăng theo.</p>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Sức mua của 100 triệu đồng giảm dần theo lạm phát">
  <line x1="60" y1="200" x2="610" y2="200" style="stroke:var(--line)"/>
  <line x1="60" y1="20" x2="60" y2="200" style="stroke:var(--line)"/>
  <rect x="90" y="40" width="70" height="160" style="fill:var(--accent)"/>
  <rect x="200" y="46" width="70" height="154" style="fill:var(--accent);fill-opacity:0.85"/>
  <rect x="310" y="52" width="70" height="148" style="fill:var(--accent);fill-opacity:0.7"/>
  <rect x="420" y="63" width="70" height="137" style="fill:var(--accent);fill-opacity:0.55"/>
  <rect x="530" y="94" width="70" height="106" style="fill:var(--accent);fill-opacity:0.4"/>
  <text x="125" y="34" text-anchor="middle" style="fill:var(--text);font-size:12px">100</text>
  <text x="235" y="40" text-anchor="middle" style="fill:var(--text);font-size:12px">96,2</text>
  <text x="345" y="46" text-anchor="middle" style="fill:var(--text);font-size:12px">92,5</text>
  <text x="455" y="57" text-anchor="middle" style="fill:var(--text);font-size:12px">85,5</text>
  <text x="565" y="88" text-anchor="middle" style="fill:var(--text);font-size:12px">67,6</text>
  <text x="125" y="218" text-anchor="middle" style="fill:var(--muted);font-size:12px">Hôm nay</text>
  <text x="235" y="218" text-anchor="middle" style="fill:var(--muted);font-size:12px">1 năm</text>
  <text x="345" y="218" text-anchor="middle" style="fill:var(--muted);font-size:12px">2 năm</text>
  <text x="455" y="218" text-anchor="middle" style="fill:var(--muted);font-size:12px">4 năm</text>
  <text x="565" y="218" text-anchor="middle" style="fill:var(--muted);font-size:12px">10 năm</text>
  <text x="70" y="235" style="fill:var(--muted);font-size:11px">Sức mua của 100 triệu để không (triệu đồng, lạm phát giả định 4%/năm)</text>
</svg><figcaption>Hình: Với lạm phát 4%/năm, 100 triệu để nguyên sau 10 năm chỉ còn sức mua khoảng 67,6 triệu (100 ÷ 1,04¹⁰).</figcaption></figure>

<h3>3. Lạm phát tác động đến cổ phiếu thế nào?</h3>
<ol>
  <li>Lạm phát cao → NHNN có xu hướng <b>thắt chặt</b> (tăng lãi suất, hút tiền) → áp lực lên định giá cổ phiếu (bài hôm qua).</li>
  <li>Chi phí đầu vào tăng → doanh nghiệp không tăng được giá bán sẽ bị <b>giảm biên lợi nhuận</b>.</li>
  <li>Doanh nghiệp có <b>sức mạnh định giá</b> (thương hiệu mạnh, độc quyền) chuyển được chi phí sang khách hàng.</li>
</ol>
<p><b>Ví dụ biên lợi nhuận:</b> Công ty E (minh họa) bán sản phẩm giá 100.000đ, chi phí 80.000đ → lãi gộp 20.000đ (biên 20%). Chi phí nguyên liệu tăng 10% → chi phí 88.000đ.</p>
<ul>
  <li>Nếu không tăng giá bán: lãi gộp còn 12.000đ → <b>giảm 40%</b>.</li>
  <li>Nếu tăng giá bán lên 110.000đ mà khách vẫn mua: lãi gộp 22.000đ → tăng 10%.</li>
</ul>
<p>Cùng một mức lạm phát, kết quả trái ngược hoàn toàn tùy sức mạnh định giá.</p>

<h3>4. Lạm phát thấp có luôn tốt?</h3>
<p>Lạm phát quá thấp hoặc giảm phát (giá giảm) thường đi kèm nhu cầu yếu, kinh tế trì trệ. Mức vừa phải, ổn định thường là tốt nhất cho doanh nghiệp.</p>
<p><b>Ví dụ:</b> Nếu người dân tin rằng tháng sau tivi sẽ rẻ hơn, họ hoãn mua → doanh nghiệp bán ít đi → cắt giảm sản xuất → kinh tế chậm lại. Vì vậy nhiều ngân hàng trung ương nhắm mức lạm phát dương vừa phải chứ không phải bằng 0.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Ghi CPI so với cùng kỳ của 6 tháng gần nhất. Lạm phát đang tăng tốc hay chậm lại?</li>
  <li>Tính lãi suất thực dựa trên lãi tiết kiệm 12 tháng bạn ghi hôm qua và CPI mới nhất.</li>
  <li>Trong watchlist, chọn 2 mã bạn nghĩ có sức mạnh định giá và 2 mã không có. Giải thích ngắn gọn.</li>
</ol>
<p>Kết quả mong đợi: bảng CPI 6 tháng, một con số lãi suất thực, và 4 nhận xét ngắn.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>CPI đo giá giỏ hàng tiêu dùng; xem cả so với cùng kỳ và bình quân.</li>
  <li>Lãi suất thực ≈ lãi suất danh nghĩa − lạm phát.</li>
  <li>Lạm phát cao → nguy cơ thắt chặt tiền tệ → áp lực lên cổ phiếu.</li>
  <li>Doanh nghiệp có sức mạnh định giá chống chịu lạm phát tốt hơn.</li>
</ul></div>
`,
  quiz: [
    { q: "Lãi tiết kiệm 6%, lạm phát 4%. Lãi suất thực khoảng:", options: ["10%", "2%", "−2%", "6%"], answer: 1, explain: "6% − 4% ≈ 2%." },
    { q: "Doanh nghiệp nào chịu lạm phát chi phí tốt hơn?", options: ["Không thể tăng giá bán", "Có thương hiệu mạnh, tăng được giá mà khách vẫn mua", "Bán hàng theo giá nhà nước cố định", "Có biên lợi nhuận mỏng"], answer: 1, explain: "Sức mạnh định giá giúp chuyển chi phí sang khách hàng." },
    { q: "Lạm phát tăng cao thường dẫn đến điều gì?", options: ["NHNN nới lỏng mạnh", "NHNN có xu hướng thắt chặt, lãi suất tăng", "Cổ phiếu chắc chắn tăng", "Tỷ giá giảm mạnh"], answer: 1, explain: "Kiểm soát lạm phát là nhiệm vụ chính của ngân hàng trung ương." }
  ]
},

{
  id: "w03-5", week: 3, day: 5, minutes: 120,
  title: "GDP và chu kỳ kinh tế",
  summary: "Hiểu GDP, bốn giai đoạn của chu kỳ kinh tế và vì sao thị trường chứng khoán thường đi trước nền kinh tế.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm số tăng trưởng GDP quý gần nhất. Ngành nào (công nghiệp, xây dựng, dịch vụ, nông nghiệp) đóng góp nhiều nhất? Ghi lại.</div>

<h3>1. GDP là gì?</h3>
<p><b>GDP</b> (tổng sản phẩm quốc nội) là tổng giá trị hàng hóa và dịch vụ cuối cùng được tạo ra trong nước trong một khoảng thời gian. Tăng trưởng GDP cho biết “chiếc bánh kinh tế” to lên bao nhiêu.</p>
<p><b>Ví dụ:</b> Một nền kinh tế tí hon chỉ có tiệm bánh mì bán 1.000 ổ × 20.000đ = 20 triệu và tiệm cắt tóc làm 200 lượt × 50.000đ = 10 triệu. GDP = 30 triệu. Năm sau tiệm bánh bán 1.100 ổ, tiệm tóc 210 lượt (cùng giá) → GDP = 22 + 10,5 = 32,5 triệu → tăng trưởng <b>8,3%</b>.</p>
<p>Báo chí thường nói <b>GDP thực</b> (đã loại bỏ tác động tăng giá). Nếu bánh mì chỉ tăng giá từ 20.000đ lên 22.000đ mà vẫn bán 1.000 ổ, GDP danh nghĩa tăng nhưng GDP thực không tăng.</p>

<h3>2. GDP và lợi nhuận doanh nghiệp</h3>
<p>Kinh tế tăng trưởng → người dân, doanh nghiệp chi tiêu nhiều hơn → doanh thu, lợi nhuận doanh nghiệp tăng. Nhưng quan hệ không 1:1.</p>
<p><b>Ví dụ:</b> GDP tăng 6% nhưng lợi nhuận ngành bán lẻ có thể tăng 15% (người dân mua sắm nhiều khi thu nhập tăng), còn ngành điện chỉ tăng 3% (nhu cầu ổn định, giá điện bị kiểm soát). Vì vậy cần nhìn tác động theo <b>từng ngành</b>.</p>

<h3>3. Bốn giai đoạn của chu kỳ kinh tế</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Chu kỳ kinh tế bốn giai đoạn và thị trường chứng khoán đi trước">
  <line x1="30" y1="130" x2="620" y2="130" style="stroke:var(--line);stroke-dasharray:4 4"/>
  <path d="M30 170 C 90 170, 120 60, 190 60 C 260 60, 290 200, 360 200 C 430 200, 460 60, 530 60 C 570 60, 600 90, 620 110" style="fill:none;stroke:var(--accent);stroke-width:3"/>
  <path d="M30 150 C 70 150, 90 45, 150 45 C 220 45, 250 185, 320 185 C 390 185, 420 45, 490 45 C 540 45, 580 80, 620 100" style="fill:none;stroke:var(--c2);stroke-width:2;stroke-dasharray:6 4"/>
  <text x="80" y="110" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:600">Phục hồi</text>
  <text x="190" y="50" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Đỉnh / quá nóng</text>
  <text x="275" y="110" text-anchor="middle" style="fill:var(--down);font-size:12px;font-weight:600">Suy thoái</text>
  <text x="360" y="222" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Đáy</text>
  <text x="440" y="110" text-anchor="middle" style="fill:var(--up);font-size:12px;font-weight:600">Mở rộng</text>
  <rect x="40" y="232" width="18" height="4" style="fill:var(--accent)"/>
  <text x="64" y="238" style="fill:var(--text);font-size:11px">Nền kinh tế</text>
  <rect x="170" y="232" width="18" height="4" style="fill:var(--c2)"/>
  <text x="194" y="238" style="fill:var(--text);font-size:11px">Thị trường chứng khoán (thường đi trước vài tháng)</text>
</svg><figcaption>Hình: Minh họa đơn giản hóa. Thực tế chu kỳ không đều, độ dài mỗi giai đoạn khác nhau và rất khó xác định chính xác khi đang ở trong đó.</figcaption></figure>
<table>
  <tr><th>Giai đoạn</th><th>Dấu hiệu</th><th>Ngành thường được chú ý (khuynh hướng, không phải quy luật)</th></tr>
  <tr><td>Phục hồi</td><td>Lãi suất thấp, tín dụng bắt đầu tăng</td><td>Ngân hàng, chứng khoán, bất động sản</td></tr>
  <tr><td>Mở rộng</td><td>GDP tăng tốt, tiêu dùng mạnh</td><td>Bán lẻ, công nghiệp, vật liệu</td></tr>
  <tr><td>Đỉnh / quá nóng</td><td>Lạm phát tăng, lãi suất bắt đầu tăng</td><td>Năng lượng, hàng hóa cơ bản</td></tr>
  <tr><td>Suy thoái</td><td>GDP chậm lại, thất nghiệp tăng</td><td>Tiêu dùng thiết yếu, điện nước, y tế (phòng thủ)</td></tr>
</table>
<p><b>Ví dụ:</b> Trong suy thoái, người ta vẫn phải mua sữa, gạo, dùng điện nước, nhưng hoãn mua ô tô, nhà mới. Vì vậy cổ phiếu tiêu dùng thiết yếu và tiện ích thường giảm ít hơn cổ phiếu bất động sản, vật liệu.</p>

<h3>4. Thị trường chứng khoán đi trước nền kinh tế</h3>
<p>Giá cổ phiếu phản ánh <b>kỳ vọng tương lai</b>, nên thị trường thường tạo đáy trước khi số liệu kinh tế xấu nhất được công bố, và tạo đỉnh khi kinh tế vẫn đang rất tốt.</p>
<p><b>Ví dụ:</b> Tháng 6, báo chí đưa tin “GDP quý 2 thấp nhất nhiều năm”, nhưng VN-Index đã tăng 15% từ đáy tháng 3. Người chờ “kinh tế tốt hẳn rồi mới mua” thường mua muộn. Ngược lại, khi ai cũng nói kinh tế tuyệt vời, lợi nhuận kỷ lục, giá có thể đã phản ánh hết.</p>
<div class="warn">⚠ Đừng cố đoán chính xác đỉnh/đáy chu kỳ. Hiểu chu kỳ để không hoảng loạn khi suy thoái và không hưng phấn quá mức khi kinh tế quá nóng — đó cũng là lý do DCA (mua định kỳ) hiệu quả với người mới.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Ghi tăng trưởng GDP 4 quý gần nhất. Kinh tế đang tăng tốc hay chậm lại?</li>
  <li>Kết hợp với lãi suất (thứ 3) và CPI (thứ 5): theo bạn, kinh tế đang ở giai đoạn nào của chu kỳ? Viết 3–4 câu lý giải.</li>
  <li>Xếp các mã watchlist vào 2 nhóm: chu kỳ (nhạy với kinh tế) và phòng thủ.</li>
</ol>
<p>Kết quả mong đợi: một đoạn nhận định ngắn có dẫn số liệu, không cần “đúng”, quan trọng là có lập luận.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>GDP đo quy mô nền kinh tế; tăng trưởng GDP thực loại bỏ yếu tố giá.</li>
  <li>Chu kỳ: phục hồi → mở rộng → đỉnh → suy thoái → đáy.</li>
  <li>Ngành chu kỳ biến động mạnh theo kinh tế; ngành phòng thủ ổn định hơn.</li>
  <li>Thị trường chứng khoán thường đi trước số liệu kinh tế.</li>
</ul></div>
`,
  quiz: [
    { q: "GDP năm trước 1.000, năm nay 1.065 (đã loại trừ giá). Tăng trưởng GDP thực:", options: ["65%", "6,5%", "1,065%", "0,65%"], answer: 1, explain: "(1.065 − 1.000) ÷ 1.000 = 6,5%." },
    { q: "Ngành nào thường được xem là phòng thủ trong suy thoái?", options: ["Bất động sản", "Thép", "Tiêu dùng thiết yếu, điện nước", "Chứng khoán"], answer: 2, explain: "Nhu cầu thiết yếu ít giảm khi kinh tế yếu." },
    { q: "Vì sao chứng khoán thường tạo đáy trước khi kinh tế xấu nhất?", options: ["Vì có người biết trước số liệu", "Vì giá phản ánh kỳ vọng tương lai", "Vì NHNN mua cổ phiếu", "Ngẫu nhiên"], answer: 1, explain: "Nhà đầu tư định giá dựa trên kỳ vọng lợi nhuận tương lai." }
  ]
},

{
  id: "w03-6", week: 3, day: 6, minutes: 240,
  title: "Thực hành: Viết báo cáo “Thị trường tuần này”",
  summary: "Tổng hợp nhật ký 5 ngày thành một báo cáo 1 trang có số liệu, và đọc về “biên an toàn”.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<h4>Bước 1 – Thu thập số liệu (45 phút)</h4>
<table>
  <tr><th>Chỉ tiêu</th><th>Đầu tuần</th><th>Cuối tuần</th><th>Thay đổi</th></tr>
  <tr><td>VN-Index</td><td></td><td></td><td></td></tr>
  <tr><td>VN30</td><td></td><td></td><td></td></tr>
  <tr><td>Thanh khoản HOSE bình quân/phiên</td><td></td><td></td><td></td></tr>
  <tr><td>Khối ngoại mua/bán ròng cả tuần</td><td colspan="3"></td></tr>
  <tr><td>Lãi suất tiết kiệm 12 tháng (1–2 ngân hàng)</td><td></td><td></td><td></td></tr>
  <tr><td>Tỷ giá USD/VND (ngân hàng)</td><td></td><td></td><td></td></tr>
  <tr><td>Ngành tăng mạnh nhất / giảm mạnh nhất</td><td colspan="3"></td></tr>
</table>
<p><b>Ví dụ tính thay đổi:</b> VN-Index đầu tuần 1.240, cuối tuần 1.262 → (1.262 − 1.240) ÷ 1.240 = <b>+1,77%</b>. Tỷ giá 25.300 → 25.380: +0,32% (số liệu minh họa).</p>
<h4>Bước 2 – Viết báo cáo 1 trang (75 phút)</h4>
<ol>
  <li><b>Tóm tắt 2 câu:</b> Thị trường tuần này tăng/giảm bao nhiêu, điểm nhấn chính.</li>
  <li><b>Vĩ mô:</b> lãi suất, tỷ giá, CPI/GDP (nếu có tin mới) — mỗi yếu tố 1–2 câu kèm số.</li>
  <li><b>Dòng tiền:</b> thanh khoản, khối ngoại.</li>
  <li><b>Ngành:</b> ngành nổi bật và lý do theo tin tức.</li>
  <li><b>Watchlist:</b> 3 mã biến động mạnh nhất, tăng/giảm bao nhiêu %, lý do.</li>
  <li><b>Nhận định của tôi:</b> 3–4 câu, tách rõ đâu là sự kiện, đâu là suy đoán.</li>
</ol>
<p><b>Ví dụ đoạn “Vĩ mô”:</b> “Lãi suất tiết kiệm 12 tháng tại ngân hàng X giữ nguyên 5,0%. Tỷ giá ngân hàng tăng nhẹ 0,32% trong tuần. Không có số liệu CPI mới. Nhìn chung vĩ mô ổn định, chưa có yếu tố gây áp lực lớn.”</p>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Bố cục báo cáo thị trường tuần một trang">
  <rect x="160" y="10" width="320" height="210" rx="8" style="fill:var(--card);stroke:var(--line);stroke-width:1.5"/>
  <rect x="180" y="25" width="280" height="22" rx="4" style="fill:var(--accent);fill-opacity:0.3"/>
  <text x="320" y="41" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">1. Tóm tắt (2 câu)</text>
  <rect x="180" y="55" width="135" height="50" rx="4" style="fill:var(--ref);fill-opacity:0.25"/>
  <text x="247" y="84" text-anchor="middle" style="fill:var(--text);font-size:11px">2. Vĩ mô</text>
  <rect x="325" y="55" width="135" height="50" rx="4" style="fill:var(--c2);fill-opacity:0.25"/>
  <text x="392" y="84" text-anchor="middle" style="fill:var(--text);font-size:11px">3. Dòng tiền</text>
  <rect x="180" y="113" width="135" height="50" rx="4" style="fill:var(--up);fill-opacity:0.25"/>
  <text x="247" y="142" text-anchor="middle" style="fill:var(--text);font-size:11px">4. Ngành</text>
  <rect x="325" y="113" width="135" height="50" rx="4" style="fill:var(--c3);fill-opacity:0.25"/>
  <text x="392" y="142" text-anchor="middle" style="fill:var(--text);font-size:11px">5. Watchlist</text>
  <rect x="180" y="171" width="280" height="38" rx="4" style="fill:var(--accent);fill-opacity:0.15;stroke:var(--accent)"/>
  <text x="320" y="194" text-anchor="middle" style="fill:var(--text);font-size:11px;font-weight:600">6. Nhận định của tôi (sự kiện vs suy đoán)</text>
</svg><figcaption>Hình: Bố cục gợi ý cho báo cáo tuần — ngắn, có số liệu, có nhận định riêng.</figcaption></figure>
<h4>Bước 3 – Đối chiếu (30 phút)</h4>
<p>Đọc 1 bài tổng kết tuần của báo chí hoặc CTCK. So với báo cáo của bạn: giống nhau ở đâu, bạn bỏ sót gì, bạn thấy điều gì họ không nhắc?</p>
<p><b>Tiêu chí tự đánh giá:</b> ✓ Có đủ 6 phần; ✓ Mọi nhận xét quan trọng đều kèm con số; ✓ Tách rõ sự kiện và suy đoán; ✓ Không quá 1 trang.</p>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Tiếp tục “Nhà đầu tư thông minh” khoảng 50–80 trang, tìm và đọc kỹ phần nói về <b>biên an toàn (margin of safety)</b> — ý tưởng mà Graham coi là cốt lõi của đầu tư: chỉ mua khi giá thấp hơn đáng kể so với giá trị ước tính, để nếu bạn tính sai hoặc gặp xui, vẫn còn “đệm” bảo vệ.</p>
<figure class="fig"><svg viewBox="0 0 640 200" role="img" aria-label="Biên an toàn là khoảng cách giữa giá trị ước tính và giá mua">
  <rect x="120" y="30" width="120" height="150" style="fill:var(--accent);fill-opacity:0.6"/>
  <rect x="400" y="30" width="120" height="150" style="fill:var(--line)"/>
  <rect x="400" y="75" width="120" height="105" style="fill:var(--up);fill-opacity:0.6"/>
  <line x1="390" y1="30" x2="530" y2="30" style="stroke:var(--text);stroke-dasharray:4 3"/>
  <text x="180" y="22" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Giá trị ước tính 30.000đ</text>
  <text x="460" y="22" text-anchor="middle" style="fill:var(--muted);font-size:12px">30.000đ</text>
  <text x="460" y="130" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Giá mua</text>
  <text x="460" y="148" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">21.000đ</text>
  <text x="545" y="57" style="fill:var(--up);font-size:12px;font-weight:600">Biên an toàn</text>
  <text x="545" y="73" style="fill:var(--up);font-size:12px">30%</text>
</svg><figcaption>Hình: Mua ở 21.000đ một cổ phiếu ước tính đáng giá 30.000đ cho bạn biên an toàn 30%.</figcaption></figure>
<p><b>Ví dụ:</b> Bạn ước tính công ty đáng giá 30.000đ/cp. Mua ở 29.000đ: chỉ cần ước tính sai 10% (giá trị thật 27.000đ) là bạn đã trả giá đắt. Mua ở 21.000đ: dù sai 20% (giá trị thật 24.000đ), bạn vẫn mua rẻ hơn giá trị. Biên an toàn = (30.000 − 21.000) ÷ 30.000 = 30%.</p>
<p><b>Câu hỏi tự trả lời:</b> (1) Vì sao biên an toàn quan trọng khi bạn mới học định giá? (2) Kỹ năng nào ở tháng 2 sẽ giúp bạn ước tính “giá trị”? (3) Một cổ phiếu tốt mua giá quá cao có còn là khoản đầu tư tốt?</p>
`,
  quiz: [
    { q: "VN-Index từ 1.200 lên 1.230 trong tuần. Mức tăng:", options: ["30%", "2,5%", "3%", "0,25%"], answer: 1, explain: "30 ÷ 1.200 = 2,5%." },
    { q: "Giá trị ước tính 50.000đ, giá mua 35.000đ. Biên an toàn:", options: ["15%", "30%", "43%", "70%"], answer: 1, explain: "(50.000 − 35.000) ÷ 50.000 = 30%." }
  ]
},

{
  id: "w03-7", week: 3, day: 7, minutes: 240,
  title: "Ôn tập tuần 3",
  summary: "Ôn lãi suất, tỷ giá, lạm phát, GDP và cách chúng kết nối với giá cổ phiếu.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc lại phần về biên an toàn và đọc tiếp khoảng 50 trang. Ghi lại: Graham khuyên nhà đầu tư phòng thủ nên chọn cổ phiếu theo những tiêu chí chung nào (quy mô, tình hình tài chính vững, lịch sử trả cổ tức, mức giá hợp lý so với lợi nhuận)?</p>
<p><b>Ví dụ áp dụng:</b> Với một mã trong watchlist, kiểm tra nhanh: công ty có lớn không (VN30?), có lãi đều nhiều năm không, có trả cổ tức đều không, giá có quá cao so với lợi nhuận không. Mã nào trả lời “có” cho cả 4 câu là ứng viên tốt để học phân tích kỹ ở tháng 2.</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Bản đồ các biến số vĩ mô tác động đến giá cổ phiếu">
  <defs><marker id="w037a" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0L10 5L0 10z" style="fill:var(--muted)"/></marker></defs>
  <rect x="20" y="20" width="140" height="44" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
  <text x="90" y="47" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Lạm phát (CPI)</text>
  <rect x="20" y="108" width="140" height="44" rx="10" style="fill:var(--card);stroke:var(--ref);stroke-width:2"/>
  <text x="90" y="135" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Tỷ giá</text>
  <rect x="20" y="196" width="140" height="44" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
  <text x="90" y="223" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">GDP, chu kỳ</text>
  <rect x="250" y="64" width="150" height="44" rx="10" style="fill:var(--card);stroke:var(--down);stroke-width:2"/>
  <text x="325" y="91" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">NHNN, lãi suất</text>
  <rect x="250" y="170" width="150" height="44" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <text x="325" y="197" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Lợi nhuận DN</text>
  <rect x="480" y="110" width="145" height="50" rx="10" style="fill:var(--accent);fill-opacity:0.2;stroke:var(--accent);stroke-width:2"/>
  <text x="552" y="140" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Giá cổ phiếu</text>
  <path d="M160 45 L247 80" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <path d="M160 125 L247 95" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <path d="M160 140 L247 185" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <path d="M160 218 L247 200" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <path d="M325 108 V167" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <path d="M400 86 L477 125" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <path d="M400 192 L477 148" style="stroke:var(--muted);stroke-width:1.5;fill:none" marker-end="url(#w037a)"/>
  <text x="440" y="96" text-anchor="middle" style="fill:var(--muted);font-size:10px">định giá</text>
  <text x="440" y="186" text-anchor="middle" style="fill:var(--muted);font-size:10px">EPS</text>
</svg><figcaption>Hình: Các biến số vĩ mô tác động đến giá cổ phiếu qua 2 đường: định giá (lãi suất) và lợi nhuận doanh nghiệp.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu:</b></p>
<ul>
  <li>Lãi suất tăng tác động đến cổ phiếu qua 3 kênh nào? Cho ví dụ số.</li>
  <li>EPS 2.500đ, giá 25.000đ, tiết kiệm 6%: cổ phiếu có hấp dẫn hơn tiết kiệm không? (E/P = 10%, cao hơn 4 điểm %.)</li>
  <li>VND mất giá: ai lợi, ai thiệt?</li>
  <li>Lãi suất 5%, lạm phát 5,5%: lãi suất thực bao nhiêu? (≈ −0,5%.)</li>
  <li>Kể 4 giai đoạn chu kỳ và 1 ngành tiêu biểu mỗi giai đoạn.</li>
</ul>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist:</b></p>
<ul>
  <li>☐ Nhật ký thị trường đủ 5 ngày, tách sự kiện và nhận định</li>
  <li>☐ Biết nơi tra lãi suất, tỷ giá, CPI, GDP</li>
  <li>☐ Báo cáo “Thị trường tuần này” hoàn chỉnh</li>
  <li>☐ Watchlist đã phân loại: nhạy lãi suất, nhạy tỷ giá, chu kỳ/phòng thủ</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Yếu tố vĩ mô nào bạn thấy ảnh hưởng rõ nhất đến thị trường tuần này? Có lúc nào giá đi ngược với “lý thuyết” không? Bạn giải thích thế nào?</p>
<p><b>Chuẩn bị tuần 4:</b> Tuần sau học khối ngoại, dòng tiền, mùa báo cáo quý và sự kiện doanh nghiệp. Hãy để ý lịch công bố kết quả kinh doanh quý sắp tới.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Hoàn thiện báo cáo tuần hoặc luyện lại các phép tính E/P, lãi suất thực, lỗ tỷ giá.</p>
`,
  quiz: [
    { q: "Lãi suất tăng tác động đến cổ phiếu qua kênh nào?", options: ["Chỉ qua tâm lý", "Chi phí vay của DN, so sánh với tiết kiệm, chi phí margin", "Không tác động", "Chỉ ảnh hưởng ngân hàng"], answer: 1, explain: "Ba kênh chính: chi phí vốn, kênh thay thế, đòn bẩy." },
    { q: "EPS 2.000đ, giá 40.000đ. E/P là:", options: ["2%", "5%", "20%", "50%"], answer: 1, explain: "2.000 ÷ 40.000 = 5%." },
    { q: "Công ty nợ 10 triệu USD, tỷ giá tăng 500đ. Lỗ tỷ giá:", options: ["500 triệu", "5 tỷ", "50 tỷ", "5 triệu"], answer: 1, explain: "10.000.000 × 500 = 5.000.000.000đ = 5 tỷ." },
    { q: "Lãi tiết kiệm 4,5%, lạm phát 3,5%. Lãi suất thực:", options: ["8%", "1%", "−1%", "4,5%"], answer: 1, explain: "4,5% − 3,5% ≈ 1%." },
    { q: "Chi phí nguyên liệu tăng mạnh, doanh nghiệp nào bị ảnh hưởng nặng nhất?", options: ["Có thương hiệu mạnh, tăng giá được", "Biên lợi nhuận mỏng, không tăng giá bán được", "Doanh nghiệp xuất khẩu phần mềm", "Ngân hàng"], answer: 1, explain: "Không chuyển được chi phí sang khách → lợi nhuận bị ép." },
    { q: "Thị trường chứng khoán thường:", options: ["Đi sau số liệu kinh tế", "Đi trước số liệu kinh tế vài tháng", "Không liên quan kinh tế", "Luôn đi cùng GDP từng quý"], answer: 1, explain: "Giá phản ánh kỳ vọng tương lai." },
    { q: "Câu nào là NHẬN ĐỊNH?", options: ["CPI tháng này tăng 3,5% so với cùng kỳ", "Tỷ giá trung tâm hôm nay tăng 10đ", "Thị trường sẽ hồi phục mạnh tuần sau", "Khối ngoại bán ròng 300 tỷ"], answer: 2, explain: "Dự báo về tương lai là nhận định, có thể sai." },
    { q: "Biên an toàn giúp nhà đầu tư:", options: ["Chắc chắn có lãi", "Có “đệm” khi ước tính giá trị bị sai", "Mua được giá thấp nhất", "Tránh phải trả thuế"], answer: 1, explain: "Mua thấp hơn đáng kể so với giá trị ước tính để chống lại sai sót và rủi ro." }
  ]
}
);

/* ======================= TUẦN 4: VĨ MÔ 2 ======================= */
(window.LESSONS = window.LESSONS || []).push(
{
  id: "w04-1", week: 4, day: 1, minutes: 120,
  title: "Khối ngoại và các quỹ ETF",
  summary: "Hiểu vai trò của nhà đầu tư nước ngoài, giới hạn sở hữu (room ngoại) và cách quỹ ETF cơ cấu danh mục.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm con số khối ngoại mua/bán ròng hôm nay và 3 mã bị bán ròng/mua ròng nhiều nhất. Trong watchlist của bạn có mã nào không?</div>

<h3>1. Khối ngoại là ai?</h3>
<p>“Khối ngoại” là các nhà đầu tư nước ngoài: quỹ đầu tư, quỹ ETF, tổ chức tài chính và cá nhân nước ngoài. Họ thường giao dịch với quy mô lớn và có tầm nhìn dài hơn nhà đầu tư cá nhân trong nước, nên được theo dõi sát.</p>
<p><b>Ví dụ:</b> Bảng giá cuối ngày ghi “Khối ngoại bán ròng 1.200 tỷ đồng trên HOSE”. Nghĩa là tổng giá trị khối ngoại bán ra lớn hơn tổng mua vào 1.200 tỷ. Nếu thanh khoản HOSE hôm đó 20.000 tỷ, phần bán ròng chiếm 6% — một lực bán đáng kể.</p>

<h3>2. Room ngoại (giới hạn sở hữu nước ngoài)</h3>
<p>Mỗi công ty có tỷ lệ sở hữu tối đa cho nhà đầu tư nước ngoài, tùy ngành nghề: nhiều doanh nghiệp là 49%, ngân hàng thường là 30%, một số doanh nghiệp mở 100%, một số ngành bị hạn chế hơn. Hãy kiểm tra cụ thể từng mã trên trang tra cứu (mục “Sở hữu nước ngoài” hoặc “Room ngoại”).</p>
<p><b>Ví dụ:</b> Ngân hàng F (minh họa) có 2 tỷ cổ phiếu, room ngoại 30% = 600 triệu cp. Khối ngoại đang nắm 594 triệu cp → room còn 6 triệu cp (1%). Khi room gần hết, nhà đầu tư nước ngoài muốn mua thêm phải mua lại từ nhà đầu tư nước ngoài khác, đôi khi với giá cao hơn giá trên sàn (giao dịch thỏa thuận).</p>

<h3>3. Quỹ ETF và đợt cơ cấu danh mục</h3>
<p><b>ETF</b> là quỹ mô phỏng một chỉ số: quỹ mua đúng các cổ phiếu trong chỉ số với tỷ trọng gần giống chỉ số. Khi chỉ số thay đổi thành phần hoặc tỷ trọng (thường định kỳ theo quý hoặc nửa năm), quỹ phải mua/bán để khớp theo.</p>
<p>Có ETF nội (ví dụ các quỹ mô phỏng VN30, VN Diamond, VNFIN Lead… niêm yết trên HOSE) và ETF ngoại (niêm yết ở nước ngoài, mô phỏng các chỉ số về Việt Nam do các nhà cung cấp chỉ số như FTSE, MarketVector công bố).</p>
<p><b>Ví dụ tính khối lượng cơ cấu:</b> Quỹ ETF có tổng tài sản 10.000 tỷ đồng. Trong kỳ cơ cấu, tỷ trọng mã G tăng từ 4% lên 6%.</p>
<ul>
  <li>Giá trị cần mua thêm = 10.000 tỷ × (6% − 4%) = <b>200 tỷ đồng</b>.</li>
  <li>Giá mã G 40.000đ → số cổ phiếu cần mua = 200 tỷ ÷ 40.000 = <b>5 triệu cp</b>.</li>
  <li>Nếu mã G thường chỉ giao dịch 1 triệu cp/ngày, lượng mua của quỹ bằng 5 ngày giao dịch → có thể tạo biến động giá đáng kể.</li>
</ul>

<figure class="fig"><svg viewBox="0 0 640 240" role="img" aria-label="Quỹ ETF cơ cấu tỷ trọng trước và sau">
  <text x="160" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Trước cơ cấu</text>
  <text x="480" y="22" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Sau cơ cấu</text>
  <rect x="60" y="40" width="200" height="30" style="fill:var(--accent);fill-opacity:0.7"/>
  <text x="265" y="60" style="fill:var(--text);font-size:11px">Mã A 20%</text>
  <rect x="60" y="80" width="150" height="30" style="fill:var(--accent);fill-opacity:0.5"/>
  <text x="215" y="100" style="fill:var(--text);font-size:11px">Mã B 15%</text>
  <rect x="60" y="120" width="40" height="30" style="fill:var(--up)"/>
  <text x="105" y="140" style="fill:var(--text);font-size:11px">Mã G 4%</text>
  <rect x="60" y="160" width="100" height="30" style="fill:var(--down);fill-opacity:0.7"/>
  <text x="165" y="180" style="fill:var(--text);font-size:11px">Mã H 10%</text>
  <rect x="380" y="40" width="200" height="30" style="fill:var(--accent);fill-opacity:0.7"/>
  <text x="585" y="60" style="fill:var(--text);font-size:11px">20%</text>
  <rect x="380" y="80" width="150" height="30" style="fill:var(--accent);fill-opacity:0.5"/>
  <text x="535" y="100" style="fill:var(--text);font-size:11px">15%</text>
  <rect x="380" y="120" width="60" height="30" style="fill:var(--up)"/>
  <text x="445" y="140" style="fill:var(--up);font-size:11px;font-weight:600">6% → quỹ MUA</text>
  <rect x="380" y="160" width="80" height="30" style="fill:var(--down);fill-opacity:0.7"/>
  <text x="465" y="180" style="fill:var(--down);font-size:11px;font-weight:600">8% → quỹ BÁN</text>
  <text x="320" y="225" text-anchor="middle" style="fill:var(--muted);font-size:11px">Số liệu minh họa. Các mã còn lại trong danh mục không vẽ.</text>
</svg><figcaption>Hình: Khi tỷ trọng một mã trong chỉ số tăng, các quỹ ETF mô phỏng chỉ số đó phải mua thêm, và ngược lại.</figcaption></figure>

<p>Các quỹ ETF thường thực hiện giao dịch cơ cấu vào phiên ATC của ngày hiệu lực, vì vậy hôm đó khối lượng ATC của một số mã tăng đột biến.</p>
<p><b>Ví dụ:</b> Ngày ETF cơ cấu, mã H bị bán ròng 3 triệu cp trong phiên ATC, giá đóng cửa giảm 3%. Hôm sau giá hồi lại 2% vì lực bán đã hết. Người mới thấy “khối ngoại bán mạnh” mà hoảng loạn bán theo có thể bán đúng đáy ngắn hạn.</p>

<h3>4. Đọc dữ liệu khối ngoại thế nào cho đúng?</h3>
<ul>
  <li>Xem <b>xu hướng nhiều tuần</b>, không chỉ 1 ngày.</li>
  <li>Tách giao dịch <b>khớp lệnh</b> và <b>thỏa thuận</b> (thỏa thuận thường là giao dịch lô lớn giữa các tổ chức, ít phản ánh xu hướng chung).</li>
  <li>Khối ngoại không phải lúc nào cũng đúng; họ cũng có lý do riêng (rút vốn về nước, cơ cấu quỹ…).</li>
</ul>
<p><b>Ví dụ:</b> Khối ngoại bán ròng 2.000 tỷ hôm nay, nhưng 1.700 tỷ là một giao dịch thỏa thuận của một mã giữa hai quỹ ngoại. Phần khớp lệnh thực chất chỉ bán ròng 300 tỷ — không đáng lo như con số tổng.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Với 5 mã trong watchlist: tra room ngoại tối đa và tỷ lệ khối ngoại đang nắm. Mã nào gần hết room?</li>
  <li>Ghi khối ngoại mua/bán ròng 5 phiên gần nhất trên HOSE. Xu hướng là mua ròng hay bán ròng?</li>
  <li>Tính: quỹ 5.000 tỷ, tỷ trọng mã X giảm từ 8% xuống 5%, giá 25.000đ → quỹ bán bao nhiêu cổ phiếu?</li>
</ol>
<p>Đáp án câu 3: 5.000 tỷ × 3% = 150 tỷ ÷ 25.000 = <b>6 triệu cp</b>.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Khối ngoại giao dịch lớn, được theo dõi sát nhưng không phải lúc nào cũng đúng.</li>
  <li>Room ngoại giới hạn tỷ lệ sở hữu nước ngoài, khác nhau theo doanh nghiệp/ngành.</li>
  <li>ETF cơ cấu → mua/bán theo tỷ trọng mới, thường tập trung ở phiên ATC ngày hiệu lực.</li>
  <li>Phân biệt khớp lệnh và thỏa thuận khi đọc số liệu khối ngoại.</li>
</ul></div>
`,
  quiz: [
    { q: "Quỹ ETF 2.000 tỷ, tỷ trọng mã Y tăng từ 5% lên 7%. Quỹ cần mua thêm:", options: ["20 tỷ", "40 tỷ", "140 tỷ", "100 tỷ"], answer: 1, explain: "2.000 tỷ × 2% = 40 tỷ đồng." },
    { q: "Room ngoại là gì?", options: ["Phòng giao dịch dành cho người nước ngoài", "Tỷ lệ sở hữu tối đa của nhà đầu tư nước ngoài tại một công ty", "Phí giao dịch cho khối ngoại", "Số lượng quỹ ngoại"], answer: 1, explain: "Room ngoại = giới hạn sở hữu nước ngoài." },
    { q: "Khối ngoại bán ròng lớn nhưng chủ yếu qua thỏa thuận. Nhận định hợp lý:", options: ["Thị trường chắc chắn sập", "Cần tách phần khớp lệnh để đánh giá đúng xu hướng", "Nên bán hết cổ phiếu", "Không cần quan tâm khối ngoại nữa"], answer: 1, explain: "Thỏa thuận thường là giao dịch lô lớn đặc thù, ít phản ánh xu hướng chung." }
  ]
},

{
  id: "w04-2", week: 4, day: 2, minutes: 120,
  title: "Tâm lý thị trường, dòng tiền và thanh khoản",
  summary: "Đọc thanh khoản như “nhiệt kế” tâm lý, hiểu chu kỳ cảm xúc và các bẫy tâm lý phổ biến.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Ghi giá trị giao dịch toàn thị trường hôm nay và so với trung bình 20 phiên (nhiều trang có thống kê này). Thanh khoản đang cao hay thấp hơn bình thường?</div>

<h3>1. Thanh khoản là gì?</h3>
<p><b>Thanh khoản</b> là mức độ dễ dàng mua/bán. Ở cấp thị trường, người ta đo bằng <b>giá trị giao dịch</b> mỗi phiên (tỷ đồng). Ở cấp cổ phiếu, đo bằng khối lượng hoặc giá trị khớp mỗi ngày.</p>
<p><b>Ví dụ:</b> Mã A khớp trung bình 3 triệu cp/ngày ở giá 30.000đ → giá trị ≈ 90 tỷ/ngày. Bạn mua bán 50 triệu đồng không ảnh hưởng gì đến giá. Mã B khớp 20.000 cp/ngày ở giá 10.000đ → 200 triệu/ngày; lệnh 50 triệu của bạn chiếm 25% thanh khoản cả ngày, có thể đẩy giá đi đáng kể.</p>

<h3>2. Giá + thanh khoản: đọc cùng nhau</h3>
<table>
  <tr><th>Giá</th><th>Thanh khoản</th><th>Cách đọc thường gặp</th></tr>
  <tr><td>Tăng</td><td>Cao hơn trung bình</td><td>Dòng tiền vào mạnh, xu hướng tăng được xác nhận</td></tr>
  <tr><td>Tăng</td><td>Thấp</td><td>Tăng yếu, thiếu người mua thật sự</td></tr>
  <tr><td>Giảm</td><td>Cao đột biến</td><td>Bán tháo, có thể là hoảng loạn</td></tr>
  <tr><td>Giảm</td><td>Thấp</td><td>Áp lực bán không lớn, thị trường “nghỉ”</td></tr>
</table>
<p><b>Ví dụ:</b> Trung bình 20 phiên HOSE giao dịch 18.000 tỷ/phiên. Hôm nay VN-Index tăng 1,5% với 27.000 tỷ (gấp 1,5 lần) → tín hiệu dòng tiền vào mạnh. Nếu tăng 1,5% nhưng chỉ 12.000 tỷ (bằng 2/3 bình thường) → tăng nhưng ít người tham gia, cần thận trọng hơn (số liệu minh họa).</p>

<h3>3. Chu kỳ cảm xúc của nhà đầu tư</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Chu kỳ cảm xúc nhà đầu tư theo giá">
  <path d="M20 200 C 80 190, 120 140, 170 90 C 200 60, 220 40, 250 40 C 290 40, 310 90, 340 140 C 370 190, 400 220, 430 220 C 470 220, 500 190, 540 160 C 570 140, 600 130, 625 120" style="fill:none;stroke:var(--accent);stroke-width:3"/>
  <circle cx="120" cy="140" r="5" style="fill:var(--up)"/>
  <text x="110" y="128" text-anchor="end" style="fill:var(--text);font-size:12px">Lạc quan</text>
  <circle cx="200" cy="58" r="5" style="fill:var(--up)"/>
  <text x="190" y="50" text-anchor="end" style="fill:var(--text);font-size:12px">Phấn khích</text>
  <circle cx="250" cy="40" r="6" style="fill:var(--ceil)"/>
  <text x="250" y="26" text-anchor="middle" style="fill:var(--ceil);font-size:12px;font-weight:600">Hưng phấn (rủi ro cao nhất)</text>
  <circle cx="310" cy="90" r="5" style="fill:var(--c2)"/>
  <text x="320" y="86" style="fill:var(--text);font-size:12px">Lo lắng, phủ nhận</text>
  <circle cx="370" cy="190" r="5" style="fill:var(--down)"/>
  <text x="380" y="186" style="fill:var(--text);font-size:12px">Sợ hãi</text>
  <circle cx="430" cy="220" r="6" style="fill:var(--floor)"/>
  <text x="430" y="245" text-anchor="middle" style="fill:var(--floor);font-size:12px;font-weight:600">Hoảng loạn, chán nản (cơ hội lớn nhất)</text>
  <circle cx="540" cy="160" r="5" style="fill:var(--up)"/>
  <text x="545" y="180" style="fill:var(--text);font-size:12px">Hy vọng</text>
</svg><figcaption>Hình: Đám đông thường mua nhiều nhất khi hưng phấn (giá cao) và bán nhiều nhất khi hoảng loạn (giá thấp) — ngược với điều nên làm.</figcaption></figure>
<p><b>Ví dụ:</b> Anh Minh thấy bạn bè khoe lãi, thị trường tăng 40% trong 6 tháng, anh mở tài khoản và dồn toàn bộ 200 triệu ở vùng đỉnh. Thị trường giảm 30%, anh sợ hãi bán ra còn khoảng 140 triệu. Một năm sau thị trường quay lại đỉnh cũ, còn anh đã lỗ 60 triệu. Không phải anh chọn sai cổ phiếu — anh mua và bán theo cảm xúc.</p>

<h3>4. Các bẫy tâm lý phổ biến</h3>
<table>
  <tr><th>Bẫy</th><th>Biểu hiện</th><th>Ví dụ</th></tr>
  <tr><td>Sợ bỏ lỡ (FOMO)</td><td>Mua đuổi vì thấy người khác lãi</td><td>Mua mã đã tăng trần 3 phiên liên tiếp</td></tr>
  <tr><td>Tâm lý bầy đàn</td><td>Làm theo số đông</td><td>Cả nhóm chat mua mã X nên mình mua theo</td></tr>
  <tr><td>Neo giá</td><td>Bám vào một mức giá cũ</td><td>“Mã này từng 60.000đ, giờ 30.000đ là rẻ” — dù lợi nhuận đã giảm 70%</td></tr>
  <tr><td>Ngại cắt lỗ</td><td>Giữ mã lỗ, bán mã lãi</td><td>Bán mã lãi 5% để “chốt”, ôm mã lỗ 25% chờ “về bờ”</td></tr>
</table>
<p><b>Ví dụ neo giá tính bằng số:</b> Năm ngoái mã Z giá 60.000đ với EPS 6.000đ (P/E 10). Nay giá 30.000đ nhưng EPS chỉ còn 1.500đ → P/E = 20. Tính theo lợi nhuận, cổ phiếu đang <b>đắt gấp đôi</b> năm ngoái, không hề rẻ.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Ghi giá trị giao dịch HOSE 10 phiên gần nhất cùng % thay đổi VN-Index. Đánh dấu các phiên “tăng/giảm với thanh khoản cao”.</li>
  <li>Theo bạn, thị trường hiện tại ở đâu trên chu kỳ cảm xúc? Dẫn 2 bằng chứng (tin tức, thanh khoản, thái độ mọi người xung quanh).</li>
  <li>Nhớ lại một quyết định tài chính bạn từng đưa ra theo cảm xúc. Nó thuộc bẫy nào?</li>
</ol>
<p>Kết quả mong đợi: bảng 10 phiên và một đoạn tự nhận xét trung thực.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Thanh khoản là “nhiệt kế” dòng tiền; đọc cùng với biến động giá.</li>
  <li>Đám đông thường mua ở hưng phấn và bán ở hoảng loạn.</li>
  <li>FOMO, bầy đàn, neo giá, ngại cắt lỗ là 4 bẫy phổ biến.</li>
  <li>Kế hoạch viết sẵn và DCA giúp giảm quyết định theo cảm xúc.</li>
</ul></div>
`,
  quiz: [
    { q: "VN-Index tăng mạnh với thanh khoản gấp 1,5 lần trung bình. Thường được đọc là:", options: ["Tăng yếu", "Dòng tiền vào mạnh, xác nhận xu hướng tăng", "Sắp giảm sàn", "Không có ý nghĩa"], answer: 1, explain: "Giá tăng kèm thanh khoản cao cho thấy nhiều người mua thật sự." },
    { q: "Giá giảm từ 60.000 xuống 30.000đ, EPS giảm từ 6.000 xuống 1.500đ. P/E thay đổi:", options: ["Từ 10 xuống 5 (rẻ hơn)", "Từ 10 lên 20 (đắt hơn)", "Giữ nguyên 10", "Từ 20 xuống 10"], answer: 1, explain: "60.000/6.000 = 10; 30.000/1.500 = 20." },
    { q: "Mua một mã vì đã tăng trần 3 phiên và ai cũng bàn tán là biểu hiện của:", options: ["Phân tích cơ bản", "FOMO / tâm lý bầy đàn", "Đa dạng hóa", "Biên an toàn"], answer: 1, explain: "Mua vì sợ bỏ lỡ và vì đám đông, không dựa trên phân tích." }
  ]
},

{
  id: "w04-3", week: 4, day: 3, minutes: 120,
  title: "Mùa kết quả kinh doanh quý",
  summary: "Biết khi nào doanh nghiệp công bố báo cáo, cách đọc nhanh tăng trưởng so với cùng kỳ và phản ứng của giá.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin “lợi nhuận quý” của bất kỳ doanh nghiệp nào hôm nay. Ghi: doanh thu, lợi nhuận sau thuế, tăng/giảm bao nhiêu % so với cùng kỳ.</div>

<h3>1. Lịch công bố báo cáo tài chính</h3>
<p>Công ty niêm yết phải công bố báo cáo tài chính (BCTC) định kỳ theo quy định của Bộ Tài chính. Thời hạn tham khảo:</p>
<table>
  <tr><th>Loại báo cáo</th><th>Thời hạn tham khảo</th></tr>
  <tr><td>BCTC quý</td><td>Khoảng 20 ngày sau khi kết thúc quý (công ty mẹ lập hợp nhất có thể được thêm thời gian)</td></tr>
  <tr><td>BCTC bán niên (đã soát xét)</td><td>Khoảng 45 ngày sau 30/6</td></tr>
  <tr><td>BCTC năm (đã kiểm toán)</td><td>Khoảng 90 ngày sau khi kết thúc năm tài chính</td></tr>
</table>
<p class="muted">Quy định có thể thay đổi; kiểm tra văn bản hiện hành hoặc thông báo của HOSE/HNX.</p>
<p><b>Ví dụ:</b> Quý 3 kết thúc ngày 30/9. Khoảng từ giữa đến cuối tháng 10, phần lớn doanh nghiệp công bố BCTC quý 3 → đó là “mùa báo cáo”. Nhiều doanh nghiệp lớn công bố sớm, có công ty công bố sát hạn cuối.</p>

<figure class="fig"><svg viewBox="0 0 640 200" role="img" aria-label="Dòng thời gian một năm với các mùa báo cáo">
  <line x1="30" y1="100" x2="610" y2="100" style="stroke:var(--line);stroke-width:3"/>
  <rect x="30" y="80" width="145" height="40" style="fill:var(--accent);fill-opacity:0.1"/>
  <rect x="175" y="80" width="145" height="40" style="fill:var(--accent);fill-opacity:0.2"/>
  <rect x="320" y="80" width="145" height="40" style="fill:var(--accent);fill-opacity:0.1"/>
  <rect x="465" y="80" width="145" height="40" style="fill:var(--accent);fill-opacity:0.2"/>
  <text x="102" y="105" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Quý 1</text>
  <text x="247" y="105" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Quý 2</text>
  <text x="392" y="105" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Quý 3</text>
  <text x="537" y="105" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Quý 4</text>
  <rect x="30" y="40" width="40" height="30" rx="4" style="fill:var(--c2);fill-opacity:0.6"/>
  <text x="50" y="35" text-anchor="middle" style="fill:var(--muted);font-size:10px">KQ Q4 năm trước</text>
  <rect x="175" y="40" width="40" height="30" rx="4" style="fill:var(--c2);fill-opacity:0.6"/>
  <text x="195" y="35" text-anchor="middle" style="fill:var(--muted);font-size:10px">KQ Q1</text>
  <rect x="320" y="40" width="40" height="30" rx="4" style="fill:var(--c2);fill-opacity:0.6"/>
  <text x="340" y="35" text-anchor="middle" style="fill:var(--muted);font-size:10px">KQ Q2</text>
  <rect x="465" y="40" width="40" height="30" rx="4" style="fill:var(--c2);fill-opacity:0.6"/>
  <text x="485" y="35" text-anchor="middle" style="fill:var(--muted);font-size:10px">KQ Q3</text>
  <text x="50" y="145" text-anchor="middle" style="fill:var(--muted);font-size:11px">Th1</text>
  <text x="195" y="145" text-anchor="middle" style="fill:var(--muted);font-size:11px">Th4</text>
  <text x="340" y="145" text-anchor="middle" style="fill:var(--muted);font-size:11px">Th7</text>
  <text x="485" y="145" text-anchor="middle" style="fill:var(--muted);font-size:11px">Th10</text>
  <text x="320" y="180" text-anchor="middle" style="fill:var(--muted);font-size:12px">Ô cam = khoảng tháng đầu mỗi quý, khi KQKD quý trước được công bố dồn dập</text>
</svg><figcaption>Hình: Mỗi năm có 4 mùa báo cáo, rơi vào khoảng tháng 1, 4, 7, 10. Đây là lúc nên dành thời gian thứ 7 để đọc KQKD các mã trong watchlist.</figcaption></figure>

<h3>2. So sánh cùng kỳ (YoY) và quý trước (QoQ)</h3>
<p><b>YoY</b> (year over year) so với cùng quý năm trước; <b>QoQ</b> (quarter over quarter) so với quý liền trước. Với doanh nghiệp có tính mùa vụ, YoY quan trọng hơn.</p>
<p><b>Ví dụ (số liệu minh họa):</b> Công ty bán lẻ H có lợi nhuận Q4 năm ngoái 200 tỷ, Q3 năm nay 120 tỷ, Q4 năm nay 230 tỷ.</p>
<ul>
  <li>QoQ: (230 − 120) ÷ 120 = <b>+91,7%</b> — nghe rất ấn tượng, nhưng Q4 luôn là mùa mua sắm cuối năm.</li>
  <li>YoY: (230 − 200) ÷ 200 = <b>+15%</b> — đây mới là mức tăng trưởng “thật”.</li>
</ul>

<h3>3. Đọc nhanh tin KQKD: 4 con số</h3>
<ol>
  <li><b>Doanh thu thuần</b> — công ty bán được bao nhiêu.</li>
  <li><b>Lợi nhuận gộp</b> và <b>biên lợi nhuận gộp</b> = lợi nhuận gộp ÷ doanh thu.</li>
  <li><b>Lợi nhuận sau thuế</b> (của cổ đông công ty mẹ).</li>
  <li><b>Lũy kế so với kế hoạch năm</b> — đã hoàn thành bao nhiêu % mục tiêu.</li>
</ol>
<p><b>Ví dụ:</b> Doanh thu quý 1.000 tỷ (+10% YoY), lợi nhuận gộp 250 tỷ → biên gộp 25% (cùng kỳ 22%). Lợi nhuận sau thuế 90 tỷ (+30% YoY). Lũy kế 9 tháng 240 tỷ / kế hoạch năm 300 tỷ = <b>80%</b> sau 75% thời gian → đang vượt tiến độ. Biên gộp tăng từ 22% lên 25% cho thấy lợi nhuận tăng không chỉ nhờ bán nhiều hơn mà còn nhờ hiệu quả tốt hơn.</p>
<div class="warn">⚠ Cẩn thận lợi nhuận “đột biến” từ hoạt động không thường xuyên (bán tài sản, thanh lý công ty con, hoàn nhập dự phòng). Ví dụ: lợi nhuận tăng 200% nhưng 80% đến từ bán một mảnh đất — quý sau sẽ không lặp lại.</div>

<h3>4. Giá phản ứng với KQKD như thế nào?</h3>
<p>Giá phản ứng với <b>mức chênh so với kỳ vọng</b>, không phải với con số tuyệt đối.</p>
<p><b>Ví dụ:</b> Thị trường kỳ vọng lợi nhuận công ty I tăng 50%. Kết quả thực tế tăng 30% → giá có thể <b>giảm</b> dù lợi nhuận tăng mạnh. Ngược lại, công ty J được kỳ vọng lỗ, kết quả chỉ lãi nhẹ → giá có thể tăng mạnh. Đó cũng là lý do câu “mua tin đồn, bán sự thật” hay được nhắc đến.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Chọn 2 mã trong watchlist. Tra KQKD quý gần nhất: doanh thu, lợi nhuận gộp, lợi nhuận sau thuế, cùng kỳ năm trước.</li>
  <li>Tính tăng trưởng YoY doanh thu và lợi nhuận, biên lợi nhuận gộp quý này và cùng kỳ.</li>
  <li>Tra kế hoạch lợi nhuận năm (nghị quyết đại hội cổ đông), tính % hoàn thành lũy kế.</li>
</ol>
<p>Kết quả mong đợi: bảng 2 mã × 6 chỉ tiêu, mỗi mã 1 câu nhận xét.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Mùa báo cáo quý rơi vào khoảng tháng 1, 4, 7, 10.</li>
  <li>So sánh YoY quan trọng hơn QoQ với doanh nghiệp có tính mùa vụ.</li>
  <li>4 con số: doanh thu, biên gộp, lợi nhuận sau thuế, % hoàn thành kế hoạch.</li>
  <li>Giá phản ứng với chênh lệch so với kỳ vọng; cẩn thận lợi nhuận bất thường.</li>
</ul></div>
`,
  quiz: [
    { q: "Lợi nhuận quý này 150 tỷ, cùng kỳ năm trước 120 tỷ. Tăng trưởng YoY:", options: ["20%", "25%", "30%", "150%"], answer: 1, explain: "(150 − 120) ÷ 120 = 25%." },
    { q: "Doanh thu 800 tỷ, lợi nhuận gộp 200 tỷ. Biên lợi nhuận gộp:", options: ["20%", "25%", "40%", "4%"], answer: 1, explain: "200 ÷ 800 = 25%." },
    { q: "Lợi nhuận tăng 30% nhưng giá cổ phiếu giảm. Lý do hợp lý nhất:", options: ["Bảng giá lỗi", "Kết quả thấp hơn kỳ vọng của thị trường", "Công ty bị hủy niêm yết", "Không thể xảy ra"], answer: 1, explain: "Giá phản ứng với mức chênh so với kỳ vọng." }
  ]
},

{
  id: "w04-4", week: 4, day: 4, minutes: 120,
  title: "Sự kiện doanh nghiệp: cổ tức, phát hành thêm, ngày GDKHQ",
  summary: "Hiểu các mốc ngày quyền và tự tính giá tham chiếu điều chỉnh khi chia cổ tức hoặc phát hành thêm.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Mở lịch sự kiện trên CafeF/Vietstock, tìm 2 mã sắp “giao dịch không hưởng quyền” trong tuần này. Ghi lại loại quyền và tỷ lệ.</div>

<h3>1. Ba mốc ngày quan trọng</h3>
<ul>
  <li><b>Ngày đăng ký cuối cùng (ĐKCC)</b>: ai có tên trong danh sách cổ đông vào ngày này thì được hưởng quyền.</li>
  <li><b>Ngày giao dịch không hưởng quyền (GDKHQ)</b>: từ ngày này, người mua cổ phiếu <b>không</b> được hưởng quyền nữa. Với chu kỳ T+2, ngày GDKHQ thường là <b>1 ngày làm việc trước ngày ĐKCC</b>.</li>
  <li><b>Ngày thực hiện</b>: ngày tiền cổ tức về tài khoản hoặc cổ phiếu mới được ghi nhận.</li>
</ul>
<p><b>Ví dụ:</b> Ngày ĐKCC là thứ 5 → ngày GDKHQ là thứ 4. Muốn nhận cổ tức, bạn phải mua <b>chậm nhất phiên thứ 3</b> (để cổ phiếu về tài khoản vào thứ 5 theo T+2). Mua sáng thứ 4 là không còn quyền.</p>

<figure class="fig"><svg viewBox="0 0 640 200" role="img" aria-label="Dòng thời gian quyền cổ tức">
  <line x1="40" y1="100" x2="600" y2="100" style="stroke:var(--line);stroke-width:3"/>
  <circle cx="120" cy="100" r="16" style="fill:var(--up)"/>
  <text x="120" y="105" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">T3</text>
  <text x="120" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">Ngày mua cuối</text>
  <text x="120" y="156" text-anchor="middle" style="fill:var(--text);font-size:12px">còn hưởng quyền</text>
  <circle cx="270" cy="100" r="16" style="fill:var(--down)"/>
  <text x="270" y="105" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">T4</text>
  <text x="270" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">Ngày GDKHQ</text>
  <text x="270" y="156" text-anchor="middle" style="fill:var(--muted);font-size:11px">giá TC được điều chỉnh</text>
  <circle cx="420" cy="100" r="16" style="fill:var(--accent)"/>
  <text x="420" y="105" text-anchor="middle" style="fill:var(--bg);font-size:11px;font-weight:600">T5</text>
  <text x="420" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">Ngày ĐKCC</text>
  <text x="420" y="156" text-anchor="middle" style="fill:var(--muted);font-size:11px">chốt danh sách</text>
  <circle cx="560" cy="100" r="16" style="fill:var(--ref)"/>
  <text x="560" y="105" text-anchor="middle" style="fill:var(--bg);font-size:10px;font-weight:600">sau</text>
  <text x="560" y="140" text-anchor="middle" style="fill:var(--text);font-size:12px">Ngày thanh toán</text>
  <text x="560" y="156" text-anchor="middle" style="fill:var(--muted);font-size:11px">tiền/CP về TK</text>
  <path d="M120 70 C 200 30, 340 30, 420 70" style="fill:none;stroke:var(--up);stroke-width:2;stroke-dasharray:5 4"/>
  <text x="270" y="40" text-anchor="middle" style="fill:var(--up);font-size:11px">mua T3 → cổ phiếu về T5 (T+2) → kịp chốt quyền</text>
</svg><figcaption>Hình: Ví dụ ngày ĐKCC là thứ 5. Mua chậm nhất phiên thứ 3 mới được hưởng quyền. Lịch cụ thể luôn ghi trong thông báo của doanh nghiệp.</figcaption></figure>

<h3>2. Cổ tức bằng tiền</h3>
<p>Cổ tức tính theo % <b>mệnh giá</b> (10.000đ). Vào ngày GDKHQ, giá tham chiếu được điều chỉnh giảm đúng bằng số tiền cổ tức.</p>
<p><b>Công thức:</b> Giá TC điều chỉnh = Giá đóng cửa trước ngày GDKHQ − Cổ tức tiền/cp.</p>
<p><b>Ví dụ:</b> Cổ tức 15% bằng tiền = 1.500đ/cp. Giá đóng cửa hôm trước 30.000đ → giá TC ngày GDKHQ = 30.000 − 1.500 = <b>28.500đ</b>. Bạn nắm 1.000 cp: tài sản cổ phiếu giảm 1,5 triệu, bù lại nhận 1,5 triệu tiền (trừ thuế 5% còn 1.425.000đ). Tổng tài sản gần như không đổi — <b>cổ tức không phải “tiền miễn phí”</b>.</p>

<h3>3. Cổ tức bằng cổ phiếu và cổ phiếu thưởng</h3>
<p>Công ty phát hành thêm cổ phiếu cho cổ đông hiện hữu theo tỷ lệ, không thu tiền. Số cổ phiếu tăng, giá điều chỉnh giảm tương ứng.</p>
<p><b>Công thức:</b> Giá TC điều chỉnh = Giá trước GDKHQ ÷ (1 + tỷ lệ).</p>
<p><b>Ví dụ:</b> Chia cổ tức cổ phiếu tỷ lệ 20% (100 cp được thêm 20 cp). Giá trước GDKHQ 36.000đ → giá TC mới = 36.000 ÷ 1,2 = <b>30.000đ</b>. Bạn có 1.000 cp × 36.000 = 36 triệu → sau đó 1.200 cp × 30.000 = 36 triệu. Tài sản không đổi, chỉ chia nhỏ ra. (Phần cổ phiếu lẻ phát sinh thường bị làm tròn xuống theo quy định của từng đợt.)</p>

<h3>4. Phát hành thêm cho cổ đông hiện hữu (quyền mua)</h3>
<p>Công ty bán thêm cổ phiếu cho cổ đông hiện hữu ở giá ưu đãi, thường thấp hơn giá thị trường, để huy động vốn.</p>
<p><b>Công thức:</b> Giá TC điều chỉnh = (Giá trước GDKHQ + Giá phát hành × tỷ lệ) ÷ (1 + tỷ lệ).</p>
<p><b>Ví dụ:</b> Tỷ lệ 10:3 (sở hữu 10 cp được mua 3 cp mới), tức tỷ lệ 30%, giá phát hành 10.000đ. Giá trước GDKHQ 25.000đ → TC mới = (25.000 + 10.000 × 0,3) ÷ 1,3 = 28.000 ÷ 1,3 ≈ <b>21.540đ</b> (làm tròn theo bước giá trên thực tế). Nếu bạn có 1.000 cp và <b>không</b> mua quyền (cũng không bán quyền nếu được phép chuyển nhượng), giá trị cổ phiếu từ 25 triệu còn khoảng 21,54 triệu → <b>thiệt khoảng 3,46 triệu</b>. Vì vậy cần theo dõi thông báo quyền mua và quyết định thực hiện hoặc chuyển nhượng quyền đúng hạn.</p>
<div class="warn">⚠ Biểu đồ giá trên nhiều phần mềm đã được “điều chỉnh” theo các sự kiện quyền, trong khi số trên bảng giá là giá thật. Khi so giá quá khứ, hãy chú ý dùng giá đã điều chỉnh để không kết luận sai “giá đã giảm 20%”.</div>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Tính giá TC điều chỉnh: (a) giá 50.000đ, cổ tức tiền 20%; (b) giá 24.000đ, cổ tức cổ phiếu 20%; (c) giá 18.000đ, phát hành thêm tỷ lệ 2:1 (50%) giá 10.000đ.</li>
  <li>Với 2 mã sắp GDKHQ tìm được ở phần đọc tin, xác định ngày mua cuối cùng để còn hưởng quyền.</li>
  <li>Tra lịch sử cổ tức 5 năm của 1 mã trong watchlist: trả đều hay thất thường? Tiền hay cổ phiếu?</li>
</ol>
<p>Đáp án câu 1: (a) 50.000 − 2.000 = 48.000đ; (b) 24.000 ÷ 1,2 = 20.000đ; (c) (18.000 + 5.000) ÷ 1,5 ≈ 15.333đ → làm tròn theo bước giá.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Ngày GDKHQ thường trước ngày ĐKCC 1 ngày làm việc; phải mua trước ngày GDKHQ mới có quyền.</li>
  <li>Cổ tức tiền: TC mới = giá cũ − cổ tức; cổ tức cổ phiếu: TC mới = giá cũ ÷ (1 + tỷ lệ).</li>
  <li>Quyền mua: TC mới = (giá cũ + giá phát hành × tỷ lệ) ÷ (1 + tỷ lệ).</li>
  <li>Chia cổ tức không làm bạn giàu lên ngay; giá trị thật đến từ lợi nhuận công ty.</li>
</ul></div>
`,
  quiz: [
    { q: "Giá 40.000đ, cổ tức tiền 10%. Giá TC ngày GDKHQ:", options: ["36.000đ", "39.000đ", "40.000đ", "30.000đ"], answer: 1, explain: "10% mệnh giá = 1.000đ → 40.000 − 1.000 = 39.000đ." },
    { q: "Ngày ĐKCC là thứ 6 (không có ngày lễ). Ngày GDKHQ thường là:", options: ["Thứ 6", "Thứ 5", "Thứ 4", "Thứ 2 tuần sau"], answer: 1, explain: "GDKHQ thường trước ĐKCC 1 ngày làm việc." },
    { q: "Giá 30.000đ, chia cổ phiếu thưởng tỷ lệ 50%. Giá TC mới:", options: ["15.000đ", "20.000đ", "25.000đ", "45.000đ"], answer: 1, explain: "30.000 ÷ 1,5 = 20.000đ." }
  ]
},

{
  id: "w04-5", week: 4, day: 5, minutes: 120,
  title: "Nâng hạng thị trường và chính sách",
  summary: "Hiểu xếp hạng thị trường của các tổ chức quốc tế, tác động của chính sách và cách đọc tin chính sách tỉnh táo.",
  body: `
<div class="tip"><b>⏱ 20 phút đọc tin:</b> Tìm tin mới nhất về “nâng hạng thị trường chứng khoán Việt Nam”. Ghi lại: tổ chức nào, trạng thái hiện tại ra sao, mốc thời gian tiếp theo là gì.</div>

<h3>1. Xếp hạng thị trường là gì?</h3>
<p>Các nhà cung cấp chỉ số quốc tế (như FTSE Russell, MSCI) phân loại thị trường các nước theo mức độ phát triển, độ mở và khả năng tiếp cận cho nhà đầu tư nước ngoài. Các nhóm phổ biến:</p>
<figure class="fig"><svg viewBox="0 0 640 230" role="img" aria-label="Các bậc xếp hạng thị trường">
  <rect x="40" y="170" width="130" height="40" rx="6" style="fill:var(--line)"/>
  <text x="105" y="195" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Cận biên</text>
  <rect x="190" y="130" width="130" height="80" rx="6" style="fill:var(--accent);fill-opacity:0.3"/>
  <text x="255" y="160" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Mới nổi</text>
  <text x="255" y="178" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">thứ cấp</text>
  <rect x="340" y="85" width="130" height="125" rx="6" style="fill:var(--accent);fill-opacity:0.55"/>
  <text x="405" y="120" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Mới nổi</text>
  <text x="405" y="138" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">tiên tiến</text>
  <rect x="490" y="40" width="130" height="170" rx="6" style="fill:var(--accent);fill-opacity:0.8"/>
  <text x="555" y="80" text-anchor="middle" style="fill:var(--bg);font-size:12px;font-weight:600">Phát triển</text>
  <text x="330" y="25" text-anchor="middle" style="fill:var(--muted);font-size:12px">Bậc càng cao → càng nhiều dòng vốn quốc tế theo chỉ số có thể đầu tư</text>
</svg><figcaption>Hình: Các bậc phân loại thị trường theo cách gọi của FTSE Russell (MSCI dùng cách phân loại hơi khác: cận biên, mới nổi, phát triển).</figcaption></figure>
<p><b>Ví dụ:</b> Một quỹ toàn cầu chỉ được phép đầu tư vào thị trường “mới nổi” theo điều lệ. Khi Việt Nam còn là “cận biên”, quỹ không mua được cổ phiếu Việt Nam dù muốn. Khi được nâng hạng, quỹ này (và các ETF theo chỉ số mới nổi) có thể bắt đầu phân bổ vốn vào Việt Nam.</p>

<h3>2. Nâng hạng tác động thế nào?</h3>
<p>FTSE Russell công bố nâng hạng Việt Nam vào tháng 10/2025 và xác nhận ở kỳ rà soát tháng 3/2026 (công bố ngày 07/4/2026). Từ <b>21/9/2026</b>, Việt Nam chính thức là <b>thị trường mới nổi thứ cấp</b> theo FTSE Russell; việc đưa cổ phiếu Việt Nam vào các chỉ số được chia làm 4 đợt, kéo dài đến năm 2027. Riêng <b>MSCI</b> chưa đưa Việt Nam vào danh sách theo dõi nâng hạng (kỳ đánh giá tháng 6/2026). Các mốc tiếp theo có thể thay đổi — <b>hãy kiểm tra tin mới nhất</b> trước khi dựa vào thông tin này.</p>
<p><b>Ví dụ đọc mốc thời gian:</b> Nếu một quỹ theo chỉ số FTSE mới nổi phải mua tổng cộng 100 triệu USD cổ phiếu Việt Nam và việc đưa vào chỉ số chia 4 đợt, mỗi đợt quỹ chỉ mua một phần (số liệu minh họa) chứ không mua hết trong một ngày — dòng tiền vào rải rác qua nhiều tháng.</p>
<p>Tác động thường được nhắc đến:</p>
<ul>
  <li>Dòng vốn từ các quỹ theo chỉ số (thụ động) và quỹ chủ động quan tâm thị trường mới nổi.</li>
  <li>Áp lực cải thiện minh bạch, quy trình giao dịch, quản trị doanh nghiệp.</li>
  <li>Dòng vốn tập trung vào cổ phiếu lớn, thanh khoản cao, còn room ngoại.</li>
</ul>
<p><b>Ví dụ tính toán giả định:</b> Giả sử có 5 tỷ USD quỹ thụ động theo một chỉ số mới nổi, tỷ trọng dành cho Việt Nam sau nâng hạng là 0,2% → dòng vốn ≈ 10 triệu USD. Nếu tổng quỹ theo chỉ số đó là 500 tỷ USD → 1 tỷ USD. Quy mô thật phụ thuộc vào chỉ số, số quỹ theo dõi và cách tính tỷ trọng — các con số trên chỉ là minh họa cách tính.</p>
<div class="warn">⚠ Tin nâng hạng thường được “định giá trước”: giá cổ phiếu có thể tăng trong giai đoạn kỳ vọng và điều chỉnh khi sự kiện chính thức diễn ra. Đừng mua đuổi chỉ vì tiêu đề “nâng hạng”.</div>

<h3>3. Chính sách tiền tệ và chính sách tài khóa</h3>
<table>
  <tr><th></th><th>Chính sách tiền tệ</th><th>Chính sách tài khóa</th></tr>
  <tr><td>Ai điều hành</td><td>Ngân hàng Nhà nước</td><td>Chính phủ, Quốc hội (Bộ Tài chính)</td></tr>
  <tr><td>Công cụ</td><td>Lãi suất, cung tiền, tỷ giá, tín dụng</td><td>Thuế, chi tiêu ngân sách, đầu tư công</td></tr>
  <tr><td>Ví dụ nới lỏng</td><td>Giảm lãi suất điều hành</td><td>Giảm thuế VAT, đẩy mạnh giải ngân đầu tư công</td></tr>
  <tr><td>Ngành hưởng lợi điển hình</td><td>Ngân hàng, chứng khoán, bất động sản</td><td>Xây dựng hạ tầng, vật liệu (đá, nhựa đường, thép)</td></tr>
</table>
<p><b>Ví dụ:</b> Tin “Giảm thuế VAT 2% cho nhiều nhóm hàng”. Một món hàng giá trước thuế 1.000.000đ: VAT 10% → khách trả 1.100.000đ; VAT 8% → 1.080.000đ, rẻ hơn 20.000đ (≈ 1,8%). Kỳ vọng sức mua tăng → tích cực cho bán lẻ, tiêu dùng (mức độ thực tế tùy ngành).</p>
<p><b>Ví dụ đầu tư công:</b> Tin “Giải ngân đầu tư công 9 tháng tăng 30% so với cùng kỳ” → nhu cầu đá xây dựng, nhựa đường, thép, nhà thầu hạ tầng tăng. Bạn tìm trong watchlist (hoặc ngoài) doanh nghiệp nào có doanh thu phụ thuộc vào xây dựng hạ tầng.</p>

<h3>4. Đọc tin chính sách tỉnh táo</h3>
<ol>
  <li><b>Đã ban hành hay mới là dự thảo/đề xuất?</b> Dự thảo có thể thay đổi nhiều.</li>
  <li><b>Hiệu lực từ khi nào?</b> Chính sách có hiệu lực sau 1 năm khác hẳn chính sách có hiệu lực ngay.</li>
  <li><b>Tác động định lượng được không?</b> Thử ước lượng ảnh hưởng đến doanh thu/lợi nhuận.</li>
</ol>
<p><b>Ví dụ:</b> Tin “Đề xuất giảm thuế thu nhập doanh nghiệp cho ngành X”. Đây mới là đề xuất. Nếu được thông qua và thuế giảm từ 20% xuống 15%, công ty có lợi nhuận trước thuế 100 tỷ sẽ có lợi nhuận sau thuế tăng từ 80 tỷ lên 85 tỷ (+6,25%). Một tin “đề xuất” mà giá đã tăng 20% là đang kỳ vọng quá xa.</p>

<div class="ex"><b>✍ Thực hành 30 phút:</b>
<ol>
  <li>Viết 5 câu tóm tắt trạng thái nâng hạng hiện tại dựa trên tin mới nhất (ghi rõ nguồn và ngày).</li>
  <li>Tìm 1 tin chính sách trong tháng (tiền tệ hoặc tài khóa). Trả lời 3 câu hỏi ở mục 4.</li>
  <li>Xác định trong watchlist mã nào hưởng lợi/bất lợi từ chính sách đó.</li>
</ol>
<p>Kết quả mong đợi: 1 đoạn tóm tắt có nguồn, 1 bảng phân tích tin chính sách.</p></div>

<div class="key"><b>📌 Ghi nhớ:</b><ul>
  <li>Xếp hạng thị trường quyết định nhiều quỹ quốc tế có được đầu tư vào Việt Nam hay không.</li>
  <li>Nâng hạng là câu chuyện dài hạn; giá thường phản ánh trước kỳ vọng.</li>
  <li>Tiền tệ (NHNN) và tài khóa (Chính phủ) tác động đến các nhóm ngành khác nhau.</li>
  <li>Với tin chính sách: đã ban hành chưa, hiệu lực khi nào, tác động bao nhiêu?</li>
</ul></div>
`,
  quiz: [
    { q: "Vì sao nâng hạng thị trường có thể thu hút dòng vốn?", options: ["Vì thuế giao dịch giảm về 0", "Vì nhiều quỹ chỉ được đầu tư vào thị trường mới nổi trở lên", "Vì cổ phiếu tự động tăng giá", "Vì NHNN mua cổ phiếu"], answer: 1, explain: "Điều lệ quỹ và chỉ số theo dõi quyết định phạm vi đầu tư." },
    { q: "Giảm VAT và đẩy mạnh đầu tư công thuộc chính sách:", options: ["Tiền tệ", "Tài khóa", "Tỷ giá", "Tín dụng"], answer: 1, explain: "Thuế và chi ngân sách là công cụ tài khóa." },
    { q: "Thuế TNDN giảm từ 20% xuống 15%, lợi nhuận trước thuế 200 tỷ. Lợi nhuận sau thuế tăng:", options: ["10 tỷ", "20 tỷ", "30 tỷ", "5 tỷ"], answer: 0, explain: "160 tỷ → 170 tỷ, tăng 10 tỷ (+6,25%)." }
  ]
},

{
  id: "w04-6", week: 4, day: 6, minutes: 240,
  title: "Thực hành: Tổng kết tháng 1",
  summary: "Viết báo cáo tổng kết tháng đầu tiên: kiến thức, thói quen, watchlist và bức tranh vĩ mô.",
  body: `
<h3>Bài tập lớn (2,5 giờ)</h3>
<h4>Phần A – Bức tranh thị trường 4 tuần (60 phút)</h4>
<table>
  <tr><th>Chỉ tiêu</th><th>Đầu tháng</th><th>Cuối tháng</th><th>Thay đổi</th><th>Nhận xét</th></tr>
  <tr><td>VN-Index</td><td></td><td></td><td></td><td></td></tr>
  <tr><td>Thanh khoản HOSE bình quân/phiên</td><td></td><td></td><td></td><td></td></tr>
  <tr><td>Khối ngoại (lũy kế tháng)</td><td colspan="3"></td><td></td></tr>
  <tr><td>Lãi suất tiết kiệm 12 tháng</td><td></td><td></td><td></td><td></td></tr>
  <tr><td>Tỷ giá USD/VND</td><td></td><td></td><td></td><td></td></tr>
  <tr><td>CPI (so với cùng kỳ)</td><td></td><td></td><td></td><td></td></tr>
</table>
<h4>Phần B – Watchlist sau 1 tháng (60 phút)</h4>
<table>
  <tr><th>Mã</th><th>Giá đầu</th><th>Giá cuối</th><th>% thay đổi</th><th>So với VN-Index</th><th>Sự kiện chính trong tháng</th></tr>
  <tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>
</table>
<p><b>Ví dụ một dòng:</b> Mã giả định AAX: 24,50 → 26,20, tức (26,20 − 24,50) ÷ 24,50 = <b>+6,9%</b>. VN-Index cùng kỳ +2,1% → AAX vượt chỉ số 4,8 điểm %. Sự kiện: công bố lợi nhuận quý tăng 25% YoY.</p>
<p><b>Ví dụ tính trung bình watchlist:</b> Nếu 10 mã thay đổi lần lượt +6,9%, −3,2%, +1,0%, +4,5%, −1,8%, +0,5%, +2,2%, −5,0%, +3,1%, +0,8% → trung bình = 9,0% ÷ 10 = <b>+0,9%</b>, thấp hơn VN-Index (+2,1%). Câu hỏi: vì sao? (Có thể vì vài mã vốn hóa lớn kéo chỉ số.)</p>
<figure class="fig"><svg viewBox="0 0 640 250" role="img" aria-label="Biểu đồ cột thay đổi giá 10 mã watchlist so với VN-Index">
  <line x1="40" y1="130" x2="620" y2="130" style="stroke:var(--muted);stroke-width:1"/>
  <text x="34" y="134" text-anchor="end" style="fill:var(--muted);font-size:10px">0%</text>
  <rect x="55" y="47.2" width="36" height="82.8" style="fill:var(--up)"/>
  <text x="73" y="42.2" text-anchor="middle" style="fill:var(--text);font-size:10px">+6,9</text>
  <text x="73" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M1</text>
  <rect x="111" y="130.0" width="36" height="38.4" style="fill:var(--down)"/>
  <text x="129" y="181.4" text-anchor="middle" style="fill:var(--text);font-size:10px">-3,2</text>
  <text x="129" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M2</text>
  <rect x="167" y="118.0" width="36" height="12.0" style="fill:var(--up)"/>
  <text x="185" y="113.0" text-anchor="middle" style="fill:var(--text);font-size:10px">+1</text>
  <text x="185" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M3</text>
  <rect x="223" y="76.0" width="36" height="54.0" style="fill:var(--up)"/>
  <text x="241" y="71.0" text-anchor="middle" style="fill:var(--text);font-size:10px">+4,5</text>
  <text x="241" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M4</text>
  <rect x="279" y="130.0" width="36" height="21.6" style="fill:var(--down)"/>
  <text x="297" y="164.6" text-anchor="middle" style="fill:var(--text);font-size:10px">-1,8</text>
  <text x="297" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M5</text>
  <rect x="335" y="124.0" width="36" height="6.0" style="fill:var(--up)"/>
  <text x="353" y="119.0" text-anchor="middle" style="fill:var(--text);font-size:10px">+0,5</text>
  <text x="353" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M6</text>
  <rect x="391" y="103.6" width="36" height="26.4" style="fill:var(--up)"/>
  <text x="409" y="98.6" text-anchor="middle" style="fill:var(--text);font-size:10px">+2,2</text>
  <text x="409" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M7</text>
  <rect x="447" y="130.0" width="36" height="60.0" style="fill:var(--down)"/>
  <text x="465" y="203.0" text-anchor="middle" style="fill:var(--text);font-size:10px">-5</text>
  <text x="465" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M8</text>
  <rect x="503" y="92.8" width="36" height="37.2" style="fill:var(--up)"/>
  <text x="521" y="87.8" text-anchor="middle" style="fill:var(--text);font-size:10px">+3,1</text>
  <text x="521" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M9</text>
  <rect x="559" y="120.4" width="36" height="9.6" style="fill:var(--up)"/>
  <text x="577" y="115.4" text-anchor="middle" style="fill:var(--text);font-size:10px">+0,8</text>
  <text x="577" y="222" text-anchor="middle" style="fill:var(--muted);font-size:11px">M10</text>
  <line x1="40" y1="104.8" x2="620" y2="104.8" style="stroke:var(--accent);stroke-width:1.5;stroke-dasharray:6 4"/>
  <text x="618" y="99" text-anchor="end" style="fill:var(--accent);font-size:11px">VN-Index +2,1%</text>
  <text x="320" y="244" text-anchor="middle" style="fill:var(--muted);font-size:11px">Số liệu minh họa: % thay đổi trong tháng của 10 mã watchlist (M1–M10)</text>
</svg><figcaption>Hình: Biểu đồ cột giúp thấy ngay mã nào vượt (cao hơn đường nét đứt) hay kém VN-Index trong tháng.</figcaption></figure>
<h4>Phần C – Tự đánh giá thói quen (30 phút)</h4>
<table>
  <tr><th>Thói quen</th><th>Số ngày đạt / tổng</th><th>Ghi chú</th></tr>
  <tr><td>Đọc tin 20 phút + nhật ký</td><td>… / 20</td><td></td></tr>
  <tr><td>Học lý thuyết 70 phút</td><td>… / 20</td><td></td></tr>
  <tr><td>Thực hành 30 phút</td><td>… / 20</td><td></td></tr>
  <tr><td>Đọc sách cuối tuần</td><td>… / 8 buổi</td><td></td></tr>
</table>
<p><b>Ví dụ:</b> Đọc tin đạt 17/20 ngày = 85%; thực hành đạt 12/20 = 60% → thực hành là điểm yếu, tháng 2 cần đặt lịch cố định (ví dụ 21:00–21:30 mỗi tối).</p>
<p><b>Tiêu chí tự đánh giá:</b> ✓ Bảng A, B, C điền đủ; ✓ Có ít nhất 3 nhận xét rút ra từ dữ liệu của chính bạn; ✓ Có 2–3 mục tiêu cụ thể, đo được cho tháng 2.</p>

<h3>Đọc sách (1,5 giờ)</h3>
<p>Hoàn thành phần còn lại bạn muốn đọc của “Nhà đầu tư thông minh” (có thể đọc lướt các phần quá kỹ thuật). Sau đó viết lại bằng lời của bạn 3 ý tưởng lớn: <b>đầu tư vs đầu cơ</b>, <b>Ngài Thị Trường</b>, <b>biên an toàn</b>.</p>
<p><b>Ví dụ cách viết:</b> “Biên an toàn: mình chỉ mua khi giá thấp hơn nhiều so với giá trị mình ước tính, vì mình là người mới và ước tính của mình chắc chắn có sai sót. Ví dụ ước tính 30.000đ thì chỉ cân nhắc mua quanh 21.000–24.000đ.”</p>
<p><b>Câu hỏi tự trả lời:</b> (1) Ý tưởng nào thay đổi suy nghĩ của bạn nhiều nhất? (2) Bạn sẽ áp dụng nó vào lộ trình tháng 4–6 như thế nào? (3) Điều gì trong sách bạn chưa đồng ý hoặc chưa hiểu?</p>
`,
  quiz: [
    { q: "Mã tăng từ 20.000đ lên 21.000đ, VN-Index tăng 3%. Mã này so với chỉ số:", options: ["Vượt 2 điểm %", "Kém 2 điểm %", "Bằng chỉ số", "Vượt 5 điểm %"], answer: 0, explain: "(21.000 − 20.000) ÷ 20.000 = 5%; 5% − 3% = vượt 2 điểm %." },
    { q: "Mục tiêu nào được viết tốt nhất (cụ thể, đo được)?", options: ["Tháng sau học chăm hơn", "Thực hành 30 phút ít nhất 18/20 ngày, lúc 21:00 mỗi tối", "Cố gắng hiểu thị trường", "Đọc thêm sách"], answer: 1, explain: "Mục tiêu tốt có con số và thời điểm cụ thể." }
  ]
},

{
  id: "w04-7", week: 4, day: 7, minutes: 240,
  title: "Ôn tập tháng 1",
  summary: "Hệ thống lại toàn bộ kiến thức tháng 1 và kiểm tra bằng 10 câu hỏi trước khi bước sang phân tích cơ bản.",
  body: `
<h3>Đọc sách (1,5 giờ)</h3>
<p>Đọc lại các ghi chép về “Nhà đầu tư thông minh” và chọn 1 ý tưởng để viết thành “nguyên tắc cá nhân” dán ở nơi dễ thấy.</p>
<p><b>Ví dụ nguyên tắc:</b> “Tôi không mua cổ phiếu chỉ vì giá đang tăng. Trước mỗi lệnh mua, tôi viết ra được công ty kiếm tiền thế nào và vì sao giá hiện tại hợp lý.” Bạn có thể bắt đầu đọc lướt phần mở đầu cuốn sách tháng 2 “Cổ phiếu thường, lợi nhuận phi thường” (Philip Fisher).</p>

<h3>Ôn tập (1 giờ)</h3>
<figure class="fig"><svg viewBox="0 0 640 260" role="img" aria-label="Sơ đồ tóm tắt bốn tuần của tháng 1">
  <rect x="10" y="20" width="145" height="180" rx="10" style="fill:var(--card);stroke:var(--accent);stroke-width:2"/>
  <rect x="167" y="20" width="145" height="180" rx="10" style="fill:var(--card);stroke:var(--up);stroke-width:2"/>
  <rect x="324" y="20" width="145" height="180" rx="10" style="fill:var(--card);stroke:var(--c2);stroke-width:2"/>
  <rect x="481" y="20" width="149" height="180" rx="10" style="fill:var(--card);stroke:var(--c3);stroke-width:2"/>
  <text x="82" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Tuần 1</text>
  <text x="82" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">Thị trường</text>
  <text x="82" y="90" text-anchor="middle" style="fill:var(--text);font-size:11px">Sàn, chỉ số</text>
  <text x="82" y="110" text-anchor="middle" style="fill:var(--text);font-size:11px">Phiên, lệnh</text>
  <text x="82" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">Trần/sàn, bước giá</text>
  <text x="82" y="150" text-anchor="middle" style="fill:var(--text);font-size:11px">T+2, phí, thuế</text>
  <text x="239" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Tuần 2</text>
  <text x="239" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">Công cụ</text>
  <text x="239" y="90" text-anchor="middle" style="fill:var(--text);font-size:11px">Bảng giá, màu</text>
  <text x="239" y="110" text-anchor="middle" style="fill:var(--text);font-size:11px">Dư mua/dư bán</text>
  <text x="239" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">App, giá vốn</text>
  <text x="239" y="150" text-anchor="middle" style="fill:var(--text);font-size:11px">Tra cứu, watchlist</text>
  <text x="396" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Tuần 3</text>
  <text x="396" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vĩ mô 1</text>
  <text x="396" y="90" text-anchor="middle" style="fill:var(--text);font-size:11px">Nhật ký thị trường</text>
  <text x="396" y="110" text-anchor="middle" style="fill:var(--text);font-size:11px">Lãi suất, NHNN</text>
  <text x="396" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">Tỷ giá, CPI</text>
  <text x="396" y="150" text-anchor="middle" style="fill:var(--text);font-size:11px">GDP, chu kỳ</text>
  <text x="555" y="45" text-anchor="middle" style="fill:var(--text);font-size:13px;font-weight:600">Tuần 4</text>
  <text x="555" y="62" text-anchor="middle" style="fill:var(--muted);font-size:11px">Vĩ mô 2</text>
  <text x="555" y="90" text-anchor="middle" style="fill:var(--text);font-size:11px">Khối ngoại, ETF</text>
  <text x="555" y="110" text-anchor="middle" style="fill:var(--text);font-size:11px">Tâm lý, thanh khoản</text>
  <text x="555" y="130" text-anchor="middle" style="fill:var(--text);font-size:11px">Mùa KQKD quý</text>
  <text x="555" y="150" text-anchor="middle" style="fill:var(--text);font-size:11px">Quyền, nâng hạng</text>
  <rect x="120" y="215" width="400" height="34" rx="17" style="fill:var(--accent);fill-opacity:0.2;stroke:var(--accent)"/>
  <text x="320" y="237" text-anchor="middle" style="fill:var(--text);font-size:12px;font-weight:600">Tháng 2 → Phân tích cơ bản: chọn cổ phiếu tốt</text>
</svg><figcaption>Hình: Bốn khối kiến thức tháng 1 là nền tảng để bước sang phân tích doanh nghiệp.</figcaption></figure>
<p><b>Tự giải thích không nhìn tài liệu (mỗi câu kèm 1 ví dụ số):</b></p>
<ul>
  <li>Trần/sàn của mã HNX có TC 15.000đ? (16.500đ / 13.500đ)</li>
  <li>Mua 300 cp giá 40.000đ, bán 43.000đ, phí 0,15%, thuế 0,1%: lãi ròng? (900.000 − 18.000 − 19.350 − 12.900 = 849.750đ)</li>
  <li>Lãi suất tăng tác động đến định giá cổ phiếu thế nào? (E/P phải cao hơn → giá giảm khi EPS không đổi)</li>
  <li>Giá 45.000đ, cổ tức cổ phiếu 50%: giá TC mới? (30.000đ)</li>
  <li>Lợi nhuận Q này 90 tỷ, cùng kỳ 75 tỷ, quý trước 120 tỷ: YoY và QoQ? (+20%, −25%)</li>
</ul>

<h3>Tổng kết tuần (1 giờ)</h3>
<p><b>Checklist tháng 1:</b></p>
<ul>
  <li>☐ Đã có tài khoản chứng khoán, bật bảo mật, không đăng ký margin</li>
  <li>☐ Watchlist 10 mã đa ngành, có lý do, đã phân loại theo vĩ mô</li>
  <li>☐ Nhật ký thị trường đều đặn</li>
  <li>☐ 2 báo cáo: “Thị trường tuần này” và “Tổng kết tháng 1”</li>
  <li>☐ Đọc xong (hoặc gần xong) “Nhà đầu tư thông minh”</li>
  <li>☐ Đánh dấu hoàn thành các mục tháng 1 trong tab Lộ trình</li>
</ul>
<p><b>Câu hỏi phản tư:</b> Điều gì bạn hiểu sai trước khi bắt đầu và giờ đã hiểu đúng? Phần nào còn mơ hồ nhất? Bạn có thấy mình bị “Ngài Thị Trường” tác động trong tháng qua không?</p>
<p><b>Chuẩn bị tháng 2:</b> Tải sẵn báo cáo tài chính năm gần nhất của 2 doanh nghiệp lớn trong watchlist (file PDF từ website công ty hoặc CafeF/Vietstock). Tuần 5 sẽ học đọc báo cáo kết quả kinh doanh và bảng cân đối kế toán.</p>

<h3>Dự phòng (30 phút)</h3>
<p>Làm lại các câu sai trong quiz của 4 tuần, hoặc hoàn thiện báo cáo tổng kết tháng.</p>
`,
  quiz: [
    { q: "Cổ phiếu HNX có TC 15.000đ. Giá trần:", options: ["16.050đ", "16.500đ", "17.250đ", "15.700đ"], answer: 1, explain: "HNX ±10%: 15.000 × 1,1 = 16.500đ." },
    { q: "Mua thứ 5 (không có ngày lễ). Ngày cổ phiếu về tài khoản:", options: ["Thứ 6", "Thứ 7", "Thứ 2 tuần sau", "Thứ 3 tuần sau"], answer: 2, explain: "T+2 tính ngày làm việc: thứ 6 (T+1), thứ 2 (T+2)." },
    { q: "Lệnh nào người mới nên ưu tiên dùng?", options: ["MTL", "ATO", "LO", "ATC"], answer: 2, explain: "LO giúp kiểm soát giá." },
    { q: "Dư bán: 500 cp giá 20,00 và 1.500 cp giá 20,10. Mua LO 1.000 cp giá 20,10, giá trung bình:", options: ["20.000đ", "20.050đ", "20.100đ", "20.075đ"], answer: 1, explain: "(500 × 20.000 + 500 × 20.100) ÷ 1.000 = 20.050đ." },
    { q: "EPS 3.000đ, giá 50.000đ, lãi tiết kiệm 6%. E/P so với tiết kiệm:", options: ["E/P 6%, bằng tiết kiệm", "E/P 16,7%, cao hơn", "E/P 3%, thấp hơn", "Không so sánh được"], answer: 0, explain: "3.000 ÷ 50.000 = 6%, bằng lãi tiết kiệm → cổ phiếu chưa hấp dẫn hơn về lợi suất." },
    { q: "VND mất giá mạnh, nhóm nào thường bất lợi?", options: ["Xuất khẩu thủy sản", "Doanh nghiệp nợ nhiều bằng USD", "Xuất khẩu phần mềm", "Doanh nghiệp không liên quan ngoại tệ"], answer: 1, explain: "Nợ USD quy đổi tăng → lỗ tỷ giá." },
    { q: "Lạm phát 5%, lãi tiết kiệm 4%. Lãi suất thực:", options: ["9%", "1%", "−1%", "4%"], answer: 2, explain: "4% − 5% ≈ −1%: gửi tiết kiệm mất sức mua." },
    { q: "Quỹ ETF 3.000 tỷ giảm tỷ trọng mã X từ 6% xuống 4%. Quỹ bán:", options: ["60 tỷ", "120 tỷ", "180 tỷ", "30 tỷ"], answer: 0, explain: "3.000 tỷ × 2% = 60 tỷ đồng." },
    { q: "Giá 28.000đ, cổ tức tiền 8%. Giá TC ngày GDKHQ:", options: ["27.200đ", "25.760đ", "26.000đ", "27.920đ"], answer: 0, explain: "8% mệnh giá = 800đ → 28.000 − 800 = 27.200đ." },
    { q: "Lợi nhuận Q4 tăng 90% so với Q3 nhưng chỉ tăng 12% so với Q4 năm trước. Con số nào phản ánh tốt hơn tăng trưởng của doanh nghiệp bán lẻ có mùa vụ?", options: ["QoQ +90%", "YoY +12%", "Cả hai như nhau", "Không con số nào"], answer: 1, explain: "YoY loại bỏ yếu tố mùa vụ." }
  ]
}
);
