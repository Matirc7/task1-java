const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            clients: [],
            client: {},
            json: [],
            name: "",
            lastName: "",
            email: "",
            id:undefined,
            inputFirstName:"",
            inputLastName:"",
            inputemail:"",
            idCliente:undefined,
            newClient:{},



        }
    },
    created() {
        this.cargarDatos()

    },
    methods: {

        cargarDatos() {
            axios.get("http://localhost:8080/clients")
                .then(response => {
                    this.json = response.data;
                    this.clients = response.data._embedded.clients;

                })
                .catch(error => console.log(error))
        },
        captureDateClient() {

            if (this.name !== "" && this.lastName !== "" && this.email !== "") {

                this.client = {
                    firstName: this.name,
                    lastName: this.lastName,
                    email: this.email,
                }

                this.postClients(this.client)
            } else{
                Swal.fire({
                    icon: 'error',
                    text: 'Complete todos los campos',
                })
            }
        },
        deleteClient(id){
            let idClient = id._links.self.href
            axios.delete(idClient)
            .then(() => this.cargarDatos())
            
        },

        postClients(cliente) {
            axios.post("http://localhost:8080/clients", cliente)
                .then(() => this.cargarDatos())

        },

        editCliente(client) {
            this.idCliente = client._links.self.href
            this.inputFirstName = client.firstName
            this.inputLastName = client.lastName
            this.inputemail = client.email
        },
        confirmarModificacion(){
            axios.put(this.idCliente , 
                
                newClient = {
                    firstName :this.inputFirstName,
                    lastName :this.inputLastName,
                    email : this.inputemail
                })
            .then(() => this.cargarDatos())
        },
    },




})
app.mount("#app")
