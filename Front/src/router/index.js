import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/HomePage.vue';
import Information from '@/views/InformationPage.vue';
import Shop from '@/views/ShopPage.vue';
import MapPage from "@/views/mapPage.vue";
import StandPage from "@/views/standPage.vue";
import SignUpPage from "@/views/SignUpPage.vue";
import NotFound from "@/views/Error404Page.vue";
import AdminUsers from '@/views/Admin/User/AdminUsers.vue'
import AdminAddUser from '@/views/Admin/User/AdminAddUser.vue'
import AdminEditUsers from '@/views/Admin/User/AdminEditUsers.vue';
import AdminRoles from '@/views/Admin/Role/AdminRoles.vue';
import AdminAddRoles from '@/views/Admin/Role/AdminAddRoles.vue';
import AdminEditRoles from '@/views/Admin/Role/AdminEditRoles.vue';
import AdminMapPage from '@/views/Admin/Emplacement/AdminMapPage.vue';
import AdminZonePage from '@/views/Admin/Zone/AdminZonePage.vue';
import AdminEditZonePage from '@/views/Admin/Zone/AdminEditZonePage.vue'
import AdminAddZonePage from '@/views/Admin/Zone/AdminAddZonePage.vue'
import PrestatairePrestationShowPage from '@/views/Prestataire/Prestation/ShowPrestationPrestatairePage.vue'
import PrestatairePrestationAddPage from '@/views/Prestataire/Prestation/AddPrestatairePrestation.vue'
import PrestatairePrestationEditPage from '@/views/Prestataire/Prestation/EditPrestatatairePrestation.vue'
import PanierPage from "@/views/PanierPage.vue";
import ShowStandPrestatairePage from "@/views/Prestataire/Stand/ShowStandPrestatairePage.vue"
import CommandePage from "@/views/CommandePage.vue";
import AdminStatistiquePage from '@/views/Admin/Statistique/AdminStatistiquePage.vue'
import CommandeDetailClientVue from '@/components/commandeClient/detailleCommandeClient.vue'
import UserInfo from '@/views/UserInfoView.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'homeView',
    component: Home
  },
  {
    path: '/userinfo',
    name: 'userInfo',
    component: UserInfo
  },
  {
    path: '/information',
    name: 'InformationView',
    component: Information
  },
  {
    path: '/panier',
    name: 'panierView',
    component: PanierPage
  },
  {
    path: '/detail-commande/:id',
    name: 'DetailCommande',
    component: CommandeDetailClientVue
  },
  {
    path: '/commande', 
    name: 'CommandeView',
    component: CommandePage
  },
  {
    name: 'shopView',
    path: '/shop',
    component: Shop
  },
  {
    path: '/map',
    name: 'MapView',
    component: MapPage
  },
  {
    path: '/stand',
    name: 'StandView',
    component: StandPage
  },
  {
    path: '/sign-up',
    name: 'SignUpView',
    component: SignUpPage
  },
  // Routes d'administration
  {
    path: '/admin/users',
    name: 'AdminUsers',
    component: AdminUsers
  },
  {
    path: '/admin/users/add',
    name: 'AdminAddUser',
    component: AdminAddUser
  },
  {
    path: '/admin/users/edit',
    name: 'AdminEditUsers',
    component: AdminEditUsers
  },
  {
    path: '/admin/roles',
    name: 'AdminRoles',
    component: AdminRoles
  },
  {
    path: '/admin/roles/add',
    name: 'AdminAddRoles',
    component: AdminAddRoles
  },
  {
    path: '/admin/roles/edit',
    name: 'AdminEditRoles',
    component: AdminEditRoles
  },
  {
    path: '/admin/areas',
    name: 'AdminMapView',
    component: AdminMapPage
  },
  {
    path: '/admin/zones',
    name: 'AdminZoneView',
    component: AdminZonePage
  },

  {
    path: '/admin/zones/edit/',
    name: 'AdminEditZoneView',
    component: AdminEditZonePage
  },
  {
    path: '/admin/zones/add',
    name: 'AdminAddZoneView',
    component: AdminAddZonePage
  },
  {
    path: '/admin/statistiques',
    name: 'AdminStatistiqueView',
    component: AdminStatistiquePage
  },
  {
    path: '/prestataire/prestations',
    name: 'PrestatairePrestationShowView',
    component: PrestatairePrestationShowPage
  },
  {
    path: '/prestataire/prestations/add',
    name: 'PrestatairePrestationAddView',
    component: PrestatairePrestationAddPage
  },
  {
    path: '/prestataire/prestations/edit',
    name: 'PrestatairePrestationEditView',
    component: PrestatairePrestationEditPage
  },
  {
    path: '/prestataire/stand',
    name: 'ShowStandPrestataireView',
    component: ShowStandPrestatairePage
  },
    //Error 404
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

