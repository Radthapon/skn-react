import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="">
        	<footer class="footer" id="menu-footer">
	<div class="footer_background"></div>
	<div class="container">
		<div class="row footer_row">
			<div class="col">
				<div class="footer_content">
					<div class="row">
						<div class="col-lg-3 col-md-6 col-sm-6 footer_col">
							
							<div class="footer_section footer_about">
								<div class="footer_logo_container">
									<a href="#">
										<div class="footer_logo_text"><img src="../logo-skn.png" width={150}/></div>
									</a>
								</div>
								
								<div class="footer_about_text">
									<p>We operate the business based on good governance  <br/>principles and quality production standards.</p>
								</div>
								

							</div>
						</div>
						<div class="col-lg-3 col-md-6 col-sm-6 footer_col">
						
							
							<div class="footer_section footer_contact">
								<div class="footer_title">Contact Us.</div>
								<div class="footer_contact_info">
									<ul>
										<li>Email: <a href="mailto: skn@kijchai.co.th">skn@kijchai.co.th</a></li>
										<li>Phone: 038 928 188</li>
										<li>99/9 Moo 7, Huayyang Subdistrict, Klaeng District, Rayong Province 21110.</li>
									</ul>
								</div>
							</div>
							
						</div>
						<div class="col-lg-6 col-md-12 col-sm-12 footer_col">
						
							<div class="footer_section footer_links">
								<div class="footer_title">แผนผังเว็บไซต์</div>
								<div class="footer_links_container">
									<ul>
										<li><a href="https://www.skn.co.th/index.php?homepage">Home</a></li>
										<li><a href="#">About Us</a>
											<ul class="sub">
												<li><a href="https://www.skn.co.th/index.php?chairman">Chairman’s Statement</a></li>
												<li><a href="https://www.skn.co.th/index.php?history">History</a></li>
												<li><a href="https://www.skn.co.th/index.php?vision">Vision and Mission</a></li>
												<li><a href="https://www.skn.co.th/index.php?organization">Organization Chart</a></li>
												<li><a href="https://www.skn.co.th/index.php?board">Board of Director & Management Team</a></li>
												<li><a href="https://www.skn.co.th/index.php?awards">Awards and certifications</a></li>
											</ul>
										</li>
										<li><a href="#">News & Activities</a>
											<ul class="sub">
												<li><a href="https://www.skn.co.th/index.php?set_announcement">SET Announcement</a></li>
												<li><a href="https://www.skn.co.th/index.php?news_update">News Update</a></li>
												<li><a href="https://www.skn.co.th/index.php?public">Public Relation</a></li>
												<li><a href="https://www.skn.co.th/index.php?news_clipping"> News Clipping</a></li>
												<li><a href="https://www.skn.co.th/index.php?press">Press Releases</a></li>
											</ul>
										</li>
										<li><a href="#">Sustainability</a>
											<ul class="sub">
												<li><a href="https://www.skn.co.th/index.php?corporate">Corporate Governance</a></li>
												<li><a href="https://www.skn.co.th/index.php?anti_corruption">Anti-corruption</a></li>
												<li><a href="https://www.skn.co.th/index.php?csr">CSR & Activities</a></li>
											</ul>
										</li>
										<li><a href="home.html">Investor Relations</a></li>
										<li><a href="https://www.skn.co.th/index.php?contact">Contact Us</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row copyright_row">
			<div class="col">
				<div class="container copyright d-flex flex-lg-row flex-column align-items-center justify-content-start">
					<div class="cr_text">&copy; <script>document.write(new Date().getFullYear());</script> All rights S.Kijchai Enterprise PCL.
						| <a href="https://www.skn.co.th/index.php?cookie_policy" class="a-cookies-policy">Cookies Notice</a>
						| <a href="https://www.skn.co.th/index.php?privacy_policy" class="a-cookies-policy">Privacy Policy</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	</footer>
    </section>
  )
}

export default Footer