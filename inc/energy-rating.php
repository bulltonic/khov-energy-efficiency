<div id="energy-calculator" class="section rating-section"><!-- BEGIN #energy-calculator -->

	<div class="container"><!-- BEGIN .container -->

		<div class="row"><!-- BEGIN .row -->

			<div class="col-sm-12 col-md-11 col-md-offset-1"><!-- BEGIN .col-sm-12 -->

				<div class="component rating-component vertical-orientation"><!-- BEGIN .rating-component -->

					<?php include ('range-components/range-plot.php'); ?>

					<div class="input-container range-input-container"><!-- BEGIN .input-container -->

						<div class="input-wrapper range-input-wrapper"><!-- BEGIN .input-wrapper -->

							<input type="range" min="0" max="150" step="1" value="70" data-orientation="vertical" data-range-slider>

						</div><!-- END .input-wrapper -->

						<div class="content-wrapper range-content-wrapper"><!-- BEGIN .content-wrapper -->

							<?php include ('range-components/range-content-block-one.php'); ?>

							<?php include ('range-components/range-content-block-two.php'); ?>

						</div><!-- END .content-wrapper -->

					</div><!-- END .input-container -->

				</div><!-- END .rating-component -->

			</div><!-- END .col-sm-12 -->

		</div><!-- END .row -->

		<div class="row"><!-- BEGIN .row -->

			<div class="component info-card-component"><!-- BEGIN .info-card-component -->
			
				<div class="col-sm-8"><!-- BEGIN .col-sm-8 -->
					
					<p>Information and slider developed by and provided with the permission of RESTNET<sup>&reg;</sup>. K.Hovnanian<sup>&reg;</sup> Homes is not responsible for the operation of the slider.</p>

				</div><!-- END .col-sm-8 -->

				<div class="col-sm-4"><!-- BEGIN .col-sm-4 -->

					<a href="#" class="button gray-color">Learn More What is HERS?</a>

				</div><!-- END .col-sm-4 -->

			</div><!-- END .info-card-component -->

		</div><!-- END .row -->

	</div><!-- END .container -->

</div><!-- END #energy-calculator -->