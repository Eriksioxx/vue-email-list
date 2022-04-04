console.log('JS OK!');

const app = new Vue({
    el: '#app',
    data: {
        randomEmails: []
    },
    mounted() {
        for (let i = 0; i < 10; i++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                const result = response.data.response;
                this.randomEmails.push(result);
                console.log(result)
            })
        }
    }
})