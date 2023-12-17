<script>
	// import gralyphoLogo from '../Assets/products-visuels/gralyphoLogoWhite.png';
</script>

<header class="cust-bg-header">
	<nav class="navbar navbar-expand-lg">
		<div class="container-fluid">
			<a class="navbar-brand gralypho" href="https://gsap.com/pricing/#features-table"><img src=""alt="" class="gralypho-logo" />Gralypho</a>
			<button
				class="navbar-toggler toggle-button"
				type="button"
				data-bs-toggle="collapse"
				data-bs-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav">
					<li class="nav-item">
						<a
							class="nav-link active"
							aria-current="page"
							href="https://gsap.com/pricing/#features-table">Home</a
						>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="#sectionA">Features</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="https://gsap.com/pricing/#features-table">Pricing</a>
					</li>
					<li class="nav-item">
						<!-- <a class="nav-link disabled" aria-disabled="true">Disabled</a> -->
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style>
	.cust-bg-header {
		background-color: transparent;
		margin: 0px 0px;
		border-radius: 8px;
		padding: 0px;
		border-radius: 0px;
	}
	header a {
		color: white;
	}
	header a:hover {
		color: var(--colorA);
	}
	.gralypho {
		color: var(--colorC);
		font-size: 1em;
		font-weight: 300;
		font-family: Kanit;
		margin-left: 5px;
	}
	/* .gralypho-logo {
		height: 30px;
		width: 30px;
		margin-right: 10px;
		border-radius: 8px;
	} */
	.toggle-button:hover {
		background-color: var(--colorA);
		border-radius: 8px;
		border: none;
	}
</style>
