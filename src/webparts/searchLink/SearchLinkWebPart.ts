import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './SearchLinkWebPart.module.scss';
import * as strings from 'SearchLinkWebPartStrings';

export interface ISearchLinkWebPartProps {
  searchURL: string;
}

export default class SearchLinkWebPart extends BaseClientSideWebPart<ISearchLinkWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.searchLink }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <!--span class="${ styles.title }">OCHIN Staff Portal Search</span-->
              <form method="GET" target="_self" action="${escape(this.properties.searchURL)}" _lpchecked="1">
                <input type="text" id="keyword" placeholder="" name="k" class="${ styles.input }">
                <button  type="submit" id="search" class="${ styles.button }">Search</button>
              </form>              
            </div>
          </div>
        </div>
      </div>`;


      //this.setButtonEventHandlers();
  }
/*
private setButtonEventHandlers()
{
  //const webPart:SearchResultsWebPart=this;
this.domElement.querySelector('#search').addEventListener('click',()=>{
  this.renderListAsync();
})
}
*/
  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('searchURL', { label: strings.DescriptionFieldLabel })
              ]
            }
          ]
        }
      ]
    };
  }
}
