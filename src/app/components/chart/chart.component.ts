import { Component, OnInit, Input } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import {
  MultiDataSet,
  Label,
  Color,
  PluginServiceGlobalRegistrationAndOptions,
} from 'ng2-charts';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit {
  @Input() labels: string[];
  @Input() legend = false;
  @Input() color: string[];
  @Input() data: number[];

  constructor() {}
  public doughnutChartLabels: Label[];

  public doughnutChartData: MultiDataSet;
  public doughnutChartType: ChartType = 'doughnut';
  public doughnutChartLegend;
  public doughnutChartColors: Color[];

  public doughnutChartOptions: ChartOptions = {
    elements: {},
    legend: {
      position: 'right',
      align: 'center',
      labels: {
        boxWidth: 20,
        fontColor: '#111',
        padding: 15,
      },
    },
  };
  public doughnutChartPlugins: PluginServiceGlobalRegistrationAndOptions[];

  ngOnInit(): void {
    const valor = this.data.find((element) => {
      return element;
    });
    this.doughnutChartLabels = this.labels;
    this.doughnutChartLegend = this.legend;
    this.doughnutChartData = [this.data];
    this.doughnutChartColors = [
      {
        backgroundColor: this.color,
      },
    ];
    this.doughnutChartPlugins = [
      {
        afterDraw(chart: any) {
          const ctx = chart.ctx;
          const txt1 = valor;

          // Get options from the center object in options
          const sidePadding = 60;
          const sidePaddingCalculated =
            (sidePadding / 100) * (chart.innerRadius * 2);

          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
          const centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;

          // Get the width of the string and also the width of the element minus 10 to give it 5px side padding

          const stringWidth = ctx.measureText(txt1).width;
          const elementWidth = chart.innerRadius * 2 - sidePaddingCalculated;

          // Find out how much the font can grow in width.
          const widthRatio = elementWidth / stringWidth;

          // Pick a new font size so it will not be larger than the height of label.
          const fontSizeToUse = 30;
          ctx.font = fontSizeToUse + 'px Arial';
          ctx.fillStyle = 'black';
          ctx.fillText(`${txt1}%`, centerX, centerY + 5);
        },
      },
    ];
  }
}
