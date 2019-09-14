<template>
	<div>
		<h1 class="py-3">Slot report</h1>

		<div class="p-2" v-for="userReport of reports" v-bind:key="userReport.user_id">
			<h3>UserID: {{userReport.user_id}}</h3>

			<div class="p-1" v-for="walletReport in userReport" v-bind:key="walletReport.currency">
				<b-table striped hover :items="walletReport"></b-table>
			</div>
		</div>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				reports: [{
					user_id: 1,
					report: [{
						currency: "AMD",
						balance: 0,
						win: 0,
						lost: 0
					}]

				}, {
					user_id: 2,
					report: [{
						currency: "AMD",
						balance: 0,
						win: 0,
						lost: 0
					}]
				}, {
					user_id: 3,
					report: [{
						currency: "AMD",
						balance: 0,
						win: 0,
						lost: 0
					}]
				}]
			}
		},

		mounted() {
			this.reports.forEach((report) => {
				report.country = 'Armenia'
			})
		}
	}
</script>
