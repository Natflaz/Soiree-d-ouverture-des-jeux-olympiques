<template>
  <div>

    <main id="sample">
      <Editor
          ref="myEditor"
          api-key="q4sg4h4r12ug9lzjx7urncqkiwkg3fevhxjqipuukx146uyt"
      :init="{
      height: 500,
      menubar: true,
      plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
      ],
      toolbar: 'undo redo | formatselect | ' +
      'bold italic backcolor | alignleft aligncenter ' +
      'alignright alignjustify | bullist numlist outdent indent | ' +
      'removeformat | help | image',
      images_upload_handler: handleImageUpload
      }"
      :initial-value="standDescription"

      />
    </main>
    <button type="button" @click="saveContent" class="btn btn-success">Enregistrer les modifications</button>

  </div>

</template>
<script>
import { mapGetters,mapActions } from 'vuex';

import Editor from '@tinymce/tinymce-vue';
import {uploadImageDescriptionStand} from '@/services/stand.service'

export default {
  components: {
    Editor,
  },
  data() {
    return {
      myEditor: null,
      stand: null,
      standDescription: '',
      editorConfig: {
        plugins: 'image',
        toolbar: 'image'
      },
    };
  },
  async mounted() {
    await this.loadData()
    this.myEditor = this.$refs.myEditor;
  },
  computed: {
    ...mapGetters('user', ['getCurrentUser']),
    ...mapGetters('stands', ['getAllStand'])
  },
  methods: {
    ...mapActions('stands', ['getStandsStore', 'updateDescriptionStandStore', 'getStandsStore']),
    async loadData() {
      try {
        if (this.getAllStand.length === 0){
          await this.getStandsStore()
        }
        this.stand = this.getAllStand.find(stand => stand.id_stand === this.getCurrentUser.id_stand);
        this.standDescription = this.stand.description_stand;
      } catch (error) {
        console.error('Erreur lors du chargement des données :', error);
      }
    },
    async handleImageUpload(blobInfo, success, failure) {
      // Générer un timestamp unique
      const timestamp = Math.floor(Date.now() / 1000);
      // Construire le nouveau nom de fichier
      const fileName = `description_id_stand_${this.stand.id_stand}_${timestamp}.jpeg`;
      // Créer une nouvelle instance de File avec le nouveau nom
      const fileInstance = new File([blobInfo.blob()], fileName, {
        type: 'image/jpeg'
      });
      try {
        // Appeler votre fonction d'upload
        const response = await uploadImageDescriptionStand(fileInstance);

        // Vérifier si la réponse contient l'emplacement du fichier uploadé
        if (response.location) {
          success(response.location);
        } else {
          failure('Invalid response');
        }
      } catch (error) {
        failure('Upload failed: '+ error.message);
      }
    },
    async saveContent() {
      if (this.myEditor && this.myEditor.editor) {
        const content = await this.myEditor.editor.getContent();
        await this.updateDescriptionStandStore({
          id: this.stand.id_stand,
          body: { description_stand: content, id: this.stand.id_stand  }
        });
        // Add here the logic to save the content to your server or handle it as needed
      } else {
        console.error('Éditeur non initialisé ou indisponible');
      }
    },
  }
}
</script>



<style scoped>

@media (min-width: 1024px) {
  #sample {
    display: flex;
    flex-direction: column;
    place-items: center;
    width: 100%;
  }
}

</style>