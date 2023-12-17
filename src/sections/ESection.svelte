<script>
	import SpaceShip from '../Assets/png-gralypho/Saly-43.png';
        import Banner from '../Components/Banner.svelte';
</script>

<section class="E-section">
	<h1>Gralypho créer un service unique de produits numériques.</h1>
	<h2>
		Selon vos besoins, nous utiliserons Wix, ou wordpress, ou sqarspace, Shopify, woo Commerce (...).
	</h2>
	<img src={SpaceShip} alt="" class="space-ship" />
	<div class="halo"></div>
</section>

<Banner/>

<style>
	.E-section {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: auto;
		margin-top: 170px;
		height: 100%;
		font-size: 16px;
		background-color: var(--colorO);
	}
	.E-section h1 {
		grid-column: 2/8;
		grid-row: 1;
		font-family: epilogue;
		font-weight: 600;
		font-size: 2em;
		color: white;
	}
	.E-section h2 {
		grid-column: 2/8;
		grid-row: 1;
		margin-top: 150px;
		font-family: epilogue;
		font-weight: 300;
		font-size: 1.2em;
		color: var(--colorC);
	}
        .space-ship{
                grid-column: 8/12;
                height: 150px;
                width: 150px;
		transform: rotate(50deg);
		grid-row: 1;
		z-index: 1;
                
        }
		.halo {
		grid-column: 7/12;
		grid-row: 1;
		background-color: rgb(79, 68, 235);
		width: 100px;
		height: 100px;
		border-radius: 50%;
		filter: blur(30px);
		z-index: 0;
		margin-left: 70px;
		margin-top: 20px;
	}
		@media screen and (max-width: 768px) {
		.E-section {
			font-size: 10px;
		}
	}
</style>
