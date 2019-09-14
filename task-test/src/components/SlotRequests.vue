<template>
    <div>
        <h3 class="py-3">Requests Count: {{countRequests}}</h3>        
        <b-table striped hover :items="results"></b-table>
    </div>
</template>

<script>
    import _ from 'lodash'
    import axios from 'axios'

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
                return;
                const sum = _.random(100, 200);
                const randStatusIndex = _.random(0, 1)
                const user_id = _.random(4, 6);

                axios.post('http://localhost:8000/api/spin',{
                    user_id,
                    sum,
                    currency_id: _.random(1, 2)
                }).then(response => {
                    const { status, _status, user_id } = response.data
                    const rowVariant = _status === 'WIN' ? 'success': 'danger'

                    if (status === 'success') {
                        this.results.splice(0, 0, {
                            user_id,
                            status: _status,
                            bet: sum,
                            _rowVariant: rowVariant
                        })
                    } else {
                        console.log(response.data.reason);
                    }
                }).catch(result => {
                    console.log(result);
                })

                if (this.results.length > 10) {
                    this.results.pop();
                }
                this.countRequests++;
                window.localStorage.setItem('requestsCount', this.countRequests);
            }, 15);
        },

        beforeDestroy() {
            clearInterval(this.interval);
        }
    }
</script>
