package com.ezystore.produtos.controller;

import com.ezystore.produtos.dto.ProdutoDto;
import com.ezystore.produtos.entity.ProdutoEntity;
import com.ezystore.produtos.service.ProdutoService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/produtos")
@CrossOrigin
public class ProdutoController {

    private ProdutoService produtoService;

    public ProdutoController(ProdutoService produtoService){
        this.produtoService = produtoService;
    }

    @GetMapping
    public List<ProdutoDto> listarTodos(){
        return produtoService.listarTodos();
    }

    @GetMapping("/{id}")
    public Optional<ProdutoDto> buscarId(@PathVariable Long id){
        return produtoService.buscarId(id);
    }

    @PostMapping
    public void criarProduto(@RequestBody ProdutoDto produto){
        produtoService.criarProduto(produto);
    }

    @PutMapping("/{id}")
    public void editarProduto(@PathVariable Long id, @RequestBody ProdutoDto produto){
        produtoService.editarProduto(id, produto);
    }


    @DeleteMapping("/{id}")
    public void deletarProduto (@PathVariable Long id){
        produtoService.deletarProduto(id);
    }


}
