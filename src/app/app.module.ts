import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DummyOneComponent } from './dummy-one/dummy-one.component';
import { DummyTwoComponent } from './dummy-two/dummy-two.component';
import { NotfoundComponent } from './badroute/notfound/notfound.component';
import { StackComponent } from './parent-child/stack/stack.component';
import { FullstackComponent } from './parent-child/fullstack/fullstack.component';
import { FrontendComponent } from './parent-child/frontend/frontend.component';
import { MiddlewareComponent } from './parent-child/middleware/middleware.component';
import { TestingComponent } from './parent-child/testing/testing.component';
import { DevopsComponent } from './parent-child/devops/devops.component';
import { SpringComponent } from './parent-child/spring/spring.component';
import { NodeComponent } from './parent-child/node/node.component';
import { CloudComponent } from './parent-child/cloud/cloud.component';
import { CicdComponent } from './parent-child/cicd/cicd.component';
import { ReviewContainerComponent } from './assignment/review-container/review-container.component';
import { ReviewComponent } from './assignment/review/review.component';
import { ReviewTitleComponent } from './assignment/review-title/review-title.component';
import { ReviewDetailComponent } from './assignment/review-detail/review-detail.component';
import { ProfilePictureComponent } from './assignment/profile-picture/profile-picture.component';
import { DescriptionComponent } from './assignment/description/description.component';
import { ActionsComponent } from './assignment/actions/actions.component';
import { AuthorComponent } from './assignment/author/author.component';
import { EngagementComponent } from './assignment/engagement/engagement.component';
import { AllDirectivesComponent } from './directives/all-directives/all-directives.component';
import { ForComponent } from './directives/for/for.component';
import { IfComponent } from './directives/if/if.component';
import { SwitchCaseComponent } from './directives/switch-case/switch-case.component';
import { CssClassComponent } from './directives/css-class/css-class.component';
import { CssStyleComponent } from './directives/css-style/css-style.component';
import { NgForComponent } from './assignment2/ng-for/ng-for.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TodoComponent } from './assignment3/todo/todo.component';
import { AllpipesComponent } from './pipesdemo/allpipes/allpipes.component';
import { InbuiltComponent } from './pipesdemo/inbuilt/inbuilt.component';
import { CustomComponent } from './pipesdemo/custom/custom.component';
import { SortStringArrayPipe } from './pipes/sort-string-array.pipe';
import { LiveSearchPipe } from './pipes/live-search.pipe';
import { AllformComponent } from './form/allform/allform.component';
import { TemplateformComponent } from './form/templateform/templateform.component';
import { ReactiveformComponent } from './form/reactiveform/reactiveform.component';
import { ConsumeoneComponent } from './consume/consumeone/consumeone.component';
import { ConsumetwoComponent } from './consume/consumetwo/consumetwo.component';
import { RemoteComponent } from './consume/remote/remote.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ConsumefakerestComponent } from './consume/consumefakerest/consumefakerest.component';
import { AddnewfriendComponent } from './consume/addnewfriend/addnewfriend.component';
import { EditfriendComponent } from './consume/editfriend/editfriend.component';
import { ChildComponent } from './eventbinding/child/child.component';
import { ParentComponent } from './eventbinding/parent/parent.component';
import { GrandchildComponent } from './eventbinding/grandchild/grandchild.component';
import { TexteffectComponent } from './animation/texteffect/texteffect.component'

@NgModule({
  declarations: [
    AppComponent,
    DummyOneComponent,
    DummyTwoComponent,
    NotfoundComponent,
    StackComponent,
    FullstackComponent,
    FrontendComponent,
    MiddlewareComponent,
    TestingComponent,
    DevopsComponent,
    SpringComponent,
    NodeComponent,
    CloudComponent,
    CicdComponent,
    ReviewContainerComponent,
    ReviewComponent,
    ReviewTitleComponent,
    ReviewDetailComponent,
    ProfilePictureComponent,
    DescriptionComponent,
    ActionsComponent,
    AuthorComponent,
    EngagementComponent,
    AllDirectivesComponent,
    ForComponent,
    IfComponent,
    SwitchCaseComponent,
    CssClassComponent,
    CssStyleComponent,
    NgForComponent,
    TodoComponent,
    AllpipesComponent,
    InbuiltComponent,
    CustomComponent,
    SortStringArrayPipe,
    LiveSearchPipe,
    AllformComponent,
    TemplateformComponent,
    ReactiveformComponent,
    ConsumeoneComponent,
    ConsumetwoComponent,
    RemoteComponent,
    ConsumefakerestComponent,
    AddnewfriendComponent,
    EditfriendComponent,
    ChildComponent,
    ParentComponent,
    GrandchildComponent,
    TexteffectComponent,
    
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
