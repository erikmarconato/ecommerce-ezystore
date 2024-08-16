package com.ezystore.produtos.controller;

import com.ezystore.produtos.dto.ProdutoDto;
import com.ezystore.service.ProdutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/produtos")
public class ProdutoController {

    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<ProdutoDto> listarTodos(){
        return produtoService.listarTodos();
    }

    @PostMapping
    public void criarProduto(@RequestBody ProdutoDto produto){
        produtoService.criarProduto(produto);
    }

    @PutMapping
    public void editarProduto(@RequestBody ProdutoDto produto){
        produtoService.editarProduto(produto);
    }

    @DeleteMapping("/{id}")
    public void deletarProduto (@PathVariable Long id){
        produtoService.deletarProduto(id);
    }
    

}
