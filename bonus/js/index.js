/**
 * Milestone 1
Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse.
Le icone non hanno funzionalità ma sono solo presentazionali.

Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
 */

const app = new Vue({
    el: '#app',

    data: {
        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },	{
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        activeContact: 0,
        newMessage: '',
        newSearch: '',
    },

    methods: {
        /**
         * Sets active contact when clicking on one
         */
        contactClick(contactIndex) {
            this.activeContact = contactIndex;
        },

        /**
         * Adding new messages
         */
         addMessage() {
            if(this.newMessage !== '') {

                this.contacts[this.activeContact].messages.push(
                    {
                    text: this.newMessage,
                    status: 'sent',
                    date: this.getDate(),
                }
                );

                this.newMessage = '';

                this.botAnswer();

                this.$refs.messageInput.focus();
            }
        },

        /**
         * Generate automated response after sending a message
         */
        botAnswer() {
            setTimeout(() => {
                this.contacts[this.activeContact].messages.push(
                    {
                        text: 'Ok!',
                        status: 'received',
                        date: this.getDate(),
                    }
                )
            }, 1000);
        },

        /**
         * Getting current date and time 
         */
        getDate() {
            const now = dayjs().format('MM/DD/YYYY hh:mm:ss');
            return now;
        },

        /**
         * Search function
         */
        inputSearch() {
            this.contacts.forEach( (contact) => {
                if (!contact.name.toLowerCase().includes(this.newSearch.toLowerCase())) {
                    contact.visible = false;
                } else {
                    contact.visible = true;
                }
            });
        },
    }
});