<template>
	<div>
		<h3 class="py-3">Requests Count: {{countRequests}}</h3>		
		<b-table striped hover :items="results"></b-table>
	</div>
</template>

<script>
	import _ from 'lodash'

	export default {
		data() {
			const countRequests = window.localStorage.getItem('requestsCount') || 0;
			return {
				countRequests,
				results: [
				]
			}
		},

		mounted() {
			this.interval = setInterval(() => {
				const sum = _.random(10, 100);
				const randStatusIndex = _.random(0, 1)
				const statuses = [
					{
						label: 'WIN',
						rowVariant: 'success'
					},
					{
						label: 'LOST',
						rowVariant: 'danger'
					},
				];

				const { label, rowVariant } = statuses[randStatusIndex];

				this.results.splice(0, 0, {
					status: label,
					bet: sum,
					_rowVariant: rowVariant
				});

				if (this.results.length > 10) {
					this.results.pop();
				}
				this.countRequests++;
				window.localStorage.setItem('requestsCount', this.countRequests);
			}, 1000);
		},

		beforeDestroy() {
			clearInterval(this.interval);
		}
	}
</script>
