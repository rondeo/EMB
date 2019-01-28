import Vue from 'vue'
import Router from 'vue-router'

import WaterMeter from '../../components/watermeter.vue'
import WaterMeterDetail from '../../components/watermeter.detail.vue'
import WaterMeterEdit from '../../components/watermeter.edit.vue'
import WaterMeterAdd from '../../components/watermeter.add.vue'

import WaterCollect from '../../components/watercollect.vue'
import WaterCollectAdd from '../../components/watercollect.add.vue'
import WaterCollectDetail from '../../components/watercollect.detail.vue'
import WaterCollectEdit from '../../components/watercollect.edit.vue'

import WaterRepeater from '../../components/waterrepeater.vue'

import WaterConcentrator from '../../components/waterconcentrator.vue'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    // { path: '*', component: NotFoundComponent },
    //WATERMETER
    {
      path: '/',
      alias: '/watermeter',
      name: 'watermeter',
      component: WaterMeter
    },
    {
      // path: '/watermeter/detail/:id',
      path: '/watermeter/detail/',
      name: 'watermeter',
      // name: 'watermeterdetail',
      component: WaterMeterDetail
    },
    {
      path: '/watermeter/edit/',
      name: 'watermeter',
      // name: 'watermeteredit',
      component: WaterMeterEdit
    },
    {
      path: '/watermeter/add/',
      name: 'watermeter',
      // name: 'watermeteradd',
      component: WaterMeterAdd
    },
    //WATERCOLLECT
    {
      path: '/watercollect',
      name: 'watercollect',
      component: WaterCollect
    },
    {
      path: '/watercollect/add/',
      name: 'watercollect',
      component: WaterCollectAdd
    },
    {
      path: '/watercollect/detail/',
      name: 'watercollect',
      component: WaterCollectDetail
    },
    {
      path: '/watercollect/edit/',
      name: 'watercollect',
      // name: 'watermeteredit',
      component: WaterCollectEdit
    },
    //WATERREPEATER
    {
      path: '/waterrepeater',
      name: 'waterrepeater',
      component: WaterRepeater
    },
    //WATERCONCENTRATOR
    {
      path: '/waterconcentrator',
      name: 'waterconcentrator',
      component: WaterConcentrator
    },
  ]
})
