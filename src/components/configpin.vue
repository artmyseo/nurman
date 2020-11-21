<template>
    <div id="app">


        <div>
            <div class="blockquip" v-bind:class="{'razbivkipgorblock': raspakselected == 234456, 'razbivkipvertblock': raspakselected == 353535, 'stolraskkipblock': raspakselected == 627189, 'nonequip': raspakselected == 0}">


                <div class="razbivkipgorblock">
                    <!--Устройство разбивания прессованных кип горизонтальное-->

                    <div class="block-equip-line">
                        <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><img class="testimg_2" src="/wp-content/uploads/2019/01/Дробилка1.jpg"></a></div>
                        <div style="float: left; margin-left: 20px; width: 73%;">
                            <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><strong>Устройство разбивания прессованных кип горизонтальное</strong></a></span>
                                <span style="color: #000000; text-align: justify;">Используется для измельчения большинства твердых тонкостенных отходов до товарного размера частиц.</span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/drobilka/">Подробнее...</a></p>
                        </div>
                    </div>
                    <!--/Устройство разбивания прессованных кип горизонтальное-->

                </div>
                <div class="razbivkipvertblock">

                    <!--Устройство разбивания прессованных кип вертикальное-->
                    <div class="block-equip-line">
                        <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><img class="testimg_2" src="/wp-content/uploads/2019/01/Дробилка1.jpg"></a></div>
                        <div style="float: left; margin-left: 20px; width: 73%;">
                            <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><strong>Устройство разбивания прессованных кип вертикальное</strong></a></span>
                                <span style="color: #000000; text-align: justify;">Используется для измельчения большинства твердых тонкостенных отходов до товарного размера частиц.</span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/drobilka/">Подробнее...</a></p>

                        </div>
                    </div>
                    <!--/Устройство разбивания прессованных кип вертикальное-->

                </div>
                <div class="stolraskkipblock">

                    <!--Стол для раскрытия кип-->

                    <div class="block-equip-line">
                        <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/shreder/"><img class="testimg_2" src="/wp-content/uploads/2019/01/Четырехроторный-шредер1.1.jpg"></a></div>
                        <div style="float: left; margin-left: 20px; width: 73%;">
                            <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Стол для раскрытия кип</a></span>
                                <span style="color: #000000; text-align: justify;">Используется для предварительного дробления в крупную фракцию,&nbsp; обеспечения таким образом щадящего режима работы дробилки и снижения скорости износа ее рабочих органов...<!-- Предотвращает попадание в дробилку крупных твердых включений. --></span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Подробнее...</a></p>

                        </div>
                    </div>
                    <!--/Стол для раскрытия кип-->

                </div>
            </div>

        </div>




        <div class="nonequip" v-bind:class="{'aggotdirblock': nameOnly.includes('Агрегат отдирания этикетки') }">
            <h3>Агрегат отдирания этикетки </h3>
        </div>



        <div>
            <div class="blockquip" v-bind:class="{'drobvarangblock': drobselected == 36, 'drobnurmanblock': drobselected == 111, 'shredblock': drobselected == 21}">

                <div style="clear: both; width: 100%; height: 1px;">&nbsp;</div>
                <div class="liniyaflexsel"><p>Выберите измельчитель:&nbsp;&nbsp;&nbsp;</p>


                    <select v-model="drobselected" class="wpcf7-form-control wpcf7-select liniyasel">
                        <option v-for="prod in drobilka"
                                name="products[]"
                                :id="prod.name"
                                :key="prod.name"
                                v-bind:value="prod.price"
                        >{{prod.name}}</option>
                    </select>

                </div>



                <div class="drobvarangblock">
                    <!--ДРОБИЛКА VARANG-->

                    <div class="block-equip-line">
                        <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><img class="testimg_2" src="/wp-content/uploads/2019/01/Дробилка1.jpg"></a></div>
                        <div style="float: left; margin-left: 20px; width: 73%;">
                            <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><strong>Дробилка Varang</strong></a></span>
                                <span style="color: #000000; text-align: justify;">Используется для измельчения большинства твердых тонкостенных отходов до товарного размера частиц.</span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/drobilka/">Подробнее...</a></p>
                        </div>
                    </div>
                    <!--/ДРОБИЛКА-->

                </div>
                <div class="drobnurmanblock">

                    <!--ДРОБИЛКА NURMAN-->
                    <div class="block-equip-line">
                        <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><img class="testimg_2" src="/wp-content/uploads/2019/01/Дробилка1.jpg"></a></div>
                        <div style="float: left; margin-left: 20px; width: 73%;">
                            <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><strong>Дробилка Nurman</strong></a></span>
                                <span style="color: #000000; text-align: justify;">Используется для измельчения большинства твердых тонкостенных отходов до товарного размера частиц.</span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/drobilka/">Подробнее...</a></p>

                        </div>
                    </div>
                    <!--/ДРОБИЛКА NURMAN-->

                </div>
                <div class="shredblock">

                    <!--ШРЕДЕР-->

                    <div class="block-equip-line">
                        <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/shreder/"><img class="testimg_2" src="/wp-content/uploads/2019/01/Четырехроторный-шредер1.1.jpg"></a></div>
                        <div style="float: left; margin-left: 20px; width: 73%;">
                            <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Измельчитель роторный, низкоскоростной ("Шредер")</a></span>
                                <span style="color: #000000; text-align: justify;">Используется для предварительного дробления в крупную фракцию,&nbsp; обеспечения таким образом щадящего режима работы дробилки и снижения скорости износа ее рабочих органов...<!-- Предотвращает попадание в дробилку крупных твердых включений. --></span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Подробнее...</a></p>

                        </div>
                    </div>
                    <!--/ШРЕДЕР-->

                </div>
            </div>

        </div>



        {{ drobselected }}

        <div class="nonequip" v-bind:class="{'peregruzshneckblock': nameOnly.includes('Перегрузчик шнековый') }">
            <h3>Перегрузчик шнековый</h3>
        </div>

        <div class="nonequip" v-bind:class="{'universalmojkablock': nameOnly.includes('Универсальная мойка') }">
            <h3>Универсальная мойка</h3>
        </div>


        <div class="blockquip" v-bind:class="{'frikcionbarabanblock': mojkiselected == 555.123, 'frikcionperegruzblock': mojkiselected == 666, 'frikcionperegruzgilzablock': mojkiselected == 777.11234, 'frikcionrotorblock': mojkiselected == 888,}">

            <div style="clear: both; width: 100%; height: 1px;">&nbsp;</div>
            <div class="liniyaflexsel"><p>Выберите моечное оборудование::&nbsp;&nbsp;&nbsp;</p>
                <select v-model="mojkiselected">
                    <option v-for="prod in mojki"
                            name="products[]"
                            :id="prod.name"
                            :key="prod.name"
                            v-bind:value="prod.price"
                    >{{prod.name}}</option>
                </select>
                {{ mojkiselected }}
            </div>

            <div class="frikcionbarabanblock">
                <!--Фрикционное моечно-сушильное устройство (барабанного типа)-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><a href="/frikcionnaya-moyka-polimerov/"><img class="testimg_2" src="/wp-content/uploads/2019/02/moechno-sushilnoe-2.jpg"></a></div>
                    <div style="float: left; margin-left: 20px; width: 73%;">
                        <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><strong>Фрикционное моечно-сушильное устройство (барабанного типа)</strong></a></span>
                            <span style="color: #000000; text-align: justify;">Устройство может применяться и как сушильное, и как моющее. Выраженная аэродинамическая составляющая наделят его прекрасной транспортной способностью, которая позволяет перемещать перерабатываемый материал на значительные расстояния. Обладает самым высокоинтенсивным центробежным воздействием, что позволяет эффективно отделять от перерабатываемого материала имеющиеся на нем твердые и жидкие включения. Может оснащаться баком для циклического использования воды и моющих средств, системами нагрева и очистки воды от механических загрязнений, оборудованием для автоматической выгрузки загрязнений и другим опциональным оборудованием.</span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/drobilka/">Подробнее...</a></p>
                    </div>
                </div>
                <!--/Фрикционное моечно-сушильное устройство (барабанного типа)-->

            </div>
            <div class="frikcionperegruzblock">
                <!--Фрикционный моечно-сушильный перегрузчик-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/frikcion-peregruz/"><img class="testimg_2" src="/wp-content/uploads/2019/02/frikcion-peregruz.jpg"></a></div>
                    <div style="float: left; margin-left: 20px; width: 73%;">
                        <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/drobilka/"><strong>Фрикционный моечно-сушильный перегрузчик</strong></a></span>
                            <span style="color: #000000; text-align: justify;">Является одним из наиболее популярных у переработчиков универсальных устройств для отмывания, осушения и перегрузки самых различных полимеров. Может выполнять роль как основного моечного устройства, так и вспомогательного устройства в паре с оборудованием для отмывки сложных загрязнений. Достаточен для решения многих задач по помывке.</span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/drobilka/">Подробнее...</a></p>

                    </div>
                </div>
                <!--/Фрикционный моечно-сушильный перегрузчик-->
            </div>
            <div class="frikcionperegruzgilzablock">
                <!--Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/frikcionniy-peregruzchik-s-gilzoy/"><img class="testimg_2" src="/wp-content/uploads/2019/02/frikcion-peregruz-gilz.jpg"></a></div>
                    <div style="float: left; margin-left: 20px; width: 73%;">
                        <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)</a></span>
                            <span style="color: #000000; text-align: justify;">Используется для предварительного дробления в крупную фракцию,&nbsp; обеспечения таким образом щадящего режима работы дробилки и снижения скорости износа ее рабочих органов...<!-- Предотвращает попадание в дробилку крупных твердых включений. --></span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Подробнее...</a></p>

                    </div>
                </div>
                <!--/Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)-->
            </div>
            <div class="frikcionrotorblock">
                <!--Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)-->

                <div class="block-equip-line">
                    <div class="block-equip-line-img"><a href="//nur-man.ru/oborudovanie/agregatyi/frikcionniy-peregruzchik-s-gilzoy/"><img class="testimg_2" src="/wp-content/uploads/2019/02/frikcion-peregruz-gilz.jpg"></a></div>
                    <div style="float: left; margin-left: 20px; width: 73%;">
                        <p class="text-equip"><span class="title-equip"><a href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Фрикционная мойка (роторного типа)</a></span>
                            <span style="color: #000000; text-align: justify;">Используется для предварительного дробления в крупную фракцию,&nbsp; обеспечения таким образом щадящего режима работы дробилки и снижения скорости износа ее рабочих органов...<!-- Предотвращает попадание в дробилку крупных твердых включений. --></span><a class="equip-more-link" href="//nur-man.ru/oborudovanie/agregatyi/shreder/">Подробнее...</a></p>

                    </div>
                </div>
                <!--/Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)-->

            </div>
        </div>

        <br>

        <div class="nonequip" v-bind:class="{'flottonblock': nameOnly.includes('Ванна флотации для тонущих полимеров') }">
            <h3>Ванна флотации для тонущих полимеров </h3>
        </div>

        <div v-for="prod in flot"
             :key="prod.name"
        >

            <input type="checkbox"
                   name="products[]"
                   :id="prod.name"
                   :value="prod.price"
                   @change="selected(prod)"> {{prod.name}}
        </div>

        <div class="nonequip" v-bind:class="{'ustzamachblock': nameOnly.includes('Установка замачивания') }">
            <h3>Установка замачивания</h3>
        </div>

        <h3>Дополнительное оборудование</h3>
        <select v-model="raspakselected">
            <option v-for="prod in raspak"
                    name="products[]"
                    :id="prod.name"
                    :key="prod.name"
                    v-bind:value="prod.price"
            >{{prod.name}}</option>
        </select>

        {{ raspakselected }}

        <br>

        <select v-model="ochistselected">
            <option v-for="prod in ochist"
                    name="products[]"
                    :id="prod.name"
                    :key="prod.name"
                    v-bind:value="prod.price"
            >{{prod.name}}</option>
        </select>

        {{ ochistselected }}

        <br>

        <div v-for="prod in dopoborud"
             :class="prod.name"
             :key="prod.name">

            <input type="checkbox"
                   name="products[]"
                   :id="prod.name"
                   :value="prod.price"
                   @change="selected(prod)"> {{prod.name}}
        </div>

        <br>
        <select v-model="drob2selected">
            <option v-for="prod in drobilka2"
                    name="products[]"
                    :id="prod.name"
                    :key="prod.name"
                    v-bind:value="prod.price"
            >{{prod.name}}</option>
        </select>

        {{ drob2selected }}
        <!--
            <hr>
            <pre>{{ selectedProds }}</pre>

            <hr>
            <pre>{{ nameOnly }}</pre>

            <hr>
            <pre>{{ className }}</pre>
         -->
        <hr>
        <p><span>total:</span> {{ sumprototal }}</p>

    </div>
</template>

<script>
    import gsap from "gsap";
    export default {
        name: "configpet",
        data: function() {
            return {
                tweenedNumber: 1666,
                drobilka: [
                    {name: "Дробилка. Серия Varang", price: "36", class: "drobvarangblock"},
                    {name: "Дробилка. Серия Nurman", price: "111", class: "drobnurmanblock"},
                    {name: "Шредер", price: "21", class: "shredblock"},
                ],
                drobselected: '111',
                mojkiselected: '555.123',
                mojki: [
                    {
                        name: "Фрикционное моечно-сушильное устройство (барабанного типа)",
                        price: "555.123",
                        class: "frikcionbarabanblock"
                    },
                    {name: "Фрикционный моечно-сушильный перегрузчик", price: "666", class: "frikcionperegruzblock"},
                    {
                        name: "Фрикционный моечно-сушильный перегрузчик (с перфорированной гильзой)",
                        price: "777.11234",
                        class: "frikcionperegruzgilzablock"
                    },
                    {name: "Фрикционная мойка (роторного типа)", price: "888", class: "frikcionrotorblock"}
                ],
                raspak: [
                    {name: "Выберите один из вариантов", price: "0",},
                    {name: "Устройство разбивания прессованных кип горизонтальное", price: "234456",},
                    {name: "Устройство разбивания прессованных кип вертикальное", price: "353535",},
                    {name: "Стол для раскрытия кип", price: "627189",},
                ],
                raspakselected: '0',

                flot: [
                    {name: "Ванна флотации для тонущих полимеров", price: "5555", class: "flottonblock"},
                ],
                ochist: [
                    {name: "Выберите один из вариантов", price: "0",},
                    {name: "Моющий грохот (малый)", price: "34567",},
                    {name: "Моющий грохот (Большой)", price: "44444",}
                ],
                ochistselected: '0',

                dopoborud: [
                    {name: "Агрегат отдирания этикетки", price: "5678",},
                    {name: "Перегрузчик шнековый", price: "6567",},
                    {name: "Универсальная мойка", price: "7897",},
                    {name: "Установка замачивания", price: "8910",}
                ],
                drobilka2: [
                    {name: "Выберите один из вариантов", price: "0",},
                    {name: "Дробилка. Серия Varang", price: "36",},
                    {name: "Дробилка. Серия Nurman", price: "111",},
                    {name: "Шредер", price: "21",},
                ],
                drob2selected: '0',


                selectedProds: [],
                nameOnly: [],
                calc: 0
            }
        },
        computed: {

            sumpro: function () {
                return 1000 + parseFloat(this.mojkiselected) + parseFloat(this.drobselected) + parseFloat(this.raspakselected) + parseFloat(this.ochistselected) + parseFloat(this.drob2selected) + parseFloat(this.calc)
            },

            sumprototal: function () {
                return this.tweenedNumber.toFixed(0);
            }

        },

        methods: {
            selected(prod) {
                if (event.target.checked){
                    this.selectedProds.push(prod);
                    this.nameOnly.push(prod.name);

                    this.calc += parseFloat(prod.price);
                } else {
                    var item = this.selectedProds.indexOf(prod);
                    this.selectedProds.splice(item, 1);

                    var index = this.nameOnly.indexOf(prod.name);
                    this.nameOnly.splice(index, 1);

                    this.calc -= parseFloat(prod.price);
                }
            }
        },
        watch: {
            sumpro: function(newValue) {
                gsap.to(this.$data, { duration: 0.5, tweenedNumber: newValue });
            }
        },
    }
</script>

<style scoped>

    .blockquip{
        width:100%;
        border: 1px solid #ccc;
        float:left;
    }

    .nonequip{
        display: none;
    }

    .drobvarangblock .drobnurmanblock, .drobvarangblock .shredblock {
        display: none;
    }

    .drobnurmanblock .drobvarangblock, .drobnurmanblock .shredblock {
        display: none;
    }

    .shredblock .drobnurmanblock,
    .shredblock .drobvarangblock {
        display: none;
    }

    .frikcionbarabanblock .frikcionperegruzblock,
    .frikcionbarabanblock .frikcionperegruzgilzablock,
    .frikcionbarabanblock .frikcionrotorblock {
        display: none;
    }

    .frikcionperegruzblock .frikcionbarabanblock,
    .frikcionperegruzblock .frikcionperegruzgilzablock,
    .frikcionperegruzblock .frikcionrotorblock {
        display: none;
    }

    .frikcionperegruzgilzablock .frikcionbarabanblock,
    .frikcionperegruzgilzablock .frikcionperegruzblock,
    .frikcionperegruzgilzablock .frikcionrotorblock {
        display: none;
    }

    .frikcionrotorblock .frikcionbarabanblock,
    .frikcionrotorblock .frikcionperegruzblock,
    .frikcionrotorblock .frikcionperegruzgilzablock {
        display: none;
    }

    .razbivkipgorblock .razbivkipvertblock,
    .razbivkipgorblock .stolraskkipblock{
        display: none;
    }

    .razbivkipvertblock .razbivkipgorblock,
    .razbivkipvertblock .stolraskkipblock{
        display: none;
    }

    .stolraskkipblock .razbivkipgorblock,
    .stolraskkipblock .razbivkipvertblock{
        display: none;
    }


    .flottonblock, .aggotdirblock, .peregruzshneckblock, .universalmojkablock, .ustzamachblock{
        width:100%;
        border: 1px solid #ccc;
        float:left;
        display: block;
    }



</style>