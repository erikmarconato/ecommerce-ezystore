package com.ezystore.produtos.service;

import com.ezystore.produtos.dto.ProdutoDto;
import com.ezystore.produtos.entity.ProdutoEntity;
import com.ezystore.produtos.repository.ProdutoRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProdutoService {

    private ProdutoRepository produtoRepository;

    public ProdutoService(ProdutoRepository produtoRepository){
        this.produtoRepository = produtoRepository;
    }

    public List<ProdutoDto> listarTodos(){
        List<ProdutoEntity> produtos = produtoRepository.findAll();
        return produtos.stream().map(entity ->
                new ProdutoDto(
                        entity.getId(),
                        entity.getNome(),
                        entity.getPreco(),
                        entity.getImagemUrl(),
                        entity.getTipoProduto()
                )).collect(Collectors.toList());
    }

    public void criarProduto(ProdutoDto produto){
        ProdutoEntity produtoEntity = new ProdutoEntity(produto);
        produtoRepository.save(produtoEntity);
    }

    public void editarProduto (ProdutoDto produto){
        ProdutoEntity produtoEntity = new ProdutoEntity(produto);
        produtoRepository.save(produtoEntity);
    }

    public void deletarProduto (Long id){
        ProdutoEntity produtoEntity = new ProdutoEntity(id);
        produtoRepository.delete(produtoEntity);
    }

}


