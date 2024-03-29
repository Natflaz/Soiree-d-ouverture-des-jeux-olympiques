<template>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-12">
            <table class="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>{{ translate("standList_id") }}</th>
                  <th>{{ translate("standList_nom") }}</th>
                  <th>{{ translate("standList_image") }}</th>
                  <th>{{ translate("standList_description") }}</th>
                  <th>{{ translate("standList_dateAchat") }}</th>
                  <th>{{ translate("standList_prix") }}</th>
                  <th>{{ translate("standList_emplacement") }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(stand, index) in filterProtector ? filteredProtector : getAllStand" :key="index">
                  <td>{{ stand.id_stand }}</td>
                  <td>{{ stand.nom_stand }}</td>
                  <td>{{ stand.image_stand }}</td>

                  <td v-html="stand.description_stand"></td>
                  <td>{{ formatDate(stand.date_achat) }}</td>
                  <td>{{ stand.prix }}</td>
                  <td>{{stand.id_emplacement}}</td>
                  <td>
                    <router-link v-if="!isProtectorDelete" :to="{ name: 'AdminEditStand', params: { selected_stand: stand } }" class="btn btn-primary">
                      {{ translate("Edit") }}</router-link>
                    <button class="btn btn-danger" @click="removeStand(stand.id_stand)">{{ translate("Delete") }}</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from "vuex";
  import {translate} from "../../../lang/translationService";
  import router from "@/router";
  
  export default {
    props: {
      isProtectorDelete: {
        type: Boolean,
        default: false,
      },
      filterProtector:{
      //contain all data that need to be shown
      type: Array,
      required: false,
      default: () => null,
      },
      previousDataType: {
        type: String,
        required: false,
        default: () => null,
      },
      isLevel2: {
        type: Boolean,
        required: false,
        default: false,
      },
      previousDataId: {
        type: Number,
        required: false,
        default: () => null,
      },
    },
    async mounted() {
      try {
        await this.loadData();
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    },
    computed: {
      ...mapGetters('emplacements', ['getAllArea']),
      ...mapGetters('prestationEtType', ['getAllPrestation']),
      ...mapGetters('stands' , ['getAllStand']),      filteredProtector: function(){
        if(this.filterProtector != null){
          let filteredProtector = this.filterProtector.filter(protector => this.getAllStand.includes(protector));
          return filteredProtector;
        }

        return null;
      }
    },
    methods: {
      translate,
      ...mapActions('emplacements', ['getAreasStore']),
      ...mapActions('prestationEtType', ['updatePrestationStore']),
      ...mapActions('stands', ['getStandsStore', 'deleteStandStore']),
      ...mapActions('roleEtDroit', ['getAllRoleDroitAssociationStore', 'getDroitsStore', 'getRolesStore']),
      ...mapActions('user', ['getUsersStore', 'updateUserStore']),    
      async loadData() {
        await this.getUsersStore();
        await this.getRolesStore();
        await this.getDroitsStore();
        await this.getAllRoleDroitAssociationStore();
        await this.getStandsStore();
      },
      async removeStand(id) {
        const stand = this.getAllStand.find(stand => stand.id_stand === id);
        const confirmMessage = `Êtes-vous sûr de vouloir supprimer le stand ${stand.nom_stand} ?`;
        if (window.confirm(confirmMessage)) {
          try {
            await this.deleteStandStore(stand.id_stand);
          } catch (error) {
            console.error('Erreur lors de la suppression du stand :', error);
          }
          if (this.isProtectorDelete){
            if (this.previousDataType === 'user'){
              window.alert("Vous pouvez dorénavant supprimer l'utilisateur");
              if (this.isLevel2 === false){
                router.push({name: 'AdminUsers'});
                return;
              }
            }
            else if (this.previousDataType === 'area'){
              window.alert("Vous pouvez dorénavant supprimer cet emplacement");
              if (this.isLevel2 === false){
                router.push({name: 'AdminMapView'});
                return;
              }
            }
            if(this.$route.name != 'AdminDeleteCascadeProtector')
              router.push({
                      name: 'AdminDeleteCascadeProtector',
                        params: {
                          dataType: this.previousDataType,
                          isLevel2: this.isLevel2,
                        },
                      });
            else{
              this.$emit('goBack', {isLevel2: this.isLevel2, previousDataType: this.previousDataType, previousDataId: this.previousDataId});
              return;
            }
          }
        }
      },
      formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formattedDate = new Date(dateString).toLocaleDateString('fr-FR', options);
        return formattedDate;
        }
    }
  };
  </script>
  
  <style scoped>
  /* Your styles here */
  </style>
  