//
// Copyright 2023, Robert Dyer
//                 and University of Nebraska Board of Regents
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
import * as vscode from 'vscode';
import { cache } from './jsoncache';
import * as consts from '../consts';
import { getWorkspaceRoot } from '../utils';

class BoaStudyTemplateProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
    private _onDidChangeTreeData: vscode.EventEmitter<any> = new vscode.EventEmitter<any>();
    readonly onDidChangeTreeData: vscode.Event<any> = this._onDidChangeTreeData.event;

    private rootItems = [];

    constructor() {
        const datasetItem = new vscode.TreeItem('Datasets', vscode.TreeItemCollapsibleState.Collapsed);
        datasetItem.iconPath = new vscode.ThemeIcon('database');
        datasetItem.contextValue = 'boalang.tree.datasets';
        this.rootItems.push(datasetItem);

        const queryItem = new vscode.TreeItem('Queries', vscode.TreeItemCollapsibleState.Expanded);
        queryItem.iconPath = new vscode.ThemeIcon('search');
        queryItem.contextValue = 'boalang.tree.queries';
        this.rootItems.push(queryItem);

        const analysesItem = new vscode.TreeItem('Analyses', vscode.TreeItemCollapsibleState.Expanded);
        analysesItem.iconPath = new vscode.ThemeIcon('list-unordered');
        analysesItem.contextValue = 'boalang.tree.analyses';
        this.rootItems.push(analysesItem);
    }

    getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
        return element;
    }

    async getChildren(element?: vscode.TreeItem): Promise<vscode.TreeItem[]> {
        if (element === undefined) {
            return Promise.resolve(this.rootItems);
        }

        const children = [];
 
        switch (element.label) {
            case 'Datasets':
                cache.getDatasetNames().forEach((name) => {
                    const target = cache.getDatasetTarget(name);
                    const datasetItem = new vscode.TreeItem(`${name}: ${target}`);
                    datasetItem.tooltip = target;
                    children.push(datasetItem);
                });
                break;
            case 'Queries':
                cache.getQueries().forEach((query) => {
                    const queryItem = new vscode.TreeItem(query.replace('queries/', ''), vscode.TreeItemCollapsibleState.Collapsed);
                    queryItem.command = {
                        command: 'vscode.open',
                        title: 'Edit Query',
                        arguments: [getWorkspaceRoot() + '/' + consts.scriptPath + '/' + query]
                    };
                    children.push(queryItem);
                });
                break;
            case 'Analyses':
                cache.getAnalyses().forEach((analysis) => {
                    const inputs = cache.getAnalysisInputs(analysis);
                    const analysisItem = new vscode.TreeItem(analysis, inputs.length == 0 ? vscode.TreeItemCollapsibleState.None : vscode.TreeItemCollapsibleState.Collapsed);
                    analysisItem.contextValue = 'boalang.tree.analysis';

                    analysisItem.command = {
                        command: 'vscode.open',
                        title: 'Edit Analysis',
                        arguments: [getWorkspaceRoot() + '/' + consts.analysesPath + '/' + analysis]
                    };

                    children.push(analysisItem);
                });
                break;
            default:
                if ((element.label as string).endsWith('.boa')) {
                    const query = `queries/${element.label}`;
                    const outputs = cache.getOutputsForQuery(query);
                    const datasets = cache.getDatasetsForQuery(query);
                    for (var i = 0; i < outputs.length; i++) {
                        const queryItem = new vscode.TreeItem(datasets[i] + ' -> ' + outputs[i]);
                        queryItem.command = {
                            command: 'vscode.open',
                            title: 'View Output',
                            arguments: [getWorkspaceRoot() + '/' + consts.outputPath + '/' + outputs[i]]
                        };
                        children.push(queryItem);
                    }
                } else {
                    const analysis = element.label as string;
                    const inputs = cache.getAnalysisInputs(analysis);

                    for (var i = 0; i < inputs.length; i++) {
                        const queryItem = new vscode.TreeItem(`Input: ${inputs[i]}`);
                        queryItem.command = {
                            command: 'vscode.open',
                            title: 'View Input',
                            arguments: [getWorkspaceRoot() + '/' + consts.csvPath + '/' + inputs[i]]
                        };
                        children.push(queryItem);
                    }
                }
                break;
        }

        return Promise.resolve(children);
    }

    async refresh() {
        this._onDidChangeTreeData.fire(undefined);
    }
}

export const treeProvider = new BoaStudyTemplateProvider();