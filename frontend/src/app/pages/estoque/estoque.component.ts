import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Estoque } from 'src/app/models/Estoque';
import { ResponseModel } from 'src/app/models/response';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { EstoqueService } from 'src/app/shared/services/estoque.service';

@Component({
  selector: 'app-estoque',
  templateUrl: './estoque.component.html',
  styleUrls: ['./estoque.component.css']
})
export class EstoqueComponent implements OnInit {

  form: FormGroup;

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @ViewChild(MatSort) set matSort(ms: MatSort) {
    this.sort = ms;
    this.setDataSourceAttributes();
  }

  @ViewChild(MatPaginator) set matPaginator(mp: MatPaginator) {
    this.paginator = mp;
    this.setDataSourceAttributes();
  }

  setDataSourceAttributes() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }

  dataSource = new MatTableDataSource<Estoque>([]);

  estoques: Estoque[]

  page = 1
  pageLimit = 10
  
  constructor(
    private fb: FormBuilder,
    private estoqueService: EstoqueService,
    private alertifyService: AlertifyService,
    private activatedRoute: ActivatedRoute
  ) { 
    this.createForm()
  }

  displayedColumns: string[] = [
    "produto",
    "quantidade",
    "acoes"
  ];

  ngOnInit() {
    this.estoques = this.activatedRoute.snapshot.data.estoque.data;
    this.estoques.sort(this.sortArray)

    console.log(this.paginator)
    this.dataSource = new MatTableDataSource<Estoque>(this.estoques);

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  createForm() {
    this.form = this.fb.group({
      nome: ["", Validators.required],
      quantidade: [0, Validators.min(1)]
    })
  }

  OnCadastrarEstoque(){
    this.estoqueService.criarEstoque(this.form.value)
      .subscribe(
        (res: ResponseModel) => {
          this.alertifyService.success(res.message)
          this.estoqueService.buscarEstoques()
            .subscribe(
              (res: ResponseModel) => {
                this.estoques = res.data
                this.estoques.sort(this.sortArray)
                this.dataSource = new MatTableDataSource<Estoque>(this.estoques);

                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
                console.log(this.estoques)
              },
              (error:ResponseModel) => {
                this.alertifyService.error(error.error.message)
              }
            )
        },
        (error: ResponseModel) => {
          this.alertifyService.error(error.error.message)
        },
        () => {
          this.form.get('nome').setValue('')
          this.form.get('quantidade').setValue(0)
        }
      )
      
  }
  
  OnAtualizarEstoque() {
    this.estoqueService.atualizarEstoque(this.form.value)
      .subscribe(
        (res: ResponseModel) => {
          this.alertifyService.success(res.message)

          const estoque = this.estoques.filter(item => item.nome === this.form.get('nome').value)[0]
          estoque.quantidade = this.form.get('quantidade').value
          console.table(estoque)
        },
        (error: ResponseModel) => {
          this.alertifyService.error(error.error.message)
        },
        () => {
          this.form.get('nome').setValue('')
          this.form.get('quantidade').setValue(0)
        }
      )
  }

  OnDeletarEstoque(id: string) {
    this.alertifyService.confirm('Você deseja deletar esse ingrediente?' , () => {
      this.estoqueService.deletarEstoque(id)
      .subscribe(
        (res: ResponseModel) => {
          this.alertifyService.success(res.message)
          this.estoqueService.buscarEstoques()
            .subscribe(
              (res: ResponseModel) => {
                this.estoques = res.data
                this.estoques.sort(this.sortArray)
                this.dataSource = new MatTableDataSource<Estoque>(this.estoques);

                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
              },
              (error:ResponseModel) => {
                this.alertifyService.error(error.error.message)
              }
            )
        },
        (error: ResponseModel) => {
          this.alertifyService.error(error.error.message)
        }
      )
    })
  }

  OnPageChange(event) {
    const {pageSize} = event;

    this.page = pageSize / this.pageLimit
    console.log("page:",this.page)
  }

  sortArray(a:Estoque, b:Estoque) {
    if (a.nome.toLowerCase() > b.nome.toLowerCase()) {
      return 1;
    }
    if (a.nome.toLowerCase() < b.nome.toLowerCase()) {
      return -1;
    }
    // a must be equal to b
    return 0;
  }
}
