export default {
    name: 'Saveplants',
    data() {
        return {
            count: 0
        }
    },
    template: `
    <div>
        <div class="account-save_plants">
            <div class="account-save_plants-wrapper">
                <div class="account-save_plants-cards">

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>


                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>

                    <div class="account-save_plants-card">
                        <div class="account-save_plants-imgDiv">
                            <img class="account-save_plants-img" src="../img/about-plants/Bromelia.jpg" alt="">
                        </div>

                        <div class="account-save_plants-caption">
                            <p class="account-save_plants-captionText">Монстера Деликатесная
                                (Monstera Deliciosa)</p>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    </div>
    
    `,



    mounted() {
        axios.get('scripts/php/plantsConnect.php')
        .then(response => {
            console.log(response);
        })
    }
}