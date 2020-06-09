import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DummyOneComponent } from './dummy-one/dummy-one.component';
import { DummyTwoComponent } from './dummy-two/dummy-two.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { StackComponent } from './parent-child/stack/stack.component';
import { ReviewContainerComponent } from './assignment/review-container/review-container.component';
import { AllDirectivesComponent } from './directives/all-directives/all-directives.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from './directives/if/if.component';
import { SwitchCaseComponent } from './directives/switch-case/switch-case.component';
import { CssClassComponent } from './directives/css-class/css-class.component';
import { CssStyleComponent } from './directives/css-style/css-style.component';
import { NgForComponent } from './assignment2/ng-for/ng-for.component';
import { TodoComponent } from './assignment3/todo/todo.component';
import { AllpipesComponent } from './pipesdemo/allpipes/allpipes.component';
import { InbuiltComponent } from './pipesdemo/inbuilt/inbuilt.component';
import { CustomComponent } from './pipesdemo/custom/custom.component';
import { AllformComponent } from './form/allform/allform.component';
import { ReactiveformComponent } from './form/reactiveform/reactiveform.component';
import { TemplateformComponent } from './form/templateform/templateform.component';
import { ConsumeoneComponent } from './consume/consumeone/consumeone.component';
import { ConsumetwoComponent } from './consume/consumetwo/consumetwo.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { ConsumefakerestComponent } from './consume/consumefakerest/consumefakerest.component';
import { AddnewfriendComponent } from './consume/addnewfriend/addnewfriend.component';
import { EditfriendComponent } from './consume/editfriend/editfriend.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { TexteffectComponent } from './animation/texteffect/texteffect.component';





const routes: Routes = [
  {
    path:'',
    redirectTo:'dummyOne',
    pathMatch:'full'

  },
  {
    path:'dummyOne',
    component:DummyOneComponent
  },
  {
    path:'dummyTwo',
    component:DummyTwoComponent
  },
  {
    path:'stack',
    component:StackComponent
  },
  {
    path:'reviewContainer',
    component:ReviewContainerComponent
  },
  {
    path:'allDirectives',
    component:AllDirectivesComponent,
    children:[
      {
        path:'',
        redirectTo:'for',
        pathMatch:'full'
        
      },
      {
        path:'for',
        component:ForComponent
      },
      {
        path:'if',
        component:IfComponent
      },
      {
        path:'switchCase',
        component:SwitchCaseComponent
      },
      {
        path:'cssClass',
        component:CssClassComponent
      },
      {
        path:'cssStyle',
        component:CssStyleComponent
      },
    ]
  },
  {
     path:'ngFor',
     component:NgForComponent
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'allpipes',
    component:AllpipesComponent,
    children:[
      {
        path:'inbuilt',
        component:InbuiltComponent
      },
      {
        path:'custom',
        component:CustomComponent
      }
    ]

  },
{
path:'allform',
component:AllformComponent,
children:[
  {
    path:'reactive',
    component:ReactiveformComponent
  },
  {
    path:'template',
    component:TemplateformComponent
  }
]
},
{
  path:'consumeone',
  component:ConsumeoneComponent

},
{
  path:'consumetwo',
  component:ConsumetwoComponent

},
{
  path:'remote',
  component:RemoteComponent

},
{
  path:'consumefakerest',
  component:ConsumefakerestComponent
},
{
  path:'addnewfriend',
  component:AddnewfriendComponent

},
{
  path:'editfriend/:friendId',
  component:EditfriendComponent
},
{
  path:'eventbinding',
  component:ParentComponent
},
{
  path:'animation',
  component:TexteffectComponent
},
  {
    path:'**',
    component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
